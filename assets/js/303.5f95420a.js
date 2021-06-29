(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{730:function(s,t,a){"use strict";a.r(t);var r=a(15),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一、docsify使用背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docsify使用背景"}},[s._v("#")]),s._v(" 一、docsify使用背景")]),s._v(" "),a("blockquote",[a("p",[s._v("一个好的开源软件必须要有一个完善的文档才容易被推广，那么我们在如何简单、高效、低成本的搭建一个文档网站呢？今天我们使用Github+docsify来零成本轻松打造一个在线文档系统！")])]),s._v(" "),a("p",[s._v("不同于 GitBook、Hexo 的地方是它不会生成静态的 .html 文件，所有转换工作都是在运行时。只需要创建一个 index.html 就可以开始编写文档并直接部署在 GitHub Pages。")]),s._v(" "),a("p",[s._v("vue的官方文档也是使用docsify搭建的："),a("a",{attrs:{href:"https://cn.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cn.vuejs.org"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"二、安装docsify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装docsify"}},[s._v("#")]),s._v(" 二、安装docsify")]),s._v(" "),a("h4",{attrs:{id:"_1、安装node和npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装node和npm"}},[s._v("#")]),s._v(" 1、安装node和npm")]),s._v(" "),a("p",[s._v("很简单，网上自行下载安装就可以。\n参考这篇文章"),a("a",{attrs:{href:"https://blog.csdn.net/qq_39308408/article/details/97754889",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/qq_39308408/article/details/97754889"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"_2、全局安装docsify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、全局安装docsify"}},[s._v("#")]),s._v(" 2、全局安装docsify")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm i docsify"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：mac中需要使用root权限，需要加上sudo。")]),s._v(" "),a("h3",{attrs:{id:"三、使用docsify创建文档网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用docsify创建文档网站"}},[s._v("#")]),s._v(" 三、使用docsify创建文档网站")]),s._v(" "),a("h4",{attrs:{id:"_1、在github中新建一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在github中新建一个项目"}},[s._v("#")]),s._v(" 1、在github中新建一个项目")]),s._v(" "),a("p",[s._v("这个项目用来存放我们的文档内容，后面通过github来发布我们的文档网站。关于github上如何创建项目，如何clone到本地，这里就不详细说了。")]),s._v(" "),a("p",[s._v("将项目clone到本地:  "),a("code",[s._v("https://github.com/Ezuy-Lee/xpai-docs.git")])]),s._v(" "),a("h4",{attrs:{id:"_2、初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、初始化项目"}},[s._v("#")]),s._v(" 2、初始化项目")]),s._v(" "),a("p",[s._v("进入clone的项目中执行：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("docsify init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会自动生成以下几个文件：")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("index.html 入口文件\nREADME.md 会做为主页内容渲染\n.nojekyll 用于阻止 GitHub Pages 会忽略掉下划线开头的文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_3、本地启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地启动项目"}},[s._v("#")]),s._v(" 3、本地启动项目")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("docsify serve docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("本地访问http://localhost:3000即可看到文档：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/wordimage001.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"四、通过github发布文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、通过github发布文档"}},[s._v("#")]),s._v(" 四、通过github发布文档")]),s._v(" "),a("h4",{attrs:{id:"_1、将生成的代码提交到github中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、将生成的代码提交到github中"}},[s._v("#")]),s._v(" 1、将生成的代码提交到github中")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"初始化页面"')]),s._v("\ngit push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2、设置github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置github-pages"}},[s._v("#")]),s._v(" 2、设置GitHub Pages")]),s._v(" "),a("p",[s._v("在Settings中的GitHub Pages中选择docs文件夹，点击保存，即可发布刚刚的文档网站。通过 "),a("a",{attrs:{href:"https://ezuy-lee.github.io/xpai-docs/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://ezuy-lee.github.io/xpai-docs/#/"),a("OutboundLink")],1),s._v("地址即可访问！\n至此,我们的网站基本搭建完成。")]),s._v(" "),a("h3",{attrs:{id:"五、docsify详细使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、docsify详细使用"}},[s._v("#")]),s._v(" 五、docsify详细使用")]),s._v(" "),a("h4",{attrs:{id:"_1、设置封面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、设置封面"}},[s._v("#")]),s._v(" 1、设置封面")]),s._v(" "),a("p",[s._v("docsify可以很容易的给文档网站加上一个好看的封面。")]),s._v(" "),a("p",[s._v("首先在生成的index.html中增加：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$docsify "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    coverpage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后在文档根目录创建 _coverpage.md 文件：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("logo")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://ezuy-lee.github.io/xpai-docs/#/")]),s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.liyuze.work/favicon.ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("X-π学院"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("align")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("　"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("border-radius:")]),s._v("2em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" [X-π学院](http://www.liyuze.work/)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[s._v(">")]),s._v(" 使用当前主流的Java和vue技术栈搭建的一款简洁、轻量、易用的前后端分离博客系统。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" 前端框架：vue-cli、vue-router、vuex、axios等\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" 后端框架：Springboot、mybaits-plus、MySQL、JWT、docker等\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" 中间件：    RabbitMQ、Redis、Mongodb、Elasticsearch、elk等\n\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("GitHub")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://github.com/Ezuy-Lee")]),s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("Get Started")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://github.com/Ezuy-Lee/Rainze-Java-PIM#quick-start")]),s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这样就可以创建出一个颜色随机的好看的封面了！")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/wordimage001.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"_2、多页文档侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、多页文档侧边栏"}},[s._v("#")]),s._v(" 2、多页文档侧边栏")]),s._v(" "),a("p",[s._v("首先在生成的index.html中增加：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$docsify "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loadNavbar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后在文档根目录创建_navbar.md文件：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("项目介绍")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("zh-cn/项目介绍.md")]),s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("设计文档")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("接口文档")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("zh-cn/设计文档/接口文档.md")]),s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("数据库设计")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("zh-cn/设计文档/数据库设计.md")]),s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("技术博客")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_3、设置导航栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置导航栏"}},[s._v("#")]),s._v(" 3、设置导航栏")]),s._v(" "),a("p",[s._v("非常简单，在index.html中增加：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("中文"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_4、右上角github链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、右上角github链接"}},[s._v("#")]),s._v(" 4、右上角github链接")]),s._v(" "),a("p",[s._v("在index.html中增加")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$docsify "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/Ezuy-Lee/xpai-docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_5、其他插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、其他插件"}},[s._v("#")]),s._v(" 5、其他插件")]),s._v(" "),a("p",[s._v("docsify还提供了大量插件，例如：全文搜索、emoji、外链脚本等等。详情见官网："),a("a",{attrs:{href:"https://docsify.js.org/#/zh-cn/plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docsify.js.org/#/zh-cn/plugins"),a("OutboundLink")],1),s._v("，也可以使用docsify来搭建自己的博客网站，简单又炫酷。")])])}),[],!1,null,null,null);t.default=e.exports}}]);