---
layout: home
title: Swap Adjacent Bits
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given an arbitrary 32-bit integer <code>n</code>. Take its binary representation, split bits into it in pairs (bit number <code>0</code> and <code>1</code>, bit number <code>2</code> and <code>3</code>, etc.) and swap bits in each pair. Then return the result as a decimal number.

**Example**

- For <code>n = 13</code>, the output should be
  <code>swapAdjacentBits(n) = 14</code>.

<code>13<sub>10</sub> = 1101<sub>2</sub> ~> {11}{01}<sub>2</sub> ~> 1110<sub>2</sub> = 14<sub>10</sub></code>.

- For <code>n = 74</code>, the output should be
  <code>swapAdjacentBits(n) = 133</code>.

<code>74<sub>10</sub> = 01001010<sub>2</sub> ~> {01}{00}{10}{10}<sub>2</sub> ~> 100001012 = 133<sub>10</sub><code>.

Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have <code>32</code> bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq n \le 2<sup>30</sup></code>.

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
