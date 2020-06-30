// the average time between solstices, on timeanddate.com
// approx 88 days, 23 hours, 30 mins
const oneYear = 31557060000

// the 2015 winter solstice
const oneWinter = 1450759620000
// const oneSummer = 1450759620000 + diff

const goForward = function (epoch) {
  let num = oneWinter + oneYear
  while (num < epoch) {
    num += oneYear
  }
  return num
}
const goBackward = function (epoch) {
  let num = oneWinter - oneYear
  while (num > epoch) {
    num -= oneYear
  }
  return num
}

const solstice = function (s) {
  let found = null
  if (s.epoch > oneWinter) {
    found = goForward(s.epoch)
  } else {
    found = goBackward(s.epoch)
  }
  let winter = s.set(found)
  // ensure it's the right year
  if (winter.year() < s.year()) {
    winter = winter.set(winter.epoch + oneYear)
  }
  if (winter.year() > s.year()) {
    winter = winter.set(winter.epoch - oneYear)
  }
  // winter = winter.year(s.year())
  return {
    summer: winter.set(winter.epoch - oneYear / 2),
    winter: winter,
  }
}
const equinox = function (s) {
  return {
    summer: null,
    winter: null,
  }
}
module.exports = { solstice: solstice, equinox: equinox }
