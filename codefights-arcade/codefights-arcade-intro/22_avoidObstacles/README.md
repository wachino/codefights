---
layout: home
title: Avoid Obstacles
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate <code>0</code> to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.


**Example**

For <code>inputArray = [5, 3, 6, 7, 9]</code>, the output should be
<code>avoidObstacles(inputArray) = 4</code>.

Check out the image below for better understanding:

![](./images/example.png)


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

Non-empty array of positive integers.

*Guaranteed constraints*:
<code>2 ≤ inputArray.length ≤ 10</code>,
<code>1 ≤ inputArray[i] ≤ 40</code>.

* **[output] integer**

The desired length.


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