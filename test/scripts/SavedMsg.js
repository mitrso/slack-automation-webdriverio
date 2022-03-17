'use strict';

import LoginPage from  '../pageobjects/loginPage';
import HomePage from '../pageobjects/homePage';
import moveTo from 'webdriverio/build/commands/element/moveTo';
import $ from 'webdriverio/build/commands/element/$';
import WdioHelper from '../pageobjects/utils/wdioHelper'
import commonPage from '../pageobjects/common/commonPage'
import Chance from 'chance';

describe('Slack Saved Msg Task', () => {
    let chance = new Chance();
    const message = chance.sentence({ words: 3 });
    it('User should be able to login with credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('somsankar.mitra@gmail.com', 'Automation01');
    });

    it('User lands on home page', async () => {
        await browser.pause('15000');
        await HomePage.loginWait();
    });

    it('User sends message and then saves it', async () => {
        console.log('mesage is :::'+ message)
        await HomePage.sendMessage(message);
        await browser.pause('2000');
        const messageTextElems = await browser
            .$$('[data-qa="message_content"]');
        const inputMsgTextElem = messageTextElems[messageTextElems.length - 1];
        console.log(await inputMsgTextElem.getText());
        expect(inputMsgTextElem).toHaveTextContaining(message);
        await inputMsgTextElem.moveTo();
        await browser.pause('2000');
        await (await browser.$('[data-qa="save_message"]')).click();
        await browser.pause('2000');
        await (await browser.$('//*[button="Added to your saved items"]')).isDisplayed();
        await browser.pause('2000');
        await (await browser.$('[data-qa="channel_sidebar_name_page_psaved"]')).click();
        await (await browser.$('[data-qa="saved_item_message"]')).isDisplayed();
        await browser.pause('2000');
    });

    it('User searches for the saved message', async () => {
        await commonPage.searchMessage('has:star');
        if (!await(await browser.$(`.p-rich_text_section*=${message}`)).isDisplayed()) {
            const searchResults = await browser.$$(`.p-rich_text_section*=${message}`);
            const searchResultElement = searchResults[0];
            expect(searchResultElement).toHaveTextContaining(message);
        } else {
            await browser.refresh();
            await WdioHelper.waitForDisplay(browser.$('.p-top_nav__search__text*=Search'));
            await (await browser.$('.p-top_nav__search__text*=Search')).click();
            const searchResults = await browser.$$(`.p-rich_text_section*=${message}`);
            const searchResultElement = searchResults[0];
            expect(searchResultElement).toHaveTextContaining(message);
        }
    });

    
});



