const puppeteer = require("puppeteer");
const func= require('../usefunction');
const rand=require("lodash");
const data= require('../logs/category.json');
//const rand=require('lodash');
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
    console.log('inside product main')
    Governance(page);
    //productlist(page);
    //image(page);
    //SKUmanagment(page);
    //add(page);
    await page.waitForTimeout(1000);
    // let data = await page.waitForXPath(`//div[contains(@id,'1489')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
    // await data.hover();
    // let sibling= await page.waitForXPath(`//div[contains(@id,'1489')]//div[contains(@class,'d-flex dropdown-button px-2')]//div//a//span[contains(text(),'Add Sibling')]`);
    // await sibling.click();

    // let abc= await page.waitForXPath(`//div[@class="card input-category_name business-rule p-2 mt-1"]/div/input`);
    // console.log(abc);
    //await page.hover('#\31 486 > span:nth-child(2) > div > a > svg');
    //await savecategory.click();
    
})();
async function Governance(page){
  console.log('inside governance')
  await page.waitForTimeout(2000);
  let Product = await page.waitForXPath(`//li[@id="ul-menu2"]//span[contains(text(),"Product")]`);
  await Product.click();
  console.log('entering governace');
  let governace = await page.waitForXPath(`//a[contains(text(),"Governance")]`);
  await governace.click();
  await page.waitForTimeout(3000);
  governace=await page.waitForXPath(`//div[contains(text(),'Draft')]`);
  await governace.click();
  console.log('clicking on Draft');
  await page.waitForTimeout(2000);
  governace=await page.waitForXPath(`//span[contains(text(),'Create')]/..`)
  await governace.click();
  console.log('Create Click');
  await page.waitForTimeout(2000);
  //await page.waitForSelector('#category_id');
  governace= await page.waitForXPath(`//input[@id='category_id']/../div[1]`);
  await governace.click();
  await page.waitForTimeout(1000);
  let n=await page.$x(`//div[@class='col-md-12']`);
  console.log(n.length)
  let i=rand.random(1,n.length-1);
  console.log(i)
  await page.waitForTimeout(100)
  governace=await page.waitForXPath(`//div[@class='col-md-12'][${i}]//b`);
  console.log(governace);
  await governace.click();
  await page.waitForTimeout(2000);
  await page.waitForSelector('#normal');
  await page.click('#normal');
  await page.waitForTimeout(1000);
  await page.waitForSelector('#FormikCreateNewProduct');
  await page.click('#FormikCreateNewProduct');
  // let approved = await page.waitForXPath(`//*[@id="pills-approved-tab" and contains(text(),'Approved')]`)
  // // let approved = await page.waitForXPath(`/html/body/div/div[1]/div[3]/div[2]/div[1]/div/div/div/div[2]/div[2]/div/ul/li[2]/div`)
  // console.log(approved);
  // await approved.click();
  //span[@class='akc-simple-btn-text text-uppercase d-flex align-items-center justify-content-between']//span[contains(text(),'Master Initiator')]
}   
async function productlist(page){
  let master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
  await master.click(); 
}   
async function static(page){
  await page.waitForSelector('#category_id');
  console.log(data.category[0].field[1].sub);
  await page.type('#category_id',data.category[0].field[1].sub,{delay:20});
  await page.waitForTimeout(2000);
  governace= await page.waitForXPath(`//b[contains(text(),'${data.category[0].field[1].sub}')]`)
  console.log(governace);
  await governace.click();
  await page.waitForTimeout(2000);
  await page.waitForSelector('#normal');
  await page.click('#normal');
  await page.waitForTimeout(1000);
  await page.waitForSelector('#FormikCreateNewProduct');
  await page.click('#FormikCreateNewProduct');
  await productform(page);
}   

async function SKUmanagment(page){
} 
async function productform(page){
    await page.waitForTimeout(3000);
    // await page.waitForSelector('#');
    // await page.type('#',)
    let form=await page.waitForXPath(`//*[@id="accordion-136"]/td[2]/div/div/div/div/span`);
    await form.click();
    form=await page.waitForXPath(`//input[@id="searchText"]/../../..//a`);
    await form.click();
    form=await page.$x(`//input[@type="checkbox"]`);
    console.log(form.length);
}
