const assert = require("assert");

class HomePageStep {
    constructor(homePage) {
        this.homePage = homePage;
    }

    async openHomePageAndVerifyTitle(expectedTitle) {
        await this.homePage.open();
        const actualTitle = await this.homePage.getTitle();
        assert.equal(actualTitle, expectedTitle, "Home page title does not match");
    }

    async navigateToMarket() {
        await this.homePage.hoverOverCommunityMenu();
        await this.homePage.clickMarketLink();
    }
}

module.exports = HomePageStep;

