chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: chrome.extension.getURL("js/global-game.js") };
  },
  {urls: ["*://*/*global-game.js"]},
  ["blocking"]);