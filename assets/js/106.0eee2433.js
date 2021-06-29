(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{533:function(n,a,e){"use strict";e.r(a);var s=e(15),t=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"传统网站部署的流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统网站部署的流程"}},[n._v("#")]),n._v(" 传统网站部署的流程")]),n._v(" "),e("p",[n._v("传统的网站部署，大家在运维过程中，网站部署是运维的工作之一，网站部署的流程大致分为：")]),n._v(" "),e("p",[n._v("需求分析—原型设计—开发代码—提交测试—内网部署—确认上线—备份数据—外网更新-最终测试，如果发现外网部署的代码有异常，需要及时回滚。")]),n._v(" "),e("p",[n._v("（如下图所示）")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210614232450.png",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"目前主流网站部署的流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目前主流网站部署的流程"}},[n._v("#")]),n._v(" 目前主流网站部署的流程")]),n._v(" "),e("p",[n._v("目前主流网站部署方法，通过Hudson/Jenkins工具平台实现全自动部署+测试，是一个可扩展的持续集成引擎，是一个开源软件项目，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。Jenkins非常易于安装和配置，简单易用。\n简单来说方便如下人员：")]),n._v(" "),e("ol",[e("li",[n._v("开发人员：写好代码，不需要自己进行源码编译、打包等工作，直接将代码分支存放在SVN、GIT仓库即可。")]),n._v(" "),e("li",[n._v("运维人员：减轻人工干预的错误率，同时解放运维人员繁杂的上传代码、手动备份、更新。")]),n._v(" "),e("li",[n._v("测试人员：可以通过jenkins进行简单的代码及网站测试。")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210614232829.png",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"jenkins持续集成简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins持续集成简介"}},[n._v("#")]),n._v(" Jenkins持续集成简介")]),n._v(" "),e("p",[n._v("持续集成(Continuous Integration)是一种软件开发实践，对于提高软件开发效率并保障软件开发质量提供了理论基础。Jenkins 是一个开源软件项目，旨在提供一个开放易用的软件平台，使持续集成变成可能。本文正是从持续集成的基本概念入手，通过具体实例，介绍了如何基于 Jenkins 快速搭建持续集成环境。")]),n._v(" "),e("p",[n._v("Jenkins是一个可扩展的持续集成引擎，是一个开源软件项目，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。Jenkins非常易于安装和配置，简单易用。")]),n._v(" "),e("h2",{attrs:{id:"持续集成意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成意义"}},[n._v("#")]),n._v(" 持续集成意义")]),n._v(" "),e("ol",[e("li",[n._v("持续集成中的任何一个环节都是自动完成的，无需太多的人工干预，有利于减少重复过程以节省时间、费用和工作量；")]),n._v(" "),e("li",[n._v("持续集成保障了每个时间点上团队成员提交的代码是能成功集成的。换言之，任何时间点都能第一时间发现软件的集成问题，使任意时间发布可部署的软件成为了可能；")]),n._v(" "),e("li",[n._v("持续集成还能利于软件本身的发展趋势，这点在需求不明确或是频繁性变更的情景中尤其重要，持续集成的质量能帮助团队进行有效决策，同时建立团队对开发产品的信心。")])]),n._v(" "),e("h2",{attrs:{id:"持续集成组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成组件"}},[n._v("#")]),n._v(" 持续集成组件")]),n._v(" "),e("ol",[e("li",[n._v("一个自动构建过程，包括自动编译、分发、部署和测试；")]),n._v(" "),e("li",[n._v("一个代码存储库，即需要版本控制软件来保障代码的可维护性，同时作为构建过程的素材库，例如SVN、GIT代码库；")]),n._v(" "),e("li",[n._v("一个jenkins持续集成服务器(123.57.11.203服务器就是一个配置简单和使用方便的持续集成服务器)")])]),n._v(" "),e("h2",{attrs:{id:"jenkins安装部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins安装部署"}},[n._v("#")]),n._v(" Jenkins安装部署")]),n._v(" "),e("p",[n._v("地址http://mirrors.jenkins-ci.org/下载适合的Jenkins版本。")]),n._v(" "),e("p",[n._v("Linux稳定版的Jenkins地址为：")]),n._v(" "),e("p",[e("a",{attrs:{href:"http://ftp.yz.yamagata-u.ac.jp/pub/misc/jenkins/war-stable/2.289.1/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Index of /pub/misc/jenkins/war-stable/2.289.1 (yamagata-u.ac.jp)"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("由于Jenkins属于一个JAVA 代码，需要java容器才能运行jenkins，所以需要安装JDK+Tomcat，方法如下：")]),n._v(" "),e("ol",[e("li",[n._v("JAVA JDK安装")])]),n._v(" "),e("p",[n._v("下载相应的jdk软件包，然后解压安装")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("tar -xzf  jdk-7u25-linux-x64.tar.gz  ;mkdir -p /usr/java/ ;mv jdk1.7.0_25/ /usr/java/\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("然后配置环境变量，这样可以任何地方引用jdk，如下配置：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("vi /etc/profile\nexport JAVA_HOME=/usr/java/jdk1.7.0_25\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\nexport PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOMR/bin\n#source /etc/profile   #使环境变量马上生效\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("Tomcat安装配置")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("wget http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-6/v6.0.45/bin/apache-tomcat-6.0.45.tar.gz \ntar xzf  apache-tomcat-6.0.45.tar.gz\nmv apache-tomcat-6.0.45  /usr/local/tomcat\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("把得到的war包直接扔到tomcat下webapps/ROOT/下，启动tomcat，Jenkins就安装完毕！")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("rm  -rf  /usr/local/tomcat/webapps/* ;\nmkdir  -p /usr/local/tomcat/webapps/ROOT/;\nmv jenkins.war /usr/local/tomcat/webapps/ROOT/;\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("http://localhost:8080/jenkins/  启动jenkins如下图所示")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210618214925.png",alt:""}})]),n._v(" "),e("p",[n._v("获取到密码后输入后如下图，提示安装插件，可以跳过。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210618215407.png",alt:""}})]),n._v(" "),e("p",[n._v("如果选择安装会出现如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/QQ%E6%88%AA%E5%9B%BE20210618221043.png",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"jenkins配置演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins配置演示"}},[n._v("#")]),n._v(" Jenkins配置演示")]),n._v(" "),e("p",[n._v("在学习Jenkins之前我们先来了解几个常用的开发代码、构建代码的几个名词：MAKE、ANT、MAVEN、Eclipse、Jenkins等")]),n._v(" "),e("ol",[e("li",[n._v("Make工具")])]),n._v(" "),e("p",[n._v("Linux或者Windows最原始的编译工具，在linux下编译程序常用make（Windows下对应的工具为nmake)。它负责组织构建的过程，负责指挥编译器如何编译，连接器如何连接，最后生成一个可用的文件。")]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[n._v("Ant工具")])]),n._v(" "),e("p",[n._v("Make编译一些比较复杂的工具使用起来不灵活，语法很难理解，延伸出ant工具。")]),n._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[n._v("Maven工具")])]),n._v(" "),e("p",[n._v("Maven工具是对ant工具的进一步改进，在make工具中，如果我们要编译某些源文件，首先要安装编译器等工具。有时候需要不同版本的编译器，在java的编译器需要不同的各种包的支持，如果把每个包都下载下来，在makefile中进行配置制定，当需要的包非常多时，很难管理。")]),n._v(" "),e("p",[n._v("Maven像make一样，是个构建(build)工具，它如何调用各种不同的编译器连接器等呢？使用Maven plugin (maven 插件）。")]),n._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[n._v("Jenkins工具")])]),n._v(" "),e("p",[n._v("Maven已经很强大了，那Jenkins是个什么东西？")]),n._v(" "),e("p",[n._v("其实Maven还是不够强大。Maven可以控制编译，控制连接，可以生成各种报告，可以进行代码测试。")]),n._v(" "),e("p",[n._v("可是如何控制这个流程呢？ 编译还是先连接？先进行代码测试，还是先生成报告？可以使用脚本来对maven进行控制，实现这些流程的控制。")]),n._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[n._v("Eclipse工具")])]),n._v(" "),e("p",[n._v("Eclipse 是一个开放源代码的、基于Java的可扩展开发平台。就其本身而言，它只是一个框架和一组服务，用于通过插件组件构建开发环境。幸运的是，Eclipse 附带了一个标准的插件集，包括Java开发工具（Java Development Kit，JDK）。")]),n._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[e("a",{attrs:{href:"http://baike.baidu.com/view/336103.htm",target:"_blank",rel:"noopener noreferrer"}},[n._v("Maven"),e("OutboundLink")],1),n._v("项目对象模型POM (Project Object Model)，可以通过一小段描述信息来管理项目的构建，报告和文档的软件"),e("a",{attrs:{href:"http://baike.baidu.com/view/3169783.htm",target:"_blank",rel:"noopener noreferrer"}},[n._v("项目管理工具"),e("OutboundLink")],1),n._v("。Maven 除了以程序构建能力为特色之外，还提供高级项目管理工具。")])]),n._v(" "),e("li",[e("p",[n._v("POM是Maven项目中的文件，使用XML表示，名称叫做pom.xml。在Maven中，当谈到Project的时候，不仅仅是一堆包含代码的文件。一个Project往往包含一个配置文件，包括了与开发者有关的，缺陷跟踪系统，组织与许可，项目的URL，项目依赖，以及其他。它包含了所有与这个项目相关的东西。事实上，在Maven世界中，project可以什么都没有，甚至没有代码，但是必须包含pom.xml文件。")])]),n._v(" "),e("li",[e("p",[n._v("由于 Maven 的缺省构建规则有较高的可重用性，所以常常用两三行 Maven 构建脚本就可以构建简单的项目。由于 Maven 的面向项目的方法，许多 Apache Jakarta 项目发文时使用 Maven，而且公司项目采用 Maven 的比例在持续增长。")])])]),n._v(" "),e("p",[n._v("安装JDK及MAVEN工具,并在Jenkins平台进行设置,如下步骤")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("wget http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz \ntar -xzf apache-maven-3.3.9-bin.tar.gz ;mv apache-maven-3.3.9 /usr/maven/\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/20210618122.png",alt:""}})]),n._v(" "),e("p",[n._v("然后设置如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/20210618123.png",alt:""}})]),n._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[e("p",[n._v("返回首页，第一次进入里面没有数据，我们需要创建项目工程job。")])]),n._v(" "),e("li",[e("p",[n._v("点击左上角的new job，在new job页面需要选择job的类型，Jenkins支持几种类型，我们选择“构建一个maven项目”，Job名为：jfedu，如图所示：")])])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/20210618124.png",alt:""}})]),n._v(" "),e("ol",{attrs:{start:"11"}},[e("li",[e("p",[n._v("点击OK按钮后，进会进入详细配置界面，详细配置界面的配置项很多，不过不用怕，大部分使用默认配置就可以了，下面就说说我们需要修改的几个地方：")])]),n._v(" "),e("li",[e("p",[n._v("Source Code Management")])])]),n._v(" "),e("p",[n._v("因为我们使用GIT管理源码，所以这里选择GIT，并在Repository URL中输入我们的GIT地址：")]),n._v(" "),e("p",[n._v("git@github.com:Ezuy-Lee/xpai.git")]),n._v(" "),e("p",[n._v("输入git库的URL地址后，Jenkins会自动验证地址，并给予提示。")]),n._v(" "),e("p",[n._v("如果需要git用户名和密码，输入即可")]),n._v(" "),e("ol",{attrs:{start:"13"}},[e("li",[e("p",[n._v("配置自动构建的计划，假设我们想让项目晚上8点自动构建一次，只需要在Build Triggers中选择Build periodically，并在Schedule中输入 0 20 * * *，我配置的是每晚8点自动构建：")])]),n._v(" "),e("li",[e("p",[n._v("配置到这里，可能有人发现在Build配置节点，有红色错误信息，提示：")])])]),n._v(" "),e("p",[e("strong",[n._v("Jenkins needs to know where your Maven2 is installed.\nPlease do so from the system configuration.")])]),n._v(" "),e("p",[n._v('这是因为Jenkins找不到maven的原因，点击"system configuration"，是system configuration的maven配置中添加maven目录就OK；')]),n._v(" "),e("h2",{attrs:{id:"jenkins手动构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins手动构建"}},[n._v("#")]),n._v(" Jenkins手动构建")]),n._v(" "),e("p",[n._v('在经过上面的配置后，回到Jenkins首页，在首页可以看到刚才添加的1个job，点击某1个job后后面的"Schedule a build"图片手动构建，点击完后，会在左边的Build Queue或者'),e("a",{attrs:{href:"http://localhost:8080/hudson/computer/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Build Executor Status"),e("OutboundLink")],1),n._v(' 显示正在构建的任务，在自动构建完后，刷新页面，就可以看到构建结果了，如何某个项目构建失败，点击项目后面的构建数字(从1开始递增)进入项目的"'),e("a",{attrs:{href:"http://localhost:8080/hudson/job/Entities/lastSuccessfulBuild/console",target:"_blank",rel:"noopener noreferrer"}},[n._v("Console Output"),e("OutboundLink")],1),n._v(' "可以查看项目构建失败的原因。当然我们也可以配置把构建失败的结果发到邮箱。')]),n._v(" "),e("h2",{attrs:{id:"jenkins脚本自动化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins脚本自动化"}},[n._v("#")]),n._v(" Jenkins脚本自动化")]),n._v(" "),e("p",[n._v("1）点击工程名称-配置-构建后操作-设置Jenkins编译打包完后，war包存放的位置，如下图：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/12345.png",alt:""}})]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[n._v("然后输入如下配置：**/target/*.war")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/100122222.png",alt:""}})]),n._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[n._v("如上-构建触发器-一个构建步骤，选择Add-post-build step-Excute shell")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1901121.png",alt:""}})]),n._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[n._v("然后把脚本内容写入即可")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/100345.png",alt:""}})]),n._v(" "),e("p",[n._v("代码如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("rm -rf  /root/.jenkins/workspace/jfedu/target/edu.war\ncp /root/.jenkins/workspace/jfedu/target/edu.war  /root/.jenkins/jobs/jfedu/builds/lastSuccessfulBuild/archive/target/\nssh  root@47.110.229.77  'bash -x -s' < /data/sh/auto_deploy.sh\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("h2",{attrs:{id:"自动部署脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动部署脚本"}},[n._v("#")]),n._v(" 自动部署脚本")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#!/bin/bash\n#Auto deploy Tomcat for jenkins perf\n#by author wugk 2016-07-06 \nexport JAVA_HOME=/usr/java/jdk1.6.0_25\nTOMCAT_PID=`/usr/sbin/lsof -n -P -t -i :10013`\nTOMCAT_DIR="/usr/local/tomcat/"\nFILES="jfedu.war"\nDES_DIR="/export/data/tomcatRoot/ptest.jd.com/"\nDES_URL="http://123.57.11.203:8080/job/Ptest_Online/lastSuccessfulBuild/target"\nBAK_DIR="/export/backup/`date +%Y%m%d-%H%M`"\n[ -n "$TOMCAT_PID" ] && kill -9 $TOMCAT_PID\ncd $DES_DIR\nrm -rf $FILES\nmkdir -p $BAK_DIR;\\cp -a $DES_DIR/* $BAK_DIR/\nrm -rf $DES_DIR/*\nwget $DES_URL/$FILES\n/usr/java/jdk1.6.0_25/bin/jar  -xvf  $FILES\n####################\ncd $TOMCAT_DIR;rm -rf work\n/bin/sh $TOMCAT_DIR/bin/start.sh\nsleep 10\ntail -n 50 $TOMCAT_DIR/logs/catalina.out\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])]),e("p",[n._v("提示：如果有多台，怎么去部署，可以发散思维哟！！！可以考虑结合底层saltstack、Ansible工具去实现。")]),n._v(" "),e("h2",{attrs:{id:"jenkins插件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins插件安装"}},[n._v("#")]),n._v(" Jenkins插件安装")]),n._v(" "),e("p",[n._v('在jenkins页面“系统管理”--\x3e“管理插件”--\x3e"可选插件"中搜索email-ext-plugin插件选择并安装，也可以点击“高级”-然后手动上传安装。')]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/chajiananzhuang.png",alt:""}})]),n._v(" "),e("p",[n._v("注：也可以手动下载插件安装，到官网下载插件，然后将下载的插件传到服务器jenkins根目录下的plugins目录，即~/.jenkins/plugins目录，重启jenkins即可")]),n._v(" "),e("p",[n._v("官网插件下载地址https://wiki.jenkins-ci.org/display/JENKINS/Plugins")]),n._v(" "),e("p",[n._v("如下我们来安装Email-ext-Plugin邮件插件包，安装方法如下：")]),n._v(" "),e("p",[n._v("首先去Jenkins插件官网下载email-ext和token-macro、email-template")]),n._v(" "),e("p",[n._v("可以搜索某个插件，输入插件名称即可：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/20210618125123.png",alt:""}})]),n._v(" "),e("p",[n._v("分别从如下地址下载三个插件，然后上传到Jenkins，实现安装：")]),n._v(" "),e("p",[n._v("https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin")]),n._v(" "),e("p",[n._v("https://wiki.jenkins-ci.org/display/JENKINS/Token+Macro+Plugin")]),n._v(" "),e("p",[n._v("https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+Template+Plugin")]),n._v(" "),e("p",[n._v("如下图，先安装token插件：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/emailchajiananzhuang1.png",alt:""}})]),n._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/emailchajiananzhuang2.png",alt:""}})]),n._v(" "),e("p",[n._v("安装完成后，刷新Jenkins WEB界面即可。")]),n._v(" "),e("p",[n._v("如上是安装Jenkins插件的方法，其他GIT插件、Publish Over插件安装方法一样。")]),n._v(" "),e("h2",{attrs:{id:"jenkins邮件设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins邮件设置"}},[n._v("#")]),n._v(" Jenkins邮件设置")]),n._v(" "),e("p",[n._v("Jenkins持续集成,当我们自动打包部署完,我们可以发送一封邮件给相关的负责人,接下来带大家一起来看一下Jenkins持续集成邮件设置,邮件设置分为如下几个步骤:\n构建完成后，告知构建信息及结果。主要使用到两个插件：Email Extension Plugin、Email Extension Template Plugin（上面，我们已经安装完这3个插件，这里可以忽略不需要再次安装）")]),n._v(" "),e("p",[n._v("常见参数如下：\nSMTP server：设置邮件提供商的SMTP地址，mail.jfedu.net\nDefault Content Type：内容展现的格式，一般选择HTML\nDefault Recipients：默认收件人\nUse SMTP Authentication：使用SMTP身份验证，点开Default user E-mail suffix下面的高级按钮才能看到，选中。\nUser Name：邮件发送账户的用户名。\nPassword：邮件发送账户的密码。\nSMTP port：SMTP端口。")]),n._v(" "),e("p",[e("strong",[n._v("1)")]),n._v("    首先要设置Jenkins发送邮件的发送者")]),n._v(" "),e("p",[e("strong",[n._v("2)")]),n._v("    然后选择Jenkins Location设置如下：（添加系统管理员邮件）")]),n._v(" "),e("p",[e("strong",[n._v("3)")]),n._v("    设置发送邮件的SMTP、邮箱后缀，发送类型html、接收者或者抄送者")]),n._v(" "),e("p",[e("strong",[n._v("4)")]),n._v("    设置邮件的标题")]),n._v(" "),e("p",[n._v("Default Subject内容如下：")]),n._v(" "),e("p",[n._v("构建通知：$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS")]),n._v(" "),e("p",[e("strong",[n._v("5)")]),n._v("    设置邮件的内容")]),n._v(" "),e("p",[n._v("Default Content内容如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<hr/>\n<h3>(本邮件是程序自动下发的，请勿回复！)</h3><hr/>\n\n项目名称：$PROJECT_NAME<br/><hr/>\n\n构建编号：$BUILD_NUMBER<br/><hr/>\n\n构建状态：$BUILD_STATUS<br/><hr/>\n\n触发原因：${CAUSE}<br/><hr/>\n\n构建日志地址：<a href="${BUILD_URL}console">${BUILD_URL}console</a><br/><hr/>\n\n构建地址：<a href="$BUILD_URL">$BUILD_URL</a><br/><hr/>\n\n变更集:${JELLY_SCRIPT,template="html"}<br/><hr/>\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br")])]),e("p",[e("strong",[n._v("6)")]),n._v("    工程项目邮件设置")]),n._v(" "),e("p",[n._v("选择trigger阀值")]),n._v(" "),e("p",[e("strong",[n._v("7)")]),n._v("    构建邮件验证")]),n._v(" "),e("h2",{attrs:{id:"jenkins多实例配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins多实例配置"}},[n._v("#")]),n._v(" Jenkins多实例配置")]),n._v(" "),e("p",[n._v("参考文章：")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/deny/p/10187078.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Jenkins多实例配置 - 流年晕开时光 - 博客园 (cnblogs.com)"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/sj349781478/article/details/106299741",target:"_blank",rel:"noopener noreferrer"}},[n._v("Jenkins持续集成企业实战系列之Jenkins多实例配置_Jack Sun_的博客-CSDN博客_jenkins多实例配置"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"jenkins整合saltstack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins整合saltstack"}},[n._v("#")]),n._v(" Jenkins整合Saltstack")]),n._v(" "),e("p",[n._v("参考下面文章")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/kami_ochin_akane/article/details/109788422",target:"_blank",rel:"noopener noreferrer"}},[n._v("Jenkins 集成SaltStack_kami_ochin_akane的博客-CSDN博客"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);