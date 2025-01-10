const assert = require("assert");

class MarketPageStep {
    constructor(marketPage) {
        this.marketPage = marketPage;
    }

    async verifyMarketPageTitle(expectedTitle) {
        const actualTitle = await this.marketPage.getTitle();
        assert.equal(actualTitle, expectedTitle, "Market page title does not match");
    }

    async interactWithAdvancedSearch(dota2Option, heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2(dota2Option);
        await this.marketPage.selectHero(heroOption);
        await this.marketPage.selectRarity(rarityOption);
        await this.marketPage.clickSearchButton();
    }
}

module.exports = MarketPageStep;
