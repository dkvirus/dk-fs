/* 
created by dkvirus at 2017年8月8日13:37:43
说明：
fs 的 mkdir 只能一层层创建目录
dk-fs 的 mkdir 可以跨级创建目录。同步方法 
 */

const fs = require('fs');
const path = require('path');

// dest 传入就必须是绝对路径 ,使用 process.cwd() 进行拼接 
function mkdirSync (dest) {

	try {
	
		if (!~dest.indexOf(process.cwd())) {
			return console.error('目录应为绝对路径，可使用 process.cwd() 进行拼接');
		}
		
		dest = dest.replace(process.cwd(), '');
		
		// windows 系统分隔符为 \ ，Linux 为 /，该方法只适用 windows 新系统
		const dirArr = path.normalize(dest).split('\\');
		let level = '', levelname = '';
		
		for (let i = 0; i < dirArr.length; i++) {
			level += `/${dirArr[i]}`;
			levelname = path.join(process.cwd(), level);
			
			if (!fs.existsSync(levelname)) {
				fs.mkdirSync(levelname);
			}
		}
		
		return true;
	} catch (e) {
		return console.error(e);
	}
	
}

module.exports = mkdirSync;