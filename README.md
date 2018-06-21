# spacetime-sunlight
calculate sunlight exposure for a given timezone, in local time

This project is really just a neat opportunity to combine some exceptional open-source javascript libraries:

* [sun-calc](https://github.com/mourner/suncalc) by Vladimir Agafonkin
* [tz-lookup](https://github.com/darkskyapp/tz-lookup/) by dark-sky and Evan Siroky
* [spacetime](https://github.com/spencermountain/spacetime) by me and Brian LeRoux

that's all it does


Work-in-Progress:
```js
const spacetime = require('spacetime')
const sunlight = require('spacetime-sunlight')
let d = spacetime('June 5th 3:30pm', 'Canada/Eastern')
sunlight(d)
/*{
  sunrise:{
    epoch:78389262,
    time:'6:37am'
    hour:6,
    minute:37,
    second:21
  },
  sunset:{
    epoch:78729262,
    time:'9:50pm'
    hour:9,
    minute:50,
    second:19
  },
  daylight:{
    hours:7,
    minutes:42,
    seconds:18,
  },
  current:{
    state:'daylight',
    'sun-progress':'72%'
  }
}*/
```

## See also
* [timespace](https://github.com/mapbox/timespace) - by MapBox, using Moment

MIT
