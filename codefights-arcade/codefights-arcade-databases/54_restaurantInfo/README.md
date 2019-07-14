---
layout: home
title: Restaurant Info
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are managing a restaurant recommendation service that has recently started to gain popularity.

The information about the restaurants is currently stored in the **restaurants** table with the following structure:

* **id**: unique id of the restaurant;
* **name**: the restaurant's name.

As the table grew you decided to extend it, in particular add the <code>description</code> (<code>VARCHAR(100)</code>, the description of the restaurant) and <code>active</code> (<code>INT</code>, <code>0</code> or <code>1</code> if it works or closed respectively) columns.

Add these two new columns to the **restaurants** table using the following rules for all records:

* the <code>description</code> should be set to <code>"TBD"</code> (for To Be Defined).
* <code>active</code> should be set to <code>1</code>.


**Example**

For the following tables **restaurants**

| id  | name                     |
| --- | ------------------------ |
| id  | name                     |
| 1   | The Big City Barbecue    |
| 2   | Roadhouse                |
| 3   | Hibiscus                 |
| 4   | The Waterfront Courtyard |
| 5   | The Royal Spices         |

should become

| id  | name                     | description | active |
| --- | ------------------------ | ----------- | ------ |
| 1   | The Big City Barbecue    | TBD         | 1      |
| 2   | Roadhouse                | TBD         | 1      |
| 3   | Hibiscus                 | TBD         | 1      |
| 4   | The Waterfront Courtyard | TBD         | 1      |
| 5   | The Royal Spices         | TBD         | 1      |

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
