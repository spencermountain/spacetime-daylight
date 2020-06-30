const spacetime = require('spacetime')
const sunlight = require('./src/index')
// console.log(tzlookup(42.7235, -73.6931)); // "America/New_York"
// console.log(tzlookup(48.7235, 1.9931)); // paris
// console.log(tzlookup(50.4050, -31.8971)); // atlantic ocean

spacetime.extend(sunlight)

// let s = spacetime.today('America/Iqaluit').time('3:00am')
// let s = spacetime.today('Canada/Eastern').time('3:00am')
// let s = spacetime.today('America/Havana').time('3:00am')
// let hours = s.every('hour', s.add(1, 'day').time('3:00am'))
// hours.forEach((d) => {
//   console.log(d.time() + '   -   ' + d.sunPosition().altitude)
// })

let s = spacetime('2007')
console.log(s.solstice().winter.format('{nice} {year}'))

// let s = spacetime('march 2 1998')
// s.every('year', spacetime('july 2 2025')).forEach((d) => {
//   console.log(d.solstice().winter.format('{year} {nice}'))
// })
