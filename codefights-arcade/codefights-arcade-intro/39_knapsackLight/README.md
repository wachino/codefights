---
layout: home
title: Knapsack Light
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You found two items in a treasure chest! The first item weighs <code>weight1</code> and is worth <code>value1</code>, and the second item weighs <code>weight2</code> and is worth <code>value2</code>. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is <code>maxW</code> and you can't come back for the items later?

**Note** that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

**Example**

* For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code> and <code>maxW = 8</code>, the output should be
<code>knapsackLight(value1, weight1, value2, weight2, maxW) = 10</code>.

You can only carry the first item.

* For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code> and <code>maxW = 9</code>, the output should be
<code>knapsackLight(value1, weight1, value2, weight2, maxW) = 16</code>.

You're strong enough to take both of the items with you.

* For <code>value1 = 5</code>, <code>weight1 = 3</code>, <code>value2 = 7</code>, <code>weight2 = 4</code> and <code>maxW = 6</code>, the output should be
<code>knapsackLight(value1, weight1, value2, weight2, maxW) = 7</code>.

You can't take both items, but you can take any of them.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer value1**

*Guaranteed constraints*:
<code>2 ≤ value1 ≤ 20</code>.

* **[input] integer weight1**

*Guaranteed constraints*:
<code>2 ≤ weight1 ≤ 10</code>.

* **[input] integer value2**

*Guaranteed constraints*:
<code>2 ≤ value2 ≤ 20</code>.

* **[input] integer weight2**

*Guaranteed constraints*:
<code>2 ≤ weight2 ≤ 10</code>.

* **[input] integer maxW**

*Guaranteed constraints*:
<code>1 ≤ maxW ≤ 20</code>.

* **[output] integer**


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