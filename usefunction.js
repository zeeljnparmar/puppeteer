const testcase=require("./logs/category.json")
const rand=require("lodash");

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
      goahead=await page.waitForXPath(`/html/body/div/main/section/div/div/div/form/div[3]/button`);
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

async function formfill(page,i,calling)
  {
    await page.waitForTimeout(2000);
    await page.waitForSelector('#attributeGroupName');
    await page.type('#attributeGroupName',testcase.fields[i].group,{delay:10});
    await page.waitForTimeout(2000);
    await page.waitForSelector('#attributeName');
    await page.type('#attributeName',testcase.fields[i].attribute,{delay:10});
    await page.waitForTimeout(2000);
    await page.waitForSelector('#displayName');//working
    await page.type('#displayName',testcase.fields[i].display,{delay:10});//working
    await page.waitForTimeout(2000);
    await page.waitForSelector('#length');//working
    await page.type('#length',testcase.fields[i].length,{delay:10});//working
    await page.waitForTimeout(2000);
    let radio = await page.$x(`//*[@id="constraint"]`);
    const tp = rand.random(0,1);
    console.log(i);
    await radio[tp].click();
    if(tp===1){
      await page.waitForTimeout(2000);
      // await page.click('#referenceMaster');
      let reference=await page.$(`[name='referenceMaster']`)
      await reference.type(testcase.fields[i].master)
      await page.waitForTimeout(2000);
      // await page.click('#referenceAttribute');
      let referenceattribut=await page.$(`[name='referenceAttribute']`)
      await referenceattribut.type(testcase.fields[i].refrence)
    }
    await page.waitForTimeout(1000);
    let field=await page.$(`[name='type']`)
    await field.type(testcase.fields[i].type);
    await page.waitForTimeout(1000);
    let fieldtype=await page.$(`[name='dataType']`)
    await fieldtype.type(testcase.fields[i].datatype);  
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
    await putin.type(testcase.fields[i].default);
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

async function backtomaster(page){
  await page.waitForTimeout(2000);
  let master = await page.waitForXPath(`//span[contains(text(),"Master")]`);
  await master.click();
  await page.waitForTimeout(2000);
  master = await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
  await master.click();
  await page.waitForTimeout(2000);
}
async function editform(page,i)
  {
    await page.waitForTimeout(2000);
    const formSelector = 'form';
    //const calling='eddit';
    await page.waitForSelector(formSelector);
  
    // Clear the values of all input fields, radio buttons, checkboxes, and dropdown menus within the form
    await page.$$eval(`${formSelector} input, ${formSelector} select`, (elements) => {
      elements.forEach((element) => {
        if (element.tagName === 'INPUT') {
          if (element.type === 'radio' || element.type === 'checkbox') {
            element.checked = false;
          } else {
            element.value = '';
          }
        } else if (element.tagName === 'SELECT') {
          element.selectedIndex = -1;
        }
      });
    });
    // await page.waitForTimeout(2000);
    // await page.waitForSelector('#attribute_name');
    // //await page.$eval(`#attribute_name`, (input) => (input.value = ''));
    // await page.type('#attribute_name',testcase.fields[i].attribute,{delay:10});
    // await page.waitForTimeout(2000);
    // await page.waitForSelector('#display_name');//working
    // await page.$eval(`#display_name`, (input) => (input.value = ''));
    // await page.type('#display_name',testcase.fields[i].display,{delay:10});//working
    // await page.waitForTimeout(2000);
    // await page.waitForSelector('#attr_length');//working
    // await page.type('#attr_length',testcase.fields[i].length,{delay:10});//working
    // await page.waitForTimeout(2000);
    // let radio = await page.$x(`//*[@id="constraint"]`);
    // const tp = rand.random(0,1);
    // console.log(i);
    // await radio[tp].click();
    // if(tp===1){
    //   await page.waitForTimeout(2000);
    //   // await page.click('#referenceMaster');
    //   let reference=await page.$(`[name='refMaster']`)
    //   await reference.type(testcase.fields[i].master)
    //   await page.waitForTimeout(2000);
    //   // await page.click('#referenceAttribute');
    //   let referenceattribut=await page.$(`[name='refAttr']`)
    //   await referenceattribut.type(testcase.fields[i].refrence)
    // }
    // await page.waitForTimeout(1000);
    // let field=await page.$(`[name='attr_type']`)
    // await field.type(testcase.fields[i].type);
    // await page.waitForTimeout(1000);
    // let fieldtype=await page.$(`[name='attr_dataType']`)
    // await fieldtype.type(testcase.fields[i].datatype);  
    // await page.waitForTimeout(1000);
    // let mandoatory=await page.waitForXPath(`//*[@id="mandatory"]`);
    // await mandoatory.click();
    // await page.waitForTimeout(1000);
    // let edit=await page.waitForXPath(`//*[@id="editability"]`);
    // await edit.click();
    // let def=await page.waitForXPath(`//*[@id="default"]`);
    // await def.click();
    // await page.waitForTimeout(1000);  
    // let putin= await page.waitForXPath(`//input[@placeholder="Enter Value" and @id]`);
    // await putin.type(testcase.fields[i].default);
    // await page.waitForTimeout(1000);
    // let panel=await page.waitForXPath(`//*[@id="panel"]`);
    // await panel.click();
    // // await page.waitForTimeout(2000);
    // // panel=await page.waitForXPath(`//*[@id="search"]`);
    // // await panel.click();
    // await page.waitForTimeout(1000);
    // panel = await page.waitForXPath(`//button[@type='submit']//span[contains(text(),'Add')]/..`);
    // await panel.click();
}

  module.exports={
    login,formfill,setting,backtomaster,editform
  }