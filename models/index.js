const Sentry = require("@sentry/node");
const express = require("express");
const app = express();

Sentry.init({
  dsn: "https://20ddeece0a8e42249ac733d8b255d337@o4505209980715008.ingest.sentry.io/4505209983926272",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({
      // to trace all requests to the default router
      app,
      // alternatively, you can specify the routes you want to trace:
      // router: someRouter,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
const transaction = Sentry.startTransaction({
    op: "test2",
    name: "My First Test Transaction",
  });
// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());



app.use(Sentry.Handlers.errorHandler());
app.listen(3000);

// async function setting(page){
//   let mouse =''; 
//   //await page.waitForXPath(`//a[contains(text(),"Product Master")]`);
//   // await mouse.click(); 
//   //add(page);
//   await page.waitForTimeout(2000);
//   const divsWithNumericId = await page.$x(`//div[@id and string-length(@id) = 4 and number(@id) = floor(@id)]`);
//   for (const div of divsWithNumericId) {
//     const divId = await div.evaluate((el) => el.getAttribute('id'));
//     // mouse = await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
//     // await mouse.hover();
//     await page.waitForTimeout(1000);
//     const elements = await page.$x(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'Attributes')]`);
//     console.log(elements)
//     if (elements.length > 0) {
//       console.log('found it')
//       mouse= await page.waitForXPath(`//div[contains(@id,'${divId}')]//div[contains(@class,'d-flex dropdown-button px-2')]/a`);
//       await mouse.hover();
//       await page.waitForTimeout(2000);
//       mouse= await page.waitForXPath(`//div[@id='${divId}']//a[contains(@class,'dropdown-item d-flex align-items-center')]//span[contains(text(),'Attributes')]`);
//       await mouse.click();
//       newattribute(page);
//       break;
//     } else {
//       console.log('XPath does not exist on the page');
//     }
//     console.log(divId);
//   }
//   // Find elements that match the XPath expression
   
// }