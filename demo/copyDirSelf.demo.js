/**
 * 运行指令：
 * $ node demo/copyDirSelf.demo.js
 */

const fs2 = require('../lib');
const path = require('path');

const src = path.join(process.cwd(), 'assets');
const dest = path.join(process.cwd(), 'demo');

/**
 * 复制文件夹自身到目标文件夹
 * @param src 源文件夹
 * @param dest 目标文件夹
 */
fs2.copyDirSelf(src, dest);