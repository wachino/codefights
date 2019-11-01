---
layout: home
title: Queries Execution
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You're working at a company that sells handmade toys. You're supposed to write a monthly report for your managers about how the company is doing. It takes a lot of time to create these reports manually, so you decided to write a function that will make the process easier.

Information for your reports is given in three tables:

* **orders** (information about the orders made throughout the month):
  * order_id: the unique order ID;
  * order_type: either <code>"Buy"</code> or <code>"Sell"</code>;
  * date_placed: the date the order was made;
  * order_qty: the quantity of ordered items;
  * order_price: the price of the order;
* **execution** (information about executed orders):
  * execution_id: the unique execution ID;
  * order_id: foreign key referencing orders.order_id;
  * execution_date: the date of the execution;
  * execution_qty: the quantity of bought or sold items;
  * execution_price: the cost of the execution;
* **queries** (queries which results should be in the reports):
  * query_name: the name of the query;
  * code: the code of the query that should be executed; it's guaranteed that each <code>code</code> returns exactly one value.

In order to prepare the required values for your next report, you should create a new table with columns <code>query_name</code> and <code>val</code>. For each <code>query_name</code>, the result of the executed query should be stored in the respective <code>val</code> column. The table should be sorted by <code>query_name</code> in ascending order.

**Example**

For the following tables **orders**

| order_id | order_type | date_placed | order_qty | order_price |
| -------- | ---------- | ----------- | --------- | ----------- |
| 1        | Buy        | 2014-03-15  | 5         | 50          |
| 2        | Buy        | 2014-02-03  | 15        | 23          |
| 3        | Sell       | 2014-01-16  | 45        | 2           |
| 4        | Sell       | 2014-01-17  | 10        | 7           |


**execution**:

| execution_id | order_id | execution_date | execution_qty | execution_price |
| ------------ | -------- | -------------- | ------------- | --------------- |
| 1            | 1        | 2014-03-16     | 2             | 49              |
| 2            | 1        | 2014-03-17     | 3             | 51              |
| 3            | 2        | 2014-02-03     | 15            | 22              |
| 4            | 3        | 2014-01-17     | 45            | 2               |

and **queries**:

| query_name       | code                                         |
| ---------------- | -------------------------------------------- |
| AVG_EXEC_PRICE   | SELECT AVG(execution_price) FROM `execution` |
| COUNT_EXECUTIONS | SELECT COUNT(execution_id) FROM `execution`  |
| MIN_ORDER_DATE   | SELECT MIN(date_placed) FROM `orders`        |
| SUM_ORD_QTY      | SELECT SUM(order_qty) FROM `orders`          |

the output should be

| query_name       | val          |
| ---------------- | ------------ |
| AVG_EXEC_PRICE   | 31.000000000 |
| COUNT_EXECUTIONS | 4            |
| MIN_ORDER_DATE   | 2014-01-16   |
| SUM_ORD_QTY      | 75           |


* **[execution time limit] 10 seconds (mysql)**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight sql linenos=table %}

{% include_relative solution.sql %}

{% endhighlight %}

</div>
</div>
