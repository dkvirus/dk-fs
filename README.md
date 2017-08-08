# dk-fs
对 node 提供的原生 fs 包的扩展

- mkdirSync() —— 创建目录

	原生 fs 创建的目录如 aa/bb/cc 中 aa/bb 目录必须先有才能创建 cc 目录。
	
	dk-fs 的 mkdirSync 方法可以跨级创建目录。

- includeSync() —— 判断指定目录下是否包含某个子文件
- copyfile() —— 复制文件
- copy() —— 赋值目录
- destory —— 删除文件/目录
	- 原生 fs 的 rmdir 方法要删除一个目录，还必须先删除该目录的内容，destory 可以删除你想干掉的任何东东。
