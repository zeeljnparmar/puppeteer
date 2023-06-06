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
    login(page);
    await page.waitForTimeout(2000);
    let master = await page.waitForXPath(`//span[contains(text(),"Master")]`);
    await master.click();
    await page.waitForTimeout(2000);
    master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
    await master.click();  
    await page.waitForTimeout(2000);
    await add(page);    
})();   
async function login(page){
    await page.goto('https://uat-ui.vinreco.in/');
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
async function add (page)
{
  await page.waitForTimeout(2000)
  let addcategory = await page.waitForXPath(`//span[contains(text(),"Add Category")]`);
  await addcategory.click();
  await page.waitForTimeout(2000)
}