/**
 * 运行指令：
 * $ node demo/copyFile.demo.js
 */

const fs2 = require('../lib');
const path = require('path');

const src = path.join(process.cwd(), 'assets/copytype.png');
const dest = path.join(process.cwd(), 'demo');

/**
 * 复制文件，不光是文本文件，还可以复制图片，视频，压缩包等
 * @param src	是源文件的绝对路径，
 * @param dest	是目标地址的绝对路径，
 * @param isreplace		布尔值，如果目标地址已有源文件，是否替换，默认是替换的，想要不替换设置成 false
 * @returns {boolean} 复制成功返回 true，失败返回 undefined
 */
fs2.copyFile(src, dest);


