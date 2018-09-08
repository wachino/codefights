---
layout: home
title: Even Digits Only
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Check if all digits of the given integer are even.


**Example**

* For <code>n = 248622</code>, the output should be
<code>evenDigitsOnly(n) = true</code>;
* For <code>n = 642386</code>, the output should be
<code>evenDigitsOnly(n) = false</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

*Guaranteed constraints*:
<code type='math/tex'>1 \leq n \leq 10^9</code>.

* **[output] boolean**

<code>true</code> if all digits of <code>n</code> are even, <code>false</code> otherwise.

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