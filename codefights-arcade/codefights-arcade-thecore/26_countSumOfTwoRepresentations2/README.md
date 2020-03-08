---
layout: home
title: Count Sum Of Two Representations 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given integers <code>n</code>, <code>l</code> and <code>r</code>, find the number of ways to represent <code>n</code> as a sum of two integers <code>A</code> and <code>B</code> such that <code>l ≤ A ≤ B ≤ r</code>.

**Example**

For <code>n = 6</code>, <code>l = 2</code>, and <code>r = 4</code>, the output should be
<code>countSumOfTwoRepresentations2(n, l, r) = 2</code>.

There are just two ways to write <code>6</code> as <code>A + B</code>, where <code>2 ≤ A ≤ B ≤ 4: 6 = 2 + 4</code> and <code>6 = 3 + 3</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>5 \leq n \leq 10^9</code>.

- **[input] integer l**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq l \leq r</code>.

- **[input] integer r**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq r \leq 10^9</code>,<br>
  <code type='math/tex'>r-l \leq 10^6</code>.

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
