/**
 * 运行指令：
 * $ node demo/delEmpty.demo.js
 */

const path = require('path');
const fs2 = require('../index');

/**
 * 遇空则删
 * @param src 待操作的文件/文件夹
 */
fs2.delEmpty(path.join(process.cwd(), 'assets/aaa/bbb'));