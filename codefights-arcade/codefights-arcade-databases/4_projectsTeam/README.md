---
layout: home
title: Projects Team
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You've been promoted and assigned to a new project. The problem is, you don't know who you are working with and your predecessor has vanished without a trace! Luckily, each project in your company keeps its own activity database, which you are going to use to find out the names of your new colleagues.

Information about the project's activity is stored in table **projectLog**, which has the following structure:

* **id**: unique action id;
* **name**: the name of the person who performed the action;
* **description**: the description of the action;
* **timestamp**: the timestamp of the action.

You only have access to the project's most recent history, but this should be enough for you. You've decided that finding everyone who interacted with the project in this period is the best way to start.

Given the table **projectLog**, build a new results table with a single <code>name</code> column that contains the names of the project's contributors sorted in ascending order.

**Example**

For the following table **projectLog**

| id | name | description | timestamp |
| ---- | ---- | ---- | ---- |
| 1 | James Smith | add new logo | 2015-11-10 15:24:32 |
| 2 | John Johnson | update license | 2015-11-10 15:50:01 |
| 3 | John Johnson | fix typos | 2015-11-10 15:55:01 |
| 4 | James Smith | update logo | 2015-11-10 17:53:04 |
| 5 | James Smith | delete old logo | 2015-11-10 17:54:04 |
| 6 | Michael Williams | fix the build | 2015-11-12 13:37:00 |
| 7 | Mary Troppins | add new feature | 2015-11-08 17:54:04 |
| 8 | James Smith | fix fonts | 2015-11-14 13:54:04 |
| 9 | Richard Young | remove unneeded files | 2015-11-14 00:00:00 |
| 10 | Michael Williams | add tests | 2015-11-09 11:53:00 |

the output should be

| name |
| ---- |
| James Smith |
| John Johnson |
| Mary Troppins |
| Michael Williams |
| Richard Young |

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
