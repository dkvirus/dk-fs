/*
created by dkvirus at 2017年8月8日14:13:32
说明：
判断指定目录下是否包含某个文件/目录
 */

const fs = require('fs');
const path = require('path');

// src 必须为绝对路径，可以使用 process.cwd() 进行拼接
// 如 src 为 d:/user，filename 为 study.txt，判断 d:/user 目录下是否有 study.txt 文件 
function includeSync (filename, src) {

	// 判断是否是绝对路径
	if (!~src.indexOf(process.cwd())) {
		return console.error('目录应为绝对路径，可使用 process.cwd() 进行拼接');
	}

	try {
		fs.statSync(path.join(src, filename));
	} catch (e) {
		return false;
	}
	
	return true; 
}

module.exports = includeSync;