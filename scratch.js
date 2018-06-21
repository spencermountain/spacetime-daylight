const spacetime = require('spacetime')
const sunlight = require('./src/index')
// console.log(tzlookup(42.7235, -73.6931)); // "America/New_York"
// console.log(tzlookup(48.7235, 1.9931)); // paris
// console.log(tzlookup(50.4050, -31.8971)); // atlantic ocean

spacetime.extend(sunlight)
let s = spacetime('June 21 2018')
// s.month('june')
// s.log()
// s = s.in(48.7235, 1.9931)
// s.log()
// console.log(s.timezone())
console.log(s.daylight(42.7235, -73.6931))
console.log('')
console.log(s.daylight(0, 0))
