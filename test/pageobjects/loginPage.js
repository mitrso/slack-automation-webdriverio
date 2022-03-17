
import Page from './basePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {


    /*************Locators*****************/

    get inputUsername() {
        return $('//*[@data-qa="login_email"]');
    }

    get inputPassword() {
        return $('//*[@data-qa="login_password"]');
    }

    get btnSubmit() {
        return $('//*[@data-qa="signin_button"]');
    }

    /*******************************Actions********************************/



    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

    }

   
    /**
     * overwrite specific options to adapt it to page object
     */
     open() {
        return super.open('');
    }
}

export default new LoginPage();