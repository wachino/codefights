---
layout: home
title: Ada Number
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Consider two following representations of a non-negative integer:

- A simple decimal integer, constructed of a non-empty sequence of digits from <code>0</code> to <code>9</code>;
- An integer with at least one digit in a base from <code>2</code> to <code>16</code> (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between <code>2</code> and <code>16</code> in the first representation. For digits from <code>10</code> to <code>15</code> characters <code>a, b, ..., f</code> and <code>A, B, ..., F</code> are used.

Additionally, both representations may contain _underscore_ (<code>_</code>) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

_Note: this is how integer numbers are represented in the programming language Ada._

**Example**

- For <code>line = "123_456_789"</code>, the output should be
<code>adaNumber(line) = true</code>;
- For <code>line = "16#123abc#"</code>, the output should be
<code>adaNumber(line) = true</code>;
- For <code>line = "10#123abc#"</code>, the output should be
<code>adaNumber(line) = false</code>;
- For <code>line = "10#10#123ABC#"</code>, the output should be
<code>adaNumber(line) = false</code>;
- For <code>line = "10#0#"</code>, the output should be
<code>adaNumber(line) = true</code>;
- For <code>line = "10##"</code>, the output should be
<code>adaNumber(line) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string line**

  A non-empty string.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ line.length ≤ 30</code>.

- **[output] boolean**
  - <code>true</code> if <code>line</code> is a valid integer representation, <code>false</code> otherwise.

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

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
