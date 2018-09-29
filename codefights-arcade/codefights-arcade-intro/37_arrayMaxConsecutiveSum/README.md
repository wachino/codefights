---
layout: home
title: Array Max Consecutive Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given array of integers, find the maximal possible sum of some of its <code>k</code> consecutive elements.

**Example**

For <code>inputArray = [2, 3, 5, 1, 6]</code> and <code>k = 2</code>, the output should be
<code>arrayMaxConsecutiveSum(inputArray, k) = 8</code>.
All possible sums of <code>2</code> consecutive elements are:

* <code>2 + 3 = 5</code>;
* <code>3 + 5 = 8</code>;
* <code>5 + 1 = 6</code>;
* <code>1 + 6 = 7</code>.
Thus, the answer is <code>8</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

Array of positive integers.

*Guaranteed constraints*:
<code type='math/tex'>3 \leq inputArray.length \leq 10^5</code>,
<code>1 ≤ inputArray[i] ≤ 1000</code>.

* **[input] integer k**

An integer (not greater than the length of <code>inputArray</code>).

*Guaranteed constraints*:
<code>1 ≤ k ≤ inputArray.length</code>.

* **[output] integer**

The maximal possible sum.


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