---
layout: home
title: Least Factorial
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given an integer <code>n</code>, find the _minimal_ <code>k</code> such that

- <code>k = m!</code> (where <code>m! = 1 _ 2 _ ... \* m</code>) for some integer <code>m</code>;
- <code>k >= n</code>.

In other words, find the smallest factorial which is not less than <code>n</code>.

**Example**

For <code>n = 17</code>, the output should be
<code>leastFactorial(n) = 24</code>.

<code>17 < 24 = 4! = 1 _ 2 _ 3 _ 4</code>, while <code>3! = 1 _ 2 \* 3 = 6 < 17</code>)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq n \leq 120</code>.

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
