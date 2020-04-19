---
layout: home
title: Reverse On Diagonals
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

The _longest diagonals_ of a square matrix are defined as follows:

- the first _longest diagonal_ goes from the top left corner to the bottom right one;
- the second _longest diagonal_ goes from the top right corner to the bottom left one.

Given a square matrix, your task is to reverse the order of elements on both of its _longest diagonals_.

**Example**

For

<code type='preformat'>
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
</code>

the output should be

<code type='preformat'>
reverseOnDiagonals(matrix) = [[9, 2, 7],
                              [4, 5, 6],
                              [3, 8, 1]]
</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  _Guaranteed constraints:_<br>
  <code>1 ≤ matrix.length ≤ 100</code>,<br> <code>matrix.length = matrix[i].length</code>,<br> <code>1 ≤ matrix[i][j] ≤ 10<sup>5</sup></code>.

* **[output] array.array.integer**
  - Matrix with the order of elements on its _longest diagonals_ reversed.

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
