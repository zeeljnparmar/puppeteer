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
    await page.waitForSelector('#username');
    await page.type('#username','testdemo@gmail.com',{delay:10});
    await page.click('.c7f45701e button');
    await page.waitForSelector('#password');
    await page.type('#password','Root@123');
    await page.click('.c7f45701e button');
    await page.waitForSelector('.alt-menu');
    let systemadmin = await page.waitForXPath(`//span[contains(text(),"System Admin")]`);
    await systemadmin.click();
    let userrole = await page.waitForXPath(`//a[contains(text(),"User Management")]`);
    await userrole.click();
    await page.waitForSelector(`//b[contains(text(),'User Details')`);
    let newuser = await page.waitForXPath(`//span[contains(text(),"Add New User")]`);
    await newuser.click();
    await page.waitForSelector('#pills-home-tab');
    await page.type('#user_name','zeel parmar');
    await page.type('#first_name','zeel');
    await page.type('#last_name','parmar');
    await page.type('#email','zeeljnparmar@gmail.com');
    await page.click('.button-div button');
})();   
  
