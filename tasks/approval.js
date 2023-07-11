const puppeteer = require("puppeteer");
const rand=require("lodash");
const workflow=require('./workflow');
const func= require('../usefunction');
const catt=require('./category'); 
const data=require('../logs/category.json');
const Sibling= require('./addsibling');
const admin = require('./role');
const { configureScope } = require("@sentry/node");

(async () => {
    const browser = await puppeteer.launch({
      defaultViewport: null,
      headless: false
    });
    const page = await browser.newPage(); 
    await func.login(page);
    await page.waitForTimeout(2000);
    await func.backtomaster(page);
    const elements = await page.$x(`//span[normalize-space()='${data.category[0].name}']`);
     if (elements.length > 0) {
      console.log("already exist");
      let trouble=await page.waitForXPath(`//span[normalize-space()='${data.category[0].name}']/..//a`);
      await trouble.hover();
      trouble=await page.waitForXPath(`//span[normalize-space()='${data.category[0].name}']/..//a//span[contains(text(),'Delete')]`)
      await trouble.click();
      await page.waitForTimeout(1000);
      trouble=await page.waitForXPath(`//span[contains(text(),'Yes')]`);
      await trouble.click();
      await page.reload();
      await catt.add(page,0);
     }else{
      await catt.add(page,0);
     }
    
    let values='Add Level';
    const id=await workflow.setting(page,values);
    for(let i=1;i<=2;i++){
      console.log('approval',i);
      await Sibling.addlevel(page,i);
      if(i===2){
        break;
      }
      mouse= await page.waitForXPath(`//div[contains(@id,'${id}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
      await mouse.hover();
      await page.waitForTimeout(2000);
      mouse= await page.waitForXPath(`//div[@id='${id }']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'${values}')]`);
      await mouse.click();
    }
    let system=await page.waitForXPath(`//span[contains(text(),"System Admin")]`);
    await system.click();
    await page.waitForTimeout(1000);
    system= await page.waitForXPath(`//a[contains(text(),'User Management')]`);
    await system.click();
    await page.waitForTimeout(2000);
    await admin.assignuser(page);
    await admin.materapproval(page);
    await approving(page);
})  
();
async function approving(page){
  await page.waitForTimeout(2000);
  let permision=await page.waitForXPath(`//span[contains(text(),'Workflow')]`);
  await permision.click();
  await page.waitForTimeout(3000);
  permision= await page.waitForXPath(`//div[@class="collapsed d-flex justify-content-between align-items-center category-accordion "]//span[contains(text(),'${data.category[0].name}')]`);
  await permision.click();
  await page.waitForTimeout(2000);
  permision= await page.waitForXPath(`//div[@class="collapsed d-flex justify-content-between align-items-center category-accordion "]//span[contains(text(),'${data.category[1].name}')]`);
  await permision.click();
  await page.waitForTimeout(2000);
  permision=await page.waitForXPath(`//span[contains(text(),'Save as Draft')]`);
  await permision.click();
}