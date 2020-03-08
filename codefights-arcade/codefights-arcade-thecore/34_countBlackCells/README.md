---
layout: home
title: Count Black Cells
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Imagine a white rectangular grid of <code>n</code> rows and <code>m</code> columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

- A cell is painted black if it has at least one point in common with the diagonal;
- Otherwise, a cell is painted white.

Count the number of cells painted black.

**Example**

- For <code>n = 3</code> and <code>m = 4</code>, the output should be
  <code>countBlackCells(n, m) = 6</code>.

  There are <code>6</code> cells that have at least one common point with the diagonal and therefore are painted black.

  ![](./images/example1.jpg)

- For <code>n = 3</code> and <code>m = 3</code>, the output should be
  <code>countBlackCells(n, m) = 7</code>.

  <code>7</code> cells have at least one common point with the diagonal and are painted black.

  ![](./images/example2.jpg)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  The number of rows.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq n \leq 10^5</code>.

- **[input] integer m**

  The number of columns.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq m \leq 10^5</code>.

- **[output] integer**

  - The number of black cells.

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
