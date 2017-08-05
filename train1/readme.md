# 环境要求
- `node` v7.5.0及以上
- `npm` v3.0.0及以上

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
所有源码均位于`src`目录，目前只有以下两个文件:

```
src/index.html 
src/sass/main.scss
```

### scss文件是什么？
直接在`CSS`文件上编写样式有以下问题：

- `CSS`文件不支持标签嵌套，在编写`ul li a`这样的样式时，简单是很崩溃的一件事情;
- `CSS`不支持变量定义，同样一个数值一变动，经常要改许多地方，很容易出错；
- `CSS`不支持语法检查，当你少了个`}`时，只有到运行时才知道，效率极低;

`Sass`工具解决了以上这些问题。实际上，`Sass`远不止解决了上面这些问题，有兴趣请自行百度。`Sass`支持两种格式的文件:`sass`和`scss`。其中`sass`与`css`语法变化比较大，`scss`则完全兼容`css`的格式，因此统一编辑`scss`降低学习难度。


