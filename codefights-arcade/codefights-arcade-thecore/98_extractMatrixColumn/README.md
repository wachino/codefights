---
layout: home
title: Extract Matrix Column
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a rectangular matrix and an integer <code>column</code>, return an array containing the elements of the <code>column<sup>th</sup></code> column of the given matrix (the leftmost column is the <code>0<sup>th</sup></code> one).

**Example**

For

<code type='preformat'>
matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]
</code>

and <code>column = 2</code>, the output should be
<code>extractMatrixColumn(matrix, column) = [1, 0, 3]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  2-dimensional array of integers representing a rectangular matrix.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ matrix.length ≤ 500</code>,<br> <code>1 ≤ matrix[i].length ≤ 500</code>,<br> <code>0 ≤ matrix[i][j] ≤ 10<sup>5</sup></code>.

* **[input] integer column**

  An integer not greater than the number of <code>matrix</code> columns.

  _Guaranteed constraints:_<br>
  <code>0 ≤ column ≤ matrix[i].length - 1</code>.

* **[output] array.integer**

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
