---
layout: home
title: Runners Meetings
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return <code>-1</code> instead.

**Example**

For <code>startPosition = [1, 4, 2]</code> and <code>speed = [27, 18, 24]</code>, the output should be
<code>runnersMeetings(startPosition, speed) = 3</code>.

In 20 seconds after the runners start running, they end up at the same point. Check out the gif below for better understanding:

![](./images/example.gif)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer startPosition**

  A non-empty array of integers representing starting positions of runners (in meters).

  _Guaranteed constraints:_<br>
  <code>2 ≤ startPosition.length ≤ 100</code>,<br> <code>-10<sup>4</sup> ≤ startPosition[i] ≤ 10<sup>4</sup></code>.

- **[input] array.integer speed**

  Array of positive integers of the same length as <code>startPosition</code> representing speeds of the runners (in meters per minute).<br>

  _Guaranteed constraints:_<br>
  <code>speed.length = startPosition.length</code>,<br> <code>1 ≤ speed[i] ≤ 100</code>.

* **[output] boolean**
  - The maximum meeting cardinality or <code>-1</code> if there will be no meetings.

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
