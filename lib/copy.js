/* created by dkviurs at 2017年8月8日14:59:48
说明：
	- src
		- demo1
			+ test1
			+ test2
		- demo2
	
	将 demo1 下的文件复制到 demo2 中
	
	- src
		- demo1
			+ test1
			+ test2
		- demo2
			+ test1
			+ test2
 */
 
 const path = require('path');
 const fs2 = require('./index.js');
 
// 复制 src 目录下的所有文件到 dest
// src = 'd:/src/demo1'
// dest = 'd:/src/demo2'
 function copy (src, dest) {
	
	fs.stat(src, function (err, stats) {
		
		if (err) return console.error(err);
		
		if (stats.isFile()) {		// 是文件
			fs2.copyfile(src, dest);
		} else {	// 是目录
			
			
			
		}
		
	});
	
	
 }
 
 module.exports = copy; 