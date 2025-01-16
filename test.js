require("chromedriver");
const { Builder } = require("selenium-webdriver");
const HomePage = require("./pages/HomePage");
const MarketPage = require("./pages/MarketPage");
const SearchResultPage = require("./pages/SearchResultPage");
const HomePageStep = require("./Steps/HomePageStep");
const MarketPageStep = require("./Steps/MarketPageStep");
const SearchResultPageStep = require("./Steps/SearchResultPageStep");
const testData = require("./data/testData.json");
const newTestData = require("./data/newTestData.json");
const csTestData = require("./data/csTestData.json");
const testDataForBloodSeeker = require("./data/testDataBloodSeeker.json");



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

    testData.forEach(({ appId, hero, rarity }, index) => {
        it(`Test Case ${index + 1}: Advanced Search for ${hero} (${rarity})`, async function () {
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
            await marketPageStep.advancedSearchToInteractWithHeroAndRarity(appId, hero, rarity);
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnresult(0);
            await searchResultPageStep.itemIsDisplayed();
        });
    });

    csTestData.forEach(({ appId, weapon, exterior }, index) => {
        it(`Test Case ${index + 5}: Advanced Search for CS:GO (${weapon} - ${exterior})`, async function () {
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
            await marketPageStep.advancedSearchForCS2ToInteractWithWeaponAndExterior(appId, weapon, exterior);
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnresult(6);
            await searchResultPageStep.itemIsDisplayed();
            
        });
    });

    newTestData.forEach(({appId, hero, quality}, index) => {
        it(`Test Case ${index + 8}: Advanced Search for ${hero} (${quality})`, async function () {
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
            await marketPageStep.advancedSearchToInteractWithQualityandHero(appId, hero, quality);
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnresult(4);
            await searchResultPageStep.itemIsDisplayed();
        });
    });

    testDataForBloodSeeker.forEach(({appId, hero, rarity, quality}, index) => {
        it(`Test Case ${index + 11}: Advanced Search for ${hero} (${rarity} - ${quality})`, async function () {
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
            await marketPageStep.advancedSearchToInteractWithHeroRarityAndQuality(appId, hero, rarity, quality);
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnresult(3);
            await searchResultPageStep.itemIsDisplayed();
        });
    });
    
    after(async function () {
        await driver.quit();
    });
});

