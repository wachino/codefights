---
layout: home
title: Net Income
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You own a small company, and you keep track of its income in the **accounting** table, which has the following structure:

- **date**: a unique date on which your company was open;
- **profit**: the amount of money your company earned that day;
- **loss**: the amount of money your company lost that day.

You've decided to sell the company, and in order to make the offer more appealing to potential buyers you need to create a financial report.

Given the **accounting** table, compose the resulting table with three columns: <code>year</code>, <code>quarter</code> and <code>net_profit</code>. The first column should contain the year, the second one should contain the quarter of that year, and the third one should contain the net income (<code>profit - loss</code> difference) of your company during that period. The resulting table should be sorted by the <code>year</code> in ascending order. If there are several rows with the same <code>year</code>, sort them by the <code>quarter</code> in ascending order.

Don't include year/quarter in the answer if there is no entry for it in the **accounting** table.

**Example**

For the following table **accounting**

| date       | profit | loss |
| ---------- | ------ | ---- |
| 2006-01-01 | 100    | 15   |
| 2006-07-15 | 40     | 100  |
| 2006-08-01 | 50     | 50   |
| 2006-11-11 | 100    | 50   |
| 2006-12-01 | 50     | 80   |
| 2007-05-03 | 42     | 16   |

the output should be

| year | quarter | net_profit |
| ---- | ------- | ---------- |
| 2006 | 1       | 85         |
| 2006 | 3       | -60        |
| 2006 | 4       | 20         |
| 2007 | 2       | 26         |

- **[execution time limit] 10 seconds (mysql)**

</div>
<div class="columnSol" markdown="1">

## Solution

---

{% highlight sql linenos=table %}

{% include_relative solution.sql %}

{% endhighlight %}

</div>
</div>
