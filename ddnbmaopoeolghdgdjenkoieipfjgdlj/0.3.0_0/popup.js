const options = {
  isStarted: false,
  maxCount: 99,
  currentIndex: 0,
  numberOfProducts: 99,
};
const usageStats = {
  runCount: 0,
  lastRunDate: null,
};
let hasValidLicense = false;

const MAX_RUN_COUNT_FREE = 5;
const MAX_ITEMS_COUNT_FREE = 15;

const settingsIcon = document.querySelector(".settings-icon");

const startStopButton = document.querySelector("#start-stop");
const maxCountInput = document.querySelector("#max-count");
const mainMessage = document.querySelector("#main-message");
const mainContent = document.querySelector("#main");
const getPremiumAnchor = document.querySelector("#get-premium");
const periodInput = document.querySelector("#period");
const periodContainer = document.querySelector(".period-checkbox-container");
const periodCheckbox = document.querySelector(".period-checkbox-container input");

const licenseContent = document.querySelector("#license");
const licenseKeyInput = document.querySelector("#license-key");
const enterLicenseButton = document.querySelector("#enter-license");
const cancelLicenseButton = document.querySelector("#cancel-license");
const licenseMessage = document.querySelector("#license-message");

const loader = document.querySelector("#loader");

periodCheckbox.addEventListener("change", (e) => {
  periodInput.style.display = e.target.checked ? "block" : "none";
});

let tabId = "";
const getTabId = async () => {
  if (!tabId) {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    tabId = tab.id;
  }
  return tabId;
};

const handlePageValidity = (isFreeValid, isPremiumValid, hasValidLicense) => {
  if (isPremiumValid && !hasValidLicense) {
    mainMessage.style.display = "block";
    mainMessage.innerText = "Sorry but current page is only available for premium members.";
    startStopButton.disabled = true;
    return;
  }

  if (!isFreeValid && !isPremiumValid) {
    mainMessage.style.display = "block";
    mainMessage.innerText =
      "Sorry but current page is not supported or there is no items. Currently we only support search, your orders, cart and top selling items pages.";
    startStopButton.disabled = true;
    return;
  }

  mainMessage.style.display = "none";
  startStopButton.disabled = false;
};

const getIsPageValid = async () => {
  const id = await getTabId();
  const resp = await chrome.tabs.sendMessage(id, { message: "check-page-validity" });
  console.log({ resp });
  return { isFreeValid: resp.isFreeValid, isPremiumValid: resp.isPremiumValid };
};

const handleOptions = async (data) => {
  console.log(data);
  Object.assign(options, data.options);
  maxCountInput.valueAsNumber = options.maxCount;
  maxCountInput.disabled = options.isStarted;
};

startStopButton.addEventListener("click", async () => {
  if (startStopButton.textContent.trim() === "Start") {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    tabId = tab.id;
    chrome.runtime.sendMessage({
      message: "start",
      maxCount: options.maxCount,
      period: periodCheckbox.checked ? periodInput.valueAsNumber : undefined,
    });
    options.isStarted = true;
    options.currentIndex = 0;
    options.numberOfProducts = options.maxCount;
    maxCountInput.disabled = true;
    usageStats.runCount++;
    usageStats.lastRunDate = new Date().toISOString();
    chrome.storage.sync.set({ usageStats });
  } else {
    chrome.runtime.sendMessage({ message: "stop" });
    options.isStarted = false;
    maxCountInput.disabled = false;
  }
  setButtonText();
  chrome.storage.sync.set({ options });
});

const isLicenseValid = async (key) => {
  return fetch("https://api.gumroad.com/v2/licenses/verify", {
    method: "POST",
    body: new URLSearchParams({
      product_id: "ZbsYf-96YIuYkAY2sEpQ0A==",
      license_key: key,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return (
        data.success &&
        !data.purchase?.refunded &&
        !data.purchase?.chargebacked &&
        !data.purchase?.subscription_ended_at &&
        !data.purchase?.subscription_cancelled_at &&
        !data.purchase?.subscription_failed_at
      );
    });
};

const checkLicense = async (key) => {
  const result = key && (await isLicenseValid(key));
  window.chrome.storage.sync.set({ hasValidLicense: result });
  return result;
  if (!key) {
    mainContent.style.display = "none";
    licenseContent.style.display = "flex";
    loader.style.display = "none";
    return false;
  }
  const isValid = await isLicenseValid(key);
  loader.style.display = "none";
  if (isValid) {
    mainContent.style.display = "flex";
    licenseContent.style.display = "none";
    window.chrome.storage.sync.set({ key });
    return true;
  } else {
    mainContent.style.display = "none";
    licenseContent.style.display = "flex";
    return false;
  }
};

enterLicenseButton.addEventListener("click", async (event) => {
  const key = licenseKeyInput.value;
  licenseContent.style.display = "none";
  loader.style.display = "flex";
  const isValid = await isLicenseValid(key);
  loader.style.display = "none";
  if (isValid) {
    mainContent.style.display = "flex";
    licenseContent.style.display = "none";
    window.chrome.storage.sync.set({ key });
    onMainContentOpen();
  } else {
    mainContent.style.display = "none";
    licenseContent.style.display = "flex";
    licenseMessage.style.display = "block";
  }
});

cancelLicenseButton.addEventListener("click", () => {
  licenseContent.style.display = "none";
  mainContent.style.display = "flex";
  settingsIcon.style.display = "block";
  onMainContentOpen();
});

maxCountInput.addEventListener("blur", (event) => {
  options.maxCount = event.target.valueAsNumber;
  window.chrome.storage.sync.set({ options });
});

// chrome.tabs.onRemoved.addListener(async (id) => {
//   if (id === (await getTabId())) {
//     startStopButton.textContent = "Start";
//     options.isStarted = false;
//     window.chrome.storage.sync.set({ options });
//   }
// });

chrome.storage.onChanged.addListener((changes, area) => {
  console.log("popup", changes, area);
  const isStartedOld = options.isStarted;
  Object.assign(options, changes.options?.newValue);
  if (isStartedOld !== changes.options?.newValue?.isStarted && getComputedStyle(mainContent).display === "flex") {
    onMainContentOpen();
  } else {
    setButtonText();
  }
});

const setButtonText = () => {
  startStopButton.textContent = options.isStarted
    ? `Stop (${options.currentIndex + 1}/${options.numberOfProducts})`
    : "Start";
};

function isYesterdayOrEarlier(date) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return new Date(date) < yesterday;
}

const isValidDate = (date) => {
  return !isNaN(new Date(date));
};

settingsIcon.addEventListener("click", async () => {
  licenseContent.style.display = "flex";
  mainContent.style.display = "none";
  settingsIcon.style.display = "none";
  const key = (await chrome.storage.sync.get("key"))?.key;
  licenseKeyInput.value = key;
  const isValidLicense = await checkLicense(key);
  licenseContent.querySelector("a").style.display = isValidLicense ? "none" : "block";
});

const onMainContentOpen = async () => {
  settingsIcon.style.display = "block";
  setButtonText();
  if (options.isStarted) {
    startStopButton.disabled = false;
    mainMessage.style.display = "none";
    return;
  }
  maxCountInput.disabled = false;
  const key = (await chrome.storage.sync.get("key"))?.key;
  hasValidLicense = await checkLicense(key);
  console.log({ key, hasValidLicense });
  getPremiumAnchor.style.display = hasValidLicense ? "none" : "inline";
  periodCheckbox.disabled = !hasValidLicense;
  periodContainer.title = hasValidLicense ? "" : "Only available for premium members";
  const { isFreeValid, isPremiumValid } = await getIsPageValid();
  handlePageValidity(isFreeValid, isPremiumValid, hasValidLicense);
  if (!isFreeValid && !isPremiumValid) {
    return;
  }
  if (key && hasValidLicense) {
    return;
  }
  options.maxCount = Math.min(options.maxCount, MAX_ITEMS_COUNT_FREE);
  maxCountInput.valueAsNumber = options.maxCount;
  maxCountInput.max = MAX_ITEMS_COUNT_FREE;
  const hasUsedToday = isValidDate(usageStats.lastRunDate) && !isYesterdayOrEarlier(usageStats.lastRunDate);
  console.log(hasUsedToday, usageStats.runCount);
  if (hasUsedToday && usageStats.runCount >= MAX_RUN_COUNT_FREE) {
    startStopButton.disabled = true;
    mainMessage.style.display = "block";
    mainMessage.innerHTML = `Sorry but you reached the limits of ${MAX_RUN_COUNT_FREE} runs per day. If you want more, you can upgrade to premium.`;
    // message
  }
};

const main = async () => {
  // const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  // tabId = tab.id;

  const optionsResp = await chrome.storage.sync.get("options");
  handleOptions(optionsResp);
  const usageStatsResp = await chrome.storage.sync.get("usageStats");
  Object.assign(usageStats, usageStatsResp.usageStats);
  const hasUsedToday = isValidDate(usageStats.lastRunDate) && !isYesterdayOrEarlier(usageStats.lastRunDate);
  if (!hasUsedToday) {
    usageStats.runCount = 0;
    window.chrome.storage.sync.set({ usageStats });
  }
  onMainContentOpen();
};
main();
