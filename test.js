require("chromedriver");
const { Builder } = require("selenium-webdriver");
const HomePage = require("./pages/HomePage");
const MarketPage = require("./pages/MarketPage");
const SearchResultPage = require("./pages/SearchResultPage");
const HomePageStep = require("./Steps/HomePageStep");
const MarketPageStep = require("./Steps/MarketPageStep");
const SearchResultPageStep = require("./Steps/SearchResultPageStep");

describe("Steam Test Advanced Search Filter", function () {
    this.timeout(60000);
    let driver;
    let homePage, marketPage, searchResultPage;
    let homePageStep, marketPageStep, searchResultPageStep;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 30000, script: 30000 });

        homePage = new HomePage(driver);
        marketPage = new MarketPage(driver);
        searchResultPage = new SearchResultPage(driver);

        homePageStep = new HomePageStep(homePage);
        marketPageStep = new MarketPageStep(marketPage);
        searchResultPageStep = new SearchResultPageStep(searchResultPage);
    });

    const testCases = [
        { hero: "Phantom Assassin", rarity: "Rare" },
        { hero: "Lina", rarity: "Common" },
        { hero: "Invoker", rarity: "Mythical" },
        { hero: "Oracle", rarity: "Immortal" },
        { hero: "Abaddon", rarity: "Ancient" }
    ];

    testCases.forEach(({ hero, rarity }, index) => {
        it(`Test Case ${index + 1}: Advanced Search for ${hero} (${rarity})`, async function () {
            // Step 1: Open Home Page and Verify Title
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");

            // Step 2: Navigate to Market
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");

            // Step 3: Interact with Advanced Search
            await marketPageStep.interactWithAdvancedSearch(hero, rarity);

            // Step 4: Verify Search Results
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnFirstItem();
            await searchResultPageStep.verifyGameName("Dota 2");
            await searchResultPageStep.verifyRarity(rarity);
        });
    });

    after(async function () {
        await driver.quit();
    });
});
