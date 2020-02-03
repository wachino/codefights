---
layout: home
title: Late Ride
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

One night you go for a ride on your motorcycle. At <code>00:00</code> you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that <code>n</code> minutes have passed since <code>00:00</code>.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format <code>hh:mm</code> would show.


**Example**

* For <code>n = 240</code>, the output should be
<code>lateRide(n) = 4</code>.<br>
Since <code>240</code> minutes have passed, the current time is <code>04:00</code>. The digits sum up to <code>0 + 4 + 0 + 0 = 4</code>, which is the answer.

* For <code>n = 808</code>, the output should be
<code>lateRide(n) = 14</code>.<br>
<code>808</code> minutes mean that it's <code>13:28</code> now, so the answer should be <code>1 + 3 + 2 + 8 = 14</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The duration of your ride, in minutes. It is guaranteed that you've been riding for less than a day (24 hours).

    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq n \le 60 · 24</code>.

* **[output] integer**

    * The sum of the digits the digital timer would show.  

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
