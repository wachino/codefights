---
layout: home
title: New Subscribers
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are managing a small newspaper subscription service. Anyone who uses it can subscribe to a large number of different newspapers for a full year or just a half year.

The information about subscriptions is stored in the **full_year** and **half_year** tables, which have the following structures:

* **full_year**:
    * **id**: the unique subscription ID;
    * **newspaper**: the newspaper's name;
    * **subscriber**: the name of the subscriber.
* **half_year**:
    * **id**: the unique subscription ID;
    * **newspaper**: the newspaper's name;
    * **subscriber**: the name of the subscriber.

Given the **full_year** and **half_year** tables, compose the result as follows: The resulting table should have one column <code>subscriber</code> that contains all the distinct names of anyone who is subscribed to a newspaper with the word <code>Daily</code> in its name. The table should be sorted in ascending order by the subscribers' first names.

**Example**

The following tables **full_year**

| id | newspaper | subscriber |
| ---- | ---- | ---- |
| 1 | The Paragon Herald | Crissy Sepe |
| 2 | The Daily Reporter | Tonie Moreton |
| 3 | Morningtide Daily | Erwin Chitty |
| 4 | Daily Breakfast | Tonie Moreton |
| 5 | Independent Weekly | Lavelle Phu |

and **half_year**

| id | newspaper | subscriber |
| ---- | ---- | ---- |
| 1 | The Daily Reporter | Lavelle Phu |
| 2 | Daily Breakfast | Tonie Moreton |
| 3 | The Paragon Herald | Lia Cover |
| 4 | The Community Gazette | Lavelle Phu |
| 5 | Nova Daily | Lia Cover |
| 6 | Nova Daily | Joya Buss |

the output should be

| subscriber |
| ---- |
| Erwin Chitty |
| Joya Buss |
| Lavelle Phu |
| Lia Cover |
| Tonie Moreton |

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
