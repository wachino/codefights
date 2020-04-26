---
layout: home
title: Polygon Perimeter
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It's guaranteed that there is at least one black cell on the table.

**Example**

- For

  <code type='preformat'>
  matrix = [[false, true,  true ],
            [true,  true,  false],
            [true,  false, false]]
  </code>

  the output should be

  <code type='preformat'>
  polygonPerimeter(matrix) = 12.
  </code>

  ![](./images/example1.png)

- For

  <code type='preformat'>
  matrix = [[true, true,  true],
            [true, false, true],
            [true, true,  true]]
  </code>

  the output should be

  <code type='preformat'>
  polygonPerimeter(matrix) = 16.

  </code>

  ![](./images/example2.png)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.boolean matrix**

  A matrix of booleans representing the rectangular board where <code>true</code> means a _black_ cell and <code>false</code> means a _white_ one.

  _Guaranteed constraints:_<br>
  <code>2 ≤ matrix.length ≤ 5</code>,<br>
  <code>2 ≤ matrix[0].length ≤ 5</code>.

* **[output] integer**

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
