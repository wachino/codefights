---
layout: home
title: Type Inheritance
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are writing a *transcompiler* that will be able to translate programs from one programming language to another. Your transcompiler needs to be able to analyze a program to understand what data types it uses and how they should be mapped to the types of the output language.

In order to handle this, you created an **inheritance** table, which has the following structure:

* **derived**: a unique data type in the original language;
* **base**: the base data type from which the <code>derived</code> type is inherited.

It's guaranteed that there are no cyclic dependencies.

For each translated program a **variables** table is created, which has the following structure:

* **var_name**: the unique variable name;
* **type**: the variable type.

Your task is to write a query that will find the variables of types that are **inherited** from the <code>Number</code> type. The resulting table should contain <code>var_name</code> and <code>var_type</code> columns and be sorted by <code>var_names</code>.


**Example**

For the following tables **inheritance**

| derived | base   |
| ------- | ------ |
| Double  | Number |
| Int     | Number |
| Int64   | Int    |
| Number  | Object |

and **variables**

| var_name | type   |
| -------- | ------ |
| A        | Int    |
| B        | Object |
| C        | Double |
| D        | Int64  |
| E        | Number |

the output should be

| var_name | var_type |
| -------- | -------- |
| A        | Int      |
| C        | Double   |
| D        | Int64    |

Type <code>Int64</code> is inherited from type <code>Int</code>, which in turn is inherited from <code>Number</code> type, so both variables <code>A</code> and <code>D</code> should be included in the result. <code>Double</code> type is also inherited from <code>Number</code>, so <code>C</code> is also present in the resulting table.

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
