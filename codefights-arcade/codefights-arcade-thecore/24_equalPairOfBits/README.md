---
layout: home
title: Equal Pair Of Bits
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given two integers, <code>n</code> and <code>m</code>. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of <code>2<sup>position_of_the_found_pair</sup></code> (0-based).

**Example**

For <code>n = 10</code> and <code>m = 11</code>, the output should be
<code>equalPairOfBits(n, m) = 2</code>.

<code>10<sub>10</sub> = 10<b>1</b>0<sub>2</sub></code>, <code>11<sub>10</sub> = 10<b>1</b>1<sub>2</sub></code>, the position of the rightmost pair of equal bits is the bit at position <code>1</code> (0-based) from the right in the binary representations.
So the answer is <code>2<sup>1</sup> = 2</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq n \leq 2<sup>30</sup></code>.

- **[input] integer m**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq m \leq 2<sup>30</sup></code>.

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
