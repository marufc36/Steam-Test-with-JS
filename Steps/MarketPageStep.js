const assert = require("assert");

class MarketPageStep {
    constructor(marketPage) {
        this.marketPage = marketPage;
    }

    async verifyMarketPageTitle(expectedTitle) {
        const actualTitle = await this.marketPage.getTitle();
        assert.equal(actualTitle, expectedTitle, "Market page title does not match");
    }

    async interactWithAdvancedSearch(heroOption, rarityOption) {
        await this.marketPage.clickAdvancedSearchButton();
        const isFormDisplayed = await this.marketPage.isAdvancedSearchFormDisplayed();
        assert(isFormDisplayed, "Advanced search form is not displayed");

        await this.marketPage.selectDota2();

        switch (heroOption) {
            case "Phantom Assassin":
                await this.marketPage.selectHeroPhantomAssasin();
                break;
            case "Lina":
                await this.marketPage.selectHeroLina();
                break;
            case "Invoker":
                await this.marketPage.selectHeroInvoker();
                break;
            case "Oracle":
                await this.marketPage.selectHeroOracle();
                break;
            case "Abaddon":
                await this.marketPage.selectHeroAbandon();
                break;
            default:
                throw new Error(`Unknown hero option: ${heroOption}`);
        }

        switch (rarityOption) {
            case "Rare":
                await this.marketPage.selectRarityRare();
                break;
            case "Common":
                await this.marketPage.selectRarityCommon();
                break;
            case "Mythical":
                await this.marketPage.selectRarityMythical();
                break;
            case "Immortal":
                await this.marketPage.selectRarityImmortal();
                break;
            case "Ancient":
                await this.marketPage.selectRarityAncient();
                break;
            default:
                throw new Error(`Unknown rarity option: ${rarityOption}`);
        }

        await this.marketPage.clickSearchButton();
    }
}

module.exports = MarketPageStep;

