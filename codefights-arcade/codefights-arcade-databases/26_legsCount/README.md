---
layout: home
title: Legs Count
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You really love counting stuff. In fact, right now you're sitting on a meadow and counting all the legs you see there! There are some people, some dogs, and some cats on the meadow. You're pretty confident that each human has <code>2</code> legs and that cats and dogs have <code>4</code> legs each.

The information about all the creatures on the meadow is stored in the table **creatures**. It has the following structure:

- **id**: The unique creature ID;
- **name**: The creature's name;
- **type**: The creature's type - <code>"human"</code>, <code>"cat"</code>, or <code>"dog"</code>. This column has <code>ENUM</code> type.

You want to calculate the total number of legs in the meadow. Given the table **creatures**, build a new table that only contains one column <code>summary_legs</code> and has only one row with the total number of legs that you can see.

**Example**

For the following table **creatures**

| id  | name  | type  |
| --- | ----- | ----- |
| 1   | Mike  | human |
| 2   | Misty | cat   |
| 3   | Max   | dog   |
| 4   | Tiger | human |

the output should be

| summary_legs |
| ------------ |
| 12           |

There are <code>2</code> humans, <code>1</code> cat, and <code>1</code> dog, so there are <code>2 _ 2 + 1 _ 4 + 1 \* 4 = 12</code> legs in total.

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
