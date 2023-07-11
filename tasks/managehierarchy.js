const puppeteer = require("puppeteer");
const rand=require("lodash");
const login= require('../usefunction'); 
 
// (async () => {
//     const browser = await puppeteer.launch({
//       defaultViewport: null,
//       headless: false
//     });
//     const page = await browser.newPage();
//     // await page.setViewport({
//     //   width: options.width,
//     //   height: options.height
//     // });  
//     login.login(page);
//     await page.waitForTimeout(2000);
//     let master = await page.waitForXPath(`//span[contains(text(),"Master")]`);
//     await master.click();
//     await page.waitForTimeout(2000);
//     master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
//     await master.click();  
//     await page.waitForTimeout(3000);
//     hierarchy(page);
// })(); 
async function hierarchy(page){
  let mouse=await page.waitForXPath(`//span[contains(text(),'Manage Hierarchy')]/..`);
  await mouse.click();
  let i = rand.random(3,8);
  await page.waitForTimeout(1000);
  mouse=await page.waitForSelector(`#select-level-${i}`);
  console.log(`select-level-${i}`);
  await mouse.click();
  await page.waitForTimeout(2000);
  mouse= await page.waitForXPath(`//textarea`);
  await mouse.type("this is descriotion are to type in");
  await page.waitForTimeout(2000);
  mouse= await page.waitForXPath(`/html/body/div[1]/div[1]/div[3]/div[2]/div[5]/div/div/div[2]/form/div/div[2]/div/div/div/a/span`);
  await mouse.click();
}
module.exports={
  hierarchy
}