---
layout: home
title: Rows Rearranging
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

**Example**

- For

  <code type='preformat'>
    matrix = [[2, 7, 1], 
              [0, 2, 0], 
              [1, 3, 1]]
  </code>

  the output should be

  <code type='preformat'>
    rowsRearranging(matrix) = false;
  </code>

- For

  <code type='preformat'>
    matrix = [[6, 4], 
              [2, 2], 
              [4, 3]]
  </code>

  the output should be

  <code type='preformat'>
    rowsRearranging(matrix) = true.
  </code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  A 2-dimensional array of integers.

  _Guaranteed constraints:_<br>
  <code>1 ≤ matrix.length ≤ 10</code>,<br>
  <code>1 ≤ matrix[0].length ≤ 10</code>,<br>
  <code>-300 ≤ matrix[i][j] ≤ 300</code>.

* **[output] boolean**

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
