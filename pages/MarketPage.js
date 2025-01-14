const { By, until } = require("selenium-webdriver");

class MarketPage {
    constructor(driver) {
        this.driver = driver;
        this.advancedSearchButton = By.xpath("//div[@class='market_search_advanced_button']");
        this.advancedSearchForm = By.xpath("//form[@id='market_advanced_search']");
        this.dota2Option = By.xpath("//div[contains(@class,'popup_item') and contains(@id,'app_option_570')]");
        this.counterStrike = By.xpath("//div[contains(@class,'popup_item') and contains(@id,'app_option_730')]");
        this.searchButton = By.xpath("//div[contains(@class,'btn_green')]");
        this.heroOptionLocator = (heroName) => By.xpath(`//option[contains(@value,'${heroName.toLowerCase()}')]`);
        this.rarityOptionLocator = (rarity) => By.xpath(`//input[contains(@id,'${rarity}')]`);
        this.weaponOptionLocator =  By.xpath("//option[contains(@value,'G3SG1')]");
        this.exteriorOptionLocator = By.xpath("//input[contains(@id,'WearCategory0')]");
        this.dropdownDota2 = By.xpath("//div[@id='app_option_0_selected']");
    }

    async getTitle() {
        return this.driver.getTitle();
    }

    async clickAdvancedSearchButton() {
        const button = await this.driver.findElement(this.advancedSearchButton);
        await button.click();
    }

    async isAdvancedSearchFormDisplayed() {
        const form = await this.driver.findElement(this.advancedSearchForm);
        return form.isDisplayed();
    }

    async selectDota2() {
        const dropdown = await this.driver.findElement(this.dropdownDota2);
        await dropdown.click();
        const dota2 = await this.driver.findElement(this.dota2Option);
        await dota2.click();
    }

    async selectCounterStrike() {
        const dropdown = await this.driver.findElement(this.dropdownDota2);
        await dropdown.click();
        const counterStrike = await this.driver.findElement(this.counterStrike);
        await counterStrike.click();
    }

    async selectHero(heroName) {
        const heroLocator = this.heroOptionLocator(heroName);
        const hero = await this.driver.wait(until.elementLocated(heroLocator), 10000);
        await hero.click();
    }

    async selectRarity(rarity) {
        const rarityLocator = this.rarityOptionLocator(rarity);
        const rarityOption = await this.driver.findElement(rarityLocator);
        await rarityOption.click();
    }

    async selectWeapon() {
        const weaponOption = await this.driver.findElement(this.weaponOptionLocator);
        await weaponOption.click();
    }

    async selectExterior() {
        const exteriorOption = await this.driver.findElement(this.exteriorOptionLocator);
        await exteriorOption.click();
    }

    async clickSearchButton() {
        const button = await this.driver.findElement(this.searchButton);
        await button.click();
    }
}

module.exports = MarketPage;


