---
layout: home
title: Draw Rectangle
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support `rectangle x1 y1 x2 y2` operation, which draws a rectangle that has an upper left corner at `(x1, y1)` and a lower right corner at `(x2, y2)`. Here the `x`-axis points from left to right, and the `y`-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

**Example**

For

<code type='preformat'>
canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
</code>

and <code>rectangle = [1, 1, 4, 3]</code>, the output should be

<code type='preformat'>
drawRectangle(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                  					['a', '*', '-', '-', '*', 'a', 'a', 'a'],
                  					['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
                  					['b', '*', '-', '-', '*', 'b', 'b', 'b'],
                  					['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
</code>

Here is the rectangle, colored for illustration:

<code type='preformat'>
[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
['a', '*', '-', '-', '*', 'a', 'a', 'a'],
['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
['b', '*', '-', '-', '*', 'b', 'b', 'b'],
['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
</code>

Note that rectangle sides are depicted as <code>-</code>s and <code>|</code>s, asterisks (<code>\*</code>) stand for its corners and all of the other "pixels" remain the same.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.char canvas**

  A non-empty rectangular matrix of characters.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ canvas.length ≤ 10</code>,<br> <code>2 ≤ canvas[0].length ≤ 10</code>.

- **[input] array.integer rectangle**

  Array of four integers - <code>[x1, y1, x2, y2]</code>.<br>

  _Guaranteed constraints:_<br>
  <code>0 ≤ x1 < x2 < canvas[i].length</code>,<br> <code>0 ≤ y1 < y2 < canvas.length</code>.

* **[output] array.array.char**

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
