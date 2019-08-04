---
layout: home
title: Courses Distribution
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You work with a professor of applied mathematics and informatics to create and distribute this year's plan of courses for students.
You were almost finished when you noticed that a couple of fixes yet need to be done. There are courses which names' are marked as <code>'-toremove'</code>, so you decided to remove them permanently. Prior to removing them, you'd like to make sure that deleting a course would also remove it from all the related tables automatically.

All courses are stored in **courses** table that has the following structure:

- **id**: unique id of the course;
- **name**: unique name of the course that may end with <code>'-toremove'</code>, which means that the course is about to be removed;
- **description**: description of the course.

There are also **groupcourses** and **groupexams** tables which represent courses assigned to groups and examination dates of courses for each group, respectively. Here are their structures:

- **groupcourses**:
  - <code>group_id</code>: group id;
  - <code>course_id</code>: course id;
- **groupexams**:
  - <code>date</code>: the date of the exam;
  - <code>group_id</code>: id of the group taking the exam;
  - <code>course_id</code>: id of the course.

Given **courses**, **groupcourses** and **groupexams** tables you need to properly set up foreign keys, so that after a record is deleted from the **courses** table, records that correspond to the deleted course are also deleted from **groupcourses** and **groupexams**. Please note that <code>groupexams</code> can only contain pairs from <code>groupcourses</code> and there can be multiple exam dates for the same <code>group_id</code>, <code>course_id</code> combination. It is guaranteed that adding correct foreign keys won't raise any errors.

**Example**

For the following table **courses**

| id  | name                      | description                               |
| --- | ------------------------- | ----------------------------------------- |
| 1   | Linear algebra            | Basis of matrix theory and linear algebra |
| 2   | Geometry                  | NULL                                      |
| 3   | Determinants and matrices | NULL                                      |
| 4   | Matlab-toremove           | Matlab 7                                  |

**groupcourses**

| group_id | course_id |
| -------- | --------- |
| 1        | 1         |
| 1        | 2         |
| 1        | 3         |
| 2        | 1         |
| 2        | 4         |

and **groupexams**

| date       | group_id | course_id |
| ---------- | -------- | --------- |
| 2010-01-10 | 1        | 1         |
| 2010-01-11 | 1        | 2         |
| 2010-01-12 | 2        | 4         |

the final result should be

| group_id | course_id |
| -------- | --------- |
| 1        | 1         |
| 1        | 2         |
| 1        | 3         |
| 2        | 1         |

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
