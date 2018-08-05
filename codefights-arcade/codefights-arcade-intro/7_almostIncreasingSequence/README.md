---
layout: home
title: Almost Increasing Sequence
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

**Example**

* For <code>sequence = [1, 3, 2, 1]</code>, the output should be
<code>almostIncreasingSequence(sequence) = false</code>;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

* For <code>sequence = [1, 3, 2]</code>, the output should be
<code>almostIncreasingSequence(sequence) = true</code>.

You can remove <code>3</code> from the array to get the strictly increasing sequence <code>[1, 2]</code>. Alternately, you can remove <code>2</code> to get the strictly increasing sequence <code>[1, 3]</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer sequence**

A 2-dimensional array of integers representing a rectangular matrix of the building.

*Guaranteed constraints*:

<code>1 ≤ matrix.length ≤ 5</code>,
<code>1 ≤ matrix[i].length ≤ 5</code>,
<code>0 ≤ matrix[i][j] ≤ 10</code>.

* **[output] integer**

The total price of all the rooms that are suitable for the CodeBots to live in.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>