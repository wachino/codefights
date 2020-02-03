---
layout: home
title: Largest Number
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given an integer <code>n</code>, return the largest number that contains exactly <code>n</code> digits.

**Example**

For <code>n = 2</code>, the output should be
<code>largestNumber(n) = 99</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    A positive two-digit integer.

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq n \leq 9</code>.

* **[output] integer**

    * The largest integer of length <code>n</code>.

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

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
