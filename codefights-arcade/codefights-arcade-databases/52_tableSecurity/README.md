---
layout: home
title: Table Security
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

As the head of a company you decided that it's time to introduce access control and to restrict access to **employees** table for all the employees. The table has the following structure:

* **id**: unique employee id;
* **name**: the name of the employee;
* **date_joined**: the date the employee was hired;
* **salary**: the salary of the employee;

As a first step towards improving security you decided to create a view which would be used by the employees instead of direct access to the table.

Create a view which will select all the columns from the **employees** table but leave only <code>id</code> and <code>name</code> intact. <code>date_joined</code> column should contain the year the employee joined the company, and <code>salary</code> column should be filled with <code>-</code> (single dashes).

**Example**

For the following table **employees**


| id  | name              | date_joined | salary |
| --- | ----------------- | ----------- | ------ |
| 1   | Farah Dahlquist   | 2006-03-05  | 2000   |
| 2   | Yessenia Lininger | 2008-04-11  | 2500   |
| 3   | Justin Penrose    | 2009-12-12  | 2400   |
| 4   | Josphine Clickner | 2007-07-25  | 3000   |
| 5   | Linwood Mcquiston | 2011-01-15  | 4000   |

the output should be

| id  | name              | date_joined | salary |
| --- | ----------------- | ----------- | ------ |
| 1   | Farah Dahlquist   | 2006        | -      |
| 2   | Yessenia Lininger | 2008        | -      |
| 3   | Justin Penrose    | 2009        | -      |
| 4   | Josphine Clickner | 2007        | -      |
| 5   | Linwood Mcquiston | 2011        | -      |

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
