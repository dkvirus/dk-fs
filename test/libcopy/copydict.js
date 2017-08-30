const fs = require('fs');
const path = require('path');
const mkdirSync = require('./mkdirSync');

// 复制目录,判断参数，仅仅是复制目录 mkdir
// src 从哪里复制，路径名
// dest 复制到哪里，路径名
function copydict (src, dest) {
	
	dest = dest || process.cwd(); 
		
	// 获取目录名称
	const dictname = path.basename(src);
	
	// 创建目录
	mkdirSync(path.join(dest, dictname));
		
}

module.exports = copydict;