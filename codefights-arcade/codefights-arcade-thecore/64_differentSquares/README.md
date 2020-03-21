---
layout: home
title: Different Squares
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a rectangular matrix containing only digits, calculate the number of different <code>2 × 2</code> squares in it.

**Example**

For

<code>
matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
</code>

the output should be
<code>differentSquares(matrix) = 6</code>.

Here are all <code>6</code> different <code>2 × 2</code> squares:

- 1 2<br>
  2 2
- 2 1<br>
  2 2
- 2 2<br>
  2 2
- 2 2<br>
  1 2
- 2 2<br>
  2 3
- 2 3<br>
  2 1

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  _Guaranteed constraints:_<br>
  <code>1 ≤ matrix.length ≤ 100</code>,<br>
  <code>1 ≤ matrix[i].length ≤ 100</code>,<br>
  <code>0 ≤ matrix[i][j] ≤ 9</code>.

- **[output] integer**
  - The number of different <code>2 × 2</code> squares in <code>matrix</code>.

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
