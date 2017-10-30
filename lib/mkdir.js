/**
 * created by dkvirus at 2017年10月30日15:24:00
 */

const fs = require('fs');
const path = require('path');

/**
 * 递归生成目录
 * 注意事项：原生 fs 生成目录 aaa/bbb，如果 aaa 不存在就会报错，dk-fs.mkdir 不管有没有，就是要创建出 bbb 文件夹
 * @param src 要生成的目录，绝对路径
 */
function init (src) {

    if (!fs.existsSync(path.dirname(src))) {
        init(path.dirname(src));
    }
    fs.mkdirSync(src);

}

module.exports = init;