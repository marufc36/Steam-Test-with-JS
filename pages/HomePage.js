const { By, until } = require("selenium-webdriver");

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://store.steampowered.com/";
        this.communityMenu = By.xpath("//a[contains(@class,'menuitem') and contains(text(),'COMMUNITY')]");
        this.market = By.xpath("//a[contains(@class,'submenuitem') and contains(text(),'Market')]");
    }

    async open() {
        await this.driver.get(this.url);
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async hoverOverCommunityMenu() {
        const element = await this.driver.findElement(this.communityMenu);
        const actions = this.driver.actions({ async: true });
        await actions.move({ origin: element }).perform();

    }

    async clickMarketLink() {
        const element = await this.driver.wait(until.elementLocated(this.market), 5000);
        await this.driver.executeScript("arguments[0].click();", element);
    }
}

module.exports = HomePage;
