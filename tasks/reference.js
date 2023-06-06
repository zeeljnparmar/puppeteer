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
    
    login(page);
    reference(page);

  
})();   
async function reference(page)
{
  //product > reference master
  await page.waitForTimeout(2000)
  let systemadmin = await page.waitForSelector('#ul-menu1 > a');
  await systemadmin.click();
  await page.waitForTimeout(2000)
  let userrole = await page.waitForXPath(`//*[@id="menu1"]/div/div/a[contains(text(),'Reference Master')]`);
  await userrole.click(); 


  // search master filter
  await page.waitForTimeout(1000)
  await page.waitForSelector('#code');
  await page.type('#code','color');

  await page.waitForTimeout(1000)
  
  // Add reference
  /*
  await page.waitForTimeout(2000)
  let addReference = await page.waitForSelector('#content > div div > div.card.p-2.simple-btn-border.mb-0.fill');
  await addReference.click();
  await page.waitForTimeout(2000)
  await page.waitForSelector('#masterEntityName');
  await page.waitForTimeout(1000)
  await page.type('#masterEntityName','height');
  await page.waitForTimeout(1000)
  await page.type('#attributeName','A');
  await page.waitForTimeout(1000)
  await page.type('#displayName','D');
  await page.waitForTimeout(2000)
  await page.type('#length','10',{delay:10});
  await page.waitForTimeout(1000)
  const f = await page.$('[name="type"]')
  await f.type("boolean")
  await page.waitForTimeout(1000)
  await page.click('#mandatory')
  await page.waitForTimeout(1000)
  await page.click('#editability')
  await page.waitForTimeout(1000)
  await page.click('#panel')
  await page.waitForTimeout(1000)
  await page.click('#search')
  await page.waitForTimeout(1000)
  await page.click('#addRefMaster div.modal-body.akc-model1 button > span')
  */

  //search reference master

  // await page.waitForTimeout(1000)
  // await page.waitForSelector('#master_entity_name');
  // await page.type('#master_entity_name','color');

  // await page.waitForTimeout(1000)
  // let selection = await page.$$('#content div  div form > div.d-flex.align-items-center  a > span')
  // console.log(selection);

  //select physical model
  // await selection[0].click();
  // await page.waitForTimeout(1000)
  // let button_model = await page.waitForXPath(`//input[@value='generatedButEdited']`)
  // await button_model.click()

  //select status mode

  // await page.waitForTimeout(1000)
  // await selection[1].click();
  // await page.waitForTimeout(1000) 
  // let button_status = await page.waitForXPath(`//input[@value="true"]`)
  // await button_status.click()

  // await page.click(`//input[@value='generatedButEdited']`)
  // await page.click(`//input[@value='generated']`)
  

  // switch button

  // let switch_button = await page.waitForSelector('span.slider.round');
  // await switch_button.click();


  // add attribute to reference master

  // await page.waitForTimeout(2000)
  // let reference_select = await page.waitForXPath('//*[@id="158"]/td/a/u')
  // await reference_select.click()
  // await page.waitForTimeout(1000)

  //attribute button select
  // await page.click('#pills-contact-tab')

  // await page.waitForTimeout(1000)
  // await page.click('#content div.col-12.mt-2 div.card.p-2.simple-btn-border.mb-0.fill > a > span')

  // await page.waitForTimeout(1000) 
  // await page.waitForSelector('#attributeName')
  // await page.type('#attributeName','country region')
  // await page.waitForTimeout(1000)
  // await page.type('#displayName','country region')
  // await page.waitForTimeout(1000)
  // await page.type('#length','100')
  // await page.waitForTimeout(1000)
  // let reference_attr_list = await page.$('#type')
  // await reference_attr_list.type('boolean')
  // await page.click('#mandatory')
  // await page.click('#editability')
  // await page.click('#panel')
  // await page.waitForTimeout(1000)
  // await page.click('#search')
  // await page.waitForTimeout(1000)
  // await page.click('#addAttribute div.col-md-12.mt-3 div.col-md-6.d-flex.justify-content-end.px-0.align-items-center span')
  
  //attribute status

  // await page.waitForTimeout(1000)
  // let attr_status = await page.waitForXPath('//*[@id="159"]//label/span')
  // await attr_status.click();

  //delete attribute

  // await page.waitForTimeout(1000)
  // let del_attr = await page.waitForSelector('#\31 55 a.ml-2 > svg')
  // await del_attr.click();

  //reference master -> country master

  //status

  // await page.waitForTimeout(1000)
  // let status_but = await page.waitForSelector('#content div.col-12.px-0 div.table-responsive tbody > tr label > span')
  // status_but.click()

  //ADD new country master

  // await page.waitForTimeout(1000)
  // await page.click('#content div.col-6.mb-4.pr-0 div.card.p-2.simple-btn-border.mb-0.fill > a > span')
  // await page.waitForTimeout(1000)
  // await page.type('#couintry_name_156','america')
  // await page.waitForTimeout(1000)
  // await page.type('#country_code_155','USA')
  // await page.waitForTimeout(1000)
  // await page.type('#country_region_159','north america')
  // await page.waitForTimeout(1000)

  // await page.click('#addMasterData div.col-md-12.d-flex.justify-content-end button > span')
  
}

//1
async function add_reference_master(page){
  await page.waitForTimeout(2000)
  let addReference = await page.waitForSelector('#content > div div > div.card.p-2.simple-btn-border.mb-0.fill');
  await addReference.click();
  await page.waitForTimeout(2000)
  await page.waitForSelector('#masterEntityName');
  await page.waitForTimeout(1000)
  await page.type('#masterEntityName','height');
  await page.waitForTimeout(1000)
  await page.type('#attributeName','A');
  await page.waitForTimeout(1000)
  await page.type('#displayName','D');
  await page.waitForTimeout(2000)
  await page.type('#length','10',{delay:10});
  await page.waitForTimeout(1000)
  const f = await page.$('[name="type"]')
  await f.type("boolean")
  await page.waitForTimeout(1000)
  await page.click('#mandatory')
  await page.waitForTimeout(1000)
  await page.click('#editability')
  await page.waitForTimeout(1000)
  await page.click('#panel')
  await page.waitForTimeout(1000)
  await page.click('#search')
  await page.waitForTimeout(1000)
  await page.click('#addRefMaster div.modal-body.akc-model1 button > span')
}
//2
async function switch_button(page){

  // switch button

  let switch_button = await page.waitForSelector('span.slider.round');
  await switch_button.click();
}
//3
async function search_reference(page){

  await page.waitForTimeout(1000)
  await page.waitForSelector('#master_entity_name');
  await page.type('#master_entity_name','color');

  await page.waitForTimeout(1000)
  let selection = await page.$$('#content div  div form > div.d-flex.align-items-center  a > span')
  console.log(selection);

  // select physical model
  await selection[0].click();
  await page.waitForTimeout(1000)
  let button_model = await page.waitForXPath(`//input[@value='generatedButEdited']`)
  await button_model.click()

  //select status mode
  await page.waitForTimeout(1000)
  await selection[1].click();
  await page.waitForTimeout(1000) 
  let button_status = await page.waitForXPath(`//input[@value="true"]`)
  await button_status.click()

  // await page.click(`//input[@value='generatedButEdited']`)
  // await page.click(`//input[@value='generated']`)
}
//4
async function select_reference(page){
  await page.waitForTimeout(2000)
  let reference_select = await page.waitForXPath('//*[@id="158"]/td/a/u')
  await reference_select.click()
  await page.waitForTimeout(1000)
} 
//5
async function add_attr_referencemaster(page) {

  // add attribute to reference master
  select_reference(page)
  // attribute button select
  await page.click('#pills-contact-tab')

  await page.waitForTimeout(1000)
  await page.click('#content div.col-12.mt-2 div.card.p-2.simple-btn-border.mb-0.fill > a > span')

  await page.waitForTimeout(1000) 
  await page.waitForSelector('#attributeName')
  await page.type('#attributeName','country region')
  await page.waitForTimeout(1000)
  await page.type('#displayName','country region')
  await page.waitForTimeout(1000)
  await page.type('#length','100')
  await page.waitForTimeout(1000)
  let reference_attr_list = await page.$('#type')
  await reference_attr_list.type('boolean')
  await page.click('#mandatory')
  await page.click('#editability')
  await page.click('#panel')
  await page.waitForTimeout(1000)
  await page.click('#search')
  await page.waitForTimeout(1000)
  await page.click('#addAttribute div.col-md-12.mt-3 div.col-md-6.d-flex.justify-content-end.px-0.align-items-center span')
}
//6
async function attr_status(page){

  select_reference(page)
  // attribute button select
  await page.click('#pills-contact-tab')

  await page.waitForTimeout(1000)
  let attr_status = await page.waitForXPath('//*[@id="159"]//label/span')
  await attr_status.click();

}
//7
async function delete_attribute(page){
  select_reference(page)
  // attribute button select
  await page.click('#pills-contact-tab')
  await page.waitForTimeout(1000)
  let del_attr = await page.waitForSelector('#\31 55 a.ml-2 > svg')
  await del_attr.click();

}
//8
async function add_new_master(page){

  select_reference(page)
  //ADD new country master

  await page.waitForTimeout(1000)
  await page.click('#content div.col-6.mb-4.pr-0 div.card.p-2.simple-btn-border.mb-0.fill > a > span')
  await page.waitForTimeout(1000)
  await page.type('#couintry_name_156','america')
  await page.waitForTimeout(1000)
  await page.type('#country_code_155','USA')
  await page.waitForTimeout(1000)
  await page.type('#country_region_159','north america')
  await page.waitForTimeout(1000)

  await page.click('#addMasterData div.col-md-12.d-flex.justify-content-end button > span')

}
async function pro_govern(page){
  // let product = await page.waitForSelector('#ul-menu2 > a > div > div.d-flex.align-items-center > span')
  // await product.click();

  // let governanace = await page.waitForXPath(`//*[@id="menu2"]/div/div/a[contains(text(),'Governance')]`)
  // await governanace.click();
  // let Product = await page.waitForXPath(`//li[@id="ul-menu2"]//span[contains(text(),"Product")]`);
  // await Product.click();
  // let governace = await page.waitForXPath(`//a[contains(text(),"Governance")]`);
  // await governace.click();
  // let approved = await page.waitForXPath(`//div[@href="#pills-approved" and contains(text(),"Approved")]`)
}
async function login(page){
  await page.goto('https://uat-ui.vinreco.in/');
  await page.waitForSelector('#username');
  await page.type('#username','testdemo@gmail.com',{delay:10});
  let goahead = await page.waitForXPath(`//button[contains(text(),"Continue")]`);
  await goahead.click();
  await page.waitForSelector('#password');
  await page.type('#password','Root@123');
  goahead=await page.waitForXPath(`//div[@class='c79fd81e4']//button[contains(text(),"Continue")]`);
  await goahead.click();
}