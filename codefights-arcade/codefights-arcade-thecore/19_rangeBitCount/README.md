---
layout: home
title: Range Bit Count
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given two numbers <code>a</code> and <code>b</code> where <code>0 ≤ a ≤ b</code>. Imagine you construct an array of all the integers from <code>a</code> to <code>b</code> inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

**Example**

For <code>a = 2</code> and <code>b = 7</code>, the output should be
<code>rangeBitCount(a, b) = 11</code>.

Given <code>a = 2</code> and <code>b = 7</code> the array is: <code>[2, 3, 4, 5, 6, 7]</code>. Converting the numbers to binary, we get <code>[10, 11, 100, 101, 110, 111]</code>, which contains <code>1 + 2 + 1 + 2 + 2 + 3 = 11</code> 1s.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer a**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq a \leq b</code>.

- **[input] integer b**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>a \leq b \leq 10</code>.

- **[output] integer**

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
