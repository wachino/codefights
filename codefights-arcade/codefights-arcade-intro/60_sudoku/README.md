---
layout: home
title: Sudoku
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Sudoku is a number-placement puzzle. The objective is to fill a <code>9 × 9</code> grid with digits so that each column, each row, and each of the nine <code>3 × 3</code> sub-grids that compose the grid contains all of the digits from <code>1</code> to <code>9</code>.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.



**Example**

For the first example below, the output should be <code>true</code>. For the other grid, the output should be false: each of the nine <code>3 × 3</code> sub-grids should contain all of the digits from <code>1</code> to <code>9</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.array.integer grid**

A matrix representing <code>9 × 9</code> grid already filled with numbers from <code>1</code> to <code>9</code>.

![](./images/sudoku.png)

* **[output] boolean**

<code>true</code> if the given grid represents a correct solution to Sudoku, <code>false</code> otherwise.

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
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>