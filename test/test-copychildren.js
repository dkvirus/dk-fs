var fs2 = require('../lib');
var path = require('path');

fs2.copychildren(path.join(process.cwd(), 'lib'), path.join(process.cwd(), 'test/libcopy'));