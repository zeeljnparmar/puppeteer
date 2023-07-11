const data = require('../logs/category.json');
const rand=require('lodash');

for(let i =0;i<10;i++){
    let n = rand.random(0,22);
    console.log(n);
}