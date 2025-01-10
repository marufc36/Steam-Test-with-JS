const { By, until } = require("selenium-webdriver");

class MarketPage {
    constructor(driver) {
        this.driver = driver;
        this.advancedSearchButton = By.xpath("//div[@class='market_search_advanced_button']");
        this.advancedSearchForm = By.xpath("//form[@id='market_advanced_search']");
        this.dota2Option = By.xpath("//div[contains(@class,'popup_item') and contains(@id,'app_option_570')]");
        this.heroOption =  By.xpath("//option[contains(@value,'dota_hero_phantom_assassin')]");
        this.rarityOption =  By.xpath("//input[contains(@id,'Rarity_Rare')]");
        this.searchButton = By.xpath("//div[contains(@class,'btn_green')]");
        
    }

    async getTitle() {
        return  this.driver.getTitle();
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

    async selectHero() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOption), 10000);
        await hero.click();
    }

    async selectRarity() {
        const rarity = await this.driver.findElement(this.rarityOption);
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

