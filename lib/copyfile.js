/* 
created by dkvirus at 2017年8月8日14:30:06
 */
const fs = require('fs');
const path = require('path');

/**
 * 复制文件，不光是文本文件，还可以复制图片，视频，压缩包等
 * @param src	源文件的绝对路径
 * @param dest	目标文件夹的绝对路径
 * @param isreplace		布尔值，如果目标地址已有源文件，是否替换，默认是替换的，想要不替换设置成 false
 * @returns {boolean} 复制成功返回 true，失败返回 undefined
 */
function copyfile (src, dest, isreplace = false) {

	// 判断 src 是否是一个文件
	const srcStats = fs.statSync(src);
	const destStats = fs.statSync(dest);
	if (!srcStats.isFile() || !destStats.isDirectory()) {
		return console.error('参数有误，请重新输入');
	}

	try {
		// 创建一个可读流
		const readerStream = fs.createReadStream(src);
		// 先判断源文件在目标目录下是否存在，存在再判断是否替换
		const destfile = path.join(dest, path.basename(src));

		if (fs.existsSync(destfile)) {	// 存在，判断是否替换，不存在直接写
			if (isreplace === true) {
				const writerStream = fs.createWriteStream(destfile);
				readerStream.pipe(writerStream);	// 管道读写操作
			}
		} else {
			const writerStream = fs.createWriteStream(destfile);
			readerStream.pipe(writerStream);	// 管道读写操作
		}
	} catch (e) {
		return console.error(e);
	}
	
	return true;
}

module.exports = copyfile;