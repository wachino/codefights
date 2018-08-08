---
layout: home
title: Is Lucky
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Ticket numbers usually consist of an even number of digits. A ticket number is considered *lucky* if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number <code>n</code>, determine if it's *lucky* or not.

**Example**

* For <code>n = 1230</code>, the output should be
<code>isLucky(n) = true</code>;
* For <code>n = 239017</code>, the output should be
<code>isLucky(n) = false</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

A ticket number represented as a positive integer with an even number of digits.

*Guaranteed constraints*:
<code type='math/tex'>10 \leq n \le 10^6</code>.

* **[output] integer**

<code>true</code> if <code>n</code> is a lucky ticket number, <code>false</code> otherwise.

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

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>