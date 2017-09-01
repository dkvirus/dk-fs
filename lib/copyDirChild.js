/**
 * created by dkvirus at 2017年8月30日17:57:23
 */
const fs = require('fs');
const path = require('path');

/**
 * 复制源文件夹子文件到目标文件夹
 * @param src 源文件夹
 * @param dest 目标文件夹
 */
function copyDirChild (src, dest, isreplace = false) {

    // 判断 src 和 dest 是否是一个目录
    try {
        const srcStats = fs.statSync(src);
        const destStats = fs.statSync(dest);
        if (!srcStats.isDirectory() || !destStats.isDirectory()) {
            return console.error('参数有误，请重新输入');
        }
    } catch (e) {
        return console.error('目录不存在，请重新输入')
    }

    // 复制操作主要逻辑
    fs.readdir(src, function (err, files) {
        if (files.length === 0) {
            return;
        }

        files.forEach(function (file) {

            const srcPath = path.join(src, file);
            // 判断子文件是目录还是文件。目录进行递归，文件进行复制
            const fileStats = fs.statSync(srcPath);

            if (fileStats.isFile()) {
                // 复制文件
                copyFile(srcPath, dest, isreplace);
            } else if (fileStats.isDirectory()) {
                const destPath = path.join(dest, file);
                // 目标目录下创建子目录，进行递归
                fs.mkdirSync(destPath);
                copyDirChild(srcPath, destPath);
            }
        })
    });
}

function copyFile (src, dest, isreplace) {
    try {
        // 创建一个可读流
        const readerStream = fs.createReadStream(src);
        // 先判断源文件在目标目录下是否存在，存在再判断是否替换
        const destfile = path.join(dest, path.basename(src));

        if (fs.existsSync(destfile)) {	// 存在，判断是否替换，不存在直接写
            if (isreplace === true) {
                const writerStream = fs.createWriteStream(destfile);
                readerStream.pipe(writerStream);	// 管道读写操作
            }
        } else {
            const writerStream = fs.createWriteStream(destfile);
            readerStream.pipe(writerStream);	// 管道读写操作
        }
    } catch (e) {
        return console.error(e);
    }
}

module.exports = copyDirChild;