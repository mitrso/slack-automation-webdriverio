/*
** This page have all common page element/elements and their user actions
*/

import Page from '../basePage';
import WdioHelper from '../utils/wdioHelper';

class CommonPage extends Page{

    async searchMessage(messageText) {
        console.log('message text:::'+ messageText);
        await (await browser.$('.p-top_nav__search__text*=Search')).click();
        await browser.pause('2000');
        await (await browser.$('[aria-label="Search"]')).keys(messageText);
        await browser.pause('5000');
        await browser.keys('Enter');
        await browser.pause('8000');
    }
}

module.exports = new CommonPage();