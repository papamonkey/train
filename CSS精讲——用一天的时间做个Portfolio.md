## 培训人员
报名条件：

- 要求`Freecodecamp`（下称`FCC`)按顺序做，直到完成`130 Build a Tribute Page`这一节，然后将完成的成果链接发给我。
- 通读[w3school的CSS教程](http://www.w3school.com.cn/css/index.asp)

> 备注：除了FCC的130的官方示例，也可参考我完成的示例：[https://codepen.io/liuwencan/full/PjvdJg/](https://codepen.io/liuwencan/full/PjvdJg/)。

## 预先准备
- 本工程的`train1`目录是[脚手架代码](https://github.com/papamonkey/train/tree/master/train1)，根据该目录的`readme.md`提示配置好环境，培训时我们将在这个脚手架上完成我们的项目。
- PPT有兴趣可以预先了解，点击这里[下载](第一讲-css精讲.pdf)
- 本地`node` 7.5以上, `npm` 3.0以上
- 代码编辑器应该具备智能补全和缩进功能（比如`atom`)

## 培训主要目标
`FCC`上面的习题过于简单，同时未讲解原理，本培训是对`FCC`的补充，使培训人员

- 对`CSS`的核心部分有较深入的认识。
- 掌握使用`Chrome`的`审查`功能，在开发者工具中直接调试排版
- 能够独立将`UI`图转换成静态页面（不考虑`JS`）
- 掌握通过`Sass/Scss`编写`CSS`而不是直接编辑`CSS`文件。

## 培训内容第一部分
- 盒子模型
- 常用display(inline, inline-block, block, table-cell)
- 定位
- 浮动
- 几个常见问题
	- 如何实现一个1000px的div总是水平居中对齐?(margin:0 auto)
	- 如何让文本、图片、按钮垂直居中(单行文件line-height, 多行文本display:table-cell)
	- 如何让导航菜单在PC端与手机端有不同的显示？(@media 做媒体查询)
	- 如何覆盖Bootstrap的样式？(了解CSS选择器的优先级）
	- 两栏布局怎么做？（左边浮动，右边margin-left设置成与浮动宽度值一致)

	
## 培训内容第二部分
讲解[脚手架的功能](`https://github.com/papamonkey/train/tree/master/train1`)，然后现场一起完成以下其中一个版本：

- [没有使用Bootstrap实现PC版本](http://www.papamk.com/train1/)
- [使用Bootstrap实现PC与手机自适应的版本](http://www.papamk.com/))


## 培训后的作业
- 在脚手架上使用`Bootstrap`完成自己的`portfolio`，要求PC端与手机端均能自适应，上传到`github`，并提供`github pages`的链接以供审查。

## 扩展作业(工程管理)
本项目脚手架使用`gulp`管理工程源码，理解`gulp`，然后添加一条`product`命令：生成压缩后的`css`与`html`代码。

> 备注：
> `FCC`要求上传自己的作品集，如果你没有自己的作品集，可以用我喜欢的电影，我喜欢的动漫等等代替。




