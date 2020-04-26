---
layout: home
title: Correct Nonogram
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

A **nonogram** is also known as _Paint by Numbers_ and _Japanese Crossword_. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

You are given a square **nonogram** of size <code>size</code>. Its grid is given as a square matrix <code>nonogramField</code> of size <code>(size + 1) / 2 + size</code>, where the first <code>(size + 1) / 2</code> cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.

Determine if the given **nonogram** has been solved correctly.

_Note: here / means integer division._

**Example**

- For <code>size = 5</code> and

  <code type='preformat'>
  nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                  ["-", "-", "-", "2", "2", "1", "-", "1"],
                  ["-", "-", "-", "2", "1", "1", "3", "3"],
                  ["-", "3", "1", "#", "#", "#", ".", "#"],
                  ["-", "-", "2", "#", "#", ".", ".", "."],
                  ["-", "-", "2", ".", ".", ".", "#", "#"],
                  ["-", "1", "2", "#", ".", ".", "#", "#"],
                  ["-", "-", "5", "#", "#", "#", "#", "#"]]
  </code>

  the output should be

  <code type='preformat'>
  correctNonogram(size, nonogramField) = true
  </code>

- For <code>size = 5</code> and

  <code type='preformat'>
  nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                  ["-", "-", "-", "-", "-", "1", "-", "-"],
                  ["-", "-", "-", "3", "3", "2", "5", "5"],
                  ["-", "-", "3", ".", ".", ".", "#", "#"],
                  ["-", "2", "2", "#", "#", "#", "#", "#"],
                  ["-", "-", "5", "#", "#", "#", "#", "#"],
                  ["-", "-", "5", "#", "#", "#", "#", "#"],
                  ["-", "-", "2", ".", ".", ".", "#", "#"]]
  </code>

  the output should be

  <code type='preformat'>
  correctNonogram(size, nonogramField) = false
  </code>

  There are three mistakes in the nonogram:

  - In the 5<sup>th</sup> (1-based) row there are numbers <code>["-", "2", "2"]</code>, so there should be two runs of <code>2</code> black squares separated by at least one white square. However, there is only one run of 5 black squares.
  - In the 6<sup>th</sup> column there are numbers <code>["-", "1", "2"]</code>, so there should be a run of exactly <code>1</code> black square, followed by one or more white squares, followed by another <code>2</code> black squares. However, there is a single run of <code>3</code> black squares not separated by white ones.
  - Finally, in the 4<sup>th</sup> row there are numbers <code>["-", "-", "3"]</code>, so there should be a single run of exactly <code>3</code> black squares. However, there is just a 2-square run in that row.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer size**

  A positive integer, the size of the grid.

  _Guaranteed constraints:_<br>
  <code>5 ≤ size ≤ 10</code>.

- **[input] array.array.string nonogramField**

  A square matrix of strings of size <code>(size + 1) / 2 + size</code> defining the puzzle field.<br>
  The first <code>(size + 1) / 2</code> cells of each row and each column define the numbers for this row/column. If there is no number in the cell, its value is <code>"-"</code>.<br>
  The remaining <code>size × size</code> cells define the grid, where string <code>"#"</code> denotes black cells and string <code>"."</code> denotes white ones.

  _Guaranteed constraints:_<br>
  <code>8 ≤ nonogramField.length ≤ 15</code>,<br>
  <code>nonogramField[i].length = nonogramField.length</code>.

* **[output] boolean**
  - <code>true</code> if the given **nonogram** is solved correctly and <code>false</code> otherwise.

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
