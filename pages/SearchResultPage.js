const { By, until } = require("selenium-webdriver");

class SearchResultPage {
    constructor(driver) {
        this.driver = driver;
        this.searchResults = By.xpath("//div[@id='searchResults']");
        this.results = (index) => By.xpath(`//div[@id='result_${index}']`);
        this.itemLocator = By.xpath("//h1[contains(@id,'largeiteminfo')]");
    }

    async isSearchResultsDisplayed() {
        const results = await this.driver.findElement(this.searchResults);
        return results.isDisplayed();
    }   
    
    async clickResult(index) {
        const result = await this.driver.findElement(this.results(index));
        await result.click();
    }

    async isItemDisplayed() {
        const item = await this.driver.findElement(this.itemLocator);
        return item.isDisplayed();
    }
}

module.exports = SearchResultPage;
