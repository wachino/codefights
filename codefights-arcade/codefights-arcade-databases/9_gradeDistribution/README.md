---
layout: home
title: Grade Distribution
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

At the end of every semester your professor for "Introduction to Databases" saves the exam results of every student in a simple database system. In the database table **Grades**, there are five columns:

* **Name**: the name of the student;
* **ID**: the student's ID number (a 5 byte positive integer);
* **Midterm1**: the result of the first midterm out of 100 points;
* **Midterm2**: the result of the second midterm out of 100 points;
* **Final**: the result of the final exam, this time out of a possible 200 points.

According to school policy, there are three possible ways to evaluate a grade:

* Option 1:
    * Midterm 1: 25% of the grade
    * Midterm 2: 25% of the grade
    * Final exam: 50% of the grade
* Option 2:
    * Midterm 1: 50% of the grade
    * Midterm 2: 50% of the grade
* Option 3:
    * Final exam: 100% of the grade.

Each student's final grade comes from the option that works the best for that student.

As a Teaching Assistant (TA), you need to **query** the **name** and **id** of all the students whose best grade comes from **Option 3**, sorted based on the first 3 characters of their name. If the first 3 characters of two names are the same, then the student with the lower ID value comes first.

**Example**

For the following table **Grades**

| Name | ID | Midterm1 | Midterm2 | Final |
| ---- | ---- | ---- | ---- | ---- |
| David | 42334 | 34 | 54 | 124 |
| Anthony | 54528 | 100 | 10 | 50 |
| Jonathan | 58754 | 49 | 58 | 121 |
| Jonty | 11000 | 25 | 30 | 180 |


the output should be

| Name | ID |
| ---- | ---- |
| David | 42334 |
| Jonty | 11000 |
| Jonathan | 58754 |

For David, Jonty and Jonathan, the best option is number 3. But Anthony's best option is the second one, because **Option1 = 25% of 100 + 25% of 10 +50% of 50 = 52.5, Option2 = 50% of 100 + 50% of 10 = 55, Option3 = 100% of 50 = 50**.

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
