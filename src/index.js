const sunCalc = require('./suncalc')
const spacetimeGeo = require('spacetime-geo')
// const spacetimeGeo = require('/Users/spencer/mountain/spacetime-geo/src/index.js')

const buildFrom = function(s, time) {
  let d = new Date(time)
  // console.log(time)
  s = s.clone()
  s.epoch = d.getTime()
  return s
}

module.exports = {
  //depend on this plugin
  in: spacetimeGeo.in,
  //create ours
  sunrise: function(lat, lng) {
    let s = this.in(lat, lng)
    let d = new Date(s.epoch)
    let res = sunCalc.getTimes(d, lat, lng)
    return buildFrom(s, res.sunrise)
  },
  sunset: function(lat, lng) {
    let s = this.in(lat, lng)
    let d = new Date(s.epoch)
    let res = sunCalc.getTimes(d, lat, lng)
    return buildFrom(s, res.sunset)
  },
  daylight: function(lat, lng) {
    let sunrise = this.sunrise(lat, lng)
    let sunset = this.sunset(lat, lng)
    let delta = sunset.since(sunrise)
    //clean this up a bit
    let duration = {
      hours: delta.diff.hours,
      minutes: delta.diff.minutes,
      seconds: delta.diff.seconds,
    }
    return {
      sunrise: sunrise.time(),
      sunset: sunset.time(),
      duration: duration
    }
  }
}
