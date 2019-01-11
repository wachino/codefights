---
layout: home
title: Combination Lock
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You returned from vacation with a huge suitcase full of presents. Unfortunately, you forgot the correct combination for the combination lock on the bag, and now you have to try all of them until you find the correct one. You're curious about how many possible combinations the lock has.

The combination lock consists of several rotating discs, where each disc has its own set of possible characters. You have a table **discs** which stores the information about these discs and has the following structure:

* **id**: The unique ID of a disc;
* **characters**: The list of characters the disc has (the characters are guaranteed to be unique);
* **color**: The color of the disc.

Calculate the total number of all possible combinations that the lock has, and return it as a table that has only one column <code>combinations</code> and one row.

**Example**

For the following table **discs**

| id  | characters | color |
| --- | ---------- | ----- |
| 1   | code       | blue  |
| 2   | fights     | white |

the output should be

| combinations |
| ------------ |
|      24      |

The set of possible characters for the first disc is equal to <code>4</code>, and the set for the second disc is <code>6</code>, so the total number of combinations is <code>4 * 6 = 24</code>.


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
