let test = require('tape')
const spacetime = require('spacetime')
const daylight = require('../src')
// const geo = require('../builds/spacetime-geo')
spacetime.extend(daylight)

test('day-length-winter', function(t) {
  let s = spacetime('December 16 2018')
  let newYork = s.daylight(42.7235, -73.6931)
  t.equal(newYork.duration.hours, 9, 'short-days in NY')
  let equator = s.daylight(0, 0)
  t.equal(equator.duration.hours, 12, 'medium-days in equator')
  t.end()
})

test('day-length-summer', function(t) {
  let s = spacetime('June 21 2018')
  let newYork = s.daylight(42.7235, -73.6931)
  t.equal(newYork.duration.hours, 15, 'long-days in NY')
  let equator = s.daylight(0, 0)
  t.equal(equator.duration.hours, 12, 'medium-days in equator')
  t.end()
})
