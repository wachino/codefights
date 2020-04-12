---
layout: home
title: All Longest Strings
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given an array of strings, return another array containing all of its longest strings.

**Example**

For <code>inputArray = ["aba", "aa", "ad", "vcd", "aba"]</code>, the output should be
<code>allLongestStrings(inputArray) = ["aba", "vcd", "aba"]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.string inputArray**

  A non-empty array.<br>

  _Guaranteed constraints:_<br>
  <code>5 ≤ inputArray.length ≤ 10</code>,<br> <code>0 ≤ inputArray[i] ≤ 10</code>.

- **[output] array.string**
  - Array of the longest strings, stored in the same order as in the <code>inputArray</code>.

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
