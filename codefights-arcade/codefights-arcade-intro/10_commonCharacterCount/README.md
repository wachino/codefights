---
layout: home
title: Common Character Count
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given two strings, find the number of common characters between them.

**Example**

For <code>s1 = "aabcc"</code> and <code>s2 = "adcaa"</code>, the output should be
<code>commonCharacterCount(s1, s2) = 3</code>.

Strings have <code>3</code> common characters <code>- 2</code> "a"s and <code>1</code> "c".

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s1**

A string consisting of lowercase latin letters <code>a-z</code>.

*Guaranteed constraints*:
<code>1 ≤ s1.length ≤ 15</code>.

* **[input] string s2**

A string consisting of lowercase latin letters <code>a-z</code>.

*Guaranteed constraints*:
<code>1 ≤ s2.length ≤ 15</code>.

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