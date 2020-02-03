---
layout: home
title: Add Two Digits
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are given a two-digit integer <code>n</code>. Return the sum of its digits.

**Example**

For <code>n = 29</code>, the output should be
<code>addTwoDigits(n) = 11</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    A positive two-digit integer.

    _Guaranteed constraints:_<br>
    <code type='math/tex'>10 \leq n \leq 99</code>.

* **[output] integer**

    * The sum of the first and second digits of the input number.

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
