---
layout: home
title: Top 5 Average Grade
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You're doing research about academic achievement, and you're studying one particular group of students at a local university. Find the average grade of the five most successful students in this group.

The information about the students' grades is stored in a table called **students**, which has the following attributes:

- **student_id**: the unique identifier of the student;
- **student_name**: the name of the student;
- **grade**: the grade that the student achieved.

The result should be a table with one column <code>average_grade</code> and one row that contains the average grade of the five students with the highest grades. The answer should be formatted to <code>2</code> digits after the decimal point. It is guaranteed that the five most successful students can be uniquely identified.

**Example**

For the following tables **students**

| student_id | student_name     | grade |
| ---------- | ---------------- | ----- |
| 1          | Oliver Smith     | 3.2   |
| 2          | Jacob Bell       | 2.9   |
| 3          | William Thompson | 3.1   |
| 4          | Sophie Clark     | 3.5   |
| 5          | Daniel Palmer    | 3.6   |
| 6          | Emily Morris     | 4.0   |
| 7          | Zachary Mills    | 2.5   |

the output should be

| average_grade |
| ------------- |
| 3.48          |

The top 5 grades for this group are <code>4.0</code>, <code>3.6</code>, <code>3.5</code>, <code>3.2</code>, and <code>3.1</code>, so their sum is equal to <code>17.4</code> and <code>17.4 / 5 = 3.48</code>.

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
