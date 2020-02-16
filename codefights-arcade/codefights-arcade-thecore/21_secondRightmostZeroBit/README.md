---
layout: home
title: Second-Rightmost Zero Bit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

Presented with the integer <code>n</code>, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of <code>2<sup>position_of_the_found_bit</sup></code>.

**Example**

For <code>n = 37</code>, the output should be
<code>secondRightmostZeroBit(n) = 8</code>.

<code>37<sub>10</sub> = 10<b>0</b>101<sub>2</sub></code>. The second rightmost zero bit is at position <code>3</code> (0-based) from the right in the binary representation of <code>n</code>.
Thus, the answer is <code>2<sup>3</sup> = 8</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>4 \leq n \leq 2<sup>30</sup></code>.

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
