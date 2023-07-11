const express=require('express');
const mongoose=require("mongoose");
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express();
const sample=require('./models/data');
const bodyParser = require('body-parser');
const http= require('http');

let url="mongodb+srv://zeel:zeel@cluster0.6hbtxwt.mongodb.net/";
 mongoose.connect(url).then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log(err);
    })
app.use(express.json());
app.use(cors());
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn:"https://a994b6f20fc74e9ab469cd4f7c3d039d@o4505209980715008.ingest.sentry.io/4505227698307072",
  integrations: [
    new Sentry.Integrations.Mongo({
        useMongoose: true // Default: false
    }),
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({
      // to trace all requests to the default router
      app,
      // alternatively, you can specify the routes you want to trace:
      // router: someRouter,
    }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "transaction",
  name: "My Transaction"
});
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.post('/send',async(req,res)=>{
    try{
        const data=new sample({
            id:req.body.id,
            name:req.body.name
        })
        const response= await data.save();
        res.status(200).send("success")   

    }catch(err){
        Sentry.captureException(err);
    }
})
app.get('/getting',async(req,res)=>{
    try{
        const response= await sample.find();
        while(1);
        res.status(200).json(response)   

    }catch(err){
        Sentry.captureException(err);  
    }
})
app.use(Sentry.Handlers.errorHandler());
app.listen('3000',()=>{
    console.log("3000 listening")
})

transaction.finish();
await page.waitForTimeout(2000);
    func.backtomaster(page)
    await page.waitForTimeout(2000);
    catt.add(page,0);
    await page.waitForTimeout(2000);
    let values='Add Level'
    func.setting(page,values)
    for(let i=1;i<2;i++){
       Sibling.addlevel(page,i);
    }
//div[@class="d-flex justify-content-between"]/input[@value="sku_name"]