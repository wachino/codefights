---
layout: home
title: Is Digit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Determine if the given character is a digit or not.

**Example**

* For <code>symbol = '0'</code>, the output should be
<code>isDigit(symbol) = true;</code>

* For <code>symbol = '-'</code>, the output should be
<code>isDigit(symbol) = false</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] char symbol**

A character which is either a digit or not.

* **[output] boolean**

<code>true</code> if <code>symbol</code> is a digit, <code>false</code> otherwise.

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