---
layout: home
title: First Digit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Find the leftmost digit that occurs in a given string.


**Example**

For <code>inputString = "var_1__Int"</code>, the output should be
<code>firstDigit(inputString) = '1'</code>;
For <code>inputString = "q2q-q"</code>, the output should be
<code>firstDigit(inputString) = '2'</code>;
For inputString = "0ss", the output should be
<code>firstDigit(inputString) = '0'</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

A string containing at least one digit.

*Guaranteed constraints*:
<code>3 ≤ inputString.length ≤ 10</code>.

* **[output] char**

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