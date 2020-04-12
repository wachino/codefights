---
layout: home
title: Array Previous Less
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given array of integers, for each position <code>i</code>, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position <code>i</code> in the answer. If no such value can be found, store <code>-1</code> instead.

**Example**

For <code>items = [3, 5, 2, 4, 5]</code>, the output should be
<code>arrayPreviousLess(items) = [-1, 3, -1, 2, 4]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer items**

  Non-empty array of positive integers.<br>

  _Guaranteed constraints:_<br>
  <code>3 ≤ items.length ≤ 15</code>,<br> <code>1 ≤ items[i] ≤ 200</code>.

- **[output] array.integer**
  - Array containing answer values computed as described above.

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
