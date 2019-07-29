---
layout: home
title: Storage Optimization
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You noticed that your server is running out of free HDD space. You investigated and discovered that most of the space is taken up by the **workers_info** table, which has the following structure:

* **id**: the unique worker ID;
* **name**: the name of the worker;
* **date_of_birth**: the worker's date of birth;
* **salary**: the worker's salary.

One strange thing about this table is that a lot of its rows contain <code>NULL</code> values in some of the columns (except for the <code>id</code> column, which always contains a non-NULL value).

After thinking about this problem, you've decided to change the way you store data in **workers_info**. Instead of keeping the cells with <code>NULL</code> values in the table, you will only store <code>id</code>, <code>column_name</code>, and <code>value</code> columns. <code>column_name</code> will contain the name of a column that contains a non-NULL value for each <code>id</code>. <code>value</code> will be the value from this row, converted to a string. For dates, use the format <code>YYYY-MM-DD</code>.

Given the **workers_info** table, compose a results table that has the following three columns: <code>id</code>, <code>column_name</code>, and <code>value</code>, that contain the workers' <code>id</code>s, the column names, and the stringified values, in the format described above. The table should be sorted in ascending order by <code>id</code>. Rows with the same <code>id</code> should be sorted by column names in the following order: <code>name</code>, <code>date_of_birth</code>, and then <code>salary</code>.


**Example**

For the following tables **workers_info**, where empty cells stand for a <code>NULL</code> value

| id  | name           | date_of_birth | salary |
| --- | -------------- | ------------- | ------ |
| 1   | Justin Penrose | 1969-03-01    | 3000   |
| 2   |                |               |        |
| 3   | Robt Claire    |               |
| 10  |                | 1970-12-12    |        |
| 11  |                |               | 5000   |
| 12  | Yuk Kluge      |               | 4500   |

the output should be



| id  | column_name   | value          |
| --- | ------------- | -------------- |
| 1   | name          | Justin Penrose |
| 1   | date_of_birth | 1969-03-01     |
| 1   | salary        | 3000           |
| 3   | name          | Robt Claire    |
| 10  | date_of_birth | 1970-12-12     |
| 11  | salary        | 5000           |
| 12  | name          | Yuk Kluge      |
| 12  | salary        | 4500           |


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
