function savePage() {
    window.location.assign("goodlinks://x-callback-url/save?url=" + window.location.href)
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: savePage
    });
});

