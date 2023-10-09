let productUrls = [];

const productCarouselItemSelector = "ol.a-carousel li.a-carousel-card:has(.p13n-product-image)";
const cartItemsSelector = "[data-name='Active Items'] a.sc-product-link";

let hasDownloaded = false;
const onMessage = async (message, sender, sendResponse) => {
  switch (message.message) {
    case "check-page-validity": {
      const isFreeValid = document.querySelector(productCarouselItemSelector) || location.pathname === "/s";
      const isPremiumValid = document.querySelector(cartItemsSelector) || document.querySelector(".js-order-card");
      sendResponse({
        message: "is-valid-page",
        isFreeValid: !!isFreeValid,
        isPremiumValid: !!isPremiumValid,
      });
      break;
    }
    case "get-product-urls": {
      productUrls = [];
      // Search
      if (location.pathname === "/s") {
        getProductsFromSearch();
        let nextPage = getNextPageButton();
        while (productUrls.length < message.maxCount && !!nextPage) {
          nextPage.click();
          await waitForSearchPageToLoad();
          getProductsFromSearch();
        }
        chrome.runtime.sendMessage({ message: "product-urls", urls: productUrls });
        break;
        // Cart
      } else if (document.querySelector(cartItemsSelector)) {
        const items = [...document.querySelectorAll("[data-name='Active Items'] .sc-list-item-content")];
        productUrls = items.map((el) => el.querySelector("a.sc-product-link").href);
        chrome.runtime.sendMessage({ message: "product-urls", urls: productUrls });
        // My orders
      } else if (document.querySelector(".js-order-card")) {
        productUrls = [
          ...document.querySelectorAll(
            ".js-order-card :where(.item-view-left-col-inner, .product-image) a.a-link-normal"
          ),
        ].map((item) => {
          return item.href;
        });
        chrome.runtime.sendMessage({ message: "product-urls", urls: productUrls });
        // Top lists
      } else if (document.querySelector(productCarouselItemSelector)) {
        const items = document.querySelectorAll(productCarouselItemSelector);
        productUrls = [...items].map((item) => {
          return item.querySelector("a.a-link-normal").href;
        });
        console.log(productUrls);
        chrome.runtime.sendMessage({ message: "product-urls", urls: productUrls });
      }
      break;
    }
    case "go-to": {
      location.href = message.url;
      break;
    }
    case "crawl": {
      await crawl();
      break;
    }
    case "open-all-reviews": {
      await openAllReviews();
      break;
    }
    case "get-period-reviews": {
      await getPeriodReviews(message.period);
      break;
    }
    case "download": {
      if (!hasDownloaded) {
        download(message.csvFile);
        hasDownloaded = true;
      }
      break;
    }
    default:
      break;
  }
};

const getProductsFromSearch = () => {
  const items = document.querySelectorAll(".s-search-results [data-component-type='s-search-result']");
  const urls = [...items].map((item) => {
    return item.querySelector("a.a-link-normal").href;
  });
  console.log(urls);
  productUrls = [...productUrls, ...urls];
};

const waitForSearchPageToLoad = async () => {
  await waitUntil(".s-result-list-placeholder.sg-row:not(.aok-hidden)", 25);
  await waitUntil(".s-result-list-placeholder.sg-row.aok-hidden");
};

const getNextPageButton = () => {
  return document.querySelector(".s-pagination-next:not([aria-disabled='true'])");
};

const crawl = async (triesCount = 0) => {
  if (triesCount === 3) {
    chrome.runtime.sendMessage({ message: "failed-product-data" });
    return;
  }

  try {
    const name = document.querySelector("#productTitle")?.textContent.trim();
    const link = location.origin + location.pathname;
    const priceEl1 = document.querySelector("#corePriceDisplay_desktop_feature_div .a-price");
    const priceEl2 = document.querySelector("#corePrice_desktop .a-price span");
    let price;
    if (priceEl1) {
      const priceWhole = parseInt(priceEl1.querySelector(".a-price-whole")?.textContent ?? "0");
      const priceDecimal = parseInt(priceEl1.querySelector(".a-price-fraction")?.textContent ?? "0");
      price = priceWhole + priceDecimal / 100;
    } else if (priceEl2) {
      price = Number(priceEl2.textContent.replace(/[^0-9.,]/g, "").replace(",", "."));
    }
    const rating = parseFloat(document.querySelector("#acrPopover")?.getAttribute("title"));
    const reviewCount = parseInt(document.querySelector("#acrCustomerReviewText")?.textContent.replace(",", ""));
    let videoCount = parseInt(document.querySelector("#videoCount")?.textContent ?? "0");
    videoCount = isNaN(videoCount) ? 1 : videoCount;
    const bottomVideoCount = document.querySelectorAll("[data-video-image-url]").length;
    const dateFirstAvailable =
      [...document.querySelectorAll("#productDetails_detailBullets_sections1 tr")]
        .filter((x) => x.textContent.includes("Date First Available"))[0]
        ?.querySelector("td")
        .textContent.trim() ||
      [...document.querySelectorAll("#detailBullets_feature_div li")]
        .filter((x) => x.textContent.includes("Date First Available"))[0]
        ?.querySelector("span > span:nth-child(2)")
        .textContent.trim();

    const reviewSort = document.querySelector("#customer-reviews-content + ul .a-dropdown-prompt");
    reviewSort.scrollIntoView();
    reviewSort.click();
    await wait(1500);
    document.querySelector('.a-popover.a-dropdown a[data-value=\'{"stringVal":"recent"}\']').click();
    await wait(1000);
    const latestReviewSelector = ":where(#cm-cr-dp-review-list, #cm-cr-global-review-list) [data-hook='review-date']";
    await waitUntil(latestReviewSelector);
    const latestReview = document.querySelector(latestReviewSelector).textContent.trim();
    // const latestReviewDate = new Date(latestReview.split(" on ")[1] ?? latestReview.split(" on ")[0]);
    const latestReviewDate = latestReview.split(" on ")[1] ?? latestReview.split(" on ")[0];

    const result = {
      Name: name,
      Link: link,
      Price: price,
      Rating: rating,
      "Review count": reviewCount,
      "Video count": videoCount,
      "Bottom video count": bottomVideoCount,
      "Latest review date": latestReviewDate,
      "Date First Available": dateFirstAvailable,
    };
    console.log(result);
    chrome.runtime.sendMessage({ message: "product-data", product: result });
    // history.back();
  } catch {
    await crawl(triesCount + 1);
  }
};

const openAllReviews = async () => {
  const seeAllReviewsLink = document.querySelector("[data-hook='see-all-reviews-link-foot']");
  seeAllReviewsLink.click();
};

const getPeriodReviews = async (period) => {
  const result = [];
  try {
    await waitUntil("#sort-order-dropdown");
    await wait(1500);
    const sortByDropdownButton = document.querySelector("#sort-order-dropdown");
    sortByDropdownButton.click();
    await wait(1500);
    document.querySelector('.a-popover.a-dropdown a[data-value=\'{"stringVal":"recent"}\']').click();

    const latestReviewSelector = ":where(#cm_cr-review_list) [data-hook='review-date']";
    let needNextPage = true;
    await waitUntil(".reviews-content .cr-list-loading.reviews-loading:not(.aok-hidden)");
    await waitUntil(".reviews-content .cr-list-loading.reviews-loading.aok-hidden");
    while (needNextPage) {
      const ratings = [...document.querySelectorAll(":where(#cm_cr-review_list) [data-hook='review-star-rating']")].map(
        (x) => Number(x.textContent.split(" out")[0])
      );
      const dates = [...document.querySelectorAll(latestReviewSelector)].map(
        (x) => x.textContent.trim().split(" on ")[1]
      );
      for (let i = 0; i < dates.length; i++) {
        const date = dates[i];
        const diffInMs = new Date().getTime() - new Date(date).getTime();
        const diffInDays = diffInMs / 24 / 60 / 60 / 1000;
        if (diffInDays < period) {
          console.log("Adding rating", i, diffInDays);
          result.push(ratings[i]);
          continue;
        }
        needNextPage = false;

        break;
      }
      if (needNextPage) {
        const nextLink = document.querySelector("#cm_cr-pagination_bar li:not(.a-disabled):nth-child(2) a");
        const firstReviewId = document.querySelector("[data-hook='review']").id;
        if (nextLink) {
          nextLink.click();
          await waitUntilFn(() => {
            return firstReviewId !== document.querySelector("[data-hook='review']").id;
          });
          // await waitUntil(".reviews-load-progess:not(.aok-hidden)");
          // await waitUntil(".reviews-content .cr-list-loading.reviews-loading:not(.aok-hidden)");
          // await waitUntil(".reviews-load-progess.aok-hidden");
        }
      }
    }
  } finally {
    console.log(result);
    chrome.runtime.sendMessage({ message: "ratings", ratings: result });
  }
};

const download = (data) => {
  // Creating a Blob for having a csv file format
  // and passing the data with type
  const blob = new Blob([data], { type: "text/csv" });

  // Creating an object for downloading url
  const url = window.URL.createObjectURL(blob);

  // Creating an anchor(a) tag of HTML
  const a = document.createElement("a");

  // Passing the blob downloading url
  a.setAttribute("href", url);

  // Setting the anchor tag attribute for downloading
  // and passing the download file name
  a.setAttribute("download", "amazon-products-info.csv");

  // Performing a download with click
  a.click();
};

chrome.runtime.onMessage.addListener(onMessage);

const wait = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const waitUntil = async (selector, waitTime = 500, tryCount = 0) => {
  if (tryCount >= 10) {
    throw "Failed to find the element.";
  }
  if (!document.querySelector(selector)) {
    await wait(waitTime);
    await waitUntil(selector, waitTime, tryCount + 1);
  }
};

const waitUntilFn = async (fn, waitTime = 500, tryCount = 0) => {
  if (tryCount >= 10) {
    throw "Failed to find the element.";
  }
  if (!fn()) {
    await wait(waitTime);
    await waitUntilFn(fn, waitTime, tryCount + 1);
  }
};

chrome.runtime.sendMessage({ message: "opened-product" });
