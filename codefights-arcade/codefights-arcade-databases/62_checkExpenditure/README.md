---
layout: home
title: Check Expenditure
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Your boss knows that you're a good programmer and that you're responsible, so she's given you a big task - to check the company's expenditure automatically. You're given the table **expenditure_plan**, which describes all the planned expenditures, and the table **allowable_expenditure**, which describes the amount that can be spent in certain time periods.

The **expenditure_plan** table contains the following columns:

* **monday_date** - the unique date of the Monday of the corresponding week;
* **expenditure_sum** - the sum of the planned expenditure for the corresponding week.
All dates in this table fall in the same year.

The **allowable_expenditure** table contains the following columns:

* **id** - the unique ID of the limitation;
* **left_bound** - the unique left bound of the time period, represented by the number of the week (<code>1</code>-based);
* **right_bound** - the unique right bound of the time period, represented by the number of the week (<code>1</code>-based);
* **value** - the allowable sum that can be spent during the given left and right bounds, inclusive.
The segments of the time periods don't intersect with one other. The weeks are numbered sequentially from the first week. Week <code>1</code> is the first full week of the year, meaning that its Monday is part of the current year.

Your task is to return a table with the columns <code>id</code> and <code>loss</code>, where the value of loss is either <code>0</code> (if the expenditure limit with this <code>id</code> was not exceeded) or the amount of money by which the planned expenditure exceeded the allowable expenditure, sorted by <code>id</code>.

**Example**

For the following tables **expenditure_plan**

| monday_date | expenditure_sum |
| ----------- | --------------- |
| 2016-02-08  | 10              |
| 2016-02-15  | 12              |
| 2016-06-13  | 5               |
| 2016-06-27  | 13              |

and table **allowable_expenditure**

| id  | left_bound | right_bound | value |
| --- | ---------- | ----------- | ----- |
| 1   | 5          | 8           | 30    |
| 2   | 23         | 26          | 10    |


the output should be

| id  | loss |
| --- | ---- |
| 1   | 0    |
| 2   | 8    |

In the table **expenditure_plan**, the Mondays correspond to the weeks with numbers <code>6</code>, <code>7</code>, <code>24</code>, and <code>26</code> respectively. For the first time period, we add up <code>10</code> and <code>12</code> to get <code>22</code>. Since <code>22</code> is smaller than <code>30</code>, the loss is <code>0</code>. For the second time period, we add up <code>5</code> and <code>13</code> to get <code>18</code>. Since <code>18</code> is greater than <code>10</code>, the allowable expendature for this time period, the answer is <code>18 - 10 = 8</code>.

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
