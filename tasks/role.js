// const puppeteer = require("puppeteer");
// (async () => {
//     const browser = await puppeteer.launch({
//       defaultViewport: null,
//       headless: false
//     });
//     const page = await browser.newPage();
//     await page.goto('https://uat-ui.vinreco.in/');
//     await page.waitForSelector('#username');
//     await page.type('#username','testdemo@gmail.com',{delay:10});
//     await page.click('.c79fd81e4 button');
//     await page.waitForSelector('#password');
//     await page.type('#password','Root@123');
//     await page.click('.c79fd81e4 button');
//     await page.waitForTimeout(3000);
//     let systemadmin = await page.waitForXPath(`//*[@id="ul-menu8"]/a/div/div[1]/span`);
//     await systemadmin.click();
//     await page.waitForTimeout(2000);
//     let um =  await page.waitForSelector('#menu8 > div.card.p-3.border-0.akc-menu-hover-card > div:nth-child(3) > a')
// await page.waitForTimeout(1500);
// await um.click();
// await page.waitForTimeout(3500);
// let c = await page.waitForXPath(`//u[contains(text(),'chailcy')]/..`);
// await c.click();
// await page.waitForTimeout(3500);
// })();
const puppeteer = require("puppeteer");
const func= require('../usefunction');
const { statSync } = require("fs");
// (async () => {
//     const browser = await puppeteer.launch({
//       defaultViewport: null,
//       headless: false
//     });
//     const page = await browser.newPage();
//     func.login(page)
//     await page.waitForTimeout(3000);
//     let systemadmin = await page.waitForXPath(`//*[@id="ul-menu8"]/a/div/div[1]/span`);
//     await systemadmin.click();
//     await page.waitForTimeout(2000);
//     let um =  await page.waitForSelector('#menu8 > div.card.p-3.border-0.akc-menu-hover-card > div:nth-child(3) > a')
// await page.waitForTimeout(1500);
// await um.click();
// await page.waitForTimeout(3500);
// let c = await page.waitForXPath(`//u[contains(text(),'chailcy')]/..`);
// await c.click();
// await page.waitForTimeout(2000);
// let roles = await page.waitForXPath(`//a[@href="/pim/system-admin/user-management/details?id=auth0|647464739348e69c6ccb430a"]`);
// console.log('hi');
// await roles.click();
// })();

async function assignrole(page){
  await page.waitForTimeout(2000);
  let system=await page.waitForXPath(`//span[contains(text(),"System Admin")]`);
  await system.click();
  await page.waitForTimeout(1000);
  system= await page.waitForXPath(`//a[contains(text(),'Role Management')]`);
  await system.click();

}
async function assignuser(page){
  await page.waitForTimeout(4000);
  let system= await page.waitForXPath(`//u[contains(text(),'DemoAdmin')]/..`);
  await system.click();
  await page.waitForTimeout(3000);
  system = await page.waitForXPath(`//div[contains(text(),'Category')]/..`);
  system.click();
  await page.waitForTimeout(2000);
  system=await page.waitForXPath(`//span[contains(text(),'Assign Category')]/..`)
  await system.click();
  await page.waitForTimeout(3000);
  system=await page.$x(`//td[contains(text(),'Zeel')]//..//input`);
  console.log(system);
  for(let i=0;i<system.length;i++){
    await system[i].click();
  }
  await page.waitForTimeout(2000);
  system=await page.waitForXPath(`//div[@id='assignCategory']//span[contains(text(),'Assign')]/..`)
  await system.click();
}
async function materapproval(page){
  await page.waitForTimeout(4000);
  let system= await page.waitForXPath(`//u[contains(text(),'DemoAdmin')]/..`);
  await system.click();
  await page.waitForTimeout(3000);
  system = await page.waitForXPath(`//div[contains(text(),'Category')]/..`);
  system.click();
  await page.waitForTimeout(2000);
  system=await page.waitForXPath(`//li[contains(text(),'Master Approver')]`);
  system.click();
  await page.waitForTimeout(2000);
  system=await page.waitForXPath(`//span[contains(text(),'Assign Category')]/..`)
  await system.click();
  await page.waitForTimeout(3000);
  system=await page.$x(`//td[contains(text(),'Zeel')]//..//input`);
  console.log(system);
  for(let i=0;i<system.length;i++){
    await system[i].click();
  }
  await page.waitForTimeout(2000);
  system=await page.waitForXPath(`//div[@id='assignCategory']//span[contains(text(),'Assign')]/..`)
  await system.click();
}
module.exports={
  assignrole,assignuser,materapproval
}