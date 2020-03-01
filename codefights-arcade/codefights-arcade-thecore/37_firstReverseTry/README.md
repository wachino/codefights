---
layout: home
title: First Reverse Try
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array <code>arr</code>, swap its first and last elements and return the resulting array.

**Example**

For <code>arr = [1, 2, 3, 4, 5]</code>, the output should be
<code>firstReverseTry(arr) = [5, 2, 3, 4, 1]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer arr**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq arr.length \leq 50</code>,<br>
  <code type='math/tex'>-10<sup>4</sup> \leq arr[i] \leq 10<sup>4</sup></code>.

- **[output] array.integer**
  - Array <code>arr</code> with its first and its last elements swapped.

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

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
