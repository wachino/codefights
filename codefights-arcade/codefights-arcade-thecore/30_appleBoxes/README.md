---
layout: home
title: Apple Boxes
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You have <code>k</code> apple boxes full of apples. Each square box of size <code>m</code> contains <code>m × m</code> apples. You just noticed two interesting properties about the boxes:

1. The smallest box is size <code>1</code>, the next one is size <code>2</code>,..., all the way up to size <code>k</code>.
1. Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.

Your task is to calculate the difference between the number of red apples and the number of yellow apples.

**Example**

For <code>k = 5</code>, the output should be
<code>appleBoxes(k) = -15</code>.

There are <code>1 + 3 \* 3 + 5 \* 5 = 35</code> yellow apples and <code>2 \* 2 + 4 \* 4 = 20</code> red apples, making the answer <code>20 - 35 = -15</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer k**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq k \leq 40</code>.

- **[output] integer**
  - The difference between the two types of apples.

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
