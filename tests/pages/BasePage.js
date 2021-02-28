const { promises } = require('fs');
const path = require('path');

class BasePageObject {

    constructor(page){
        this.page = page
    }

    async navigate(url){
        await this.page.goto(url)
    }

    async getTextOfAllElements(xpathselector){
        const allElements = await this.page.$x(xpathselector);
        // To execute in Parallel
        const actualArrayOfText = await Promise.all(allElements.map(async (element) => {
            return await this.getText(element);
        }));
        
        // To execute in sequence
        // for(const element of allElements){
        //     const text = await this.getText(element);
        //     console.log(`actual text: ${text}`);
        //     actualArrayOfText.push(text);
        // }
        return actualArrayOfText;
    }

    async getText(element){
        const text = await this.page.evaluate(e => { return Promise.resolve(e.textContent) },
         element);
        return text;
    }

    async takeScreenshot(){
        await this.page.screenshot({path: path.join('.','tests','screenshots', `test${Date.now}`)});
    }
    
    async hoveronElement(element){
        await element.hover();
    }
};

module.exports = BasePageObject;