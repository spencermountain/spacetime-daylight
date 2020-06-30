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

// 	Jun 21 2007 2:06pm
// let s = spacetime('2007')
// console.log(s.summerSolstice().format('{nice} {year}'))

// let s = spacetime('march 2 1998')
// s.every('year', spacetime('july 2 2025')).forEach((d) => {
//   console.log(d.solstice().summer.format('{year} {nice}'))
// })

let winter = spacetime('dec 21st 2021 10:53am')
let summer = spacetime('Jun 20 2021 11:32pm')
console.log(winter.epoch - summer.epoch)
