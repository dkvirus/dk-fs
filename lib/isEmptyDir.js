/**
 * created by dkvirus at 2017年8月31日15:49:03
 */

const fs = require('fs');

/**
 * 判断文件夹是否为空目录
 * @param src 待判断目录
 * @returns {boolean} 为空目录返回 true，否则返回 false
 */
function init (src) {
    
    const stats = fs.statSync(src);
    if (!stats.isDirectory()) {
        return false;
    }

    const files = fs.readdirSync(src);
    if (files.length !== 0) {
        return false;
    }

    return true;
}

module.exports = init;