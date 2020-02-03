---
layout: home
title: Phone Call
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Some phone usage rate may be described as follows:

* first minute of a call costs <code>min1</code> cents,
* each minute from the 2nd up to 10th (inclusive) costs <code>min2_10</code> cents
* each minute after 10th costs <code>min11</code> cents.

You have <code>s</code> cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?


**Example**

For <code>min1 = 3</code>, <code>min2_10 = 1</code>, <code>min11 = 2</code>, and <code>s = 20</code>, the output should be
<code>phoneCall(min1, min2_10, min11, s) = 14</code>.

Here's why:

* the first minute costs <code>3</code> cents, which leaves you with <code>20 - 3 = 17</code> cents;
* the total cost of minutes <code>2</code> through <code>10</code> is <code>1 * 9 = 9</code>, so you can talk <code>9</code> more minutes and still have <code>17 - 9 = 8</code> cents;
* each next minute costs <code>2</code> cents, which means that you can talk <code>8 / 2 = 4</code> more minutes.

Thus, the longest call you can make is <code>1 + 9 + 4 = 14</code> minutes long.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer min1**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq min1 \leq 10</code>.

* **[input] integer min2_10**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq min2_10 \leq 10</code>.

* **[input] integer min11**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq min11 \leq 10</code>.

* **[input] integer s**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>2 \leq s\leqe 500</code>.

* **[output] integer**

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
------

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
