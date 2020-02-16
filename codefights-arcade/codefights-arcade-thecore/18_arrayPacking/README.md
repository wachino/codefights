---
layout: home
title: Array Packing
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given an array of up to four non-negative integers, each less than <code>256</code>.

Your task is to pack these integers into one number <code>M</code> in the following way:

- The first element of the array occupies the first 8 bits of M;
- The second element occupies next <code>8</code> bits, and so on.

Return the obtained integer <code>M</code>.

Note: the phrase "_first bits of_ <code>M</code>" refers to the _least significant bits_ of <code>M</code> - the right-most bits of an integer. For further clarification see the following example.

**Example**

For <code>a = [24, 85, 0]</code>, the output should be
<code>arrayPacking(a) = 21784</code>.

An array <code>[24, 85, 0]</code> looks like <code>[00011000, 01010101, 00000000]</code> in binary.
After packing these into one number we get <code>00000000 01010101 00011000</code> (spaces are placed for convenience), which equals to <code>21784</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq a.length \leq 4</code>,<br>
  <code type='math/tex'>0 \leq a[i] \le 256</code>.

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
