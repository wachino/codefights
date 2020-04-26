---
layout: home
title: Minesweeper
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

In the popular **Minesweeper** game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a **Minesweeper** game setup.

**Example**

<code type='preformat'>
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
</code>

the output should be

<code type='preformat'>
minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
</code>

Check out the image below for better understanding:

![](./images/example.png)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.boolean matrix**

  A non-empty rectangular matrix consisting of boolean values - <code>true</code> if the corresponding cell contains a mine, <code>false</code> otherwise.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ matrix.length ≤ 100</code>,<br>
  <code>2 ≤ matrix[0].length ≤ 100</code>.

* **[output] array.array.integer**
  - Rectangular matrix of the same size as <code>matrix</code> each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

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
