(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{763:function(_,a,v){"use strict";v.r(a);var t=v(15),r=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"mysql和oracle的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql和oracle的区别"}},[_._v("#")]),_._v(" MySQL和Oracle的区别？")]),_._v(" "),v("ol",[v("li",[_._v("Oracle是大型数据库而Mysql是中小型数据库，Oracle市场占有率达40%，Mysql只有20%左右，同时Mysql是开源的而Oracle价格非常高。")]),_._v(" "),v("li",[_._v("Oracle支持大并发，大访问量，是OLTP最好的工具。")]),_._v(" "),v("li",[_._v("MySQL的分页关键词limit，Oracle的分页rownum")]),_._v(" "),v("li",[_._v("Oracle也Mysql操作上的一些区别")])]),_._v(" "),v("ul",[v("li",[_._v("①主键 Mysql一般使用自动增长类型，在创建表时只要指定表的主键为auto increment,插入记录时，不需要再指定该记录的主键值，Mysql将自动增长；Oracle没有自动增长类型，主键一般使用的序列，插入记录时将序列号的下一个值付给该字段即可；只是ORM框架是只要是native主键生成策略即可。")]),_._v(" "),v("li",[_._v("②单引号的处理 MYSQL里可以用双引号包起字符串，ORACLE里只可以用单引号包起字符串。在插入和修改字符串前必须做单引号的替换：把所有出现的一个单引号替换成两个单引号。")])]),_._v(" "),v("h3",{attrs:{id:"mysql数据库做哪些优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库做哪些优化"}},[_._v("#")]),_._v(" mysql数据库做哪些优化")]),_._v(" "),v("ol",[v("li",[_._v("选取最适用的字段属性。MySQL可以很好的支持大数据量的存取，但是一般说来，数据库中的表越小，在它上面执行的查询也就会越快。因此，在创建表的时候，为了获得更好的性能，我们可以将表中字段的宽度设得尽可能小。")]),_._v(" "),v("li",[_._v("使用连接（JOIN）来代替子查询(Sub-Queries)。MySQL从4.1开始支持SQL的子查询。这个技术可以使用SELECT语句来创建一个单列的查询结果，然后把这个结果作为过滤条件用在另一个查询中。")]),_._v(" "),v("li",[_._v("使用外键。锁定表的方法可以维护数据的完整性，但是它却不能保证数据的关联性。这个时候我们就可以使用外键。")]),_._v(" "),v("li",[_._v("使用索引索引是提高数据库性能的常用方法，它可以令数据库服务器以比没有索引快得多的速度检索特定的行，尤其是在查询语句当中包含有MAX(), MIN()和ORDERBY这些命令的时候，性能提高更为明显。")]),_._v(" "),v("li",[_._v("优化的查询语句绝大多数情况下，使用索引可以提高查询的速度，但如果SQL语句使用不恰当的话，索引将无法发挥它应有的作用。")])]),_._v(" "),v("h3",{attrs:{id:"什么是存储过程-有哪些优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是存储过程-有哪些优缺点"}},[_._v("#")]),_._v(" 什么是存储过程？有哪些优缺点？")]),_._v(" "),v("p",[_._v("存储过程是一些预编译的SQL语句。更加直白的理解：存储过程可以说是一个记录集，它是由一些T-SQL语句组成的代码块，这些T-SQL语句代码像一个方法一样实现一些功能（对单表或多表的增删改查），然后再给这个代码块取一个名字，在用到这个功能的时候调用他就行了。\n存储过程是一个预编译的代码块，执行效率比较高一个存储过程替代大量T_SQL语句 ，可以降低网络通信量，提高通信速率可以一定程度上确保数据安全。")]),_._v(" "),v("h3",{attrs:{id:"什么是存储过程-用什么来调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是存储过程-用什么来调用"}},[_._v("#")]),_._v(" 什么是存储过程？用什么来调用？")]),_._v(" "),v("p",[_._v("存储过程是一个预编译的SQL语句，优点是允许模块化的设计，就是说只需创建一次，以后在该程序中就可以调用多次。如果某次操作需要执行多次SQL，使用存储过程比单纯SQL语句执行要快。可以用一个命令对象来调用存储过程。")]),_._v(" "),v("h3",{attrs:{id:"索引是什么-有什么作用以及优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引是什么-有什么作用以及优缺点"}},[_._v("#")]),_._v(" 索引是什么？有什么作用以及优缺点？")]),_._v(" "),v("p",[_._v("索引是对数据库表中一或多个列的值进行排序的结构，是帮助MySQL高效获取数据的数据结构你也可以这样理解：索引就是加快检索表中数据的方法。数据库的索引类似于书籍的索引。在书籍中，索引允许用户不必翻阅完整个书就能迅速地找到所需要的信息。在数据库中，索引也允许数据库程序迅速地找到表中的数据，而不必扫描整个数据库。")]),_._v(" "),v("p",[_._v("MySQL数据库几个基本的索引类型：普通索引、唯一索引、主键索引、全文索引索引加快数据库的检索速度索引降低了插入、删除、修改等维护任务的速度唯一索引可以确保每一行数据的唯一性通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能索引需要占物理和数据空间。")]),_._v(" "),v("h3",{attrs:{id:"什么是事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是事务"}},[_._v("#")]),_._v(" 什么是事务？")]),_._v(" "),v("p",[_._v("事务（Transaction）是并发控制的基本单位。所谓的事务，它是一个操作序列，这些操作要么都执行，要么都不执行，它是一个不可分割的工作单位。\n事务是数据库维护数据一致性的单位，在每个事务结束时，都能保持数据一致性。")]),_._v(" "),v("ul",[v("li",[_._v("原子性。即不可分割性，事务要么全部被执行，要么就全部不被执行。")]),_._v(" "),v("li",[_._v("一致性或可串性。事务的执行使得数据库从一种正确状态转换成另一种正确状态")]),_._v(" "),v("li",[_._v("隔离性。在事务正确提交之前，不允许把该事务对数据的任何改变提供给任何其他事务。")]),_._v(" "),v("li",[_._v("持久性。事务正确提交后，其结果将永久保存在数据库中，即使在事务提交后有了其他故障，事务的处理结果也会得到保存。")])]),_._v(" "),v("h3",{attrs:{id:"数据库的乐观锁和悲观锁是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库的乐观锁和悲观锁是什么"}},[_._v("#")]),_._v(" 数据库的乐观锁和悲观锁是什么？")]),_._v(" "),v("p",[_._v("数据库管理系统（DBMS）中的并发控制的任务是确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性。\n乐观并发控制(乐观锁)和悲观并发控制（悲观锁）是并发控制主要采用的技术手段。")]),_._v(" "),v("ul",[v("li",[_._v("悲观锁：假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作")]),_._v(" "),v("li",[_._v("乐观锁：假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。")])]),_._v(" "),v("h3",{attrs:{id:"使用索引查询一定能提高查询的性能吗-为什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用索引查询一定能提高查询的性能吗-为什么"}},[_._v("#")]),_._v(" 使用索引查询一定能提高查询的性能吗？为什么")]),_._v(" "),v("p",[_._v("通常,通过索引查询数据比全表扫描要快.但是我们也必须注意到它的代价.")]),_._v(" "),v("p",[_._v("索引需要空间来存储,也需要定期维护, 每当有记录在表中增减或索引列被修改时,索引本身也会被修改. 这意味着每条记录的INSERT,DELETE,UPDATE将为此多付出\n4,5 次的磁盘I/O. 因为索引需要额外的存储空间和处理,那些不必要的索引反而会使查询反应时间变慢.\n使用索引查询不一定能提高查询性能,索引范围查询(INDEX RANGE SCAN)适用于两种情况:")]),_._v(" "),v("ul",[v("li",[_._v("基于一个范围的检索,一般查询返回结果集小于表中记录数的30%")]),_._v(" "),v("li",[_._v("基于非唯一性索引的检索")])]),_._v(" "),v("h3",{attrs:{id:"简单说一说drop、delete与truncate的区别sql中的drop、"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单说一说drop、delete与truncate的区别sql中的drop、"}},[_._v("#")]),_._v(" 简单说一说drop、delete与truncate的区别SQL中的drop、")]),_._v(" "),v("p",[_._v("delete、truncate都表示删除，但是三者有一些差别\ndelete和truncate只删除表的数据不删除表的结构速度,一般来说:")]),_._v(" "),v("p",[_._v("drop> truncate > delete delete语句是dml,这个操作会放到rollback segement中,事务提交之后才生效;如果有相应的trigger,执行的时候将被触发.\ntruncate,drop是ddl, 操作立即生效,原数据不放到rollback segment中,不能回滚. 操作不触发trigger.")]),_._v(" "),v("h3",{attrs:{id:"什么是视图-以及视图的使用场景有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是视图-以及视图的使用场景有哪些"}},[_._v("#")]),_._v(" 什么是视图？以及视图的使用场景有哪些？")]),_._v(" "),v("p",[_._v("视图是一种虚拟的表，具有和物理表相同的功能。可以对视图进行增，改，查，操作，试图通常是有一个表或者多个表的行或列的子集。对视图的修改不影响基本表。\n它使得我们获取数据更容易，相比多表查询。只暴露部分字段给访问者，所以就建一个虚表，就是视图。")]),_._v(" "),v("p",[_._v("查询的数据来源于不同的表，而查询者希望以统一的方式查询，这样也可以建立一个视图，把多个表查询结果联合起来，查询者只需要直接从视图中获取数据，\n不必考虑数据来源于不同表所带来的差异")]),_._v(" "),v("h3",{attrs:{id:"游标是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#游标是什么"}},[_._v("#")]),_._v(" 游标是什么？")]),_._v(" "),v("p",[_._v("游标是对查询出来的结果集作为一个单元来有效的处理。游标可以定在该单元中的特定行，从结果集的当前行检索一行或多行。\n可以对结果集当前行做修改。一般不使用游标，但是需要逐条处理数据的时候，游标显得十分重要。")]),_._v(" "),v("h3",{attrs:{id:"说一说三个范式。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说一说三个范式。"}},[_._v("#")]),_._v(" 说一说三个范式。")]),_._v(" "),v("ul",[v("li",[_._v("第一范式（1NF）：数据库表中的字段都是单一属性的，不可再分。这个单一属性由基本类型构成，包括整型、实数、字符型、逻辑型、日期型等。")]),_._v(" "),v("li",[_._v("第二范式（2NF）：数据库表中不存在非关键字段对任一候选关键字段的部分函数依赖（部分函数依赖指的是存在组合关键字中的某些字段决定非关键字段的情况），\n也即所有非关键字段都完全依赖于任意一组候选关键字。")]),_._v(" "),v("li",[_._v("第三范式（3NF）：在第二范式的基础上，数据表中如果不存在非关键字段对任一候选关键字段的传递函数依赖则符合第三范式。\n所谓传递函数依赖，指的是如 果存在”A → B → C”的决定关系，则C传递函数依赖于A。因此，满足第三范式的数据库表应该不存在如下依赖关系：\n关键字段 → 非关键字段 x → 非关键字段y")])]),_._v(" "),v("h3",{attrs:{id:"索引的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的概念"}},[_._v("#")]),_._v(" 索引的概念")]),_._v(" "),v("p",[_._v("索引就是加快检索表中数据的方法。数据库的索引类似于书籍的索引。在书籍中，索引允许用户不必翻阅完整个书就能迅速地找到所需要的信息。\n在数据库中，索引也允许数据库程序迅速地找到表中的数据，而不必扫描整个数据库。")]),_._v(" "),v("h3",{attrs:{id:"索引的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的特点"}},[_._v("#")]),_._v(" 索引的特点")]),_._v(" "),v("ol",[v("li",[_._v("索引可以加快数据库的检索速度")]),_._v(" "),v("li",[_._v("索引降低了数据库插入、修改、删除等维护任务的速度")]),_._v(" "),v("li",[_._v("索引创建在表上，不能创建在视图上")]),_._v(" "),v("li",[_._v("索引既可以直接创建，也可以间接创建")]),_._v(" "),v("li",[_._v("可以在优化隐藏中，使用索引")]),_._v(" "),v("li",[_._v("使用查询处理器执行SQL语句，在一个表上，一次只能使用一个索引")])]),_._v(" "),v("h4",{attrs:{id:"索引的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的优点"}},[_._v("#")]),_._v(" 索引的优点")]),_._v(" "),v("ol",[v("li",[_._v("创建唯一性索引，保证数据库表中每一行数据的唯一性")]),_._v(" "),v("li",[_._v("大大加快数据的检索速度，这也是创建索引的最主要的原因")]),_._v(" "),v("li",[_._v("加速表和表之间的连接，特别是在实现数据的参考完整性方面特别有意义。")]),_._v(" "),v("li",[_._v("在使用分组和排序子句进行数据检索时，同样可以显著减少查询中分组和排序的时间。")]),_._v(" "),v("li",[_._v("通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。")])]),_._v(" "),v("h4",{attrs:{id:"索引的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的缺点"}},[_._v("#")]),_._v(" 索引的缺点")]),_._v(" "),v("ol",[v("li",[_._v("创建索引和维护索引要耗费时间，这种时间随着数据量的增加而增加")]),_._v(" "),v("li",[_._v("索引需要占物理空间，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立聚簇索引，那么需要的空间就会更大")]),_._v(" "),v("li",[_._v("当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，降低了数据的维护速度\n####索引分类")])]),_._v(" "),v("h5",{attrs:{id:"_1-直接创建索引和间接创建索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接创建索引和间接创建索引"}},[_._v("#")]),_._v(" 1.直接创建索引和间接创建索引")]),_._v(" "),v("ul",[v("li",[_._v("直接创建索引： CREATE INDEX mycolumn_index ON mytable (myclumn)")]),_._v(" "),v("li",[_._v("间接创建索引：定义主键约束或者唯一性键约束，可以间接创建索引")])]),_._v(" "),v("h5",{attrs:{id:"_2-普通索引和唯一性索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-普通索引和唯一性索引"}},[_._v("#")]),_._v(" 2.普通索引和唯一性索引")]),_._v(" "),v("ul",[v("li",[_._v("普通索引：CREATE INDEX mycolumn_index ON mytable (myclumn)")]),_._v(" "),v("li",[_._v("唯一性索引：保证在索引列中的全部数据是唯一的，对聚簇索引和非聚簇索引都可以使用")]),_._v(" "),v("li",[_._v("CREATE UNIQUE COUSTERED INDEX myclumn_cindex ON mytable(mycolumn)")])]),_._v(" "),v("h5",{attrs:{id:"_3-单个索引和复合索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-单个索引和复合索引"}},[_._v("#")]),_._v(" 3.单个索引和复合索引")]),_._v(" "),v("ul",[v("li",[_._v("单个索引：即非复合索引")]),_._v(" "),v("li",[_._v("复合索引：又叫组合索引，在索引建立语句中同时包含多个字段名，最多16个字段"),v("br"),_._v("\nCREATE INDEX name_index ON username(firstname,lastname)")])]),_._v(" "),v("h3",{attrs:{id:"说说你对索引的认识-索引的结构、对dml影响、对查询影响、为什么提高查询性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说说你对索引的认识-索引的结构、对dml影响、对查询影响、为什么提高查询性能"}},[_._v("#")]),_._v(" 说说你对索引的认识（索引的结构、对dml影响、对查询影响、为什么提高查询性能）")]),_._v(" "),v("p",[_._v("索引有B-TREE、BIT、CLUSTER等类型。ORACLE使用了一个复杂的自平衡B-tree结构;通常来说，在表上建立恰当的索引，查询时会改进查询性能。但在进行插入、删除、修改时，\n同时会进行索引的修改，在性能上有一定的影响。有索引且查询条件能使用索引时，数据库会先度取索引，根据索引内容和查询条件，查询出ROWID，再根据ROWID取出需要的数据。\n由于索引内容通常比全表内容要少很多，因此通过先读索引，能减少I/O，提高查询性能。")]),_._v(" "),v("h3",{attrs:{id:"触发器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[_._v("#")]),_._v(" 触发器：")]),_._v(" "),v("p",[_._v("当满足触发器条件，则系统自动执行触发器的触发体。")]),_._v(" "),v("p",[_._v("触发时间：有before,after.触发事件：有insert,update,delete三种。触发类型：有行触发、语句")]),_._v(" "),v("h4",{attrs:{id:"触发触发器的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#触发触发器的作用"}},[_._v("#")]),_._v(" 触发触发器的作用？")]),_._v(" "),v("p",[_._v("触发器是一中特殊的存储过程，主要是通过事件来触发而被执行的。它可以强化约束，来维护数据的完整性和一致性，可\n以跟踪数据库内的操作从而不允许未经许可的更新和变化。可以联级运算。如，某表上的触发器上包含对另一个表的数据操作，\n而该操作又会导致该表触发器被触发。")]),_._v(" "),v("h4",{attrs:{id:"内联接-外联接区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内联接-外联接区别"}},[_._v("#")]),_._v(" 内联接,外联接区别？")]),_._v(" "),v("p",[_._v("内连接是保证两个表中所有的行都要满足连接条件，而外连接则不然。在外连接中，某些不满条件的列也会显示出来，也就是说，只限制其中一个表\n的行，而不限制另一个表的行。分左连接、右连接、全连接三种")]),_._v(" "),v("h3",{attrs:{id:"什么是内存泄漏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存泄漏"}},[_._v("#")]),_._v(" 什么是内存泄漏？")]),_._v(" "),v("p",[_._v("一般我们所说的内存泄漏指的是堆内存的泄漏。堆内存是程序从堆中为其分配的，大小任意的，使用完后要显示释放内存。当应用程序用关键\n字new等创建对象时，就从堆中为它分配一块内存，使用完后程序调用free或者delete释放该内存，否则就说该内存就不能被使用，\n我们就说该内存被泄漏了。")]),_._v(" "),v("h3",{attrs:{id:"日志的作用是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日志的作用是什么"}},[_._v("#")]),_._v(" 日志的作用是什么")]),_._v(" "),v("p",[_._v("日志文件（Log File）记录所有对数据库数据的修改，主要是保护数据库以防止故障,以及恢复数据时使用。其特点如下：")]),_._v(" "),v("ul",[v("li",[_._v("每一个数据库至少包含两个日志文件组。每个日志文件组至少包含两个日志文件成员。")]),_._v(" "),v("li",[_._v("日志文件组以循环方式进行写操作。")]),_._v(" "),v("li",[_._v("每一个日志文件成员对应一个物理文件。记录数据库事务,最大限度地保证数据的一致性与安全性重做日志文件：含对数据库所做的更改记录，\n这样万一出现故障可以启用数据恢复,")])]),_._v(" "),v("p",[_._v("一个数据库至少需要两个重做日志文件归档日志文件：是重做日志文件的脱机副本，这些副本可能对于从介质失败中进行恢复很必要。")]),_._v(" "),v("h3",{attrs:{id:"使用redis的好处有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用redis的好处有哪些"}},[_._v("#")]),_._v(" 使用redis的好处有哪些？")]),_._v(" "),v("ul",[v("li",[_._v("速度快，因为数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)")]),_._v(" "),v("li",[_._v("支持丰富数据类型，支持string，list，set，sorted set，hash")]),_._v(" "),v("li",[_._v("支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，要么全部不执行")]),_._v(" "),v("li",[_._v("丰富的特性：可用于缓存，消息，按key设置过期时间，过期后将会自动删除")])]),_._v(" "),v("h3",{attrs:{id:"redis常见性能问题和解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis常见性能问题和解决方案"}},[_._v("#")]),_._v(" redis常见性能问题和解决方案？")]),_._v(" "),v("ul",[v("li",[_._v("Master最好不要做任何持久化工作，如RDB内存快照和AOF日志文件")]),_._v(" "),v("li",[_._v("如果数据比较重要，某个Slave开启AOF备份数据，策略设置为每秒同步一次")]),_._v(" "),v("li",[_._v("为了主从复制的速度和连接的稳定性，Master和Slave最好在同一个局域网内")]),_._v(" "),v("li",[_._v("尽量避免在压力很大的主库上增加从库")]),_._v(" "),v("li",[_._v("主从复制不要用图状结构，用单向链表结构更为稳定，即：Master <- Slave1 <- Slave2 <- Slave3…这样的结构方便解决单点故障问题，\n实现Slave对Master的替换。如果Master挂了，可以立刻启用Slave1做Master，其他不变")])]),_._v(" "),v("h3",{attrs:{id:"redis持久化的几种方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化的几种方式"}},[_._v("#")]),_._v(" redis持久化的几种方式")]),_._v(" "),v("h4",{attrs:{id:"_1、快照-snapshots"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、快照-snapshots"}},[_._v("#")]),_._v(" 1、快照（snapshots）")]),_._v(" "),v("p",[_._v("缺省情况情况下，Redis把数据快照存放在磁盘上的二进制文件中，文件名为dump.rdb。你可以配置Redis的持久化策略，例如数据集中每N秒钟有超过M次更新，\n就将数据写入磁盘；或者你可以手工调用命令SAVE或BGSAVE。")]),_._v(" "),v("p",[_._v("工作原理")]),_._v(" "),v("ul",[v("li",[_._v("Redis forks.")]),_._v(" "),v("li",[_._v("子进程开始将数据写到临时RDB文件中。")]),_._v(" "),v("li",[_._v("当子进程完成写RDB文件，用新文件替换老文件。")]),_._v(" "),v("li",[_._v("这种方式可以使Redis使用copy-on-write技术。")])]),_._v(" "),v("h4",{attrs:{id:"_2、aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、aof"}},[_._v("#")]),_._v(" 2、AOF")]),_._v(" "),v("p",[_._v("快照模式并不十分健壮，当系统停止，或者无意中Redis被kill掉，最后写入Redis的数据就会丢失。这对某些应用也许不是大问题，但对于要求高可靠性的应用来说，")]),_._v(" "),v("ul",[v("li",[_._v("Redis就不是一个合适的选择。")]),_._v(" "),v("li",[_._v("Append-only文件模式是另一种选择。")]),_._v(" "),v("li",[_._v("你可以在配置文件中打开AOF模式")])])])}),[],!1,null,null,null);a.default=r.exports}}]);