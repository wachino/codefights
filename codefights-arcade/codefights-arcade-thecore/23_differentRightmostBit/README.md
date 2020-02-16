---
layout: home
title: Different Rightmost Bit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given two integers, <code>n</code> and <code>m</code>. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2<sup>position_of_the_found_bit</sup> (0-based).

**Example**

- For <code>n = 11</code> and <code>m = 13</code>, the output should be
  <code>differentRightmostBit(n, m) = 2</code>.

<code>11<sub>10</sub> = 10<b>1</b>1<sub>2</sub></code>, <code>13<sub>10</sub> = 11<b>0</b>1<sub>2</sub></code>, the rightmost bit in which they differ is the bit at position <code>1</code> (0-based) from the right in the binary representations.
So the answer is <code>2<sup>1</sup> = 2</code>.

- For <code>n = 7</code> and <code>m = 23</code>, the output should be
  <code>differentRightmostBit(n, m) = 16</code>.

<code>7<sub>10</sub> = 111<sub>2</sub>, 23<sub>10</sub> = 10111<sub>2</sub></code>, i.e.

<code>
00111
10111
</code>

So the answer is <code>2<sup>4</sup> = 16</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq m \leq 2<sup>30</sup></code>.<br>
  <code type='math/tex'>n ≠ m</code>.

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
