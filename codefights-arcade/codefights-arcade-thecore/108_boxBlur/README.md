---
layout: home
title: Box Blur
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the [box blur algorithm](https://en.wikipedia.org/wiki/Box_blur) to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel <code>x</code> in the output image has a value equal to the average value of the pixel values from the <code>3 × 3</code> square that has its center at <code>x</code>, including x itself. All the pixels on the border of <code>x</code> are then removed.

Return the blurred image as an integer, with the fractions rounded down.

**Example**

For

<code type='preformat'>
image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
</code>

the output should be <code>boxBlur(image) = [[1]]</code>.

To get the value of the middle pixel in the input <code>3 × 3</code> square: <code>(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1</code>. The border pixels are cropped from the final result.

For

<code type='preformat'>
image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
</code>

the output should be

<code type='preformat'>
boxBlur(image) = [[5, 4], 
                  [4, 4]]
</code>

There are four <code>3 × 3</code> squares in the input image, so there should be four integers in the blurred output. To get the first value: <code>(7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5</code>. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer image**

  An image, stored as a rectangular matrix of non-negative integers.

  _Guaranteed constraints:_<br>
  <code>3 ≤ image.length ≤ 100</code>,<br>
  <code>3 ≤ image[0].length ≤ 100</code>,<br>
  <code>0 ≤ image[i][j] ≤ 255</code>.

* **[output] array.array.integer**
  - A blurred image represented as integers, obtained through the process in the description.

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
