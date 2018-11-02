---
layout: home
title: Spiral Numbers
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Construct a square matrix with a size <code>N × N</code> containing integers from <code>1</code> to <code>N * N</code> in a spiral order, starting from top-left and in clockwise direction.



**Example**

For <code>n = 3</code>, the output should be
{% highlight javascript %}
spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
{% endhighlight %}

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

Matrix size, a positive integer.

*Guaranteed constraints*:  

<code>3 ≤ n ≤ 100</code>.


* **[output] array.array.integer**


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