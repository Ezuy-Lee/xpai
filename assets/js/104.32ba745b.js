(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{531:function(t,a,s){"use strict";s.r(a);var e=s(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("最近，公司系统架构大调整，将原来传统的SpringCloud微服务升级为SpringCloud Alibaba系列，其中注册中心和配置中心由原来的Eurake升级为阿里巴巴的Nacos，实现多配置中心管理外加了一个Apollo，然后还有一些其他中间件，刚开始还弄不明白这玩意儿，所以自己抽时间研究其中的澳妙，首先从Apollo开始。")])]),t._v(" "),s("h1",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),s("p",[t._v("Apollo（阿波罗）是携程框架部门研发的开源配置管理中心，能够集中化管理应用"),s("strong",[t._v("不同环境、不同集群")]),t._v("的配置，配置修改后能够"),s("strong",[t._v("实时推送到应用端，并且具备规范的权限、流程治理")]),t._v("等特性。")]),t._v(" "),s("p",[t._v("目前Apollo在github有22.6k颗星，在官网登记的使用的公司有451家，算是很流行的配置中心的框架技术。所以接下来跟着我一起学习Apollo配置中心吧。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_1.png",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"二、为什么使用配置中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么使用配置中心"}},[t._v("#")]),t._v(" 二、为什么使用配置中心")]),t._v(" "),s("p",[t._v("首先，没有配置中心之前传统的配置都是写在配置文件中，比如各种yml、perproties、xml文件。")]),t._v(" "),s("p",[t._v("写在各种文件里最大的问题在于"),s("strong",[t._v("如果需要改配置信息，需要重新部署发布应用才能生效")]),t._v("，这是第一个问题。")]),t._v(" "),s("p",[t._v("后面为了做到动态读取配置信息，后面有人改进一下把配置信息存储在数据库的一张表，程序读取表中的配置信息，这种方式很多公司都还在使用，因为简单，而且灵活(修改配置只需要执行个SQL语句，不需要重新部署发布)。但是也不是最完美的，因为"),s("strong",[t._v("缺少了权限控制，没有管理界面进行统一配置，没有历史版本的配置信息，不支持回滚(防止误操作)")]),t._v("。")]),t._v(" "),s("p",[t._v("实际上配置中心在市面上已经有很多，比如Nacos、Consul、spring-cloud-config、Apollo等等。")]),t._v(" "),s("p",[t._v("相对其他的，我觉得选择Apollo的原因是，界面比较美观，操作简便，部署简单，依赖较少，开箱即用。")]),t._v(" "),s("h1",{attrs:{id:"三、安装部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、安装部署"}},[t._v("#")]),t._v(" 三、安装部署")]),t._v(" "),s("p",[t._v("首先要讲一下Apollo部署三个服务apollo-configservice，apollo-adminservice，apollo-portal，后面我讲架构设计时会讲一下这三个服务是用来干嘛的。")]),t._v(" "),s("p",[t._v("这里部署建议不要用官网的Quick Start，我一开始使用QuickStart的方式，搞了几个钟头搞不定，总是在Eureka上多了一个UNKONWN的服务，然后又无法访问8070的管理界面，心态直接崩溃。上github找了一下，如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_3.png",alt:""}})]),t._v(" "),s("p",[t._v("作者在下面的回答是这样的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_4.png",alt:""}})]),t._v(" "),s("p",[t._v("这个问题发现不止有一个issue(#2931)反映了，但是没有解决，作者建议使用标准部署。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_5.png",alt:""}})]),t._v(" "),s("p",[t._v("所以接下来就讲标准部署，也就是分布式部署，有耐心的同学也可以直接去github看作者写的"),s("a",{attrs:{href:"https://github.com/ctripcorp/apollo/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E9%83%A8%E7%BD%B2%E6%8C%87%E5%8D%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式部署指南"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("先介绍一下环境依赖，Linux服务器(建议CentOS7)，MySQL(版本要求:5.6.5+)，部署的服务器需要安装JDK环境(java 1.8+)。")]),t._v(" "),s("p",[t._v("这里有两种安装方式，一种是下载安装包，另一种是通过源码构建。一般如果不需要对Apollo定制开发，直接用安装包部署即可。我这里演示的就是安装包部署的方式。")]),t._v(" "),s("h2",{attrs:{id:"_3-1-获取安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-获取安装包"}},[t._v("#")]),t._v(" 3.1 获取安装包")]),t._v(" "),s("p",[t._v("先到"),s("a",{attrs:{href:"https://github.com/ctripcorp/apollo/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("下载安装包。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_6.png",alt:""}})]),t._v(" "),s("p",[t._v("下载后解压，如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_7.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-2-创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-创建数据库"}},[t._v("#")]),t._v(" 3.2 创建数据库")]),t._v(" "),s("p",[t._v("使用MySQL数据库(版本要求:5.6.5+)。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-1-创建apolloportaldb数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-创建apolloportaldb数据库"}},[t._v("#")]),t._v(" 3.2.1 创建ApolloPortalDB数据库")]),t._v(" "),s("p",[t._v("使用"),s("a",{attrs:{href:"https://github.com/ctripcorp/apollo/blob/master/scripts/sql/apolloportaldb.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("github上面的sql脚本"),s("OutboundLink")],1),t._v("创建ApolloPortalDB数据库，导入相关的表以及数据。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_8.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-2-创建apolloconfigdb数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-创建apolloconfigdb数据库"}},[t._v("#")]),t._v(" 3.2.2 创建ApolloConfigDB数据库")]),t._v(" "),s("p",[t._v("使用"),s("a",{attrs:{href:"https://github.com/ctripcorp/apollo/blob/master/scripts/sql/apolloportaldb.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("github上面的sql脚本"),s("OutboundLink")],1),t._v("创建ApolloConfigDB数据库，导入相关的表以及数据。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_9.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-3-修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-修改配置"}},[t._v("#")]),t._v(" 3.3 修改配置")]),t._v(" "),s("p",[t._v("需要改一下数据库连接信息，路径在/config下。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-1-apollo-configservice配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-apollo-configservice配置"}},[t._v("#")]),t._v(" 3.3.1 apollo-configservice配置")]),t._v(" "),s("p",[t._v("修改apollo-configservice的数据库连接信息application-github.properties，如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DataSource")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://192.168.0.107:3306/ApolloConfigDB?characterEncoding=utf8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("账号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("密码")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3-3-2-apollo-adminservice配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-apollo-adminservice配置"}},[t._v("#")]),t._v(" 3.3.2 apollo-adminservice配置")]),t._v(" "),s("p",[t._v("修改apollo-adminservice的数据库连接信息application-github.properties，如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DataSource")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://192.168.0.107:3306/ApolloConfigDB?characterEncoding=utf8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("账号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("密码")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3-3-3-apollo-portal配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-apollo-portal配置"}},[t._v("#")]),t._v(" 3.3.3 apollo-portal配置")]),t._v(" "),s("p",[t._v("修改apollo-portal的数据库连接信息application-github.properties，如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DataSource")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://192.168.0.107:3306/ApolloPortalDB?characterEncoding=utf8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("账号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("密码")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("再修改apollo-env.properties配置，这是关于环境配置的，如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("local.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://localhost:8080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 开发环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dev.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://192.168.0.107:8080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 不需要配置的环境参考${lpt_meta}配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fat.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${fat_meta}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uat.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${uat_meta}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lpt.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${lpt_meta}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pro.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${pro_meta}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"_3-4-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-部署"}},[t._v("#")]),t._v(" 3.4 部署")]),t._v(" "),s("p",[t._v("然后把三个文件夹都上传到Linux服务器。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_10.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-1-部署发布apollo-configservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-部署发布apollo-configservice"}},[t._v("#")]),t._v(" 3.4.1 部署发布apollo-configservice")]),t._v(" "),s("p",[t._v("部署发布服务有顺序，首先发布apollo-configservice，直接执行scripts/startup.sh。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_11.png",alt:""}})]),t._v(" "),s("p",[t._v("有可能会出现这个错误(我就出现了)，不用担心，实际上进程还没有结束，还在启动，我们可以到日志记录的文件夹(下图来源于startup.sh脚本)查看日志。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_12.png",alt:""}})]),t._v(" "),s("p",[t._v("启动时间比较长，因为这个服务包括启动Eureka注册中心，需要耐心等待。观察apollo-configservice.log文件，当看到如下信息后，表示启动成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_13.png",alt:""}})]),t._v(" "),s("p",[t._v("Eureka注册中心启动成功，可以打开http://192.168.0.107:8080/查看：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_14.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-2-部署发布apollo-adminservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-部署发布apollo-adminservice"}},[t._v("#")]),t._v(" 3.4.2 部署发布apollo-adminservice")]),t._v(" "),s("p",[t._v("接着发布apollo-adminservice，直接执行scripts/startup.sh。查看日志的方式跟上面一样。启动成功后，可以看到Eureka的服务列表中多了一个服务。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_15.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-3-部署发布apollo-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-部署发布apollo-portal"}},[t._v("#")]),t._v(" 3.4.3 部署发布apollo-portal")]),t._v(" "),s("p",[t._v("接着发布apollo-portal，直接执行scripts/startup.sh。portal是提供Web界面的服务，所以启动成功后，可以打开http://192.168.0.107:8070/登录web界面，默认账号密码是apollo/admin。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_16.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_17.png",alt:""}})]),t._v(" "),s("p",[t._v("到此，安装就完成了！")]),t._v(" "),s("h1",{attrs:{id:"四、springboot整合apollo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、springboot整合apollo"}},[t._v("#")]),t._v(" 四、SpringBoot整合Apollo")]),t._v(" "),s("p",[t._v("接下来，整一个Demo(相当于java客户端)，使用SpringBoot整合Apollo，实现动态读取配置。")]),t._v(" "),s("h2",{attrs:{id:"_4-1-mave依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-mave依赖"}},[t._v("#")]),t._v(" 4.1 Mave依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.ctrip.framework.apollo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("apollo-client"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"_4-2-appid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-appid"}},[t._v("#")]),t._v(" 4.2 AppId")]),t._v(" "),s("p",[t._v("在classpath路径下，创建/META-INF/app.properties文件。如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用的唯一标识，后面创建工程需要用到")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("app.id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("apollo-demo")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_4-3-apollo-meta-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-apollo-meta-server"}},[t._v("#")]),t._v(" 4.3 Apollo Meta Server")]),t._v(" "),s("p",[t._v("其实就是配置Apollo服务器的地址。官网提供的方式有很多，我这里选其中一种比较简单的方式。在classpath路径下创建apollo-env.properties文件，配置如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dev.meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://192.168.0.107:8080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fat.meta=http://apollo.fat.xxx.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uat.meta=http://apollo.uat.xxx.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pro.meta=http://apollo.xxx.com")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"_4-4-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-environment"}},[t._v("#")]),t._v(" 4.4 Environment")]),t._v(" "),s("p",[t._v("其实是配置环境，因为上面可以配置四种环境，这里配置具体选择哪个环境。这里介绍两种方式：")]),t._v(" "),s("p",[t._v("第一种通过Java System Property。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_18.png",alt:""}})]),t._v(" "),s("p",[t._v("第二种通过配置文件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_19.png",alt:""}})]),t._v(" "),s("p",[t._v("到相对应的路径下创建server.properties，配置如下：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("DEV")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_4-5-enableapolloconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-enableapolloconfig"}},[t._v("#")]),t._v(" 4.5 @EnableApolloConfig")]),t._v(" "),s("p",[t._v("在启动类上加上注解@EnableApolloConfig。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启apollo配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableApolloConfig")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApolloDemoApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApolloDemoApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"_4-6-测试类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-测试类"}},[t._v("#")]),t._v(" 4.6 测试类")]),t._v(" "),s("p",[t._v("这样就完成了，接下来再创建一个Controller进行测试一下。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApolloController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//冒号后面的是默认值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${configValue:default}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" configValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apollo/getConfig"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"_4-7-管理界面创建对应的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-管理界面创建对应的配置"}},[t._v("#")]),t._v(" 4.7 管理界面创建对应的配置")]),t._v(" "),s("p",[t._v("第一步，创建项目。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_21.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_20.png",alt:""}})]),t._v(" "),s("p",[t._v("第二步，创建配置。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210121160921.png",alt:""}})]),t._v(" "),s("p",[t._v("第三步，发布。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_23.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_4-8-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-测试"}},[t._v("#")]),t._v(" 4.8 测试")]),t._v(" "),s("p",[t._v("启动项目apollo-demo，然后请求路径http://localhost:8888/apollo/getConfig，可以看到相应信息。")]),t._v(" "),s("h1",{attrs:{id:"五、架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、架构设计"}},[t._v("#")]),t._v(" 五、架构设计")]),t._v(" "),s("p",[t._v("讲完了安装和SpringBoot整合的demo后，我们是时候探究一下原理，为什么要有三个服务，又是如何做到配置信息发布后，客户端实时获取到最新的配置的。继续往下看。")]),t._v(" "),s("p",[t._v("首先看一张官网的架构设计图。")]),t._v(" "),s("h2",{attrs:{id:"_5-1-基础模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-基础模型"}},[t._v("#")]),t._v(" 5.1 基础模型")]),t._v(" "),s("p",[t._v("作者在官网上有个基础模型的架构图，忽略掉很多细节后实际上非常简单：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_26.png",alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("用户在配置中心对配置进行修改并发布。")]),t._v(" "),s("li",[t._v("配置中心通知Apollo客户端有配置更新。")]),t._v(" "),s("li",[t._v("Apollo客户端从配置中心拉取最新的配置、更新本地配置并通知到应用。")])]),t._v(" "),s("h2",{attrs:{id:"_5-2-架构模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-架构模块"}},[t._v("#")]),t._v(" 5.2 架构模块")]),t._v(" "),s("p",[t._v("如果我们把Apollo配置中心服务端展开的话，架构图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_27.png",alt:""}})]),t._v(" "),s("p",[t._v("看到这里，整个架构看起来就比较清晰了。接下来从上往下简单介绍一下：")]),t._v(" "),s("p",[s("strong",[t._v("Portal服务")]),t._v("：提供Web界面供用户管理配置，通过MetaServer获取AdminService服务列表（IP+Port），通过IP+Port访问AdminService服务。")]),t._v(" "),s("p",[s("strong",[t._v("Client")]),t._v("：实际上就是我们创建的SpringBoot项目，引入ApolloClient的maven依赖，为应用提供配置获取、实时更新等功能。")]),t._v(" "),s("p",[s("strong",[t._v("Meta Server")]),t._v("：从Eureka获取Config Service和Admin Service的服务信息，相当于是一个Eureka Client。主要是为了封装服务发现的细节，对Portal和Client而言，永远通过一个Http接口获取Admin Service和Config Service的服务信息，而不需要关心背后实际的服务注册和发现组件。Meta Server只是一个逻辑角色，在部署时和Config Service是在一个JVM进程中的，所以IP、端口和Config Service一致。")]),t._v(" "),s("p",[s("strong",[t._v("Eureka")]),t._v("：注册中心。Config Service和Admin Service会向Eureka注册服务。为了简单起见，目前Eureka在部署时和Config Service是在一个JVM进程中的。")]),t._v(" "),s("p",[s("strong",[t._v("Config Service")]),t._v("：提供配置获取接口。提供配置更新推送接口(基于Http long polling)。服务对象为Apollo客户端(Client)。")]),t._v(" "),s("p",[s("strong",[t._v("Admin Service")]),t._v("：提供配置管理接口。提供配置发布、修改等接口。服务对象为Portal。")]),t._v(" "),s("h2",{attrs:{id:"_5-3-配置发布后的实时推送设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-配置发布后的实时推送设计"}},[t._v("#")]),t._v(" 5.3 配置发布后的实时推送设计")]),t._v(" "),s("p",[t._v("上面讲完各个角色的用途，那这些角色是怎么配合一起工作的呢，我们来看一张图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_28.png",alt:""}})]),t._v(" "),s("p",[t._v("上图简要描述了配置发布的大致过程：")]),t._v(" "),s("ol",[s("li",[t._v("用户在Portal操作配置发布。")]),t._v(" "),s("li",[t._v("Portal调用Admin Service的接口操作发布。")]),t._v(" "),s("li",[t._v("Admin Service发布配置后，发送ReleaseMessage给各个Config Service。")]),t._v(" "),s("li",[t._v("Config Service收到ReleaseMessage后，通知对应的客户端(Client)。")])]),t._v(" "),s("p",[t._v("关键点在于AdminService发送ReleaseMessage给ConfigService，这一步是如何异步发送的呢，一般异步发送我们很容易想到消息队列，但是实际上我们在安装部署时并没有使用到消息队列。")]),t._v(" "),s("p",[t._v("答案在于：")]),t._v(" "),s("ul",[s("li",[t._v("Admin Service在配置发布后会往ReleaseMessage表插入一条消息记录，消息内容就是配置发布的AppId+Cluster+Namespace。")]),t._v(" "),s("li",[t._v("然后Config Service有一个线程会每秒扫描一次ReleaseMessage表，看看是否有新的消息记录。")]),t._v(" "),s("li",[t._v("Config Service如果发现有新的消息记录，那么就会通知到所有的消息监听器，监听器得到配置发布的AppId+Cluster+Namespace后，会通知对应的客户端。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_29.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("在实现上，考虑到Apollo的实际使用场景，以及为了尽可能减少外部依赖，我们没有采用外部的消息中间件，而是通过数据库实现了一个简单的消息队列。----来自官网")])]),t._v(" "),s("h2",{attrs:{id:"_5-4-高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-高可用"}},[t._v("#")]),t._v(" 5.4 高可用")]),t._v(" "),s("p",[t._v("Apollo为了实现高可用，服务端使用了Eureka作为注册中心，这一点在官网也有谈到。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_30.png",alt:""}})]),t._v(" "),s("p",[t._v("除此之外，客户端也做了高可用的一些架构设计，比如本地文件缓存。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_31.png",alt:""}})]),t._v(" "),s("p",[t._v("这个缓存文件默认就放在C:\\opt\\data\\apollo-demo\\config-cache路径下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.lovebilibili.com/apollo_32.png",alt:""}})]),t._v(" "),s("p",[t._v("这个文件的作用是，在遇到服务不可用，或网络不通的时候，依然能从本地恢复配置。")]),t._v(" "),s("h1",{attrs:{id:"六、絮叨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、絮叨"}},[t._v("#")]),t._v(" 六、絮叨")]),t._v(" "),s("p",[t._v("这篇文章就讲到这里。其实Apollo配置中心算是一个比较容易上手，架构相对比较清晰的开源项目。目前很多互联网公司都在推行微服务架构，在使用微服务的架构时，配置信息就会成倍数增加，因为配置实际上代表的是“控制”，很多时候程序的运行是靠配置去决定行为的，而且要能实时生效的，所以就必须要有个配置中心。")]),t._v(" "),s("p",[t._v("有些公司体量大一些会自己公司开发一套配置中心，其实实现起来也不是特别难，使用MQ消息队列+数据库，再自己简单地搭了一个增删改查、刷新配置的web页面，就完成了一个配置中心。")]),t._v(" "),s("p",[t._v("但是我觉得如果有现成的开源的会更加舒服，不用自己造轮子耗费时间，精力，而且选一些像Apollo这种比较大众主流的技术框架，学习成本也比较低，网上有很多资料。")])])}),[],!1,null,null,null);a.default=r.exports}}]);