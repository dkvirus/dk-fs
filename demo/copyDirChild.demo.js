/**
 * 运行指令：
 * $ node demo/copyDirChild.demo.js
 */

const path = require('path');
const fs2 = require('../index');

const src = path.join(process.cwd(), 'assets');
const dest = path.join(process.cwd(), 'demo');

/**
 * 复制源文件夹子文件到目标文件夹
 * @param src 源文件夹绝对路径
 * @param dest 目标文件夹绝对路径
 */
fs2.copyDirChild(src, dest);