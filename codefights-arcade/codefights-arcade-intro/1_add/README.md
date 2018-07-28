---
layout: home
title: Add
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Write a function that returns the sum of two numbers.

**Example**

For <code>param1 = 1</code> and <code>param2 = 2</code>, the output should be
<code>add(param1, param2) = 3</code>.

**Input/Output**

* **[execution time limit]** 4 seconds (js)

* **[input]** integer param1

*Guaranteed constraints:*
<code>-1000 ≤ param1 ≤ 1000</code>.

* **[input] integer param2**

*Guaranteed constraints:*
<code>-1000 ≤ param2 ≤ 1000</code>.

* **[output] integer**

The sum of the two inputs.

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
