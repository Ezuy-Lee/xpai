(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{514:function(e,t,a){"use strict";a.r(t);var r=a(15),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"微服务简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务简介"}},[e._v("#")]),e._v(" 微服务简介")]),e._v(" "),a("p",[e._v("如今微服务倍受关注：文章、博客、社交媒体和会议演讲都在讨论微服务。微服务正在迅速朝着"),a("a",{attrs:{href:"http://www.gartner.com/technology/research/methodologies/hype-cycle.jsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("加德纳技术成熟度曲线（Gartner Hype cycle）"),a("OutboundLink")],1),e._v("的高峰前进。与此同时，也有持怀疑态度的软件社区人员认为微服务没什么新鲜可言。反对者声称它的思想只是面向服务架构（SOA）的重塑。然而，无论是炒作还是怀疑，不可否认，"),a("a",{attrs:{href:"http://microservices.io/patterns/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("微服务架构模式"),a("OutboundLink")],1),e._v("有非常明显的优势 —— 特别是在实施敏捷开发和复杂的企业应用交付方面。")]),e._v(" "),a("p",[e._v("本书的七个章节主要介绍如何设计、构建和部署微服务，这是本书的第一章。在此章节中，你将了解到微服务的由来和其与传统"),a("a",{attrs:{href:"http://microservices.io/patterns/monolithic.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("单体应用模式"),a("OutboundLink")],1),e._v("的区别。这本电子书描述了许多关于微服务架构方面的内容。无论是在项目意义还是实施方面，你都能了解到微服务架构模式的优点与缺点。")]),e._v(" "),a("p",[e._v("我们先来看看为什么要考虑使用微服务。")]),e._v(" "),a("p",[a("a",{attrs:{id:"building-monolithic-applications"}})]),e._v(" "),a("h2",{attrs:{id:"构建单体应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建单体应用"}},[e._v("#")]),e._v(" 构建单体应用")]),e._v(" "),a("p",[e._v("我们假设，你正在开发一个打车应用，打算与 Uber 和 Hailo 竞争。经过初步交流和需求收集，你开始手动或者使用类似 Rails、Spring Boot、Play 或者 Maven 等平台来生成一个新项目。")]),e._v(" "),a("p",[e._v("新应用有一个模块化的"),a("a",{attrs:{href:"https://www.infoq.com/news/2014/10/exploring-hexagonal-architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("六边形架构"),a("OutboundLink")],1),e._v("，如图 1-1 所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1-1.png",alt:""}})]),e._v(" "),a("p",[e._v("应用的核心是由模块实现的业务逻辑，这些模块定义了服务、领域对象和事件。围绕核心的是与外部世界接口对接的适配器。适配器示例包括数据库访问组件、生产和消费消息的消息组件和暴露了 API 或实现了一个 UI 的 web 组件。")]),e._v(" "),a("p",[e._v("尽管应用有一个逻辑模块化架构，但它被作为一个单体进行打包和部署。实际格式取决于应用所用的语言和框架。比如，许多 Java 应用被打包成 WAR 文件部署在如 Tomcat 或者 Jetty 之类的应用服务器上。还有部分 Java 应用被打包成自包含（self-contained）的可执行 JAR。类似地，Rails 和 Node.js 应用被打包成有一定层次结构的目录。")]),e._v(" "),a("p",[e._v("使用这种风格编写的应用很常见，也很容易开发，因为我们的 IDE 和其他工具本身就专注于构建单体应用。这些应用也很容易测试，你可以通过简单地启动并使用如 Selenium 测试包来测试 UI 以轻松地实现端到端（end-to-end）测试。单体应用同样易于部署，你只需拷贝打包好的应用到服务器上。你还可以通过运行多个副本并结合负载均衡来扩展应用。在项目的早期阶段，它可以良好地运作。")]),e._v(" "),a("p",[a("a",{attrs:{id:"marching-toward-monolithic-hell"}})]),e._v(" "),a("h2",{attrs:{id:"走向单体地狱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#走向单体地狱"}},[e._v("#")]),e._v(" 走向单体地狱")]),e._v(" "),a("p",[e._v("不幸的是，这种简单的方式有很大的局限性。成功的应用有一个趋势，随着时间推移而变得越来越臃肿。你的开发团队在每个冲刺阶段都要实现更多的用户需求，这意味着需要添加许多行代码。几年之后，小而简单的应用将逐渐成长成一个[庞大的单体][3]。为了给出一个极端示例，我最近和一位开发者做了交谈，他正在编写一个工具，该工具用于从他们的数百万行代码（lines of code，LOC）应用中分析出数千个 JAR 之间的依赖。我相信这是大量开发者在多年齐心协力下创造出的野兽。")]),e._v(" "),a("p",[e._v("一旦应用成为一个庞大、复杂的单体，你的开发组织可能会陷入了一个痛苦的境地，敏捷开发和交付的任何一次尝试都将原地徘徊。一个主要问题是应用实在非常复杂，它对于任何一个开发人员来说都显得过于庞大，这可以理解。而最终，正确修复 bug 和实现新功能变得非常困难而耗时。此外，这种趋势就像是往下的螺旋。如果基础代码都令人难以理解，那么改变也不会变得正确，你最终得到的将是一个巨大的[泥球][4]。")]),e._v(" "),a("p",[e._v("应用的规模也将减缓发展。应用越大，启动时间越长。我[调查][5]过开发者们的单体应用的大小和性能，一些报告的启动时间为 12 分钟。我也听说过应用启动需要 40 分钟以上的怪事。如果开发人员经常要重启应用服务器，那么很大一部分时间都是在等待中度过，他们的生产力将受到限制。")]),e._v(" "),a("p",[e._v("另一个大问题是，复杂的单体应用本身就是持续部署的障碍。如今，SaaS 应用发展到了可以每天多次将变更推送到生产环境。这对于复杂的单体来说非常困难，因为你需要重新部署整个应用才能更新其中任何一部分。联想我之前提到的漫长启动过程，这也不会是什么好事。此外，因变更所产生的影响通常不是很明确，你很可能需要做大量的手工测试。因此，持续部署是不可能做到的。")]),e._v(" "),a("p",[e._v("当不同模块存在资源需求冲突时，单体应用可能会难以扩展。例如，一个模块可能会执行 CPU 密集型图像处理逻辑，理想情况下是部署在 [Amazon EC2 Compute Optimized 实例][6]中。另一个模块可能是一个内存数据库，最适合部署到 [EC2 Memory-optimized 实例][7]。然而，由于这些模块被部署在一起，你必须在硬件选择上做出妥协。")]),e._v(" "),a("p",[e._v("单体应用的另一个问题是可靠性。因为所有模块都运行在同一进程中。任何模块的一个 bug，比如内存泄漏，都可能会拖垮整个进程。此外，由于应用的所有实例都是相同的，错误将影响到整个应用的可用性。")]),e._v(" "),a("p",[e._v("最后同样重要的是，单体应用使得采用新框架和语言变得非常困难。例如，我们假设你有 200 万行代码使用了 XYZ 框架编写。如果使用较新的 ABC 框架来重写整个应用，这将非常昂贵（时间和成本方面），即使框架非常好。因此，这对于新技术采用是一个非常大的障碍。在项目开始时，你无论选择何种新技术都会感到困扰。")]),e._v(" "),a("p",[e._v("总结一下：你有一个成功的关键业务应用，它已经发展成为一个只有少数开发人员能够理解的巨大单体。它使用了过时、非生产性技术编写，使得招聘优秀开发人员变得非常困难。应用变得难以扩展，不可靠。因此敏捷开发和应用交付是不可能的。")]),e._v(" "),a("p",[e._v("那么你能做些什么呢？")]),e._v(" "),a("p",[a("a",{attrs:{id:"tackling-the-complexity"}})]),e._v(" "),a("h2",{attrs:{id:"微服务-解决复杂问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务-解决复杂问题"}},[e._v("#")]),e._v(" 微服务 — 解决复杂问题")]),e._v(" "),a("p",[e._v("许多如 Amazon、eBay 和 [Netflix][8] 这样的组织，已经采用现在所谓的[微服务架构模式][9]解决了这个问题，而不是构建一个臃肿的单体应用。它的思路是将应用分解成一套较小的互连服务。")]),e._v(" "),a("p",[e._v("一个服务通常实现了一组不同的特性或功能，例如订单管理、客户管理等。每个微服务都是一个迷你应用，它自己的六边形架构包括了业务逻辑以及多个适配器。")]),e._v(" "),a("p",[e._v("一些微服务会暴露一个供其他微服务或应用客户端消费的 API。其他微服务可能实现一个 web UI。在运行时，每个实例通常是一个云虚拟机（virtual machine，VM）或者一个 Docker 容器。")]),e._v(" "),a("p",[e._v("例如，前面描述的系统可能分解成如图 1-2 所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1-2.png",alt:""}})]),e._v(" "),a("p",[e._v("应用的每个功能区域现在都由自己的微服务实现。此外，Web 应用被划分为一组更简单的应用。例如，以我们的出租车为例，一个是乘客的应用，一个是司机的应用。这样更容易为特定的用户、司机、设备或者专门的用例部署不同的场景。每个后端服务暴露一个 REST API，大部分服务消费的 API 由其他服务提供。例如，Driver Management 使用了 Notification 服务器来给司机发送一个可选路线通知。UI 服务调用了其他服务来渲染页面。服务也可以使用异步、基于消息的通信。本电子书后面将会"),a("RouterLink",{attrs:{to:"/01.后端/05.设计模式和架构/3-inter-process-communication.html"}},[e._v("更加详细")]),e._v("介绍服务间通信。")],1),e._v(" "),a("p",[e._v("一些 REST API 也暴露给移动端应用供司机和乘客使用。然而，应用不能直接访问后端服务。相反，他们之间的通信是由一个称为 [API 网关][10]（API Gateway）的中介负责。API 网关负责负载均衡、缓存、访问控制、API 度量和监控，[可以使用 NGINX 来实现][11]。第二章将详细讨论 API 网关。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1-3.png",alt:""}})]),e._v(" "),a("p",[e._v("微服务架构模式相当于此伸缩立方的 Y 轴坐标，此立方是一个来自[《架构即未来》][12]的三维伸缩模型。另外两个坐标轴是由运行多个相同应用副本的负载均衡器组成的 X 轴坐标和 Z 轴坐标（或数据分区），其中请求的属性（例如，一行记录的主键或者客户标识）用于将请求路由到特定的服务器。")]),e._v(" "),a("p",[e._v("应用通常将这三种类型的坐标方式结合一起使用。Y 轴坐标将应用分解成微服务，如图 1-2 所示。")]),e._v(" "),a("p",[e._v("在运行时，X 坐标轴上运行着服务的多个实例，每个服务配合负载均衡器以满足吞吐量和可用性。某些应用也有可能使用 Z 坐标轴来进行分区服务。图 1-4 展示了如何用 Docker 将 Trip Management 服务部署到 Amazon EC2 上运行。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1-4.png",alt:""}})]),e._v(" "),a("p",[e._v("在运行时，Trip Management 服务由多个服务实例组成，每个服务实例是一个 Docker 容器。为了实现高可用，容器在多个云虚拟机上运行。服务实例之前是一个[类似 NGINX 的负载均衡器][13]，用于跨实例分发请求。负载均衡器也可以处理其他问题，如[缓存][14]、[访问控制][15]、[API 度量][16]和[监控][17]。")]),e._v(" "),a("p",[e._v("微服务架构模式明显影响到了应用与数据库之间的关系，与其他共享单个数据库模式（schema）的服务有所不同，其每一个服务都有自己的数据库模式。一方面，这种做法与企业级数据库数据模型的思想相背，此外，它经常导致部分数据冗余。然而，如果你想从微服务中受益，每一个服务都应该有自己的数据库模式，因为它能实现松耦合。图 1-5 展示了数据库架构示例应用。")]),e._v(" "),a("p",[e._v("每个服务都拥有各自的数据库。而且，服务可以使用一种最适合其需求、号称多语言持久架构（polyglot persistence architecture）的数据库。例如，Driver Management，要找到与潜在乘客接近的司机，就必须使用支持高效地理查询的数据库。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/1-5.png",alt:""}})]),e._v(" "),a("p",[e._v("从表面上看，微服务架构模式类似于 SOA。微服务是由一组服务组成。然而，换另一种方式去思考微服务架构模式，它是没有商业化的 SOA，没有集成 [Web 服务规范][18]（WS-*）和企业服务总线（Enterprise Service Bus，ESB）。基于微服务的应用支持更简单的轻量级协议，例如，REST，而不是 WS-*。它们也尽量避免使用 ESB，而是实现微服务本身有类似 ESB 的功能。微服务架构也拒绝了 SOA 的其他部分，例如，数据访问[规范模式][19]概念。")]),e._v(" "),a("p",[a("a",{attrs:{id:"the-benefits-of-microservices"}})]),e._v(" "),a("h2",{attrs:{id:"微服务的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的优点"}},[e._v("#")]),e._v(" 微服务的优点")]),e._v(" "),a("p",[e._v("微服务架构模式有许多非常好的地方。第一，它解决了复杂问题。它把可能会变得庞大的单体应用分解成一套服务。虽然功能数量不变，但应用已经被分解成可管理的块或者服务。每个服务都有一个明确的边界定义方式，如远程过程调用（RPC）驱动或消息驱动 API。微服务架构模式强制一定程度的模块化，实际上，使用单体代码来实现是极其困难的。因此，使用微服务架构模式，个体服务能被更快地开发，并且易于理解和维护。")]),e._v(" "),a("p",[e._v("第二，这种架构使得每个服务都可以由一个团队独立专注开发。开发者可以自由选择任何符合服务 API 契约的技术。当然，更多的组织是希望通过技术选型限制来避免完全混乱的状态。然而，这种自由意味着开发人员不再有可能在这种自由的新项目开始时使用过时的技术。当编写一个新服务时，他们可以选择当前的技术。此外，由于服务较小，使用当前技术重写旧服务将变得更加可行。")]),e._v(" "),a("p",[e._v("第三，微服务架构模式可以实现每个微服务独立部署。开发人员根本不需要去协调部署本地变更到服务。这些变更一经测试即可立即部署。比如，UI 团队可以执行 A/B 测试，并快速迭代 UI 变更。微服务架构模式使得持续部署成为可能。")]),e._v(" "),a("p",[e._v("最后，微服务架构模式使得每个服务能够独立扩展。你可以仅部署满足每个服务的容量和可用性约束的实例数目。此外，你可以使用与服务资源要求最匹配的硬件。例如，你可以在 EC2 Compute Optimized 实例上部署一个 CPU 密集型图像处理服务，并且在 EC2 Memory-optimized 实例上部署一个内存数据库服务。")]),e._v(" "),a("p",[a("a",{attrs:{id:"the-drawbacks-of-microservices"}})]),e._v(" "),a("h2",{attrs:{id:"微服务的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的缺点"}},[e._v("#")]),e._v(" 微服务的缺点")]),e._v(" "),a("p",[e._v("就像 Fred Brooks 大约在 30 年前写的[《人月神话》][20]中说的，"),a("strong",[e._v("没有银弹")]),e._v("。与其他技术一样，微服务架构模式也存在着缺点。其中一个缺点就是名称本身。微服务这个术语的重点过多偏向于服务的规模。事实上，有些开发者主张构建极细粒度的 10 至 100 LOC（代码行）服务，虽然这对小型服务来说可能比较好，但重要的是，小型服务只是一种手段，而不是主要目标。微服务的目标在于充分分解应用以方便应用敏捷开发和部署。")]),e._v(" "),a("p",[e._v("微服务的另一个主要缺点是由于微服务是一个分布式系统，其使得整体变得复杂。开发者需要选择和实现基于消息或者 RPC 的进程间通信机制。此外，由于目标请求可能很慢或者不可用，他们必须要编写代码来处理局部故障。虽然这些并不是很复杂、高深，但模块间通过语言级方法/过程调用相互调用，这比单体应用要复杂得多。")]),e._v(" "),a("p",[e._v("微服务的另一个挑战是分区数据库架构。更新多个业务实体的业务事务是相当普遍的。这些事务在单体应用中的实现显得微不足道，因为单体只存在一个单独的数据库。在基于微服务的应用中，你需要更新不同服务所用的数据库。通常不会选择分布式事务，不仅仅是因为 [CAP 定理][21]。他们根本不支持如今高度可扩展的 NoSQL 数据库和消息代理。你最后不得不使用基于最终一致性的方法，这对于开发人员来说更具挑战性。")]),e._v(" "),a("p",[e._v("测试微服务应用也很复杂。例如，使用现代框架如 Spring Boot，你只需要编写一个测试类来启动一个单体 web 应用并测试其 REST API。相比之下，一个类似的测试类对于微服务来说需要启动该服务及其所依赖的所有服务，或者至少为这些服务配置存根。再次强调，虽然这不是一件高深的事，但不要低估了这样做的复杂性。")]),e._v(" "),a("p",[e._v("微服务架构模式的另一个主要挑战是实现了跨越多服务变更。例如，我们假设你正在实现一个修改服务 A、服务 B 和 服务 C 的需求，其中 A 依赖于 B，且 B 依赖于 C。在单体应用中，你可以简单地修改相应的模块、整合变更并一次性部署它们。相反，在微服务中你需要仔细规划和协调变更到每个服务。例如，你需要更新服务 C，然后更新服务 B，最后更新服务 A。幸运的是，大多数变更只会影响一个服务，需要协调的多服务变更相对较少。")]),e._v(" "),a("p",[e._v("部署基于微服务的应用也是相当复杂的。一个单体应用可以很容易地部署到基于传统负载均衡器的一组相同服务器上。每个应用实例都配置有基础设施服务的位置（主机和端口），比如数据库和消息代理。相比之下，微服务应用通常由大量的服务组成。例如，据 [Adrian Cockcroft][22] 了解到，Hailo 拥有 160 个不同的服务，Netflix 拥有的服务超过 600 个。")]),e._v(" "),a("p",[e._v("每个服务都有多个运行时实例。还有更多的移动部件需要配置、部署、扩展和监控。此外，你还需要实现"),a("RouterLink",{attrs:{to:"/01.后端/05.设计模式和架构/4-service-discovery.html"}},[e._v("服务发现机制")]),e._v("，使得服务能够发现需要与之通信的任何其他服务的位置（主机和端口）。相比较，传统的基于票据（ticket-based）和手动的操作方式无法扩展到如此复杂的程度。因此，要成功部署微服务应用，需要求开发人员能高度控制部署方式和高度自动化。")],1),e._v(" "),a("p",[e._v("一种自动化方式是使用现成的平台即服务（PaaS），如 [Cloud Foundry][23]。PaaS 为开发人员提供了简单的方式来部署和管理他们的微服务。它让开发人员避开了诸如采购和配置 IT 资源等烦恼。同时，配置 PaaS 的系统人员和网络专业人员可以确保达到最佳实践以落实公司策略。")]),e._v(" "),a("p",[e._v("自动化微服务部署的另一个方式是开发自己的 PaaS。一个普遍的起点是使用集群方案，如 [Kubernetes][24]，与 Docker 等容器技术相结合。在本书最后我们将看到如 NGINX 的[基于软件的应用交付][25]方式是如何在微服务级别轻松做到缓存处理、访问控制、API 度量和监控，这些可以帮助解决此问题。")]),e._v(" "),a("p",[a("a",{attrs:{id:"summary"}})]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("构建复杂的微服务应用本质上是困难的。单体架构模式只适用于简单、轻量级的应用，如果你使用它来构建复杂应用，你最终会陷入痛苦的境地。对于复杂、持续发展的应用而言，微服务架构模式是一个更好的选择。尽管它存在着缺点和挑战。")]),e._v(" "),a("p",[e._v("在后面的章节中，我将介绍微服务架构的方方面面并探讨诸如服务发现、服务部署方案以及将单体应用重构为服务的策略。")]),e._v(" "),a("p",[a("a",{attrs:{id:"microservices-in-action"}})]),e._v(" "),a("h2",{attrs:{id:"微服务实战-nginx-plus-作为反向代理服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务实战-nginx-plus-作为反向代理服务器"}},[e._v("#")]),e._v(" 微服务实战：NGINX Plus 作为反向代理服务器")]),e._v(" "),a("p",[e._v("[10000 个网站中有超过 50%][26] 使用 NGINX，这主要是因为它有作为反向代理服务器的能力。你可以把 NGINX 放在当前应用甚至是数据库服务器之前以获取各种功能 —— 更高的性能、更高的安全性、可扩展性、灵活性等。你现有的应用只需要配置代码和作出极少的改变，甚至无需改变。然而，对于存在性能压力或者预计未来存在高负荷的站点，使用 NGINX 的效果看起来可能没那么神奇。")]),e._v(" "),a("p",[e._v("那么这与微服务有什么关系呢？实现一个反向代理服务器，并使用 NGINX 的其他功能来为你提供架构灵活性，反向代理服务器、静态和应用文件缓存、SSL/TLS 和 HTTP/2 这些功能都将从你的应用中剔除。让应用只做它该做的事，NGINX 还可以作为负载均衡器，这是微服务实施过程中的一个关键角色。NGINX Plus 的功能包含了复杂的负载均衡算法、多种方式的会话持久和管理监控，这些对微服务尤其有用（NGINX 最近还增加了使用 DNS SRV 记录的服务发现支持，这是一个顶尖的功能）。而且，如本章所述，NGINX 可以自动化部署微服务。")]),e._v(" "),a("p",[e._v("此外，NGINX 还提供了必要的功能来支撑 [NGINX 微服务参考架构][27]中的三大模型。代理模型使用 NGINX 作为 API 网关；路由网格模型使用一个额外的 NGINX 作为进程间通信中枢；Fabric 模型中的每个微服务使用一个 NGINX 来控制 HTTP 流量，在微服务之间实现 SSL/TLS，这非常有突破性。")])])}),[],!1,null,null,null);t.default=v.exports}}]);