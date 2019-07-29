---
layout: home
title: Consecutive Ids
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You work for an online store in which each item put up for sale gets a unique randomly generated id.

These item ids are stored in the **itemIds** table with only one column:

* **id**: unique id of an item.

However, this system proved to be not very convenient to use in a number of queries that required consecutive ids. To solve this problem, you decided to generate new ids for the items using the following algorithm: the item with the smallest <code>id</code> would get <code>1</code> as a new id, the second smallest would get <code>2</code>, and so on.

Given the **itemIds** table, compose the resulting table with two columns: <code>oldId</code> and <code>newId</code>. The first column should contain the old item id, and the second one should contain the new id generated as described above. The table should be sorted by the <code>newId</code> in *ascending* order.


**Example**

For the following tables **itemIds**

| id    |
| ----- |
| 1     |
| 12    |
| 23    |
| 42    |
| 49    |
| 678   |
| 3242  |
| 9320  |
| 67867 |
| 84523 |

the output should be

| oldId | newId |
| ----- | ----- |
| 1     | 1     |
| 12    | 2     |
| 23    | 3     |
| 42    | 4     |
| 49    | 5     |
| 678   | 6     |
| 3242  | 7     |
| 9320  | 8     |
| 67867 | 9     |
| 84523 | 10    |


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
