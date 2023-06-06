const puppeteer = require("puppeteer");
const rand=require("lodash");
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
    await page.goto('https://uat-ui.vinreco.in/');
    await page.waitForSelector('#username');
    await page.type('#username','testdemo@gmail.com',{delay:10});
    // await page.waitForSelector('.c7f45701e button');
    // await page.click('.c7f45701e button');
    let Btn1 = await page.waitForXPath('/html/body/div/main/section/div/div[2]/div/div[1]/div/form/div[2]/button');
    Btn1.click();
    await page.waitForSelector('#password');
    await page.type('#password','Root@123');
    let Btn2 = await page.waitForXPath('/html/body/div/main/section/div/div/div/form/div[3]/button');
    Btn2.click();
    console.log(1);
    await page.waitForSelector('#ul-menu1 .akc-menu-text');
    console.log(2);
    await page.click('#ul-menu1 .akc-menu-text');
    console.log(3);
    await page.waitForSelector('#menu1 .akc-menu-hover-card-text');
    let productmaster = await page.$$('#menu1 .akc-menu-hover-card-text');
    console.log(4);
    await productmaster[0].click();
    let dot3 = await page.waitForSelector('div span div a svg ellipse');
    console.log(5);
    await dot3.hover();
    // addcategory(page);
    // addsibling(page);
    // addlevel(page);
    // clearAllLevel(page);
    // delete4(page);
    // deactive(page);
})();
// div span div a svg ellipse
async function addcategory (page)
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
async function addsibling(page){
  await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let list = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await list[0].click();
  await page.waitForTimeout(2000);
  await page.waitForXPath(`//*[@id="category_name"]`);
  let data = await page.$x(`//*[@id="category_name"]`);
  await data[0].type('newAddedSibling');
  let saveBtn = await page.waitForXPath(`//*[@id="AddSiblingOrLevel"]/div/div/form/div/div/div[2]/div/div[2]/div/a/span`);
  console.log(7);
  await saveBtn.click();
}
async function addlevel(page){
  await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let list = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await list[1].click();
  await page.waitForTimeout(2000);
  await page.waitForXPath(`//*[@id="category_name"]`);
  let data = await page.$x(`//*[@id="category_name"]`);
  await data[0].type('newAddedLevel');
  let saveBtn = await page.waitForXPath(`//*[@id="AddSiblingOrLevel"]/div/div/form/div/div/div[2]/div/div[2]/div`);
  console.log(7);
  await saveBtn.click();
}
async function clearAllLevel(page){
  await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let list = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await list[2].click();
  let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
  console.log(7);
  await yesBtn.click();
}
async function delete4(page){
  let clear = await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let productmaster = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await productmaster[3].click();
  let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
  console.log(7);
  await yesBtn.click();
}
async function deactive(page){
  let clear = await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let productmaster = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await productmaster[4].click();
  let yesBtn = await page.waitForXPath(`//*[@id="deleteModalLong"]/div/div/div[3]/div[1]/a/span`);
  console.log(7);
  await yesBtn.click();
}
async function addAttribute(page){
  let addAttr = await page.waitForSelector(`span .dropdown-button .dropdown-item`);
  let productmaster = await page.$$('span .dropdown-button .dropdown-item');
  console.log(6);
  await productmaster[2].click();
}