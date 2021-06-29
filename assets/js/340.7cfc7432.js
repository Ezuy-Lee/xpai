(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{766:function(a,n,s){"use strict";s.r(n);var e=s(15),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("最近在看netty源码的时候发现了一个叫FastThreadLocal的类，jdk本身自带了ThreadLocal类，所以可以大致想到此类比jdk自带的类速度更快，主要快在什么地方，以及为什么速度更快，下面做一个简单的分析；")]),a._v(" "),s("h2",{attrs:{id:"性能测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),s("p",[a._v("ThreadLocal主要被用在多线程环境下，方便的获取当前线程的数据，使用者无需关心多线程问题，方便使用；为了能说明问题，分别对两个场景进行测试，分别是：多个线程操作同一个ThreadLocal，单线程下的多个ThreadLocal，下面分别测试：")]),a._v(" "),s("h3",{attrs:{id:"_1-多个线程操作同一个threadlocal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-多个线程操作同一个threadlocal"}},[a._v("#")]),a._v(" 1.多个线程操作同一个ThreadLocal")]),a._v(" "),s("p",[a._v("分别对ThreadLocal和FastThreadLocal使用测试代码，部分代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public static void test2() throws Exception {\n        CountDownLatch cdl = new CountDownLatch(10000);\n        ThreadLocal<String> threadLocal = new ThreadLocal<String>();\n        long starTime = System.currentTimeMillis();\n        for (int i = 0; i < 10000; i++) {\n            new Thread(new Runnable() {\n\n                @Override\n                public void run() {\n                    threadLocal.set(Thread.currentThread().getName());\n                    for (int k = 0; k < 100000; k++) {\n                        threadLocal.get();\n                    }\n                    cdl.countDown();\n                }\n            }, "Thread" + (i + 1)).start();\n        }\n        cdl.await();\n        System.out.println(System.currentTimeMillis() - starTime + "ms");\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("以上代码创建了10000个线程，同时往ThreadLocal设置，然后get十万次，然后通过CountDownLatch来计算总的时间消耗，运行结果为："),s("strong",[a._v("1000ms左右")]),a._v("；"),s("br"),a._v("\n下面再对FastThreadLocal进行测试，代码类似：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public static void test2() throws Exception {\n        CountDownLatch cdl = new CountDownLatch(10000);\n        FastThreadLocal<String> threadLocal = new FastThreadLocal<String>();\n        long starTime = System.currentTimeMillis();\n        for (int i = 0; i < 10000; i++) {\n            new FastThreadLocalThread(new Runnable() {\n\n                @Override\n                public void run() {\n                    threadLocal.set(Thread.currentThread().getName());\n                    for (int k = 0; k < 100000; k++) {\n                        threadLocal.get();\n                    }\n                    cdl.countDown();\n                }\n            }, "Thread" + (i + 1)).start();\n        }\n\n        cdl.await();\n        System.out.println(System.currentTimeMillis() - starTime);\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br")])]),s("p",[a._v("运行之后结果为："),s("strong",[a._v("1000ms左右")]),a._v("；可以发现在这种情况下两种类型的ThreadLocal在性能上并没有什么差距，下面对第二种情况进行测试；")]),a._v(" "),s("h3",{attrs:{id:"_2-单线程下的多个threadlocal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-单线程下的多个threadlocal"}},[a._v("#")]),a._v(" 2.单线程下的多个ThreadLocal")]),a._v(" "),s("p",[a._v("分别对ThreadLocal和FastThreadLocal使用测试代码，部分代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    public static void test1() throws InterruptedException {\n        int size = 10000;\n        ThreadLocal<String> tls[] = new ThreadLocal[size];\n        for (int i = 0; i < size; i++) {\n            tls[i] = new ThreadLocal<String>();\n        }\n        \n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                long starTime = System.currentTimeMillis();\n                for (int i = 0; i < size; i++) {\n                    tls[i].set("value" + i);\n                }\n                for (int i = 0; i < size; i++) {\n                    for (int k = 0; k < 100000; k++) {\n                        tls[i].get();\n                    }\n                }\n                System.out.println(System.currentTimeMillis() - starTime + "ms");\n            }\n        }).start();\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("p",[a._v("以上代码创建了10000个ThreadLocal，然后使用同一个线程对ThreadLocal设值，同时get十万次，运行结果："),s("strong",[a._v("2000ms左右")]),a._v(";"),s("br"),a._v("\n下面再对FastThreadLocal进行测试，代码类似：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    public static void test1() {\n        int size = 10000;\n        FastThreadLocal<String> tls[] = new FastThreadLocal[size];\n        for (int i = 0; i < size; i++) {\n            tls[i] = new FastThreadLocal<String>();\n        }\n        \n        new FastThreadLocalThread(new Runnable() {\n\n            @Override\n            public void run() {\n                long starTime = System.currentTimeMillis();\n                for (int i = 0; i < size; i++) {\n                    tls[i].set("value" + i);\n                }\n                for (int i = 0; i < size; i++) {\n                    for (int k = 0; k < 100000; k++) {\n                        tls[i].get();\n                    }\n                }\n                System.out.println(System.currentTimeMillis() - starTime + "ms");\n            }\n        }).start();\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("p",[a._v("运行结果："),s("strong",[a._v("30ms左右")]),a._v("；可以发现性能达到两个数量级的差距，当然这是在大量访问次数的情况下才有的效果；下面重点分析一下ThreadLocal的机制，以及FastThreadLocal为什么比ThreadLocal更快；")]),a._v(" "),s("h2",{attrs:{id:"threadlocal的机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal的机制"}},[a._v("#")]),a._v(" ThreadLocal的机制")]),a._v(" "),s("p",[a._v("因为我们常用的就是set和get方法，分别看一下对应的源码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    public void set(T value) {\n        Thread t = Thread.currentThread();\n        ThreadLocalMap map = getMap(t);\n        if (map != null)\n            map.set(this, value);\n        else\n            createMap(t, value);\n    }\n    \n    ThreadLocalMap getMap(Thread t) {\n        return t.threadLocals;\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("以上代码大致意思：首先获取当前线程，然后获取当前线程中存储的threadLocals变量，此变量其实就是ThreadLocalMap，最后看此ThreadLocalMap是否为空，为空就创建一个新的Map，不为空则以当前的ThreadLocal为key，存储当前value；可以进一步看一下ThreadLocalMap中的set方法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private void set(ThreadLocal<?> key, Object value) {\n\n            // We don't use a fast path as with get() because it is at\n            // least as common to use set() to create new entries as\n            // it is to replace existing ones, in which case, a fast\n            // path would fail more often than not.\n\n            Entry[] tab = table;\n            int len = tab.length;\n            int i = key.threadLocalHashCode & (len-1);\n\n            for (Entry e = tab[i];\n                 e != null;\n                 e = tab[i = nextIndex(i, len)]) {\n                ThreadLocal<?> k = e.get();\n\n                if (k == key) {\n                    e.value = value;\n                    return;\n                }\n\n                if (k == null) {\n                    replaceStaleEntry(key, value, i);\n                    return;\n                }\n            }\n\n            tab[i] = new Entry(key, value);\n            int sz = ++size;\n            if (!cleanSomeSlots(i, sz) && sz >= threshold)\n                rehash();\n        }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br")])]),s("p",[a._v("大致意思：ThreadLocalMap内部使用一个数组来保存数据，类似HashMap；每个ThreadLocal在初始化的时候会分配一个threadLocalHashCode，然后和数组的长度进行取模操作，所以就会出现hash冲突的情况，在HashMap中处理冲突是使用数组+链表的方式，而在ThreadLocalMap中，可以看到直接使用nextIndex，进行遍历操作，明显性能更差；下面再看一下get方法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    public T get() {\n        Thread t = Thread.currentThread();\n        ThreadLocalMap map = getMap(t);\n        if (map != null) {\n            ThreadLocalMap.Entry e = map.getEntry(this);\n            if (e != null) {\n                @SuppressWarnings("unchecked")\n                T result = (T)e.value;\n                return result;\n            }\n        }\n        return setInitialValue();\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("同样是先获取当前线程，然后获取当前线程中的ThreadLocalMap，然后以当前的ThreadLocal为key，到ThreadLocalMap中获取value：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("        private Entry getEntry(ThreadLocal<?> key) {\n            int i = key.threadLocalHashCode & (table.length - 1);\n            Entry e = table[i];\n            if (e != null && e.get() == key)\n                return e;\n            else\n                return getEntryAfterMiss(key, i, e);\n        }\n        \n         private Entry getEntryAfterMiss(ThreadLocal<?> key, int i, Entry e) {\n            Entry[] tab = table;\n            int len = tab.length;\n\n            while (e != null) {\n                ThreadLocal<?> k = e.get();\n                if (k == key)\n                    return e;\n                if (k == null)\n                    expungeStaleEntry(i);\n                else\n                    i = nextIndex(i, len);\n                e = tab[i];\n            }\n            return null;\n        }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("p",[a._v("同set方式，通过取模获取数组下标，如果没有冲突直接返回数据，否则同样出现遍历的情况；所以通过分析可以大致知道以下几个问题："),s("br"),a._v("\n1.ThreadLocalMap是存放在Thread下面的，ThreadLocal作为key，所以多个线程操作同一个ThreadLocal其实就是在每个线程的ThreadLocalMap中插入的一条记录，不存在任何冲突问题；"),s("br"),a._v("\n2.ThreadLocalMap在解决冲突时，通过遍历的方式，非常影响性能；"),s("br"),a._v("\n3.FastThreadLocal通过其他方式解决冲突的问题，达到性能的优化；"),s("br"),a._v("\n下面继续来看一下FastThreadLocal是通过何种方式达到性能的优化。")]),a._v(" "),s("h2",{attrs:{id:"为什么netty的fastthreadlocal速度快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么netty的fastthreadlocal速度快"}},[a._v("#")]),a._v(" 为什么Netty的FastThreadLocal速度快")]),a._v(" "),s("p",[a._v("Netty中分别提供了FastThreadLocal和FastThreadLocalThread两个类，FastThreadLocalThread继承于Thread，下面同样对常用的set和get方法来进行源码分析：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("   public final void set(V value) {\n        if (value != InternalThreadLocalMap.UNSET) {\n            set(InternalThreadLocalMap.get(), value);\n        } else {\n            remove();\n        }\n    }\n\n    public final void set(InternalThreadLocalMap threadLocalMap, V value) {\n        if (value != InternalThreadLocalMap.UNSET) {\n            if (threadLocalMap.setIndexedVariable(index, value)) {\n                addToVariablesToRemove(threadLocalMap, this);\n            }\n        } else {\n            remove(threadLocalMap);\n        }\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("此处首先对value进行判定是否为InternalThreadLocalMap.UNSET，然后同样使用了一个InternalThreadLocalMap用来存放数据：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    public static InternalThreadLocalMap get() {\n        Thread thread = Thread.currentThread();\n        if (thread instanceof FastThreadLocalThread) {\n            return fastGet((FastThreadLocalThread) thread);\n        } else {\n            return slowGet();\n        }\n    }\n\n    private static InternalThreadLocalMap fastGet(FastThreadLocalThread thread) {\n        InternalThreadLocalMap threadLocalMap = thread.threadLocalMap();\n        if (threadLocalMap == null) {\n            thread.setThreadLocalMap(threadLocalMap = new InternalThreadLocalMap());\n        }\n        return threadLocalMap;\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("p",[a._v("可以发现InternalThreadLocalMap同样存放在FastThreadLocalThread中，不同在于，不是使用ThreadLocal对应的hash值取模获取位置，而是直接使用FastThreadLocal的index属性，index在实例化时被初始化：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    private final int index;\n\n    public FastThreadLocal() {\n        index = InternalThreadLocalMap.nextVariableIndex();\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("再进入nextVariableIndex方法中：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    static final AtomicInteger nextIndex = new AtomicInteger();\n     \n    public static int nextVariableIndex() {\n        int index = nextIndex.getAndIncrement();\n        if (index < 0) {\n            nextIndex.decrementAndGet();\n            throw new IllegalStateException("too many thread-local indexed variables");\n        }\n        return index;\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("在InternalThreadLocalMap中存在一个静态的nextIndex对象，用来生成数组下标，因为是静态的，所以每个FastThreadLocal生成的index是连续的，再看一下InternalThreadLocalMap中是如何setIndexedVariable的：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    public boolean setIndexedVariable(int index, Object value) {\n        Object[] lookup = indexedVariables;\n        if (index < lookup.length) {\n            Object oldValue = lookup[index];\n            lookup[index] = value;\n            return oldValue == UNSET;\n        } else {\n            expandIndexedVariableTableAndSet(index, value);\n            return true;\n        }\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("indexedVariables是一个对象数组，用来存放value；直接使用index作为数组下标进行存放；如果index大于数组长度，进行扩容；get方法直接通过FastThreadLocal中的index进行快速读取：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("   public final V get(InternalThreadLocalMap threadLocalMap) {\n        Object v = threadLocalMap.indexedVariable(index);\n        if (v != InternalThreadLocalMap.UNSET) {\n            return (V) v;\n        }\n\n        return initialize(threadLocalMap);\n    }\n    \n    public Object indexedVariable(int index) {\n        Object[] lookup = indexedVariables;\n        return index < lookup.length? lookup[index] : UNSET;\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("直接通过下标进行读取，速度非常快；但是这样会有一个问题，可能会造成空间的浪费；")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("通过以上分析我们可以知道在有大量的ThreadLocal进行读写操作的时候，才可能会遇到性能问题；另外FastThreadLocal通过空间换取时间的方式来达到O(1)读取数据；还有一个疑问就是内部为什么不直接使用HashMap(数组+黑红树)来代替ThreadLocalMap。")])])}),[],!1,null,null,null);n.default=t.exports}}]);