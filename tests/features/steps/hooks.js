const {Before, After, AfterStep, setDefaultTimeout, Status} = require("cucumber");
const puppeteer = require("puppeteer");
const { product, headless, timeout } = require( "../../environment");

let browser, page;

setDefaultTimeout(timeout);

Before(async () => {
       console.log(`opening the browser with product ${product} ${headless} ${timeout}`);
       const browser = await puppeteer.launch({headless, product, timeout});
       const page = await browser.newPage();
       setBrowser(browser);
       setPage(page);
});

After(async () => {
    console.log("closing the browser");
    //await page.screenshot({path: "test.png"});
    browser.close();
 });

 AfterStep(async function ({result}){
      if(result.status == Status.FAILED){
         await page.screenshot({path: path.join('.','tests','screenshots', `test${Date.now}`)});
      } 
 });

setBrowser = (mybrowser) => {
      browser = mybrowser;
 }

setPage = (mypage) => {
    page = mypage;
};

getBrowser = () => {
    return browser;
}

getPage = () => {
    return page;
}

module.exports = { getBrowser, getPage };