---
layout: home
title: Palindrome Rearranging
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a string, find out if its characters can be rearranged to form a palindrome.

*Note*: A **palindrome** is a string that reads the same left-to-right and right-to-left.


**Example**

For <code>inputString = "aabb"</code>, the output should be
<code>palindromeRearranging(inputString) = true</code>.

We can rearrange <code>"aabb"</code> to make <code>"abba"</code>, which is a palindrome.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

A string consisting of lowercase English letters.

*Guaranteed constraints*:
<code>1 ≤ inputString.length ≤ 50</code>.

* **[output] boolean**

<code>true</code> if the characters of the <code>inputString</code> can be rearranged to form a palindrome, <code>false</code> otherwise.

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