---
layout: home
title: Expressions Verification
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You're a math teacher at an elementary school. Today you taught your class basic arithmetic operations (<code>"+"</code>, <code>"-"</code>, <code>"*"</code>, <code>"/"</code>) and now you need to give the students some homework. You have a lot of expressions in the format <code>a &lt;operation&gt; b = c</code>, where <code>a</code>, <code>b</code>, and <code>c</code> are some integers and <code>operation</code> is one of the operations given above.

Information about these expressions is stored in the table **expressions**, which has the structure:

* **id**: the unique operation id;
* **a**: an integer;
* **b**: an integer;
* **operation**: one of the operations given above (<code>"+"</code>, <code>"-"</code>, <code>"*"</code>, or <code>"/"</code>);
* **c**: an integer.

The homework you're going to give is simple: For each expression, the student needs to determine whether it's correct or not, i.e. whether it's true that the expression to the left of the <code>=</code> sign equals <code>c</code>.

Since you have many students and checking all their answers manually is a lot of work, you want to streamline the process by automatically identifying all the expressions that are correct. Given the table **expressions**, build the resulting table as follows: The table should have the same columns as the initial table does, but it should only contain those rows that represent correct expressions. The rows should be ordered by <code>id</code>.

**Example**

For the following table **expressions**

| id | a | b | operation | c |
| ---- | ---- | ---- | ---- |
| 1 | 2 | 3 | + | 5 |
| 2 | 2 | 3 | + | 6 |
| 3 | 3 | 2 | / | 1 |
| 4 | 4 | 7 | * | 28 |
| 5 | 54 | 2 | - | 27 |
| 6 | 3 | 0 | / | 0 |

the output should be

| id | a | b | operation | c |
| ---- | ---- | ---- | ---- |
| 1 | 2 | 3 | + | 5 |
| 4 | 4 | 7 | * | 28 |

Explanation:

* 2 + 3 = 5 - correct;
* 2 + 3 = 6 - incorrect;
* 3 / 2 = 1 - incorrect;
* 4 * 7 = 28 - correct;
* 54 - 2 = 27 - incorrect;
* 3 / 0 = 0 - incorrect.

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
