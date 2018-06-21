<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>predicted sunrise/sunset times</div>
  <a href="https://npmjs.org/package/spacetime-daylight">
    <img src="https://img.shields.io/npm/v/spacetime-daylight.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square" />
  </a>
</div>

<div align="center">
  <code>npm install spacetime-daylight</code>
</div>

a [spacetime](https://github.com/spencermountain/spacetime) plugin to calculate sunlight exposure for a given timezone/location, in local time.

This project is really just a neat opportunity to combine some exceptional open-source javascript libraries:

* [sun-calc](https://github.com/mourner/suncalc) by Vladimir Agafonkin
* [tz-lookup](https://github.com/darkskyapp/tz-lookup/) by dark-sky and Evan Siroky

that's all it does.

it bundles-in the [spacetime-geo](https://github.com/spencermountain/spacetime-geo) plugin, too.

Work-in-Progress!
```js
const spacetime = require('spacetime')
const daylight = require('spacetime-daylight')
spacetime.extend(daylight)

let d = spacetime('June 5th 3:30pm', 'Canada/Eastern')
d.sunrise().time()
// 6:43am
d.sunset().time()
// //7:13pm
```

`132kb` or so,

## See also
* [timespace](https://github.com/mapbox/timespace) - by MapBox, using Moment - larger and more-accurate.

MIT
