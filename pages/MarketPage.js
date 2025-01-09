const { By, until } = require("selenium-webdriver");

class MarketPage {
    constructor(driver) {
        this.driver = driver;
        this.advancedSearchButton = By.xpath("//div[@class='market_search_advanced_button']");
        this.advancedSearchForm = By.xpath("//form[@id='market_advanced_search']");
        this.dota2Option = By.xpath("//div[@id='app_option_570']");
        this.heroOption = (heroValue) => By.xpath(`//option[@value='${heroValue}']`);
        this.rarityOption = (rarityId) => By.xpath(`//input[@id='${rarityId}']`);
        this.searchButton = By.xpath("//div[@class='btn_medium btn_green_white_innerfade']");
        
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async clickAdvancedSearchButton() {
        const button = await this.driver.findElement(this.advancedSearchButton);
        await button.click();
    }

    async isAdvancedSearchFormDisplayed() {
        const form = await this.driver.findElement(this.advancedSearchForm);
        return await form.isDisplayed();
    }

    async selectDota2() {
        const dropdown = await this.driver.findElement(By.xpath("//div[@id='app_option_0_selected']"));
        await dropdown.click();
        const dota2 = await this.driver.findElement(this.dota2Option);
        await dota2.click();
    }

    async selectHero(heroValue) {
        const hero = await this.driver.wait(until.elementLocated(this.heroOption(heroValue)), 10000);
        await hero.click();
    }

    async selectRarity(rarityId) {
        const rarity = await this.driver.findElement(this.rarityOption(rarityId));
        await rarity.click();
    }

    async clickSearchButton() {
        const button = await this.driver.findElement(this.searchButton);
        await button.click();
    }

    async isSearchResultsDisplayed() {
        const results = await this.driver.findElement(this.searchResults);
        return await results.isDisplayed();
    }
}

module.exports = MarketPage;
