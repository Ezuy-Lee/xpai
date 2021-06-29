(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{472:function(s,n,a){"use strict";a.r(n);var t=a(15),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("谈到并行，我们可能最先想到的是线程，多个线程一起运行，来提高我们系统的整体处理速度；为什么使用多个线程就能提高处理速度，因为现在计算机普遍都是多核处理器，我们需要充分利用cpu资源；如果站的更高一点来看，我们每台机器都可以是一个处理节点，多台机器并行处理；并行的处理方式可以说无处不在，本文主要来谈谈Java在并行处理方面的努力。")]),s._v(" "),a("h2",{attrs:{id:"无处不在的并行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无处不在的并行"}},[s._v("#")]),s._v(" 无处不在的并行")]),s._v(" "),a("p",[s._v("Java的垃圾回收器，我们可以看到每一代版本的更新，伴随着GC更短的延迟，从serial到cms再到现在的G1，一直在摘掉Java慢的帽子；消息队列从早期的ActiveMQ到现在的kafka和RocketMQ，引入的分区的概念，提高了消息的并行性；数据库单表数据到一定量级之后，访问速度会很慢，我们会对表进行分表处理，引入数据库中间件；Redis你可能觉得本身处理是单线程的，但是Redis的集群方案中引入了slot(槽)的概念；更普遍的就是我们很多的业务系统，通常会部署多台，通过负载均衡器来进行分发；好了还有其他的一些例子，此处不在一一例举。")]),s._v(" "),a("h2",{attrs:{id:"如何并行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何并行"}},[s._v("#")]),s._v(" 如何并行")]),s._v(" "),a("p",[s._v('我觉得并行的核心在于"拆分"，把大任务变成小任务，然后利用多核CPU也好，还是多节点也好，同时并行的处理，Java历代版本的更新，都在为我们开发者提供更方便的并行处理，从开始的Thread，到线程池，再到fork/join框架，最后到流处理，下面使用简单的求和例子来看看各种方式是如何并行处理的；')]),s._v(" "),a("h3",{attrs:{id:"单线程处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程处理"}},[s._v("#")]),s._v(" 单线程处理")]),s._v(" "),a("p",[s._v("首先看一下最简单的单线程处理方式，直接使用主线程进行求和操作；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class SingleThread {\n\n    public static long[] numbers;\n\n    public static void main(String[] args) {\n        numbers = LongStream.rangeClosed(1, 10_000_000).toArray();\n        long sum = 0;\n        for (int i = 0; i < numbers.length; i++) {\n            sum += numbers[i];\n        }\n        System.out.println("sum  = " + sum);\n    }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("求和本身是一个计算密集型任务，但是现在已经是多核时代，只用单线程，相当于只使用了其中一个cpu，其他cpu被闲置，资源的浪费；")]),s._v(" "),a("h3",{attrs:{id:"thread方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread方式"}},[s._v("#")]),s._v(" Thread方式")]),s._v(" "),a("p",[s._v("我们把任务拆分成多个小任务，然后每个小任务分别启动一个线程，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class ThreadTest {\n\n    public static final int THRESHOLD = 10_000;\n    public static long[] numbers;\n    private static long allSum;\n\n    public static void main(String[] args) throws Exception {\n        numbers = LongStream.rangeClosed(1, 10_000_000).toArray();\n        int taskSize = (int) (numbers.length / THRESHOLD);\n        for (int i = 1; i <= taskSize; i++) {\n            final int key = i;\n            new Thread(new Runnable() {\n                public void run() {\n                    sumAll(sum((key - 1) * THRESHOLD, key * THRESHOLD));\n                }\n            }).start();\n        }\n        Thread.sleep(100);\n        System.out.println("allSum = " + getAllSum());\n    }\n\n    private static synchronized long sumAll(long threadSum) {\n        return allSum += threadSum;\n    }\n\n    public static synchronized long getAllSum() {\n        return allSum;\n    }\n\n    private static long sum(int start, int end) {\n        long sum = 0;\n        for (int i = start; i < end; i++) {\n            sum += numbers[i];\n        }\n        return sum;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("以上指定了一个拆分阀值，计算拆分多少个认为，同时启动多少线程；这种处理就是启动的线程数过多，而CPU数有限，更重要的是求和是一个计算密集型任务，启动过多的线程只会带来更多的线程上下文切换；同时线程处理完一个任务就终止了，也是对资源的浪费；另外可以看到主线程不知道何时子任务已经处理完了，需要做额外的处理；所有Java后续引入了线程池。")]),s._v(" "),a("h3",{attrs:{id:"线程池方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池方式"}},[s._v("#")]),s._v(" 线程池方式")]),s._v(" "),a("p",[s._v("jdk1.5引入了并发包，其中包括了ThreadPoolExecutor，相关代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class ExecutorServiceTest {\n\n    public static final int THRESHOLD = 10_000;\n    public static long[] numbers;\n\n    public static void main(String[] args) throws Exception {\n        numbers = LongStream.rangeClosed(1, 10_000_000).toArray();\n        ExecutorService executor = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);\n        CompletionService<Long> completionService = new ExecutorCompletionService<Long>(executor);\n        int taskSize = (int) (numbers.length / THRESHOLD);\n        for (int i = 1; i <= taskSize; i++) {\n            final int key = i;\n            completionService.submit(new Callable<Long>() {\n\n                @Override\n                public Long call() throws Exception {\n                    return sum((key - 1) * THRESHOLD, key * THRESHOLD);\n                }\n            });\n        }\n        long sumValue = 0;\n        for (int i = 0; i < taskSize; i++) {\n            sumValue += completionService.take().get();\n        }\n        // 所有任务已经完成,关闭线程池\n        System.out.println("sumValue = " + sumValue);\n        executor.shutdown();\n    }\n\n    private static long sum(int start, int end) {\n        long sum = 0;\n        for (int i = start; i < end; i++) {\n            sum += numbers[i];\n        }\n        return sum;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("上面已经分析了计算密集型并不是线程越多越好，这里创建了JDK默认的线程数:CPU数+1，这是一个经过大量测试以后给出的一个结果；线程池顾名思义，可以重复利用现有的线程；同时利用CompletionService来对子任务进行汇总；合理的使用线程池已经可以充分的并行处理任务，只是在写法上有点繁琐，此时JDK1.7中引入了fork/join框架；")]),s._v(" "),a("h3",{attrs:{id:"fork-join框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-join框架"}},[s._v("#")]),s._v(" fork/join框架")]),s._v(" "),a("p",[s._v("分支/合并框架的目的是以递归的方式将可以并行的认为拆分成更小的任务，然后将每个子任务的结果合并起来生成整体结果；相关代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class ForkJoinTest extends java.util.concurrent.RecursiveTask<Long> {\n    \n    private static final long serialVersionUID = 1L;\n    private final long[] numbers;\n    private final int start;\n    private final int end;\n    public static final long THRESHOLD = 10_000;\n\n    public ForkJoinTest(long[] numbers) {\n        this(numbers, 0, numbers.length);\n    }\n\n    private ForkJoinTest(long[] numbers, int start, int end) {\n        this.numbers = numbers;\n        this.start = start;\n        this.end = end;\n    }\n\n    @Override\n    protected Long compute() {\n        int length = end - start;\n        if (length <= THRESHOLD) {\n            return computeSequentially();\n        }\n        ForkJoinTest leftTask = new ForkJoinTest(numbers, start, start + length / 2);\n        leftTask.fork();\n        ForkJoinTest rightTask = new ForkJoinTest(numbers, start + length / 2, end);\n        Long rightResult = rightTask.compute();\n        // 注：join方法会阻塞，因此有必要在两个子任务的计算都开始之后才执行join方法\n        Long leftResult = leftTask.join();\n        return leftResult + rightResult;\n    }\n\n    private long computeSequentially() {\n        long sum = 0;\n        for (int i = start; i < end; i++) {\n            sum += numbers[i];\n        }\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(forkJoinSum(10_000_000));\n    }\n\n    public static long forkJoinSum(long n) {\n        long[] numbers = LongStream.rangeClosed(1, n).toArray();\n        ForkJoinTask<Long> task = new ForkJoinTest(numbers);\n        return new ForkJoinPool().invoke(task);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[s._v("ForkJoinPool是ExecutorService接口的一个实现，子认为分配给线程池中的工作线程；同时需要把任务提交到此线程池中，需要创建RecursiveTask"),a("R",[s._v("的一个子类；大体逻辑就是通过fork进行拆分，然后通过join进行结果的合并，JDK为我们提供了一个框架，我们只需要在里面填充即可，更加方便；有没有更简单的方式，连拆分都省了，自动拆分合并，jdk在1.8中引入了流的概念；")])],1),s._v(" "),a("h3",{attrs:{id:"流方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流方式"}},[s._v("#")]),s._v(" 流方式")]),s._v(" "),a("p",[s._v("Java8引入了stream的概念，可以让我们更好的利用并行，使用流代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class StreamTest {\n\n    public static void main(String[] args) {\n        System.out.println("sum = " + parallelRangedSum(10_000_000));\n    }\n\n    public static long parallelRangedSum(long n) {\n        return LongStream.rangeClosed(1, n).parallel().reduce(0L, Long::sum);\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("以上代码是不是非常简单，对于开发者来说完全不需要手动拆分，使用同步机制等方式，就可以让任务并行处理，只需要对流使用parallel()方法，系统自动会对任务进行拆分，当然前提是没有共享可变状态；其实并行流内部使用的也是fork/join框架；")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("本文使用一个求和的实例，来介绍了jdk为开发者提供并行处理的各种方式，可以看到Java一直在为提供更方便的并行处理而努力。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("<<java8实战>>")])])}),[],!1,null,null,null);n.default=e.exports}}]);