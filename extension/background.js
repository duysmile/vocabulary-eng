console.log('it works');

chrome.browserAction.onClicked.addListener(btnClicked);

// mua mouse may tinh cho Hang

function btnClicked(tab) {
    console.log('yeah it works well!');
    chrome.tabs.sendMessage(tab.id, { msg: 'I love you so much <3' });
}