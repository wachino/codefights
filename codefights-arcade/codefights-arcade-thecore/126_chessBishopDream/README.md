---
layout: home
title: Chess Bishop Dream
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an <code>n × m</code> chessboard with mirrors along each edge, and it is not a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it reaches an edge or a corner of the chessboard it reflects from it and moves on.

Given the initial position and the direction of the ray, find its position after <code>k</code> steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board.

**Example**

For <code>boardSize = [3, 7]</code>, <code>initPosition = [1, 2]</code>,
<code>initDirection = [-1, 1]</code>, and <code>k = 13</code>, the output should be
<code>chessBishopDream(boardSize, initPosition, initDirection, k) = [0, 1]</code>.

Here is the bishop's path:

<code>
[1, 2] -> [0, 3] -(reflection from the top edge)-> [0, 4] ->

[1, 5] -> [2, 6] -(reflection from the bottom right corner)-> [2, 6] ->

[1, 5] -> [0, 4] -(reflection from the top edge)-> [0, 3] ->

[1, 2] -> [2, 1] -(reflection from the bottom edge)-> [2, 0] -(reflection from the left edge)->

[1, 0] -> [0, 1]
</code>

![](./images/example.png)

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] array.integer boardSize**

  An array of two integers, the number of rows and columns, respectively. Rows are numbered by integers from <code>0</code> to <code>boardSize[0] - 1</code>, columns are numbered by integers from <code>0</code> to <code>boardSize[1] - 1</code> (both inclusive).<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ boardSize[i] ≤ 20</code>.

- **[input] array.integer initPosition**

  An array of two integers, indices of the row and the column where the bishop initially stands, respectively.<br>

  _Guaranteed constraints:_<br>
  <code>0 ≤ initPosition[i] < boardSize[i]</code>.

- **[input] array.integer initDirection**

  An array of two integers representing the initial direction of the bishop. If it stands in <code>(a, b)</code>, the next cell he'll move to is (<code>a + initDirection[0], b + initDirection[1]</code>) or whichever it'll reflect to in case it runs into a mirror immediately.<br>

  _Guaranteed constraints:_<br>
  <code>initDirection[i] ∈ {-1, 1}</code>.

- **[input] integer k**

  _Guaranteed constraints:_<br>
  <code>1 ≤ k ≤ 10<sup>9</sup></code>.

* **[output] array.integer**

  - The position of the bishop after <code>k</code> steps.

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
