---
layout: home
title: Rounders
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non <code>0</code> digit of the number and round it to <code>0</code> or to <code>10</code>. If it's less than <code>5</code> we round it to <code>0</code> if it's larger than or equal to <code>5</code> we round it to <code>10</code> (rounding to <code>10</code> means increasing the next significant digit by <code>1</code>). The process stops immediately once there is only one non-zero digit left.

**Example**

- For <code>n = 15</code>, the output should be
  <code>rounders(n) = 20</code>;

- For <code>n = 1234</code>, the output should be
  <code>rounders(n) = 1000</code>.

  <code>1234 -> 1230 -> 1200 -> 1000</code>.

- For <code>n = 1445</code>, the output should be
  <code>rounders(n) = 2000</code>.

  <code>1445 -> 1450 -> 1500 -> 2000</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq value \leq 10<sup>8</sup></code>.

- **[output] integer**

  - The rounded number.

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
