require('chromedriver');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Steam', function () {
    this.timeout(20000);
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize(); // Maximize the browser window
    });

    it('should open Steam and hover over element', async function() {
        await driver.get('https://store.steampowered.com/');
        this.timeout(20000);

        let title = await driver.getTitle();
        assert.equal(title, 'Welcome to Steam');
        
        // Find the element to hover over
        let element = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[@id='global_header']/div/div[2]/a[2]"))), 20000);
        await driver.wait(until.elementIsEnabled(element), 20000); // Ensure it's enabled and interactable
        
        // Use JavaScript to trigger mouseover event to simulate hovering
        await driver.executeScript('arguments[0].dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));', element);
       /* let submenuElement = await driver.wait(
            until.elementLocated(By.xpath("(//a[@class='submenuitem' ])[10]")),
            20000
        );

        // Ensure the submenu element is visible and interactable
        await driver.wait(until.elementIsVisible(submenuElement), 20000);
        await driver.wait(until.elementIsEnabled(submenuElement), 20000);*/
        let submenuElement = driver.findElement(By.xpath("(//a[@class='submenuitem' ])[10]"));
        
        // Ensure element is visible and interactable
        await driver.wait(until.elementIsVisible(submenuElement));
        await driver.executeScript("arguments[0].scrollIntoView(true);", submenuElement);

        // Use JavaScript to click
        await driver.executeScript("arguments[0].click();", submenuElement);

    });

    after(() => {
        if (driver) {
            driver.quit();
        }
    });
});
