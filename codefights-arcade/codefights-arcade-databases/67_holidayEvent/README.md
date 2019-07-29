---
layout: home
title: Holiday Event
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

The store you're working for has decided to organize a special holiday event: every <code>4<sup>th</sup></code> purchase made during this event grants the lucky person who made it a special prize.

All purchases made during the event are stored in the database table **purchases** with the following structure:

* **timestamp**: unique purchase timestamp;
* **buyer_name**: the name of the person who made this purchase.

Given the **purchases** table, compose the resulting table with one column <code>winners</code> containing the names of the buyers who won the special prize by making a purchase number <code>k * 4</code> for some integer <code>k</code>. The numbering of the purchases starts with <code>1</code>.

Note, that each person can get no more than one prize (i.e. their name can occur in the answer at most once).

The table should be sorted by the winners' names in *ascending* order.


**Example**

For the following tables **purchases**

| timestamp           | buyer_name         |
| ------------------- | ------------------ |
| 2014-11-09 15:23:05 | Frank West         |
| 2014-11-09 20:11:02 | Terrence Alexander |
| 2014-11-10 12:10:00 | Sandy Cohen        |
| 2014-11-10 13:00:11 | Frank West         |
| 2014-11-10 14:09:10 | Sandy Cohen        |
| 2014-11-10 14:15:15 | Leonard Grant      |
| 2014-11-10 17:09:10 | Frank West         |
| 2014-11-10 19:09:10 | Diane Tucker       |
| 2014-11-11 18:09:11 | Pauline Ross       |
| 2014-11-11 20:00:00 | Jasmine Gibson     |
| 2014-11-12 10:12:00 | Kim Neal           |
| 2014-11-12 10:12:01 | Frank West         |
| 2014-11-12 15:14:42 | Sean Kim           |

the output should be

| winners      |
| ------------ |
| Diane Tucker |
| Frank West   |

because Frank West made the <code>4<sup>th</sup></code> and the <code>12<sup>th</sup></code> purchases, and Diane Tucker's purchase was the <code>8<sup>th</sup></code>.

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
