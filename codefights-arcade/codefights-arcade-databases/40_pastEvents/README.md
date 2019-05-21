---
layout: home
title: Past Events
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

During the most recent social event you attended, you suddenly realized that you forgot your USB drive at a previous event. You're pretty sure that you had your flash drive with you just last week, which means that you probably lost it during one of the events of the last <code>7</code> days. You want to find all the events you attended during this period.

The list of events you've attended (including the most recent one) is stored in a table called **Events**. It has three columns:

* **id**: the unique id of the event;
* **name**: the name of the event;
* **event_date**: the date of the event.

You want to come up with the list of all the events you attended over the past <code>7</code> days, except for the very last one (since you know you lost your flash drive before then). Return this list as a table with columns <code>name</code> and <code>event_date</code> sorted by event dates in descending order.

*It is guaranteed that there is at most one event on any given day.*


**Example**

For the following table **Events**

| id  | name                | event_date |
| --- | ------------------- | ---------- |
| 1   | TGIF                | 2016-11-18 |
| 2   | TGIF                | 2016-11-11 |
| 3   | Weekly team meeting | 2016-11-07 |
| 4   | Weekly team meeting | 2016-11-14 |

the output should be

| name                | event_date |
| ------------------- | ---------- |
| Weekly team meeting | 2016-11-14 |
| TGIF                | 2016-11-11 |

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
