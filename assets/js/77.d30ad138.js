(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{503:function(s,n,e){"use strict";e.r(n);var a=e(15),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("strong",[s._v("Binlog事件")]),e("br"),s._v("\n1.UNKNOWN_EVENT"),e("br"),s._v("\n此事件从不会被触发，也不会被写入binlog中；发生在当读取binlog时，不能被识别其他任何事件，那被视为UNKNOWN_EVENT。")]),s._v(" "),e("p",[s._v("2.START_EVENT_V3"),e("br"),s._v("\n每个binlog文件开始的时候写入的事件，此事件被用在MySQL3.23 – 4.1，MYSQL5.0以后已经被FORMAT_DESCRIPTION_EVENT取代。")]),s._v(" "),e("p",[s._v("3.QUERY_EVENT"),e("br"),s._v("\n执行更新语句时会生成此事件，包括：create，insert，update，delete；")]),s._v(" "),e("p",[s._v("手动触发：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("insert into btest values(1,100,'zhaohui');\n \n| bin-log.000001 | 432 | Query       |         1 |         536 | use `test`; insert into btest values(1,100,'zhaohui')                                                                                                                                                          |\n| bin-log.000001 | 536 | Xid         |         1 |         563 | COMMIT /* xid=30 */    \n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("4.STOP_EVENT"),e("br"),s._v("\n当mysqld停止时生成此事件")]),s._v(" "),e("p",[s._v("可以手动停止mysql，生成的事件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("| bin-log.000001 | 563 | Stop        |         1 |         582 |    \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5.ROTATE_EVENT"),e("br"),s._v("\n当mysqld切换到新的binlog文件生成此事件，切换到新的binlog文件可以通过执行flush logs命令或者binlog文件大于max_binlog_size参数配置的大小；"),e("br"),s._v("\n手动触发：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> flush logs;\nQuery OK, 0 rows affected (0.24 sec)\n \nmysql> show binlog events in 'bin-log.000002';\n+----------------+-----+-------------+-----------+-------------+---------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                  |\n+----------------+-----+-------------+-----------+-------------+---------------------------------------+\n| bin-log.000002 |   4 | Format_desc |         1 |         107 | Server ver: 5.5.29-log, Binlog ver: 4 |\n| bin-log.000002 | 107 | Rotate      |         1 |         148 | bin-log.000003;pos=4                  |\n+----------------+-----+-------------+-----------+-------------+---------------------------------------+\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("6.INTVAR_EVENT"),e("br"),s._v("\n当sql语句中使用了AUTO_INCREMENT的字段或者LAST_INSERT_ID()函数；此事件没有被用在binlog_format为ROW模式的情况下。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("insert into btest (age,name)values(100,'zhaohui');\n \nmysql> show binlog events in 'bin-log.000003';\n+----------------+-----+-------------+-----------+-------------+---------------------------------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                                          |\n+----------------+-----+-------------+-----------+-------------+---------------------------------------------------------------+\n| bin-log.000003 |   4 | Format_desc |         1 |         107 | Server ver: 5.5.29-log, Binlog ver: 4                         |\n| bin-log.000003 | 107 | Query       |         1 |         175 | BEGIN                                                         |\n| bin-log.000003 | 175 | Intvar      |         1 |         203 | INSERT_ID=2                                                   |\n| bin-log.000003 | 203 | Query       |         1 |         315 | use `test`; insert into btest (age,name)values(100,'zhaohui') |\n| bin-log.000003 | 315 | Xid         |         1 |         342 | COMMIT /* xid=32 */                                           |\n+----------------+-----+-------------+-----------+-------------+---------------------------------------------------------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("btest表中的id为AUTO_INCREMENT，所以产生了INTVAR_EVENT")]),s._v(" "),e("p",[s._v("7.LOAD_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL 3.23版本中使用；")]),s._v(" "),e("p",[s._v("8.SLAVE_EVENT"),e("br"),s._v("\n未使用的")]),s._v(" "),e("p",[s._v("9.CREATE_FILE_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL4.0和4.1版本中使用；")]),s._v(" "),e("p",[s._v("10.APPEND_BLOCK_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL4.0版本中使用；")]),s._v(" "),e("p",[s._v("11.EXEC_LOAD_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL4.0和4.1版本中使用；")]),s._v(" "),e("p",[s._v("12.DELETE_FILE_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL4.0版本中使用；")]),s._v(" "),e("p",[s._v("13.NEW_LOAD_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL4.0和4.1版本中使用；")]),s._v(" "),e("p",[s._v("14.RAND_EVENT"),e("br"),s._v("\n执行包含RAND()函数的语句产生此事件，此事件没有被用在binlog_format为ROW模式的情况下；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> insert into btest (age,name)values(rand(),'zhaohui');\n \nmysql> show binlog events in 'bin-log.000003';\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                                             |\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n......\n| bin-log.000003 | 342 | Query       |         1 |         410 | BEGIN                                                            |\n| bin-log.000003 | 410 | Intvar      |         1 |         438 | INSERT_ID=3                                                      |\n| bin-log.000003 | 438 | RAND        |         1 |         473 | rand_seed1=223769196,rand_seed2=1013907192                       |\n| bin-log.000003 | 473 | Query       |         1 |         588 | use `test`; insert into btest (age,name)values(rand(),'zhaohui') |\n| bin-log.000003 | 588 | Xid         |         1 |         615 | COMMIT /* xid=48 */                                              |\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n10 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("15.USER_VAR_EVENT"),e("br"),s._v("\n执行包含了用户变量的语句产生此事件，此事件没有被用在binlog_format为ROW模式的情况下；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> set @age=50;\nQuery OK, 0 rows affected (0.00 sec)\n \nmysql> insert into btest (age,name)values(@age,'zhaohui');\nQuery OK, 1 row affected (0.12 sec)\n \nmysql> show binlog events in 'bin-log.000003';\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                                             |\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n......                                          |\n| bin-log.000003 | 615 | Query       |         1 |         683 | BEGIN                                                            |\n| bin-log.000003 | 683 | Intvar      |         1 |         711 | INSERT_ID=4                                                      |\n| bin-log.000003 | 711 | User var    |         1 |         756 | @`age`=50                                                        |\n| bin-log.000003 | 756 | Query       |         1 |         869 | use `test`; insert into btest (age,name)values(@age,'zhaohui')   |\n| bin-log.000003 | 869 | Xid         |         1 |         896 | COMMIT /* xid=70 */                                              |\n+----------------+-----+-------------+-----------+-------------+------------------------------------------------------------------+\n15 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("16.FORMAT_DESCRIPTION_EVENT"),e("br"),s._v("\n描述事件，被写在每个binlog文件的开始位置，用在MySQL5.0以后的版本中，代替了START_EVENT_V3")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> show binlog events in 'bin-log.000003';\n+----------------+-----+-------------+-----------+-------------+---------------------------------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                                          |\n+----------------+-----+-------------+-----------+-------------+---------------------------------------------------------------+\n| bin-log.000003 |   4 | Format_desc |         1 |         107 | Server ver: 5.5.29-log, Binlog ver: 4                         |\n......\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("17.XID_EVENT"),e("br"),s._v("\n支持XA的存储引擎才有，本地测试的数据库存储引擎是innodb，所有上面出现了XID_EVENT；innodb事务提交产生了QUERY_EVENT的BEGIN声明，QUERY_EVENT以及COMMIT声明，"),e("br"),s._v("\n如果是myIsam存储引擎也会有BEGIN和COMMIT声明，只是COMMIT类型不是XID_EVENT；")]),s._v(" "),e("p",[s._v("18.BEGIN_LOAD_QUERY_EVENT和EXECUTE_LOAD_QUERY_EVENT"),e("br"),s._v("\n执行LOAD DATA INFILE 语句时产生此事件，在MySQL5.0版本中使用；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> LOAD DATA INFILE \"D:/btest.sql\" INTO TABLE test.btest FIELDS TERMINATED BY ',';\nQuery OK, 1 row affected (0.11 sec)\nRecords: 1  Deleted: 0  Skipped: 0  Warnings: 0\n \nmysql> show binlog events in 'bin-log.000003';\n+----------------+------+--------------------+-----------+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Log_name       | Pos  | Event_type         | Server_id | End_log_pos | Info                                                                                                                                                                             |\n+----------------+------+--------------------+-----------+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n......                                                                                                                                                          |\n| bin-log.000003 |  896 | Query              |         1 |         964 | BEGIN                                                                                                                                                                            |\n| bin-log.000003 |  964 | Begin_load_query   |         1 |        1008 | ;file_id=3;block_len=21                                                                                                                                                          |\n| bin-log.000003 | 1008 | Execute_load_query |         1 |        1237 | use `test`; LOAD DATA INFILE 'D:/btest.sql' INTO TABLE `btest` FIELDS TERMINATED BY ',' ENCLOSED BY '' ESCAPED BY '\\\\' LINES TERMINATED BY '\\n' (`id`, `age`, `name`) ;file_id=3 |\n| bin-log.000003 | 1237 | Xid                |         1 |        1264 | COMMIT /* xid=148 */                                                                                                                                                             |\n+----------------+------+--------------------+-----------+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n19 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("btest.sql内容如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("999, 101, 'zhaohui'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("19.TABLE_MAP_EVENT"),e("br"),s._v("\n用在binlog_format为ROW模式下，将表的定义映射到一个数字，在行操作事件之前记录（包括：WRITE_ROWS_EVENT，UPDATE_ROWS_EVENT，DELETE_ROWS_EVENT）；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> insert into btest values(998,88,'zhaohui');\nQuery OK, 1 row affected (0.09 sec)\n \nmysql> show binlog events in 'bin-log.000004';\n+----------------+-----+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Log_name       | Pos | Event_type  | Server_id | End_log_pos | Info                                                                                                                                                                                                                           |\n+----------------+-----+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n......                                                                                                                                                                                                         |\n| bin-log.000004 | 776 | Query       |         1 |         844 | BEGIN                                                                                                                                                                                                                          |\n| bin-log.000004 | 844 | Table_map   |         1 |         892 | table_id: 33 (test.btest)                                                                                                                                                                                                      |\n| bin-log.000004 | 892 | Write_rows  |         1 |         943 | table_id: 33 flags: STMT_END_F                                                                                                                                                                                                 |\n| bin-log.000004 | 943 | Xid         |         1 |         970 | COMMIT /* xid=20 */                                                                                                                                                                                                            |\n+----------------+-----+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n14 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("20.PRE_GA_WRITE_ROWS_EVENT,PRE_GA_UPDATE_ROWS_EVENT和PRE_GA_DELETE_ROWS_EVENT"),e("br"),s._v("\n以上三个事件已经过期，被其他事件代替；"),e("br"),s._v("\nPRE_GA_WRITE_ROWS_EVENT被WRITE_ROWS_EVENT代替；"),e("br"),s._v("\nPRE_GA_UPDATE_ROWS_EVENT被UPDATE_ROWS_EVENT代替；"),e("br"),s._v("\nPRE_GA_DELETE_ROWS_EVENT被DELETE_ROWS_EVENT代替；")]),s._v(" "),e("p",[s._v("21.WRITE_ROWS_EVENT、UPDATE_ROWS_EVENT和DELETE_ROWS_EVENT"),e("br"),s._v("\n以上三个事件都被用在binlog_format为ROW模式下，分别对应inset，update和delete操作；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> insert into btest values(997,88,'zhaohui');\nmysql> update btest set age=89 where id=997;\nmysql> delete from btest where id=997;\n \nmysql> show binlog events in 'bin-log.000004';\n+----------------+------+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Log_name       | Pos  | Event_type  | Server_id | End_log_pos | Info                                                                                                                                                                                                                           |\n+----------------+------+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n......                                                                                                                                                                                                          |\n| bin-log.000004 | 1164 | Query       |         1 |        1232 | BEGIN                                                                                                                                                                                                                          |\n| bin-log.000004 | 1232 | Table_map   |         1 |        1280 | table_id: 33 (test.btest)                                                                                                                                                                                                      |\n| bin-log.000004 | 1280 | Write_rows  |         1 |        1331 | table_id: 33 flags: STMT_END_F                                                                                                                                                                                                 |\n| bin-log.000004 | 1331 | Xid         |         1 |        1358 | COMMIT /* xid=24 */                                                                                                                                                                                                            |\n| bin-log.000004 | 1358 | Query       |         1 |        1426 | BEGIN                                                                                                                                                                                                                          |\n| bin-log.000004 | 1426 | Table_map   |         1 |        1474 | table_id: 33 (test.btest)                                                                                                                                                                                                      |\n| bin-log.000004 | 1474 | Update_rows |         1 |        1548 | table_id: 33 flags: STMT_END_F                                                                                                                                                                                                 |\n| bin-log.000004 | 1548 | Xid         |         1 |        1575 | COMMIT /* xid=25 */                                                                                                                                                                                                            |\n| bin-log.000004 | 1575 | Query       |         1 |        1643 | BEGIN                                                                                                                                                                                                                          |\n| bin-log.000004 | 1643 | Table_map   |         1 |        1691 | table_id: 33 (test.btest)                                                                                                                                                                                                      |\n| bin-log.000004 | 1691 | Delete_rows |         1 |        1742 | table_id: 33 flags: STMT_END_F                                                                                                                                                                                                 |\n| bin-log.000004 | 1742 | Xid         |         1 |        1769 | COMMIT /* xid=27 */                                                                                                                                                                                                            |\n+----------------+------+-------------+-----------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("22.INCIDENT_EVENT"),e("br"),s._v("\n主服务器发生了不正常的事件，通知从服务器并告知可能会导致数据处于不一致的状态；")]),s._v(" "),e("p",[s._v("23.HEARTBEAT_LOG_EVENT"),e("br"),s._v("\n主服务器告诉从服务器，主服务器还活着，不写入到日志文件中；")]),s._v(" "),e("p",[e("strong",[s._v("总结")]),e("br"),s._v("\n本文对Binlog的所有事件进行了大体的介绍，必要的时候也介绍了触发事件的条件；但是并没有深入介绍事件的fix data和variable data，后续文章会继续介绍这一块。")])])}),[],!1,null,null,null);n.default=t.exports}}]);