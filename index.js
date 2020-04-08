const { JSDOM } = require('jsdom');
const fs = require('fs');

const pages = require('./pages.json');

pages.forEach((page, index) => {
    JSDOM.fromURL(page).then(dom => {
        const { document } = dom.window;
        const cards = Array.from(document.querySelectorAll('.blog-new-left-content .item-cover'));
        const contents = cards.map(card => {
            const content = card.textContent.trim().replace(/\s\s+/g, '|');
            return content;
        });
        fs.writeFileSync(`v-${index}.json`, JSON.stringify(contents), { encoding: 'utf8' });
    });
});
