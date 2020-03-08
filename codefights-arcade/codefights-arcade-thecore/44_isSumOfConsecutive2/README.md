---
layout: home
title: Is Sum Of Consecutive 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Find the number of ways to express <code>n</code> as sum of some (at least two) consecutive positive integers.

**Example**

- For <code>n = 9</code>, the output should be
<code>isSumOfConsecutive2(n) = 2</code>.

  There are two ways to represent <code>n = 9: 2 + 3 + 4 = 9</code> and <code>4 + 5 = 9</code>.
- For <code>n = 8</code>, the output should be
<code>isSumOfConsecutive2(n) = 0</code>.

  There are no ways to represent <code>n = 8</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

   A positive integer.<br>

  _Guaranteed constraints:_<br>
   <code>1 ≤ n ≤ 10<sup>4</sup></code>.

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
