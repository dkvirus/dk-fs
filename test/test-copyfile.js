var path = require('path');
var fs2 = require('../lib');

var result = fs2.copyfile(path.join(process.cwd(), 'test-copyfile.js'), path.join(process.cwd()));
console.log(result);