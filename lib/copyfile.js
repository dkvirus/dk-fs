/* 
created by dkvirus at 2017年8月8日14:30:06
说明：
1.复制文件，不光是文本文件，还可以复制图片，视频，压缩包等
2.参数 
	src 是源文件的绝对路径，
	dest 是目标地址的绝对路径，
	isreplace 布尔值，如果目标地址已有源文件，是否替换，默认是替换的，想要不替换设置成 false 
 */

const fs = require('fs');
const path = require('path');
const fs2 = require('./index.js');

// src = 'C:\Users\Administrator\Desktop\dk-cli\frame\demo.txt'
// dest = 'D:\code\test\test-command\test'
function copyfile (src, dest, isreplace=false) {
	
	try {
		// 创建一个可读流
		const readerStream = fs.createReadStream(src);
		
		// 先判断是否存在，存在再判断是否替换
		const destfile = path.join(dest, path.basename(src));
		if (fs.existsSync(destfile)) {	// 存在，判断是否替换，不存在直接写
			if (isreplace === true) {
				const writerStream = fs.createWriteStream(destfile);
				// 管道读写操作
				readerStream.pipe(writerStream);
			}
		} else {
			const writerStream = fs.createWriteStream(destfile);
			// 管道读写操作
			readerStream.pipe(writerStream);
		}
	
	} catch (e) {
		return console.error(e);
	}
	
	return true;
}

module.exports = copyfile;