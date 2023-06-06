const puppeteer = require("puppeteer");
const rand=require("lodash");
const login= require('../usefunction');
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
    login.login(page);
    await page.waitForTimeout(2000);
    let master = await page.waitForXPath(`//span[contains(text(),"Master")]`);
    await master.click();
    await page.waitForTimeout(2000);
    master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
    await master.click();  
    await page.waitForTimeout(3000);
    //addexistingcategory(page)
    //add(page)
})();   
 
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
  async function add (page)
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
    await data[0].type('kitchen');
    //let save=await page.$x(`//a[contains(@class,'mx-3')]/span[contains(text(),'Save')]`);
    await page.waitForSelector(`#createNewCategory > div > div > div.modal-body.akc-model1.pt-0.pb-0 > div > div.col-md-12.mt-3 > div > div.col-6.text-right.d-flex.justify-content-end > div > a > span`);
    await page.click('#createNewCategory > div > div > div.modal-body.akc-model1.pt-0.pb-0 > div > div.col-md-12.mt-3 > div > div.col-6.text-right.d-flex.justify-content-end > div > a');

}

//div[@id='rightAccordion100']//tr[@id='1067']//td[@class='akc-active-table']//a[2]
