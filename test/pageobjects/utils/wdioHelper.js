const { default: ChromeDriverService, ChromedriverServiceLauncher } = require("wdio-chromedriver-service");
import chance from 'chance';

class WdioHelper {

    async jsClick(element) {
        await browser.execute('arguments[0].click()', element);
    }

    async jsGetText(element) {
        return await browser.execute('return arguments[0].textContent;', element);
    }

    async waitForDisplay(element) {
        await browser.pause('1000');
        await element.waitForDisplayed({ timeout: 20000 });
    }

}

module.exports = new WdioHelper();