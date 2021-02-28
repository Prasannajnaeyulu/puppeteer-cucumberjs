const BasePageObject = require("./BasePage.js");

let ThemeParksList = '//dd[following-sibling::dt[text()="Water Parks"] and preceding-sibling::dt[text()="Theme Parks"]]';
let WaterParksList = '//dt[text()="Water Parks"]/following-sibling::dd[@class!="extra"]';

class App extends BasePageObject {
    constructor(page){
        super(page);
        this.page = page;
    }

    async navigateTo(menu) {
        console.log(`menu: ${menu.toString()}`);
        const menutitle = menu.toString();
        console.log(`menutitle: ${menutitle}`);
        const selector = `//a[text()='${menutitle}']`;
        const element = await this.page.waitForXPath(selector);
        await super.hoveronElement(element);
    }

    async getThemeParksListed(){
        const actualThemeParks = await super.getTextOfAllElements(ThemeParksList);
        console.log(`actual theme parks: ${actualThemeParks}`);
        return actualThemeParks;
    }

    async getWaterParksListed(){
        const actualWaterParks = await super.getTextOfAllElements(WaterParksList);
        console.log(`actual Water parks: ${actualWaterParks}`);
        return actualWaterParks;
    }
}

module.exports = App;