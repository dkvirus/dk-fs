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
const fs = require('fs'); 
const path = require('path');
const copyfile = require('./copyfile');
const copydict = require('./copydict');
 
// 复制 src 目录下的所有文件到 dest
// src = 'd:/src/demo1'
// dest = 'd:/src/demo2'
 function copychildren (src, dest) {
	
	dest = dest || process.cwd(); 
	const basename = path.basename(src);
	
	fs.stat(src, function (err, stats) {
	   if (err) return console.error(err);
	   
	   // src = 'C:\Users\Administrator\Desktop\dk-cli\frame'
	   // dest = 'D:\code\test\test-command\test'
	   if (stats.isFile()) {
			// 复制文件
			if (~path.basename(dest).indexOf('.')) {
				dest = path.dirname(dest);
			}
			
			copyfile(src, dest);
	   } else if (stats.isDirectory()) {
			
			if (path.basename(src) !== basename) {
				// 复制目录
				copydict(src, dest);
			}
			
		    // 遍历目录
			fs.readdir(src, function (err, files) {
				if (err) return console.error(err);
				
				if (path.basename(src) !== basename) {
					dest = path.join(dest, path.basename(src));
				}
				
				files.forEach(function (file) {
					copychildren(path.join(src, file), dest);
				});
			});

	   }    
	});
	
	
 }
 
 module.exports = copychildren; 