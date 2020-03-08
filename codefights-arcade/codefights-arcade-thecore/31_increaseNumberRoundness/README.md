---
layout: home
title: Increase Number Roundness
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Define an integer's roundness as the number of trailing zeroes in it.

Given an integer <code>n</code>, check if it's possible to increase <code>n</code>'s roundness by swapping some pair of its digits.

**Example**

- For <code>n = 902200100</code>, the output should be
  <code>increaseNumberRoundness(n) = true</code>.

  One of the possible ways to increase roundness of <code>n</code> is to swap digit <code>1</code> with digit <code>0</code> preceding it: roundness of <code>902201000</code> is <code>3</code>, and roundness of <code>n</code> is <code>2</code>.

  For instance, one may swap the leftmost <code>0</code> with <code>1</code>.

- For <code>n = 11000</code>, the output should be
  <code>increaseNumberRoundness(n) = false</code>.

  _Roundness_ of <code>n</code> is <code>3</code>, and there is no way to increase it.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>100 \leq n \leq 10^9</code>.

- **[output] boolean**
  - <code>true</code> if it's possible to increase <code>n</code>'s roundness, <code>false</code> otherwise.

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
