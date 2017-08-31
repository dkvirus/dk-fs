/**
 * 运行指令：
 * $ node demo/delDirSelf.demo.js
 */

const path = require('path');
const fs2 = require('../index');

/**
 * 删除文件夹自身
 * @param src 待操作文件夹绝对路径
 */
fs2.delDirSelf(path.join(process.cwd(), 'assets/aaa'));