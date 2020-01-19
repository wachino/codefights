---
layout: home
title: Strings Statistics
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are collecting some statistics about strings in the table **strs**, which only has one column:

* **str** - a unique string that consists only of lowercase English letters.
Your goal is to return a new table **ans**, which has the following columns:
* **letter** - a unique lowercase English letter;
* **total** - the total number of occurrences of this letter in all the strings from table **strs**;
* **occurrence** - the number of strings from table **strs** in which this letter occurs at least once;
* **max_occurrence** - the maximal number of occurrences of this letter in a single string;
* **max_occurence_reached** - the number of strings in which this maxumal number of occurrences is reached.

The rows should be ordered lexicographically by <code>letter</code>. For letters that are not contained in the **strs** table, don't add a row to the output table (i.e., all integers in the <code>total</code> column should be positive).

**Example**

For the following tables **strs**

| str    |
| ------ |
| aa     |
| aaaa   |
| aab    |
| abaaba |
| bbbbb  |


the output should be

| letter | total | occurrence | max_occurrence | max_occurrence_reached |
| ------ | ----- | ---------- | -------------- | ---------------------- |
| a      | 12    | 4          | 4              | 2                      |
| b      | 8     | 3          | 5              | 1                      |


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
