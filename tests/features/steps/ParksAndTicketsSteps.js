const { Then } = require("cucumber");
const { getPage } = require("./hooks");
const App = require("../../pages/App.js");
const {assert} = require("chai");

Then('alice should see the following theme parks', async (dataTable) => {
    const expectedThemeParks = dataTable.rawTable.map((a) => a[0]);
    console.log(`expected theme parks: ${expectedThemeParks}`);
    const homePage = new App(getPage());
    const actualThemeParks = await homePage.getThemeParksListed();
    assert.deepEqual(actualThemeParks, expectedThemeParks, "Expected and actual theme parks should be equal");

});

Then('alice should see the following water parks', async (dataTable) => {
    const expectedWaterParks = dataTable.rawTable.map((a) => a[0]);
    const actualWaterParks = await new App(getPage()).getWaterParksListed();
    assert.deepEqual(actualWaterParks, expectedWaterParks, "Expected and actual water parks should be equal");
});