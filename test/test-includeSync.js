var path = require('path');
var fs2 = require('../lib');

// 测试指定目录下是否包含某文件
var result1 = fs2.includeSync('test-includeSync.js', path.join(process.cwd()));
console.log(result1);

// 测试指定目录下是否包含某目录
var result2 = fs2.includeSync('childtest', path.join(process.cwd()));
console.log(result2);