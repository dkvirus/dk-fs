# dk-fs
对 node 提供的原生 fs 包进行扩展。


### 1. 复制文件

- `copyFile(src, dest, isreplace)`：复制文件，不光是文本文件，还可以复制图片，视频，压缩包等。
	
	- `src`源文件的绝对路径；
	- `dest` 目标文件夹的绝对路径；
	- `isreplace` 布尔值，如果目标地址已有源文件，是否替换，默认是替换的，想要不替换设置成 false。

### 2. 复制文件夹

- `copyself(src, dest)`：复制文件夹自身到目标文件夹。

    - `src` 源文件夹绝对路径；
    - `dest` 目标文件夹绝对路径。
    
- `copychildren(src, dest)`：复制源文件夹子文件到目标文件夹。

    - `src` 源文件夹绝对路径；
    - `dest` 目标文件夹绝对路径。
    
二者区别见下图：

![copy type](assets/copytype.png)
