---
layout: home
title: Create Array
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given an integer <code>size</code>, return array of length <code>size</code> filled with <code>1</code>s.

**Example**

For <code>size = 4</code>, the output should be
<code>createArray(size) = [1, 1, 1, 1]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer size**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq size \leq 1000</code>.

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
