---
layout: home
title: Boxes Packing
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given <code>n</code> rectangular boxes, the <code>i<sup>th</sup></code> box has the length <code>length<sub>i</sub></code>, the width <code>width<sub>i</sub></code> and the height <code>height<sub>i</sub></code>. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of <code>n</code> different numbers <code>p<sub>i</sub></code> (1 ≤ <code>p<sub>i</sub></code> ≤ n) that for each 1 ≤ i < n the box number <code>p<sub>i</sub></code> can be put into the box number <code>p<sub>i+1</sub></code>.<br>
A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

**Example**

- For <code>length = [1, 3, 2]</code>, <code>width = [1, 3, 2]</code>, and <code>height = [1, 3, 2]</code>, the output should be
  <code>boxesPacking(length, width, height) = true</code>;
- For <code>length = [1, 1]</code>, <code>width = [1, 1]</code>, and <code>height = [1, 1]</code>, the output should be
  <code>boxesPacking(length, width, height) = false</code>;
- For <code>length = [3, 1, 2]</code>, <code>width = [3, 1, 2]</code>, and <code>height = [3, 2, 1]</code>, the output should be
  <code>boxesPacking(length, width, height) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer length**

  Array of positive integers.

  _Guaranteed constraints:_<br>
  <code>1 ≤ length.length ≤ 10<sup>4</sup></code>,<br>
  <code>1 ≤ length[i] ≤ 2 · 10<sup>4</sup></code>.

- **[input] array.integer width**

  Array of positive integers.

  _Guaranteed constraints:_<br>
  <code>width.length = length.length</code>,<br>
  <code>1 ≤ width[i] ≤ 2 · 10<sup>4</sup></code>.

- **[input] array.integer height**

  Array of positive integers.

  _Guaranteed constraints:_<br>
  <code>height.length = length.length</code>,<br>
  <code>1 ≤ height[i] ≤ 2 · 10<sup>4</sup></code>.

* **[output] boolean**
  - <code>true</code> if it is possible to put all boxes into one, <code>false</code> otherwise.

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
