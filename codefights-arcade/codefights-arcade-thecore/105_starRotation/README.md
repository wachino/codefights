---
layout: home
title: Star Rotation
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Consider a <code>(2k+1) × (2k+1)</code> square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's <code>center</code> in the <code>matrix</code> and its <code>width</code>, rotate it <code>45 · t</code> degrees clockwise preserving position of all matrix elements that do not belong to the _star_.

**Example**

- For
  <code type='preformat'>
  matrix = [[1, 0, 0, 2, 0, 0, 3],
  [0, 1, 0, 2, 0, 3, 0],
  [0, 0, 1, 2, 3, 0, 0],
  [8, 8, 8, 9, 4, 4, 4],
  [0, 0, 7, 6, 5, 0, 0],
  [0, 7, 0, 6, 0, 5, 0],
  [7, 0, 0, 6, 0, 0, 5]]
  </code>

  <code>width = 7</code>, <code>center = [3, 3]</code>, and <code>t = 1</code>, the output should be

  <code type='preformat'>
  starRotation(matrix, width, center, t) = [[8, 0, 0, 1, 0, 0, 2],
                                            [0, 8, 0, 1, 0, 2, 0],
                                            [0, 0, 8, 1, 2, 0, 0],
                                            [7, 7, 7, 9, 3, 3, 3],
                                            [0, 0, 6, 5, 4, 0, 0],
                                            [0, 6, 0, 5, 0, 4, 0],
                                            [6, 0, 0, 5, 0, 0, 4]]

  </code>

- For

    <code type='preformat'>
    matrix = [[1, 0, 0, 2, 0, 0, 3],
            [0, 1, 0, 2, 0, 3, 0],
            [0, 0, 1, 2, 3, 0, 0],
            [8, 8, 8, 9, 4, 4, 4],
            [0, 0, 7, 6, 5, 0, 0]]
    </code>

  <code>width = 3</code>, <code>center = [1, 5]</code>, and <code>t = 81</code>, the output should be

    <code type='preformat'>
    starRotation(matrix, width, center, t) = [[1, 0, 0, 2, 0, 0, 0],
                                            [0, 1, 0, 2, 3, 3, 3],
                                            [0, 0, 1, 2, 0, 0, 0],
                                            [8, 8, 8, 9, 4, 4, 4],
                                            [0, 0, 7, 6, 5, 0, 0]]
    </code>
  **Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  A two-dimensional array of integers.<br>

  _Guaranteed constraints:_<br>
  <code>3 ≤ matrix.length ≤ 15</code>,<br> <code>3 ≤ matrix[i].length ≤ 15</code>,<br> <code>matrix[i].length == matrix[j].length</code>,<br> <code>0 ≤ matrix[i][j] ≤ 99</code>.

- **[input] integer width**

  An odd integer representing the star's width. It equals the length of the sides of the bounding square for the star.<br>

  _Guaranteed constraints:_<br>
  <code>3 ≤ width ≤ min(matrix.length, matrix[i].length)</code>.

- **[input] array.integer center**

  An array of two integers.<br>

  _Guaranteed constraints:_<br>
  <code>center.length = 2</code>,<br> <code>(width - 1) / 2 ≤ center[0] < matrix.length - (width - 1) / 2</code>,<br> <code>(width - 1) / 2 ≤ center[1] < matrix[i].length - (width - 1) / 2</code>.

- **[input] integer t**

  A non-negative integer denoting how many times the star should be rotated by 45 degrees.<br>

  _Guaranteed constraints:_<br>
  <code>0 ≤ t ≤ 10<sup>9</sup></code>.

* **[output] array.array.integer**
  - An array with specified star rotated by <sup>45 · t</sup> degrees.

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
