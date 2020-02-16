---
layout: home
title: Mirror Bits
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Reverse the order of the bits in a given integer.

**Example**

- For <code>a = 97</code>, the output should be
  <code>mirrorBits(a) = 67</code>.

  <code>97</code> equals to <code>1100001</code> in binary, which is <code>1000011</code> after mirroring, and that is <code>67</code> in base <code>10</code>.

- For <code>a = 8</code>, the output should be
  <code>mirrorBits(a) = 1</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer a**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>5 \leq a \leq 10<sup>5</sup></code>.

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
