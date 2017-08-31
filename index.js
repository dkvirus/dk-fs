const copyFile = require('./lib/copyFile');
const copyDirChild = require('./lib/copyDirChild');
const copyDirSelf = require('./lib/copyDirSelf');
const delDirChild = require('./lib/delDirChild');
const isEmptyDir = require('./lib/isEmptyDir');

module.exports = {
    copyFile,
    copyDirChild,
    copyDirSelf,
    delDirChild,
    isEmptyDir
};