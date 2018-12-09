---
layout: home
title: Travel Diary
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are an avid traveler and you've visited so many countries that when people ask you where you've been, you can't even remember all of them! Luckily, every time you travel somewhere you write down the trip information in your diary. Now you want to get a list of all the different countries that you have visited using the information in your diary.

The diary is represented as a table **diary**, which has the following columns:

* **id**: the unique ID of the trip;
* **travel_date**: the date the trip began;
* **country**: the country to which you traveled.

Given this **diary** table, create a semicolon-separated list of all the distinct countries you've visited, sorted lexicographically, and put the list in a table that has a single <code>countries</code> column.

*Note: String A is lexicographically smaller than string B either if A is a prefix of B (and A ≠ B), or if there exists such index i (0 ≤ i < min(A.length, B.length)), that Ai < Bi, and for any j (0 ≤ j < i) Aj = Bj. The lexicographic comparison of strings is implemented by operator < in modern programming languages.*

**Example**

For the following table **diary**

| id | travel_date | country |
| ---- | ---- | ---- |
| 1 | 2008-05-12 | Ireland |
| 2 | 2010-11-04 | France |
| 3 | 2005-10-02 | Australia |
| 4 | 2008-06-08 | Japan |
| 5 | 2010-08-27 | Austria |
| 6 | 2009-02-15 | France |

the output should be

| countries |
| ---- |
| Australia;Austria;France;Ireland;Japan |


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
