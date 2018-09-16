---
layout: home
title: Absolute Values Sum Minimization
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a sorted array of integers <code>a</code>, find an integer <code>x</code> from <code>a</code> such that the value of

<code>
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
</code>

is the *smallest* possible (here <code>abs</code> denotes the absolute value).
If there are several possible answers, output the *smallest* one.


**Example**

For <code>a = [2, 4, 7]</code>, the output should be
<code>absoluteValuesSumMinimization(a) = 4</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

A non-empty array of integers, sorted in ascending order.

*Guaranteed constraints*:
<code>1 ≤ a.length ≤ 200</code>,
<code type='math/tex'>-10^6 \leq a[i] \leq 10^6</code>.

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