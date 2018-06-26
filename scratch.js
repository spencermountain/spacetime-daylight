const spacetime = require('spacetime')
const sunlight = require('./src/index')
// console.log(tzlookup(42.7235, -73.6931)); // "America/New_York"
// console.log(tzlookup(48.7235, 1.9931)); // paris
// console.log(tzlookup(50.4050, -31.8971)); // atlantic ocean

spacetime.extend(sunlight)

// console.log(spacetime('June 26 2018', 'Canada/Eastern').time('1:21pm').daylight())
// console.log(spacetime('June 26 2018', 'Canada/Eastern').noon().time())

let maybeList = spacetime.whereIts('4:00am', '9:30am')
maybeList.forEach((tz) => {
  let d = spacetime.now(tz)
  if (d.isBetween(d.dawn(), d.sunrise())) {
    //calculate how minutes until sunrise
    let diff = d.diff(d.sunrise())
    console.log(tz + ' in ' + diff.minutes + ' mins - @ ' + d.sunrise().time())
  }
})
