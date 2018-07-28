---
layout: home
title: Century from year
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

**Example**

For <code>year = 1905</code>, the output should be
<code>centuryFromYear(year) = 20;</code>
For year = 1700, the output should be
<code>centuryFromYear(year) = 17.</code>

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer year**

A positive integer, designating the year.

*Guaranteed constraints*:
<code>1 ≤ year ≤ 2005.</code>

* **[output] integer**

The number of the century the year is in.

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