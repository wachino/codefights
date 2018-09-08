---
layout: home
title: Array Replace
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given an array of integers, replace all the occurrences of <code>elemToReplace</code> with <code>substitutionElem</code>.


**Example**

For <code>inputArray = [1, 2, 1]</code>, <code>elemToReplace = 1</code> and <code>substitutionElem = 3<code>, the output should be
<code>arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

*Guaranteed constraints*:
<code>2 ≤ inputArray.length ≤ 10</code>,
<code>0 ≤ inputArray[i] ≤ 10</code>.

* **[input] integer elemToReplace**

*Guaranteed constraints*:
<code>0 ≤ elemToReplace ≤ 10</code>.

* **[input] integer substitutionElem**

*Guaranteed constraints*:
<code>0 ≤ substitutionElem ≤ 10</code>.

* **[output] array.integer**


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