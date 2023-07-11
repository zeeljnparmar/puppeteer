const puppeteer = require("puppeteer");
const func= require('../usefunction')
const rand = require('lodash');
const fs = require("fs");
const maphierarchy=require('./managehierarchy');
const file='../logs/category.json';
const testcase=require('../logs/category.json');

// (async () => {
//   const browser = await puppeteer.launch({
//     defaultViewport: null,
//     headless: false
//   });

//   const page = await browser.newPage();
//   let n = testcase.category.length;
//   console.log(n);
//   await func.login(page);
//   await func.backtomaster(page);
//   for(let i=0;i<n;i++){
//     await add(page,i);
//   await page.reload();
//   }
//   await addexisting(page);
//   await page.reload();
//   await maphierarchy.hierarchy(page);
// })();

// async function setting(page){
//   let mouse =''; 
//   //await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
//   // await mouse.click(); 
//   //add(page);
//   await page.waitForTimeout(2000);
//   const divsWithNumericId = await page.$x(`//div[@id and string-length(@id) = 4 and number(@id) = floor(@id)]`);
//   for (const div of divsWithNumericId) {
//     const divId = await div.evaluate((el) => el.getAttribute('id'));
//     // mouse = await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
//     // await mouse.hover();
//     await page.waitForTimeout(1000);
//     const elements = await page.$x(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'Attributes')]`);
//     console.log(elements)
//     if (elements.length > 0) {
//       console.log('found it')
//       mouse= await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
//       await mouse.hover();
//       await page.waitForTimeout(2000);
//       mouse= await page.waitForXPath(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'Attributes')]`);
//       await mouse.click();
//       newattribute(page);
//       break;
//     } else {
//       console.log('XPath does not exist on the page');
//     }
//     console.log(divId);
//   }
//   // Find elements that match the XPath expression
   
// }
  async function add (page,i)
{
    await page.waitForTimeout(2000)
    let addcategory = await page.waitForXPath(`//span[contains(text(),"Add Category")]`);
    await addcategory.click();
    await page.waitForTimeout(2000)
    //await page.waitForSelector('#add-category-popupTitle');
    let newcategroty=await page.waitForXPath(`//a[contains(@class,'text-uppercase')]`);
    await newcategroty.click();
    await page.waitForTimeout(2000);
    let data = await page.$x(`//h5[contains(text(),'Create New Category')]/../..//input[@id="category_name"]`);
    await data[0].type(testcase.category[i].name);
    //let save=await page.$x(`//a[contains(@class,'mx-3')]/span[contains(text(),'Save')]`);
    await page.waitForSelector(`#createNewCategory > div > div > div.modal-body.akc-model1.pt-0.pb-0 > div > div.col-md-12.mt-3 > div > div.col-6.text-right.d-flex.justify-content-end > div > a > span`);
    await page.click('#createNewCategory > div > div > div.modal-body.akc-model1.pt-0.pb-0 > div > div.col-md-12.mt-3 > div > div.col-6.text-right.d-flex.justify-content-end > div > a');
    await page.waitForTimeout(3000);
    const elements = await page.$x(`//span[normalize-space()='${testcase.category[i].name}']`);
     if (elements.length > 0) {
      console.log("added");
     }

}

//div[@id='rightAccordion100']//tr[@id='1067']//td[@class='akc-active-table']//a[2]
async function addexisting(page){
  await page.waitForTimeout(2000)
  let addcategory = await page.waitForXPath(`//span[contains(text(),"Add Category")]`);
  await addcategory.click();
  await page.waitForTimeout(2000)
  //await page.waitForSelector('#add-category-popupTitle');
  const checkid= await page.$x(`//*[@id="toggleAccordion left-defaults"]//div/section//input[@type='checkbox' and @value]`);
  const c= await checkid.length;
  let i=0,n=0;
  for(let i=0;i<2;i++){
    n = rand.random(0,c);
    const divId = await checkid[n].evaluate((x)=>x.getAttribute('value'));
    console.log("==>",divId);
    let select_cat = await page.waitForXPath(`//*[@id="toggleAccordion left-defaults"]//div/section//input[@value=${divId}]`)
    await select_cat.click()
    await page.waitForTimeout(1000)
  }
  addcategory= await page.waitForXPath(`//*[@id="add-category-popup"]/div/div/div[2]/div/div[4]/div/a/span`);
  await addcategory.click();
}
module.exports={
  add,addexisting
}