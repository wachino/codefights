---
layout: home
title: Strings Rearrangement
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.


**Example**

* For <code>inputArray = ["aba", "bbb", "bab"]</code>, the output should be
<code>stringsRearrangement(inputArray) = false</code>;

All rearrangements don't satisfy the description condition.

* For <code>inputArray = ["ab", "bb", "aa"]</code>, the output should be
<code>stringsRearrangement(inputArray) = true</code>.

Strings can be rearranged in the following way: <code>"aa"</code>, <code>"ab"</code>, <code>"bb"</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.string inputArray**

A non-empty array of strings of lowercase letters.

*Guaranteed constraints*:
<code>2 ≤ inputArray.length ≤ 10</code>,
<code>1 ≤ inputArray[i].length ≤ 15</code>.

* **[output] boolean**


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