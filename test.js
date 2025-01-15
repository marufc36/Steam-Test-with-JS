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

    // Dynamically generate tests for testData
    testData.forEach(({ hero, rarity }, index) => {
        it(`Test Case ${index + 1}: Advanced Search for ${hero} (${rarity})`, async function () {
            // Step 1: Open Home Page and Verify Title
            await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");

            // Step 2: Navigate to Market
            await homePageStep.navigateToMarket();
            await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");

            // Step 3: Interact with Advanced Search
            await marketPageStep.advancedSearch(hero, rarity);

            // Step 4: Verify Search Results
            await searchResultPageStep.verifySearchResultsDisplayed();
            await searchResultPageStep.clickOnFirstItem();
            await searchResultPageStep.verifyGameName("Dota 2");
            await searchResultPageStep.verifyRarity(rarity);
        });
    });

    // Manually defined test cases
    it("Test Case 6: Advanced Search for Counter Strike 2", async function () {
        await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
        await homePageStep.navigateToMarket();
        await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
        await marketPageStep.advancedSearchForCS2();
        await searchResultPageStep.verifySearchResultsDisplayed();
    });

    it("Test Case 7: Advanced Search for Axe", async function () {
        await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
        await homePageStep.navigateToMarket();
        await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");
        await marketPageStep.advancedSearchForAxe();
        await searchResultPageStep.verifySearchResultsDisplayed();
        await searchResultPageStep.clickOnFourthItem();
        await searchResultPageStep.verifyGameName("Dota 2");
        await searchResultPageStep.verifyRarity("Standard");
    });

    it("Test Case 8: Advanced Search for Bloodseeker", async function () {
        await homePageStep.openHomePageAndVerifyTitle("Welcome to Steam");
        await homePageStep.navigateToMarket();
        await marketPageStep.verifyMarketPageTitle("Steam Community :: Steam Community Market");

        const bloodseekerData = newTestData.find(data => data.hero === "Bloodseeker" && data.rarity === "Common");
        await marketPageStep.advancedSearchedForBloodSeeker(bloodseekerData.hero, bloodseekerData.rarity);

        await searchResultPageStep.verifySearchResultsDisplayed();
        await searchResultPageStep.clickOnFirstItem();
        await searchResultPageStep.verifyGameName("Dota 2");
        await searchResultPageStep.verifyRarity(bloodseekerData.rarity);
    });

    after(async function () {
        await driver.quit();
    });
});

