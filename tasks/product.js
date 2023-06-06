const puppeteer = require("puppeteer");
 
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
    login(page);
    let Product = await page.waitForXPath(`//li[@id="ul-menu2"]//span[contains(text(),"Product")]`);
    await Product.click();
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
  let governace = await page.waitForXPath(`//a[contains(text(),"Governance")]`);
  await governace.click();
  await page.waitForTimeout(1000);
  let approved = await page.waitForXPath(`//*[@id="pills-approved-tab" and contains(text(),'Approved')]`)
  // let approved = await page.waitForXPath(`/html/body/div/div[1]/div[3]/div[2]/div[1]/div/div/div/div[2]/div[2]/div/ul/li[2]/div`)
  console.log(approved);
  await approved.click();
  //span[@class='akc-simple-btn-text text-uppercase d-flex align-items-center justify-content-between']//span[contains(text(),'Master Initiator')]
}   
async function productlist(page){
  let master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
  await master.click(); 
}   
async function image(page){
}   
async function SKUmanagment(page){
}   
async function login (page)
{
  await page.waitForSelector('#username');
  await page.type('#username','testdemo@gmail.com',{delay:10});
  let goahead = await page.waitForXPath(`//button[contains(text(),"Continue")]`);
  // console.log(goahead);
  await goahead.click();
  await page.waitForSelector('#password');
  await page.type('#password','Root@123');
  goahead=await page.waitForXPath(`//div[@class='c79fd81e4']//button[contains(text(),"Continue")]`);
  await goahead.click();
}