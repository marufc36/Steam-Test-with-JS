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
        await this.marketPage.selectHeroPhantomAssasin(heroOption);
        await this.marketPage.selectRarityRare(rarityOption);
        await this.marketPage.clickSearchButton();
    }

    async interactWithAdvancedSearchFor2ndTest(dota2Option, heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2(dota2Option);
        await this.marketPage.selectHeroLina(heroOption);
        await this.marketPage.selectRarityCommon(rarityOption);
        await this.marketPage.clickSearchButton();
    }

    async interactWithAdvancedSearchFor3rdTest(dota2Option, heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2(dota2Option);
        await this.marketPage.selectHeroInvoker(heroOption);
        await this.marketPage.selectRarityMythical(rarityOption);
        await this.marketPage.clickSearchButton();
    }

    async interactWithAdvancedSearchFor4thTest(dota2Option, heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2(dota2Option);
        await this.marketPage.selectHeroOracle(heroOption);
        await this.marketPage.selectRarityImmortal(rarityOption);
        await this.marketPage.clickSearchButton();
    }

    async interactWithAdvancedSearchFor5thTest(dota2Option, heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2(dota2Option);
        await this.marketPage.selectHeroAbandon(heroOption);
        await this.marketPage.selectRarityAncient(rarityOption);
        await this.marketPage.clickSearchButton();
    }
}

module.exports = MarketPageStep;
