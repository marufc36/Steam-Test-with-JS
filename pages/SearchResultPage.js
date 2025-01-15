const { By, until } = require("selenium-webdriver");

class SearchResultPage {
    constructor(driver) {
        this.driver = driver;
        this.searchResults = By.xpath("//div[@id='searchResults']");
        this.firstItem = By.xpath("//div[@id='result_0']");
        this.fourthItem = By.xpath("//div[@id='result_3']");
        this.gameNameLocator = By.xpath("//div[@id='largeiteminfo_game_name']");
        this.rareity = By.xpath("//div[@id='largeiteminfo_item_type']");

    }

    async isSearchResultsDisplayed() {
        const results = await this.driver.findElement(this.searchResults);
        return results.isDisplayed();
    }   
    
    async clickFirstItem() {
        const item = await this.driver.findElement(this.firstItem);
        await item.click();
    }

    async clickFourthItem() {
        const item = await this.driver.findElement(this.fourthItem);
        await item.click();
    }

    async gameName(expectedGameName) {
        const gameNameElement = await this.driver.wait(until.elementLocated(this.gameNameLocator), 10000);
        const actualGameName = await gameNameElement.getText();
        return actualGameName === expectedGameName;
    }

    async rarity(expectedRareity) {
        const elementRarity = await this.driver.wait(until.elementLocated(this.rareity), 10000);
        const actualGameName = await elementRarity.getText();
        return actualGameName.includes(expectedRareity);
    }
}
module.exports = SearchResultPage;



