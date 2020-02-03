---
layout: home
title: Circle Of Numbers
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Consider integer numbers from <code>0</code> to <code>n - 1</code> written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that <code>0</code> and <code>n - 1</code> are neighboring, too).

Given <code>n</code> and <code>firstNumber</code>, find the number which is written in the radially opposite position to <code>firstNumber</code>.


**Example**

For <code>n = 10</code> and <code>firstNumber = 2</code>, the output should be
<code>circleOfNumbers(n, firstNumber) = 7</code>.

![](./images/example.png)

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    A positive **even** integer.

    _Guaranteed constraints:_<br>
    <code type='math/tex'>4 \leq divisor \leq 20</code>.

* **[input] integer firstNumber**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq firstNumber \leq n - 1</code>.

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

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
