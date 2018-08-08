---
layout: home
title: Reverse Parentheses
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have a string <code>s</code> that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in <code>s</code> form a regular bracket sequence.

*Note*: A bracket sequence is called **regular** if it is possible to insert some numbers and signs into the sequence in such a way that the new sequence will represent a correct arithmetic expression.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.


**Example**

For string <code>s = "a(bc)de"</code>, the output should be
<code>reverseParentheses(s) = "acbde"</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a *regular bracket* sequence.

*Constraints*:
<code>5 ≤ s.length ≤ 55</code>.

* **[output] string**

Sorted array <code>a</code> with all the trees untouched.

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