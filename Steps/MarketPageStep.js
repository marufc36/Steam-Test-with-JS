const assert = require("assert");

class MarketPageStep {
    constructor(marketPage) {
        this.marketPage = marketPage;
    }

    async verifyMarketPageTitle(expectedTitle) {
        const actualTitle = await this.marketPage.getTitle();
        assert.equal(actualTitle, expectedTitle, "Market page title does not match");
    }

    // Advanced Search for any hero and rarity
    async advancedSearchToInteractWithHeroAndRarity(appId, hero, rarity) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");
        await this.marketPage.selectApp(appId);
        await this.marketPage.selectHero(hero);
        await this.marketPage.selectRarity(rarity);
        await this.marketPage.clickSearchButton();
     }

     async advancedSearchForCS2ToInteractWithWeaponAndExterior(appId, weapon,exterior ) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");
        await this.marketPage.selectApp(appId);
        await this.marketPage.selectWeapon(weapon);
        await this.marketPage.selectExterior(exterior);
        await this.marketPage.clickSearchButton();
     }

     async advancedSearchToInteractWithQualityandHero(appId, hero, quality) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");
        await this.marketPage.selectApp(appId);
        await this.marketPage.selectHero(hero);
        await this.marketPage.selectQuality(quality);
        await this.marketPage.clickSearchButton();
     }

     async advancedSearchToInteractWithHeroRarityAndQuality(appId, hero, rarity, quality) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");
        await this.marketPage.selectApp(appId);
        await this.marketPage.selectHero(hero);
        await this.marketPage.selectRarity(rarity);
        await this.marketPage.selectQuality(quality);
        await this.marketPage.clickSearchButton();
     }
}

module.exports = MarketPageStep;
