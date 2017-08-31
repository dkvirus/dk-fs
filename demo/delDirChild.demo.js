/**
 * 运行指令：
 * $ node demo/delDirChild.demo.js
 */

const path = require('path');
const fs2 = require('../index');

/**
 * 删除文件夹所有子文件，不包括自身
 * @param src 待操作文件夹绝对路径
 */
fs2.delDirChild(path.join(process.cwd(), 'assets/aaa'));