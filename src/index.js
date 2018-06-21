const spacetime=require('spacetime')
var tzlookup = require("tz-lookup");
const suncalc=require('./suncalc')


// console.log(tzlookup(42.7235, -73.6931)); // "America/New_York"
console.log(tzlookup(48.7235, 1.9931)); // paris
console.log(tzlookup(50.4050,-31.8971)); // atlantic ocean
