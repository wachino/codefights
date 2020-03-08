---
layout: home
title: Kill K-th Bit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number <code>n</code> the <code>k<sup>th</sup></code> bit from the right was initially set to <code>0</code>, but its current value might be different. It's now up to you to write a function that will change the <code>k<sup>th</sup></code> bit of <code>n</code> back to <code>0</code>.

**Example**

- For <code>n = 37</code> and <code>k = 3</code>, the output should be<br>
  <code>killKthBit(n, k) = 33</code>.

  <code>37<sub>10</sub> = 100**1**01<sub>2</sub> ~> 100**0**01<sub>2</sub> = 33<sub>10</sub></code>.

- For <code>n = 37</code> and <code>k = 4</code>, the output should be<br>
  <code>killKthBit(n, k) = 37</code>.

  The <code>4<sup>th</sup></code> bit is <code>0</code> already (looks like the Mad Coder forgot to encrypt this number), so the answer is still <code>37</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq n \leq 2^31 - 1</code>.

- **[input] integer k**

  The <code>1</code>-based index of the changed bit (counting from the right).

  _Guaranteed constraints:_<br>
  <code type='math/tex'>1 \leq k \leq 31</code>.

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
