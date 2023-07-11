const puppeteer = require("puppeteer");
const rand=require("lodash");
const func= require('../usefunction');
(async () => {
    const browser = await puppeteer.launch({
      defaultViewport: null,
      headless: false
    });
    const page = await browser.newPage();
    // await page.setViewport({
    //   width: options.width,
    //   height: options.height
    // });  
    await func.login(page);
    await makerules(page);
})(); 

async function makerules(page){
  await page.waitForTimeout(2000);
  let go= await page.waitForXPath(`//span[contains(text(),'Business Rule')]`)
  await go.click();
  await page.waitForTimeout(3000);
  go=await page.waitForXPath(`//span[contains(text(),'Create')]/..`);
  await go.click();
  await ruleform(page);
}
async function ruleform(page){
  await page.waitForTimeout(2000);
  let feilds=await page.waitForXPath(`//input[@id="ruleName"]`);
  await page.waitForTimeout(1000);
  await feilds.type('practice');
}