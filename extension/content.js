chrome.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(request, sender, sendResponse) {
    console.log(request);
}
