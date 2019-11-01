---
layout: home
title: Find Table
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You need to connect to a remote database and extract some information from it. The problem is, you don't know the name of the most important table in this database! You were told that it should start with the letter <code>e</code> and end with the letter <code>s</code>. Now you want to find all possible candidates, i. e. tables with such names, as well as their column names and their datatypes. It is guaranteed that at least one such table exists in the database.

You have already connected to the database named <code>ri_db</code>. Now you just need to implement a procedure that will find the information about the most important table in it, as described above. The resulting table should have the following structure:

* **tab_name**: the name of the found table;
* **col_name**: the name of the column in the found table;
* **data_type**: the type of this column.

The rows in the output should be sorted first by the name of the table, then by the column names.


**Example**

For the following tables **events**

| event_date | event_name     |
| ---------- | -------------- |
| 2016-10-08 | Mum's birthday |
| 2016-10-31 | Halloween      |

and **guestlist** in the database

| id  | first_name | surname |
| --- | ---------- | ------- |
| 1   | John       | Miller  |
| 2   | Evelyn     | Ross    |

the output should be

| tab_name | col_name   | data_type |
| -------- | ---------- | --------- |
| events   | event_date | date      |
| events   | event_name | varchar   |


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
