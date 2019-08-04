---
layout: home
title: Monthly Scholarships
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Students at your university get scholarships that are paid out throughout the year.

Information about the scholarships is stored in the table **scholarships**, which has the structure:

- **id**: the unique student id;
- **scholarship**: the amount of the annual scholarship the student has been awarded.
-

Now you need to calculate the amount of money each student should get per month. Given the table **scholarships**, build the resulting table as follows: The table should have the same columns as the initial table, but the <code>scholarship</code> column should contain the amount of the student's monthly scholarship payout. The rows should be ordered by the students' <code>id</code>s.

**Example**

For the following table **scholarships**

| id  | scholarship |
| --- | ----------- |
| 1   | 12000       |
| 2   | 18000       |
| 3   | 24000       |
| 4   | 15000       |
| 5   | 21000       |
| 6   | 13000       |

the output should be

| id  | scholarship        |
| --- | ------------------ |
| 1   | 1000               |
| 2   | 1500               |
| 3   | 2000               |
| 4   | 1250               |
| 5   | 1750               |
| 6   | 1083.3333333333333 |

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
