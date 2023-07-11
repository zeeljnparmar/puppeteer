const puppeteer = require("puppeteer");
const rand=require("lodash");
const func= require('../usefunction');
let calling='';
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
    await func.setting(page,'Attributes');
    await page.waitForTimeout(1000);
    //await newattribute(page);
    await editted(page);
    //await mapattribute(page);
    //await deleteatt(page);
})();  
async function newattribute(page){
  await page.waitForTimeout(2000);
  let data= await page.waitForXPath(`//span[contains(text(),'Add New Attribute Group')]/..`);
  await data.click();
  await page.waitForXPath(`//h5[contains(text(),"Add New Attribute Group")]`);
  calling='new';
  await func.formfill(page,0);
} 
async function editted(page){
  await page.waitForTimeout(2000);
  let point=await page.waitForXPath(`//div[@id='rightAccordion100']//tr[@id='1067']//td[@class='akc-active-table']//a[1]`)
  await point.click();
  calling='eddit';
  func.editform(page,1);
}
async function mapattribute(page){
  await page.waitForTimeout(2000)
  let addcategory = await page.waitForXPath(`//*[@id="1067"]/td[10]/a[2]`);
  await addcategory.click();
  await page.waitForTimeout(2000);
  //let point='';
  // await page.waitForXPath(`//div[@id='rightAccordion100']//tr[@id='1067']//td[@class='akc-active-table']//a[2]`)
  // await point.click();
  // await page.waitForTimeout(2000);
  //  point = await page.$x(`//div[@class='akc-content-accordation-inner']//input[@type='checkbox' and @value='1913']`);
  // await point[0].click();
  const checkid= await page.$x(`//div[@class='akc-content-accordation-inner']//input[@type='checkbox' and @value]`);
  const c= await checkid.length;
  let i=0,n=0;
  for(i=0;i<2;i++){
    n = rand.random(0,c);
    const divId = await checkid[n].evaluate((x)=>x.getAttribute('value')) ;
    console.log("==>",divId);
    let select_cat = await page.waitForXPath(`//*[@id="toggleAccordion left-defaults"]//div/section//input[@value=${divId}]`)
    await select_cat.click()
    await page.waitForTimeout(1000)
  } 
  i=await page.waitForSelector(`#add-category-popup > div > div > div.modal-body.akc-modal-body > div > div.col-md-12.d-flex.justify-content-end.mt-3 > div > a > span`);
  await i.click();
  console.log(i);
}
async function deleteatt(page){
  await page.waitForTimeout(1000);
  let deletevalue = await page.waitForXPath(`//*[@id="1067"]/td[10]/a[3]`);
  await deletevalue.click();
  await page.waitForTimeout(1000);
  deletevalue= await page.waitForXPath(`//span[contains(text(),"Delete")]/..`);
  await deletevalue.click();
}