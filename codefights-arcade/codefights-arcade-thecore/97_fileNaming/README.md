---
layout: home
title: File Naming
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of <code>(k)</code>, where <code>k</code> is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

**Example**

For <code>names = ["doc", "doc", "image", "doc(1)", "doc"]</code>, the output should be
<code>fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.string names**

  _Guaranteed constraints:_<br>
  <code>5 ≤ names.length ≤ 1000</code>,<br> <code>1 ≤ names[i].length ≤ 15</code>.

* **[output] array.string**

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
