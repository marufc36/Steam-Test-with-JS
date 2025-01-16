const assert = require("assert");

class SearchResultPageStep {
    constructor(searchResultPage) {
        this.searchResultPage = searchResultPage;
    }

    async verifySearchResultsDisplayed() {
        const isDisplayed = await this.searchResultPage.isSearchResultsDisplayed();
        assert(isDisplayed, "Search results are not displayed");
    }

    async clickOnresult(index) {
        await this.searchResultPage.clickResult(index);
    }

    async itemIsDisplayed() {
        const isDisplayed = await this.searchResultPage.isItemDisplayed();
        assert(isDisplayed, "Item is not displayed");
    }
}

module.exports = SearchResultPageStep;
