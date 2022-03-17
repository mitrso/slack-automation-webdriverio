

const { default: $ } = require('webdriverio/build/commands/browser/$');
import Page from './basePage';
import wdioHelper from '../pageobjects/utils/wdioHelper'


class HomePage extends Page{

//*************Locators*****************



//*************Actions*****************

    async sendMessage (text) {
        try {
            await wdioHelper.waitForDisplay(browser.$('//div[@aria-label="Message to hometask"]'));
            const messageCont = await browser.$('//div[@aria-label="Message to hometask"]');
            await messageCont.setValue(text);
            await browser.pause('2000');
            const sndButton = await browser.$('[data-qa="texty_send_button"]');
            await sndButton.click();
        } catch(err) {
            throw new Error(`Message not sent - ${err}`);
        }
    }


    async loginWait() {
        await browser.waitUntil(async () => (await $('//*[data-qa="team-menu-trigger"]').getText === 'Main menu for SomAssignment',
        {
            timeout: 5000,
            timeoutMsg: 'expected text is different after 5s'
        }
        ));
    }

}

export default new HomePage();
