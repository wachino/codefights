---
layout: home
title: Concatenate Arrays
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given two arrays of integers <code>a</code> and <code>b</code>, obtain the array formed by the elements of <code>a</code> followed by the elements of <code>b</code>.

**Example**

For <code>a = [2, 2, 1]</code> and <code>b = [10, 11]</code>, the output should be
<code>concatenateArrays(a, b) = [2, 2, 1, 10, 11]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  _Guaranteed constraints:_<br>
   <code>1 ≤ a.length ≤ 10</code>,<br>
   <code>1 ≤ a[i] ≤ 15</code>.

- **[input] array.integer b**

  _Guaranteed constraints:_<br>
   <code>0 ≤ b.length ≤ 10</code>,<br>
   <code>1 ≤ b[i] ≤ 15</code>.

- **[output] array.integer**

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
