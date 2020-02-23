---
layout: home
title: Magical Well
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are standing at a magical well. It has two positive integers written on it: <code>a</code> and <code>b</code>. Each time you cast a magic marble into the well, it gives you <code>a \* b</code> dollars and then both <code>a</code> and <code>b</code> increase by 1. You have <code>n</code> magic marbles. How much money will you make?

**Example**

For <code>a = 1</code>, <code>b = 2</code>, and <code>n = 2</code>, the output should be
<code>magicalWell(a, b, n) = 8</code>.

You will cast your first marble and get <code>$2</code>, after which the numbers will become <code>2</code> and <code>3</code>. When you cast your second marble, the well will give you <code>$6</code>. Overall, you'll make <code>\$8</code>. So, the output is <code>8</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer a**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq a \leq 2000</code>.

- **[input] integer b**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq b \leq 2000</code>.

- **[input] integer n**

  The number of magic marbles in your possession, a non-negative integer.<br>

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq n \leq 5</code>.

- **[output] integer**

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
