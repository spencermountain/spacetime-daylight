const sunCalc = require('suncalc')

function toDegree(radians) {
  var pi = Math.PI
  return radians * (180 / pi)
}

const sunPosition = function (s, lat, lng) {
  if (lat === undefined || lng === undefined) {
    let guess = s.point()
    lat = guess.lat
    lng = guess.lng
  }
  s = s.in(lat, lng)
  let d = new Date(s.epoch)
  let res = sunCalc.getPosition(d, lat, lng)
  // return res
  return {
    azimuth: toDegree(res.azimuth),
    altitude: toDegree(res.altitude),
  }
}
module.exports = sunPosition
