chrome.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(request, sender, sendResponse) {
    console.log('received');
    const { word } = request;
    if (!word) {
        return;
    }
    const words = word.split('|')

    const currentPopup = document.getElementById('duynguyen-popup');
    if (currentPopup) {
        currentPopup.remove();
    }

    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.innerHTML = `
    <div style="width: 300px; height: 90px; border-radius: 20px; display: flex; background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); opacity: 0.7; box-shadow: 4px 4px rgba(0, 98, 90, 0.4), 8px 8px rgba(0, 98, 90, 0.3); font-family: sans-serif; justify-content: center; align-items: center; flex-direction: column;  color: #272727;">
        <div style="font-weight: bold; display: flex; align-items: center">
            <span style=" background-color: white; padding: 6px; border-radius: 8px; justify-content: center; display: flex">
                ${words[0]} ${words[1]}
            </span>
            <span style="display: flex; align-items: center; padding: 6px; word-break: break-all;">
                ${words[2]}
            </span>
        </div>
        <div style="font-size: 0.8rem; margin-top: 5px; word-break: break-all;">
            ${words[4]}
        </div>
    </div>
    `;
    div.id = 'duynguyen-popup';
    div.style.position = 'fixed';
    div.style.bottom = '20px';
    div.style.right = '20px';
    div.style.width = '300px';
    div.style.height = '90px';
    div.style.zIndex = '10000';
    div.onclick = (e) => {
        e.target.remove();
    }
    body.appendChild(div);
}
