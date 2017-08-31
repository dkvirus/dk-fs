/**
 * created by dkvirus at 2017年8月31日23:05:54
 */
const fs = require('fs');
const path = require('path');

/**
 * 遇空则删
 * @param src 待操作的文件/文件夹
 */
function init (src) {
    if (!handleParams(src)) return;

    // 删除子文件/文件夹，往下级目录递归
    delEmpty(src);

    // 删除空目录，往上级目录递归
    del(path.dirname(src));
}

function handleParams (src) {
    // 校验 src 路径是否存在
    if (!fs.existsSync(src)) {
        console.log('参数路径不存在');
        return false;
    }

    return true;
}

function delEmpty (src) {
    let stats = fs.statSync(src);

    if (stats.isFile()) {
        // 是文件直接删除
        fs.unlinkSync(src);
    } else {
        // 是文件夹
        const files = fs.readdirSync(src);

        if (files.length !== 0) {
            // 递归文件夹内每一个子文件
            files.forEach(function (file) {
                delEmpty(path.join(src, file));
            });
        }

        fs.rmdirSync(src);
    }
}

function del (src) {
    try {
        fs.rmdirSync(src);
        del(path.dirname(src));
    } catch (e) {
        return;
    }
}

module.exports = init;