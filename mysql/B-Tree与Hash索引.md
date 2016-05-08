# 比较B-Tree索引与Hash索引
弄明白B-tree与Hash数据结构有助于预测在不同的存储引擎中的索引使用这些数据结构时，查询语句的执行有怎样的不同，特别是对于要让你选择`B-Tree`索引或`Hash`索引的MEMORY存储引擎

## B-Tree索引 特征
B-Tree索引可以用于在表达式中进行列比较，像`=`, `>`, `>=`, `<`, `<=`, or `BETWEEN`这些操作表达式。索引也可以用于`LIKE`比较，只要这个`LIKE`的参数，是一个不以通配符开始的字符常量。例如，以下的SELECT语句使用索引：
```language
SELECT * FROM tbl_name WHERE key_col LIKE 'Patrick%';
SELECT * FROM tbl_name WHERE key_col LIKE 'Pat%_ck%';
```
在第一个语句，只会索引到'Patrick' <= key_col < 'Patricl'之间的行数据。在第二个语句，只会索引到'Pat' <= key_col < 'Pau'之间的行数据。

以下的SELECT语句将不会使用索引：
```SQL
SELECT * FROM tbl_name WHERE key_col LIKE '%Patrick%';
SELECT * FROM tbl_name WHERE key_col LIKE other_col;
```
在第一个语句，`LIKE`的值以通配符开始。在第二个语句`LIKE`的值不是常量。

假如你使用 ... `LIKE` '%string%'而且string超过三个字符，MYSQL使用Turbo Boyer-Moore algorithm算法来初始化查询表达式，然后用这个表达式来让查询更迅速。

如果`col_name`是索引，那使用`col_name IS NULL`作为查询也会使用索引

任何一个没有覆盖所有WHERE中AND级别条件的索引是不会被使用的。也就是说，要使用一个索引，这个索引中的第一列需要在每个AND组中出现

以下的WHERE条件将使用索引：
```SQL
... WHERE index_part1=1 AND index_part2=2 AND other_column=3

/* index = 1 OR index = 2 */
... WHERE index=1 OR A=10 AND index=2

/* optimized like "index_part1='hello'" */
... WHERE index_part1='hello' AND index_part3=5

/* Can use index on index1 but not on index2 or index3 */
... WHERE index1=1 AND index2=2 OR index1=3 AND index3=3;
```
这些WHERE条件将不会使用索引：
```SQL
/* index_part1 is not used */
... WHERE index_part2=1 AND index_part3=2

/*  Index is not used in both parts of the WHERE clause  */
... WHERE index=1 OR A=10

/* No index spans all rows  */
... WHERE index_part1=1 OR index_part2=10
```

有时候mysql不会使用索引，即使有可用的索引的情况下。一种场景是在当优化器预估使用索引将会读取大部分的行数据时时。（在这种情况下，一次全表扫描可能比使用索引更快，因为它需要更少的检索）。但是，假如在这样的语句中使用LIMIT来限定返回的行数，mysql则会不管怎样都会使用索引，因为可以更快的在结果中找到少数行数据来返回。

## Hash索引 特征

Hash类型的索引有一些区别于以上所述的特征：

* 它们只能用于等值比较，例如`=`和`<=>`操作符（但是快很多）。它们不能用于比较操作，例如像`<`这样的范围查询条件。假如系统只需要单值查找，即"key-value"这样的存储结构，尽量使用hash类型索引。

* 优化器不能用hash索引来为"ORDER BY"操作符加速。（这类索引不能被用于搜索下一个次序的值）

* Mysql不能判断出两个值之间有多少条数据（这需要使用范围查询操作符来决定使用哪个索引）。假如你将一个MyISAM表或者InnoDB表转为一个基于Hash索引的MEMORY表，可能会影响一些查询语句。

* 只有完整的keys才能被用于查找数据。（在B-tree索引，任何一个有左前缀的关键字都可以用于查找数据）。

## 引用文章

> [MySQL官方文档](http://dev.mysql.com/doc/refman/5.7/en/index-btree-hash.html)

> [Btree笔记](../数据结构/Btree.md)