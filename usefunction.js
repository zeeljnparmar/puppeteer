async function login(page){
    await page.goto('https://uat-ui.vinreco.in/');
      await page.waitForSelector('#username');
      await page.type('#username','testdemo@gmail.com',{delay:10});
      let goahead = await page.waitForXPath(`//button[contains(text(),"Continue")]`);
      // console.log(goahead);
      await goahead.click();
      await page.waitForSelector('#password');
      await page.type('#password','Root@123');
      await page.waitForTimeout(2000);
      goahead=await page.waitForXPath(`//div[@class='c813b1bdc']//button[contains(text(),"Continue")]`);
      await goahead.click();
  }
  async function setting(page,values){
    let mouse =''; 
    //await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
    // await mouse.click(); 
    //add(page);
    await page.waitForTimeout(2000);
    const divsWithNumericId = await page.$x(`//div[@id and string-length(@id) = 4 and number(@id) = floor(@id)]`);
    for (const div of divsWithNumericId) {
      const divId = await div.evaluate((el) => el.getAttribute('id'));
      // mouse = await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
      // await mouse.hover();
      await page.waitForTimeout(1000);
      const elements = await page.$x(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'${values}')]`);
      console.log(elements)
      if (elements.length > 0) {
        console.log('found it')
        mouse= await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
        await mouse.hover();
        await page.waitForTimeout(2000);
        mouse= await page.waitForXPath(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'${values}')]`);
        await mouse.click();
        break;
      } else {
        console.log('XPath does not exist on the page');
      }
      console.log(divId);
    }
    // Find elements that match the XPath expression
     
  }
async function formfill(page)
  {
    await page.waitForTimeout(2000);
    await page.waitForSelector('#attributeGroupName');//not working
    await page.type('#attributeGroupName','testattribute',{delay:10});//not working
    await page.waitForTimeout(2000);
    await page.waitForSelector('#attributeName');//not working
    await page.type('#attributeName','kitchenattribute',{delay:10});//not working
    await page.waitForTimeout(2000);
    await page.waitForSelector('#displayName');//working
    await page.type('#displayName','KitchenAT',{delay:10});//working
    await page.waitForTimeout(2000);
    await page.waitForSelector('#length');//working
    await page.type('#length','100',{delay:10});//working
    await page.waitForTimeout(2000);
    let radio = await page.$x(`//*[@id="constraint"]`);
    const i = rand.random(0,1);
    console.log(i);
    await radio[i].click();
    if(i===1){
      await page.waitForTimeout(2000);
      // await page.click('#referenceMaster');
      let reference=await page.$(`[name='referenceMaster']`)
      await reference.type('color master')
      await page.waitForTimeout(2000);
      // await page.click('#referenceAttribute');
      let referenceattribut=await page.$(`[name='referenceAttribute']`)
      await referenceattribut.type('color')
    }
    await page.waitForTimeout(1000);
    let field=await page.$(`[name='type']`)
    await field.type('Numeric');
    await page.waitForTimeout(1000);
    let fieldtype=await page.$(`[name='dataType']`)
    await fieldtype.type('Int');  
    await page.waitForTimeout(1000);
    let mandoatory=await page.waitForXPath(`//*[@id="mandatory"]`);
    await mandoatory.click();
    await page.waitForTimeout(1000);
    let edit=await page.waitForXPath(`//*[@id="editability"]`);
    await edit.click();
    let def=await page.waitForXPath(`//*[@id="default"]`);
    await def.click();
    await page.waitForTimeout(1000);
    let putin= await page.waitForXPath(`//input[@placeholder="Enter Value" and @id]`);
    await putin.type('10');
    await page.waitForTimeout(1000);
    let panel=await page.waitForXPath(`//*[@id="panel"]`);
    await panel.click();
    // await page.waitForTimeout(2000);
    // panel=await page.waitForXPath(`//*[@id="search"]`);
    // await panel.click();
    await page.waitForTimeout(1000);
    panel = await page.waitForXPath(`//button[@type='submit']//span[contains(text(),'Add')]/..`);
    await panel.click();
}
  module.exports={
    login,formfill,setting
  }