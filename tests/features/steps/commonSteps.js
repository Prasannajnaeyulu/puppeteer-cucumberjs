const { Given, When } = require("cucumber");
const { url } = require( "../../environment");
const { getPage } = require("./hooks");
const { Menu } = require("../../pages/TopLevelMenus");
const App = require("../../pages/App.js")

Given('alice visits a disney world app', async () => {
    const page = getPage();
    await page.goto(url);
    const acceptAllBtn = await page.waitForSelector('#onetrust-accept-btn-handler', {visible: true});
    await acceptAllBtn.click();
    await page.screenshot({path: "test1.png"});
});

When('alice navigates to parks and tickets', async () => {
    await new App(getPage()).navigateTo(Menu.PARKS_AND_TICKETS);
});