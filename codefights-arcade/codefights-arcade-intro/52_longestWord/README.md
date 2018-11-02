---
layout: home
title: Longest Word
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Define a *word* as a sequence of consecutive English letters. Find the longest *word* from the given string.

**Example**

For <code>text = "Ready, steady, go!"</code>, the output should be
<code>longestWord(text) = "steady"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string text**

*Guaranteed constraints*:
<code>4 ≤ text.length ≤ 50</code>.

* **[output] string**

The longest *word* from <code>text</code>. It's guaranteed that there is a unique output.

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