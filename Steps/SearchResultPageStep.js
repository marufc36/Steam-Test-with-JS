const assert = require("assert");

class SearchResultPageStep {
    constructor(searchResultPage) {
        this.searchResultPage = searchResultPage;
    }

    async verifySearchResultsDisplayed() {
        const isDisplayed = await this.searchResultPage.isSearchResultsDisplayed();
        assert(isDisplayed, "Search results are not displayed");
    }

    async clickOnFirstItem() {
        await this.searchResultPage.clickFirstItem();
    }

    async verifyGameName(expectedGameName) {
        const isGameNameCorrect = await this.searchResultPage.verifyGameName(expectedGameName);
        assert.equal(isGameNameCorrect, true, "Game name does not match the selected filter");
    }

    async verifyRarity(expectedRarity) {
        const isRarityCorrect = await this.searchResultPage.verifyrarity(expectedRarity);
        assert.equal(isRarityCorrect, true, `Expected rarity '${expectedRarity}' is not found in the game item`);
    }
}

module.exports = SearchResultPageStep;