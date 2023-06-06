const puppeteer = require("puppeteer");
const rand=require("lodash");
const func= require('../usefunction');
const validation='CDPElementHandle { handle: CDPJSHandle {} }';
 
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
    func.login(page);
    await page.waitForTimeout(2000);
    let master = await page.waitForXPath(`//span[contains(text(),"Master")]`);
    await master.click();
    await page.waitForTimeout(2000);
    master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
    await master.click();  
    await page.waitForTimeout(3000);
    let values='Add Sibling'
    //Add Level
    //Clear All Levels
    //Delete
    //Deactivate
    //Attributes
    await func.setting(page,values);
    //await addsibling(page); 
    //await addlevel(page); 
    //await clearAllLevel(page); 
    //await delete4(page); 
    //await deactive(page); 

})();   
async function addsibling(page){
    await page.waitForTimeout(2000);
    await page.waitForXPath(`//*[@id="category_name"]`);
    let data = await page.$x(`//*[@id="category_name"]`);
    await data[0].type('newAddedSibling');
    let saveBtn = await page.waitForXPath(`//*[@id="AddSiblingOrLevel"]/div/div/form/div/div/div[2]/div/div[2]/div/a/span`);
    await saveBtn.click();
}
  async function clearAllLevel(page){
    await page.waitForTimeout(2000);
    let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
    await yesBtn.click();
  }
  async function delete4(page){
    await page.waitForTimeout(2000);
    let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
    console.log(7);
    await yesBtn.click();
  }
  async function deactive(page){
    await page.waitForTimeout(2000);
    let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
    console.log(7);
    await yesBtn.click();
  }
  async function addlevel(page){
    await page.waitForTimeout(2000);
    await page.waitForXPath(`//*[@id="category_name"]`);
    let data = await page.$x(`//*[@id="category_name"]`);
    await data[0].type('newAddedLevel');
    let saveBtn = await page.waitForXPath(`//*[@id="AddSiblingOrLevel"]/div/div/form/div/div/div[2]/div/div[2]/div`);
    await saveBtn.click();
  }
  