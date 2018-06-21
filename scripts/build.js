var exec = require('shelljs').exec
var echo = require('shelljs').echo
var fs = require('fs');
//use paths, so libs don't need a -g
var browserify = './node_modules/.bin/browserify';
var derequire = './node_modules/.bin/derequire';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

//final build locations
var banner = '/* spacetime-daylight v' + pkg.version + '\n   github.com/spencermountain/spacetime-daylight\n   MIT\n*/\n';
var uncompressed = './builds/spacetime-daylight.js';

//cleanup. remove old builds
exec('rm -rf ./builds && mkdir builds');

//add a header, before our sourcecode
echo(banner).to(uncompressed);

//browserify + derequire
var cmd = browserify + ' ./src/index.js --standalone spacetimeDaylight';
cmd += ' -t [ babelify --presets [ env ] ]';
cmd += ' | ' + derequire;
cmd += ' >> ' + uncompressed;
exec(cmd);

//print filesizes
var stats = fs.statSync('./builds/spacetime-daylight.js');
var fileSize = (stats['size'] / 1000.0).toFixed(2);
console.log('\n\n main: ' + fileSize + 'kb');
