---
layout: home
title: Remove Array Part
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Remove a part of a given array between given 0-based indexes <code>l</code> and <code>r</code> (inclusive).

**Example**

For <code>inputArray = [2, 3, 2, 3, 4, 5]</code>, <code>l = 2</code>, and <code>r = 4</code>, the output should be
<code>removeArrayPart(inputArray, l, r) = [2, 3, 5]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer inputArray**

  _Guaranteed constraints:_<br>
   <code>2 ≤ inputArray.length ≤ 10<sup>4</sup></code>,<br>
   <code>-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup></code>.

- **[input] integer l**

   Left index of the part to be removed (<code>0</code>-based).<br>

  _Guaranteed constraints:_<br>
   <code>0 ≤ l ≤ r</code>.

- **[input] integer r**

   Right index of the part to be removed (<code>0</code>-based).<br>

  _Guaranteed constraints:_<br>
   <code>l ≤ r < inputArray.length</code>.

- **[output] array.integer**

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
