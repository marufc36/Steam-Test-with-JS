const { By, until } = require("selenium-webdriver");

class MarketPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            advancedSearchButton: By.xpath("//div[@class='market_search_advanced_button']"),
            advancedSearchForm: By.xpath("//form[@id='market_advanced_search']"),
            dropdownDota2: By.xpath("//div[@id='app_option_0_selected']"),
            appOption: (appId) => By.xpath(`//div[contains(@class,'popup_item') and contains(@id,'app_option_${appId}')]`),
            heroOption: (heroName) => By.xpath(`//option[contains(@value,'${heroName.toLowerCase()}')]`),
            rarityOption: (rarity) => By.xpath(`//input[contains(@id,'${rarity}')]`),
            qualityOption: (quality) => By.xpath(`//input[contains(@value,'${quality}')]`),
            weaponOption: (weapon) => By.xpath(`//option[contains(@value,'${weapon.toLowerCase()}')]`),
            exteriorOption: (exterior) => By.xpath(`//input[contains(@id,'${exterior}')]`),
            searchButton: By.xpath("//div[contains(@class,'btn_green')]")
        };
    }

    async getTitle() {
        return this.driver.getTitle();
    }

    async clickAdvancedSearchButton() {
        const button = await this.driver.findElement(this.locators.advancedSearchButton);
        await button.click();
    }

    async isAdvancedSearchFormDisplayed() {
        const form = await this.driver.findElement(this.locators.advancedSearchForm);
        return form.isDisplayed();
    }

    async selectApp(appId) {
        const dropdown = await this.driver.findElement(this.locators.dropdownDota2);
        await dropdown.click();
        const appOption = await this.driver.findElement(this.locators.appOption(appId));
        await appOption.click();
    }

    async selectHero(heroName) {
        const heroLocator = this.locators.heroOption(heroName);
        const hero = await this.driver.wait(until.elementLocated(heroLocator), 10000);
        await hero.click();
    }

    async selectRarity(rarity) {
        const rarityOption = await this.driver.findElement(this.locators.rarityOption(rarity));
        await rarityOption.click();
    }

    async selectQuality(quality) {
        const qualityOption = await this.driver.findElement(this.locators.qualityOption(quality));
        await qualityOption.click();
    }

    async selectWeapon(weapon) {
        const weaponOption = await this.driver.findElement(this.locators.weaponOption(weapon));
        await weaponOption.click();
    }

    async selectExterior(exterior) {
        const exteriorOption = await this.driver.findElement(this.locators.exteriorOption(exterior));
        await exteriorOption.click();
    }

    async clickSearchButton() {
        const button = await this.driver.findElement(this.locators.searchButton);
        await button.click();
    }
}

module.exports = MarketPage;
