const randomNumber = parseInt(Math.random() * 46);
const baseUrl = `https://api.github.com/repos/duysmile/vocabulary-eng/contents/vocabulary/v-${randomNumber}.json`
const DURATION_POPUP = 1000 * 30;

fetch(baseUrl).then(res => {
    return res.json();
}).then(data => {
    const { content } = data;
    const decodedContent = b64ToUtf8(content);
    const dataContent = JSON.parse(decodedContent);
    const range = dataContent.length;

    chrome.browserAction.onClicked.addListener(btnClicked);

    function btnClicked(tab) {
        chrome.tabs.sendMessage(tab.id, {
            msg: 'I love you so much <3',
            action: 'toggle',
        });
    }

    setInterval(dailyVoca, DURATION_POPUP);
    
    function dailyVoca() {
        const randomWord = parseInt(Math.random() * range);
        const word = dataContent[randomWord];
        const params = {
            active: true,
            currentWindow: true,
        }
        chrome.tabs.query(params, (tabs) => {
            const tabId = tabs[0].id;
            chrome.tabs.sendMessage(tabId, { word });
        });
    }

    function b64ToUtf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    dailyVoca();
});

