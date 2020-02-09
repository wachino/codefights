---
layout: home
title: Extra Number
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You're given three integers, <code>a</code>, <code>b</code> and <code>c</code>. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?


**Example**

For <code>a = 2</code>, <code>b = 7</code>, and <code>c = 2</code>, the output should be
<code>extraNumber(a, b, c) = 7</code>.

The two equal numbers are<code>a</code> and <code>c</code>. The third number (<code>b</code>) equals <code>7</code>, which is the answer.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq a \leq 10<sup>9</sup></code>.

* **[input] integer b**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq b \leq 10<sup>9</sup></code>.

* **[input] integer c**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq c \leq 10<sup>9</sup></code>.

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
