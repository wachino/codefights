---
layout: home
title: Variable Name
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

**Example**

* For name = <code>&quot;var_1__Int&quot;</code>, the output should be
<code>variableName(name) = true</code>;

* For <code>name = &quot;qq-q&quot;</code>, the output should be
<code>variableName(name) = false</code>;

* For <code>name = &quot;2w2&quot;</code>, the output should be
<code>variableName(name) = false</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string name**

*Guaranteed constraints*:
<code>1 ≤ name.length ≤ 10</code>.

* **[output] boolean**

<code>true</code> if <code>name</code> is a correct variable name, <code>false</code> otherwise.

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