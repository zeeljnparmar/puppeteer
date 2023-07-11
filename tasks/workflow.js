const test=require("../logs/category.json")
async function assignflow(page)
{
    await page.waitForTimeout(2000);
    let assign=await page.waitForXPath(`//span[contains(text(),'Workflow')]`);
    await assign.click();
    
}
//div[@id="5089"]//span[normalize-space()='Zeel']
async function setting(page,values){
    let mouse =''; 
    //await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
    // await mouse.click(); 
    //add(page);
    await page.waitForTimeout(2000);
    const divsWithNumericId = await page.$x(`//div[@id and string-length(@id) = 4 and number(@id) = floor(@id)]`);
    for (const div of divsWithNumericId) {
      const divId = await div.evaluate((el) => el.getAttribute('id'));
      await page.waitForTimeout(1000);
      const elements = await page.$x(`//div[@id="${divId}"]//span[normalize-space()='${test.category[0].name}']`);
      console.log(elements)
      if (elements.length > 0) {
        console.log('found it');
        mouse= await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
        await mouse.hover();
        await page.waitForTimeout(2000);
        mouse= await page.waitForXPath(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'${values}')]`);
        await mouse.click();
        mouse=divId
        console.log(mouse);
        return mouse;
      } else {
        console.log('XPath does not exist on the page');
      }
      //return divId;
    }
    // Find elements that match the XPath expression
     
  }
module.exports={
    assignflow,setting
}