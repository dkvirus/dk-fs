/**
 * 运行指令：
 * $ node demo/isEmptyDir.demo.js
 */

const path = require('path');
const fs2 = require('../index');

/**
 * 判断文件夹是否为空目录
 * @param src 待判断目录
 * @returns {boolean} 为空目录返回 true，否则返回 false
 */
const result = fs2.isEmptyDir(path.join(process.cwd(), 'assets'));
console.log(result);


