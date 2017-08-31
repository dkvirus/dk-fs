/**
 * created by dkviurs at 2017年8月31日22:29:44
 */
const path = require('path');
const fs = require('fs');

/**
 * 删除文件夹自身
 * @param src 待操作文件夹绝对路径
 */
function init (src) {
    if (!handleParams(src)) return;

    delDirSelf(src);

    fs.rmdirSync(src);
}

// 校验参数 src 合法性
function handleParams (src) {

    // 校验目录是否存在
    if (!fs.existsSync(src)) {
        console.log('参数路径不存在。');
        return false;
    }

    // 校验 src 是否为目录
    const stats = fs.statSync(src);
    if (!stats.isDirectory()) {
        console.log('参数路径不是一个目录。')
        return false;
    }

    return true;
}

// 判断文件夹是否为空
function isEmptyDir (src) {
    const files = fs.readdirSync(src);
    if (files.length !== 0) {
        return false;
    }

    return true;
}

// 删除逻辑代码
function delDirSelf (src) {
    const files = fs.readdirSync(src);

    files.forEach(function (file) {
        const filePath = path.join(src, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            // 是文件，直接删除
            fs.unlinkSync(filePath);
            return;		// 相当于 continue，跳过当前循环
        } else {
            delDirSelf(filePath);
        }
        fs.rmdirSync(filePath);
    });
}

module.exports = init;