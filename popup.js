document.getElementById("title").textContent = chrome.i18n.getMessage("popupTitle");
document.getElementById("desc").innerHTML = chrome.i18n.getMessage("popupDesc");
document.getElementById("statusLabel").textContent = chrome.i18n.getMessage("popupStatus");

// Check if current tab is an iQIYI page
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const url = tab ? tab.url || "" : "";
  let isIqiyi = false;
  try {
    isIqiyi = /(?:^|\.)iq(?:iyi)?\.com/i.test(new URL(url).hostname);
  } catch (_) {
    // URL unavailable (e.g. chrome:// pages)
  }

  const statusValue = document.getElementById("statusValue");
  if (isIqiyi) {
    statusValue.innerHTML =
      '<span class="status-dot active"></span>' +
      chrome.i18n.getMessage("popupActive");
  } else {
    statusValue.innerHTML =
      '<span class="status-dot inactive"></span>' +
      chrome.i18n.getMessage("popupInactive");
  }
});
