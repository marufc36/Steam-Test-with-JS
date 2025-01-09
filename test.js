require("chromedriver");
const assert = require("assert");
const { Builder } = require("selenium-webdriver");
const HomePage = require("./pages/HomePage");
const MarketPage = require("./pages/MarketPage");
const SearchResultPage = require("./pages/SearchResultPage");

describe("Steam", function () {
    this.timeout(60000);
    let driver;
    let homePage;
    let marketPage;
    let searchResultPage;
    

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 30000, script: 30000 });
        homePage = new HomePage(driver);
        marketPage = new MarketPage(driver);
        searchResultPage = new SearchResultPage(driver);
    });

    it("should open Steam and hover over element", async function () {
        await homePage.open();

        // Verify page title
        let title = await homePage.getTitle();
        assert.equal(title, "Welcome to Steam");

        // Hover over the element and navigate to Market
        await homePage.hoverOverCommunityMenu();
        await homePage.clickMarketLink();
        let pageTitle = await marketPage.getTitle();
        assert.equal(pageTitle, "Steam Community :: Steam Community Market");

        // Interact with advanced search
        await marketPage.clickAdvancedSearchButton();
        assert(await marketPage.isAdvancedSearchFormDisplayed(), "Advanced search form is not displayed");

        await marketPage.selectDota2();
        await marketPage.selectHero("tag_npc_dota_hero_phantom_assassin");
        await marketPage.selectRarity("tag_570_Rarity_Rarity_Rare");
        await marketPage.clickSearchButton();
        assert(await searchResultPage.isSearchResultsDisplayed(), "Search results are not displayed");
        await searchResultPage.clickFirstItem();
        const isGameNameCorrect = await searchResultPage.verifyGameName("Dota 2");
        assert.equal(isGameNameCorrect, true, "Game name does not match the selected filter");
        const isRarityCorrect = await searchResultPage.verifyrarity("Rare");
        assert.equal(isRarityCorrect, true, "Game name does not contain the expected rarity 'Rare'");



        });
        after(async function () {
            await driver.quit();
        });
    });
    