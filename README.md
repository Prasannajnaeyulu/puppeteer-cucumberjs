# puppeteer-cucumberjs
Puppeteer cucumber js POC to demonstrate how puppeteer and cucumber-js are integrated
to run the E2E tests of a web application

#### Prerequisite
    - We need node version >= 10 to run these tests
#### How to Run
- npm install
- npm test

#### How it is Structured
####### Step#1: app url, browser and its options in environment.js file
    environment.js file has the constants to read url, browser and its options
    user has to specify these in this file
    timeout is currently set to 1min (60000 millisecs) to cater slow webpages or slow internet

####### Step#2: Create object of puppeter browser and page
   For every scenario runs independently hence for each scenario we've a different 
   browser and page objects. So using cucumber-js before and after hooks to instantiate
   these objects and share them across steps of whole scenario

####### Step#3: Page classes
    - App.js is the Homepage of the application
    - likewise, for every child page we create page class under tests/pages folder
    - BasePage is the common page class with all the functions commonly required for every page class

####### Step#4: Screenshots
    - If any step fails we take a screenshot and is available under tests/screenshots folder

#### Reports:
    - Report in JSON format will generate under tests/report/
    To generate html report, just run
    ```shell
        npm run test-results-report
    ```
    This will generate html report under tests/report/ folder