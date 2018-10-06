---
layout: home
title: Growing Plant
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Each day a plant is growing by <code>upSpeed</code> meters. Each night that plant's height decreases by <code>downSpeed</code> meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

**Example**

For <code>upSpeed = 100</code>, <code>downSpeed = 10</code> and <code>desiredHeight = 910</code>, the output should be
<code>growingPlant(upSpeed, downSpeed, desiredHeight) = 10</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer upSpeed**

A positive integer representing the daily growth.

*Guaranteed constraints*:
<code>3 ≤ upSpeed ≤ 100</code>.

* **[input] integer downSpeed**

A positive integer representing the nightly decline.

*Guaranteed constraints*:
<code>2 ≤ downSpeed < upSpeed</code>.

* **[input] integer desiredHeight**

A positive integer representing the threshold.

*Guaranteed constraints*:
<code>4 ≤ desiredHeight ≤ 1000</code>.


* **[output] integer**

The number of days that it will take for the plant to reach/pass <code>desiredHeight</code> (including the last day in the total count).


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