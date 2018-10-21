---
layout: home
title: Line Encoding
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a string, return its encoding defined as follows:

* First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
    * for example, <code>"aabbbc"</code> is divided into <code>["aa", "bbb", "c"]</code>
* Next, each *substring* with length greater than one is replaced with a concatenation of its length and the repeating character
    * for example, substring <code>"bbb"</code> is replaced by <code>"3b"</code>
* Finally, all the new strings are concatenated together in the same order and a new string is returned.

*Note:* A **substring** of a string S is another string S' that occurs in S. For example, "Fights" is a substring of "CodeFights", but "CoFi" isn't.

**Example**

For <code>s = "aabbbc"</code>, the output should be
<code>lineEncoding(s) = "2a3bc"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

String consisting of lowercase English letters.

*Guaranteed constraints*:
<code>4 ≤ s.length ≤ 15</code>.

* **[output] string**

Encoded version of <code>s</code>.

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