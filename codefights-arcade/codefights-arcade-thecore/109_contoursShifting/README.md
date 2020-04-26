---
layout: home
title: Contours Shifting
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Mark got a rectangular array <code>matrix</code> for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its _i-contours_ in a clockwise direction if <code>i</code> is even, and counterclockwise if <code>i</code> is odd.

Here is how Mark defines _i-contours_:

- the _0-contour_ of a rectangular array as the union of left and right columns as well as top and bottom rows;
- consider the initial matrix without the _0-contour_: its _0-contour_ is the _1-contour_ of the initial matrix;
- define _2-contour_, _3-contour_, etc. in the same manner by removing _0-contours_ from the obtained arrays.

Implement a function that does exactly what Mark wants to do to his matrix.

**Example**

- For

  <code type='preformat'>
  matrix = [[ 1,  2,  3,  4],
            [ 5,  6,  7,  8],
            [ 9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20]]
  </code>

  the output should be

  <code type='preformat'>
  contoursShifting(matrix) = [[ 5,  1,  2,  3],
                              [ 9,  7, 11,  4],
                              [13,  6, 15,  8],
                              [17, 10, 14, 12],
                              [18, 19, 20, 16]]
  </code>

- For

  <code type='preformat'>
  matrix = [[238, 239, 240, 241, 242, 243, 244, 245]]
  </code>

  the output should be

  <code type='preformat'>
  contoursShifting(matrix) = [[245, 238, 239, 240, 241, 242, 243, 244]]
  </code>

  Note, that if a _contour_ is represented by a <code>1 × n</code> array, its center is considered to be _below_ it.

- For

  <code type='preformat'>
  matrix = [[238],
            [239],
            [240],
            [241],
            [242],
            [243],
            [244],
            [245]]
  </code>

  the output should be

  <code type='preformat'>
  contoursShifting(matrix) = [[245],
                             [238],
                             [239],
                             [240],
                             [241],
                             [242],
                             [243],
                             [244]]
  </code>

  If a _contour_ is represented by an <code>n × 1</code> array, its center is considered to be to the _left_ of it.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer matrix**

  _Guaranteed constraints:_<br>
  <code>1 ≤ matrix.length ≤ 100</code>,<br>
  <code>1 ≤ matrix[i].length ≤ 100</code>,<br>
  <code>1 ≤ matrix[i][j] ≤ 1000</code>.

* **[output] array.array.integer**
  - The given <code>matrix</code> with its _contours_ shifted.

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
