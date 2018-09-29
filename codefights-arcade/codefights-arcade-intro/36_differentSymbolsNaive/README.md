---
layout: home
title: Different Symbols Naive
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a string, find the number of different characters in it.


**Example**

For <code>s = &quot;cabca&quot;</code>, the output should be
<code>differentSymbolsNaive(s) = 3</code>.

There are <code>3</code> different characters <code>a</code>, <code>b</code> and <code>c</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

A string of lowercase English letters.

*Guaranteed constraints*:
<code>3 ≤ s.length ≤ 1000</code>.

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

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>