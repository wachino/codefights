---
layout: home
title: Null Intern
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your company hired an intern database engineer, who immediately started updating the data in the system. Unfortunately, he hasn't fully grasped the concept of <code>NULL</code> values yet and he performed some incorrect inserts and updates to the **departments** table, which has the following structure:

- **id**: The unique department ID;
- **name**: The name of the department;
- **description**: The description of the department.

Now you have a table where the description column holds values such as <code>' NULL '</code>, NULL, <code>'nil'</code> and <code>' - '</code>. You need to find out exactly how many records in the table should have <code>NULL</code> in the <code>description</code> column, regardless of whether the intern input the value correctly or not.

He used the following values to indicate <code>NULL</code>:

- **NULL**: just a regular NULL value;
- **'&#60;spaces&#62;NULL&#60;spaces&#62;'**: NULL as a case insensitive (i.e. <code>NuLl</code> is also OK) string with an arbitrary number of spaces at the beginning and at the end;
- **'&#60;spaces&#62;nil&#60;spaces&#62;'**: nil as a case insensitive (i.e. <code>niL</code> is also OK) string with an arbitrary number of spaces at the beginning and at the end;
- **'&#60;spaces&#62;-&#60;spaces&#62;'**: a single dash with an arbitrary number of spaces at the beginning and at the end.

Given the **departments** table, compose the resulting table with the single column <code>number_of_nulls</code> containing a single value: the number of rows in the **departments** table that are supposed to have <code>NULL</code> in the <code>description</code>.

**Example**

For the following table **departments**

| id  | name       | description |
| --- | ---------- | ----------- |
| 1   | finance    | NULL        |
| 2   | marketing  | ' NULL'     |
| 3   | IT         | 'not nil'   |
| 4   | accounting | '-'         |

the output should be

| number_of_nulls |
| --------------- |
| 3               |

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
