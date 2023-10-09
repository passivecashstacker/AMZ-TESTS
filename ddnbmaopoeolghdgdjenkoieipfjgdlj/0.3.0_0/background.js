console.log("init background");

const options = {
  isStarted: false,
  maxCount: 99,
  currentIndex: 0,
  numberOfProducts: 99,
};

let productsInfo = [];
let productUrls = [];
let tabId = "";

let period = undefined;
let gettingPeriodReviews = false;

const onMessage = async (msg) => {
  console.log("background", msg);
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  console.log(msg);
  switch (msg.message) {
    case "start": {
      tabId = tab.id;
      options.isStarted = true;
      options.maxCount = msg.maxCount;
      options.currentIndex = 0;
      productsInfo = [];
      productUrls = [];
      period = msg.period;
      chrome.tabs.sendMessage(tabId, { message: "get-product-urls", maxCount: options.maxCount });
      break;
    }
    case "stop": {
      if (productsInfo.length) {
        chrome.tabs.sendMessage(tabId, { message: "download", csvFile: await convertToCSV(productsInfo) });
      }
      options.isStarted = false;
      setStorage();
      break;
    }
    case "product-urls": {
      productUrls = [...productUrls, ...msg.urls];
      chrome.tabs.sendMessage(tabId, { message: "go-to", url: productUrls[0] });
      setStorage();
      break;
    }
    case "opened-product": {
      if (!options.isStarted) {
        break;
      }
      if (gettingPeriodReviews) {
        chrome.tabs.sendMessage(tabId, { message: "get-period-reviews", period });
        break;
      }
      chrome.tabs.sendMessage(tabId, { message: "crawl" });
      break;
    }
    case "product-data": {
      productsInfo.push(msg.product);
      console.log(productsInfo);
      if (period) {
        chrome.tabs.sendMessage(tabId, { message: "open-all-reviews" });
        gettingPeriodReviews = true;
        break;
      }
      if (options.currentIndex >= productUrls.length - 1 || options.currentIndex >= options.maxCount - 1) {
        options.isStarted = false;
        period = undefined;
        chrome.tabs.sendMessage(tabId, { message: "download", csvFile: await convertToCSV(productsInfo) });
        setStorage();
        break;
      }
      chrome.tabs.sendMessage(tabId, { message: "go-to", url: productUrls[++options.currentIndex] });
      setStorage();
      break;
    }
    case "failed-product-data": {
      if (period) {
        chrome.tabs.sendMessage(tabId, { message: "open-all-reviews" });
        gettingPeriodReviews = true;
        break;
      }
      if (options.currentIndex >= productUrls.length - 1 || options.currentIndex >= options.maxCount - 1) {
        options.isStarted = false;
        period = undefined;
        chrome.tabs.sendMessage(tabId, { message: "download", csvFile: await convertToCSV(productsInfo) });
        setStorage();
        break;
      }
      chrome.tabs.sendMessage(tabId, { message: "go-to", url: productUrls[++options.currentIndex] });
      break;
    }
    case "ratings": {
      gettingPeriodReviews = false;
      productsInfo[productsInfo.length - 1]["Ratings"] = msg.ratings;
      if (options.currentIndex >= productUrls.length - 1 || options.currentIndex >= options.maxCount - 1) {
        options.isStarted = false;
        chrome.tabs.sendMessage(tabId, { message: "download", csvFile: await convertToCSV(productsInfo) });
        setStorage();
        break;
      }
      chrome.tabs.sendMessage(tabId, { message: "go-to", url: productUrls[++options.currentIndex] });
      setStorage();
      break;
    }
  }
};

chrome.runtime.onMessage.addListener(onMessage);

chrome.tabs.onRemoved.addListener((id) => {
  if (id === tabId) {
    options.isStarted = false;
    productsInfo = [];
    productUrls = [];
    setStorage();
  }
});

chrome.storage.sync.get("options", (data) => {
  console.log(data);
  Object.assign(options, data.options);
});

const setStorage = () => {
  chrome.storage.sync.set({
    options: { ...options, numberOfProducts: Math.min(productUrls.length, options.maxCount) },
  });
};

const calculateScore = async (data) => {
  const hasValidLicense = (await chrome.storage.sync.get("hasValidLicense"))?.hasValidLicense;
  if (!hasValidLicense) {
    return data;
  }

  const MAX_RATING = 5;
  const MAX_VIDEO_COUNT = 6;
  const MAX_BOTTOM_VIDEO_COUNT = 10;

  const now = new Date(); // Today's date
  let maxRating = MAX_RATING;
  let maxReviewCount = 10000;
  let maxVideoCount = MAX_VIDEO_COUNT;
  let maxBottomVideoCount = MAX_BOTTOM_VIDEO_COUNT;
  let minDaysDiff = 0;

  // Find the maximum rating, review count, max video count, max bottom video count, and the latest review date
  data.forEach((item) => {
    if (item.Rating > maxRating) {
      maxRating = item.Rating;
    }
    if (item["Review count"] > maxReviewCount) {
      maxReviewCount = item["Review count"];
    }
    if (item["Video count"] > maxVideoCount) {
      maxVideoCount = item["Video count"];
    }
    if (item["Bottom video count"] > maxBottomVideoCount) {
      maxBottomVideoCount = item["Bottom video count"];
    }
    const latestReviewDate = new Date(item["Latest review date"]);
    const daysDifference = Math.round((now - latestReviewDate) / (1000 * 60 * 60 * 24));
    if (daysDifference > minDaysDiff) {
      minDaysDiff = daysDifference;
    }
  });

  const calc = (item, maxRating, maxVideoCount, maxBottomVideoCount, minDaysDiff) => {
    const ratingScore = (item.Rating / maxRating) * 10;
    let videoCountScore = 0;
    if (item["Video count"] === 0 || item["Video count"] === maxVideoCount) {
      videoCountScore = 0;
    } else {
      videoCountScore = ((maxVideoCount - item["Video count"]) / (maxVideoCount - 1)) * 10;
    }
    let bottomVideoCountScore = 0;
    if (item["Bottom video count"] === 0 || item["Bottom video count"] === maxBottomVideoCount) {
      bottomVideoCountScore = 0;
    } else {
      bottomVideoCountScore = ((maxBottomVideoCount - item["Bottom video count"]) / (maxBottomVideoCount - 1)) * 10;
    }
    const latestReviewDate = new Date(item["Latest review date"]);
    const daysDifference = Math.round((now - latestReviewDate) / (1000 * 60 * 60 * 24));
    const latestReviewDateScore = Math.max(0, -(2 / 7) * (daysDifference - minDaysDiff) + 10);
    const totalScoreArray = [ratingScore, videoCountScore, bottomVideoCountScore, latestReviewDateScore];
    const totalScore = totalScoreArray.reduce((sum, score) => sum + Math.min(10, score), 0) / totalScoreArray.length;
    return totalScore.toFixed(2);
  };

  return data.map((item) => {
    const newItem = { ...item };
    newItem["Score"] = calc(newItem, MAX_RATING, MAX_VIDEO_COUNT, MAX_BOTTOM_VIDEO_COUNT, 0);
    newItem["Relative Score"] = calc(newItem, maxRating, maxVideoCount, maxBottomVideoCount, minDaysDiff);
    return newItem;
  });
};

const calculateAvgPeriodRating = async (data) => {
  const hasValidLicense = (await chrome.storage.sync.get("hasValidLicense"))?.hasValidLicense;
  if (!hasValidLicense || !data[0]["Ratings"]) {
    return data;
  }
  return data.map((item) => {
    return {
      ...item,
      "Period Average Rating": item["Ratings"].length
        ? (item["Ratings"].reduce((sum, r) => r + sum, 0) / item["Ratings"].length).toFixed(2)
        : "",
    };
  });
};

const convertToCSV = async (data) => {
  let finalData = await calculateAvgPeriodRating(data);
  finalData = await calculateScore(finalData);
  const columns = Object.keys(finalData[0]);
  const csvRows = [columns.join(",")];

  for (const row of finalData) {
    const values = columns.map((column) => {
      const value = row[column]?.toString().replace(/"/g, '""') ?? "";
      return `"${value}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
};
