---
layout: home
title: Three Split
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

It is guaranteed that the sum of all elements in the array is divisible by <code>3</code>.

**Example**

For <code>a = [0, -1, 0, -1, 0, -1]</code>, the output should be
<code>threeSplit(a) = 4</code>.

Here are all possible ways:

- <code>[0, -1] [0, -1] [0, -1]</code>
- <code>[0, -1] [0, -1, 0] [-1]</code>
- <code>[0, -1, 0] [-1, 0] [-1]</code>
- <code>[0, -1, 0] [-1] [0, -1]</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  _Guaranteed constraints:_<br>
  <code>5 ≤ a.length ≤ 10<sup>4</sup></code>,
  <code>-10<sup>8</sup> ≤ a[i] ≤ 10<sup>8</sup></code>.

- **[output] integer**
  - It's guaranteed that for the given test cases the answer always fits signed <code>32</code>-bit integer type.

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
