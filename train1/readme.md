# 环境要求
- node v7.5.0及以上
- npm v3.0.0及以上

# 安装
安装依赖包

```
$npm install
```

# 基础用法
用于做练习的脚手架，在该目录执行如下命令。

```
$gulp
```

然后访问`http://localhost:8000/index.html`，然后编辑`src/index.html`及其引用的文件，将可以在浏览器看到变化。

# 功能说明
### gulp 文件
`gulpfile`有以下功能:

* vendor 将第三方库(jQuery, bootstrap)移到目标目录(dist)
* sass 将样式文件(src/sass/)编译后放到目标目录(dist)
* html 将src/index.html编译后放到目标目录(./)
* watch 监听src目录的文件变化
* serve 启动服务器，监听8000端口，方便调试
* default 将以上命令按顺序执行一遍

### 源码文件
所有源码均位于`src`目录:
