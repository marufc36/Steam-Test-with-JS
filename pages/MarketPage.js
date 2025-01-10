const { By, until } = require("selenium-webdriver");

class MarketPage {
    constructor(driver) {
        this.driver = driver;
        this.advancedSearchButton = By.xpath("//div[@class='market_search_advanced_button']");
        this.advancedSearchForm = By.xpath("//form[@id='market_advanced_search']");
        this.dota2Option = By.xpath("//div[contains(@class,'popup_item') and contains(@id,'app_option_570')]");
        this.heroOptionPhantomAssasin =  By.xpath("//option[contains(@value,'dota_hero_phantom_assassin')]");
        this.heroOptionLina =  By.xpath("//option[contains(@value,'hero_lina')]");
        this.heroOptionInvoker = By.xpath("(//option[contains(@value,'hero_invoker')])[1]");
        this.heroOptionOracle = By.xpath("//option[contains(@value,'hero_oracle')]");
        this.heroOptionAbandon = By.xpath("//option[contains(@value,'hero_abaddon')]");
        this.rarityOptionRare =  By.xpath("//input[contains(@id,'Rarity_Rare')]");
        this.rarityOptionCommon =  By.xpath("//input[contains(@id,'Rarity_Common')]");
        this.rarityOptionMythical = By.xpath("//input[contains(@id,'Rarity_Mythical')]");
        this.rarityImmortal = By.xpath("//input[contains(@id,'Rarity_Immortal')]");
        this.rarityAncient = By.xpath("//input[contains(@id,'Rarity_Ancient')]");
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
        return  form.isDisplayed();
    }

    async selectDota2() {
        const dropdown = await this.driver.findElement(By.xpath("//div[@id='app_option_0_selected']"));
        await dropdown.click();
        const dota2 = await this.driver.findElement(this.dota2Option);
        await dota2.click();
    }

    async selectHeroPhantomAssasin() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOptionPhantomAssasin), 10000);
        await hero.click();
    }

    async selectHeroLina() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOptionLina), 10000);
        await hero.click();
    }

    async selectHeroInvoker() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOptionInvoker), 10000);
        await hero.click();
    }

    async selectHeroOracle() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOptionOracle), 10000);
        await hero.click();
    }

    async selectHeroAbandon() {
        const hero = await this.driver.wait(until.elementLocated(this.heroOptionAbandon), 10000);
        await hero.click();
    }

    async selectRarityRare() {
        const rarity = await this.driver.findElement(this.rarityOptionRare);
        await rarity.click();
    }

    async selectRarityCommon() {
        const rarity = await this.driver.findElement(this.rarityOptionCommon);
        await rarity.click();
    }

    async selectRarityMythical() {
        const rarity = await this.driver.findElement(this.rarityOptionMythical);
        await rarity.click();
    }

    async selectRarityImmortal() {
        const rarity = await this.driver.findElement(this.rarityImmortal);
        await rarity.click();  
    }

    async selectRarityAncient() {
        const rarity = await this.driver.findElement(this.rarityAncient);
        await rarity.click();
    }

    async clickSearchButton() {
        const button = await this.driver.findElement(this.searchButton);
        await button.click();
    }

    async isSearchResultsDisplayed() {
        const results = await this.driver.findElement(this.searchResults);
        return results.isDisplayed();
    }
}

module.exports = MarketPage;

