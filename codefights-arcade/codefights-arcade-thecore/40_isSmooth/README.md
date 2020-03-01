---
layout: home
title: Is Smooth
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

We define the middle of the array <code>arr</code> as follows:

- if <code>arr</code> contains an odd number of elements, its _middle_ is the element whose index number is the same when counting from the beginning of the array and from its end;
- if <code>arr</code> contains an even number of elements, its _middle_ is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

An array is called _smooth_ if its first and its last elements are equal to one another and to the _middle_. Given an array <code>arr</code>, determine if it is smooth or not.

**Example**

- For <code>arr = [7, 2, 2, 5, 10, 7]</code>, the output should be<br>
  <code>isSmooth(arr) = true</code>.<br>

  The first and the last elements of <code>arr</code> are equal to <code>7</code>, and its _middle_ also equals <code>2 + 5 = 7</code>. Thus, the array is smooth and the output is <code>true</code>.

- For <code>arr = [-5, -5, 10]</code>, the output should be <br>
  <code>isSmooth(arr) = false</code>.

  The first and _middle_ elements are equal to <code>-5</code>, but the last element equals <code>10</code>. Thus, <code>arr</code> is not smooth and the output is <code>false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer arr**

   The given array.<br>

  _Guaranteed constraints:_<br>
   <code>2 ≤ arr.length ≤ 10<sup>5</sup></code>,<br>
   <code>-10<sup>9</sup> ≤ arr[i] ≤ 10<sup>9</sup></code>.

- **[output] boolean**

   - <code>true</code> if <code>arr</code> is _smooth_, <code>false</code> otherwise.

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
