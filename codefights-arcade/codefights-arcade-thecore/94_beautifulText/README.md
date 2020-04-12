---
layout: home
title: Beautiful Text
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text _beautiful_ if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.

Given a string and some integers <code>l</code> and <code>r</code> (<code>l ≤ r</code>), check if it's possible to obtain a beautiful text from the string with a text width that's within the range <code>[l, r]</code>.

Where:

- A string that appears within another string. In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.

  Examples:

  cat is a substring of scatter
  rest is a substring of arrest
  implied is not a substring of simplified because there are other characters in between
  happy is not a substring of happiest because they contain different characters

**Example**

- For <code>inputString = "Look at this example of a correct text"</code>, <code>l = 5</code>, and <code>r = 15</code>, the output should be
  <code>beautifulText(inputString, l, r) = true</code>.

  We can replace <code>13<sup>th</sup></code> and <code>26<sup>th</sup></code> characters with <code>'\n'</code>, and obtain the following multiline text of width <code>12</code>:
  <code>
  Look at this<br>
  example of a<br>
  correct text<br>
  </code>

- For <code>inputString = "abc def ghi"</code>, <code>l = 4</code>, and <code>r = 10</code>, the output should be
  <code>beautifulText(inputString, l, r) = false</code>.

  There are two ways to obtain a text with lines of equal length from this input, one has <code>width = 3</code> and another has <code>width = 11</code> (this is a one-liner). Both of these values are not within our bounds.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  _Guaranteed constraints:_<br>
  <code>10 ≤ inputString.length ≤ 40</code>.

- **[input] integer l**

  A positive integer.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ l ≤ r</code>.

- **[input] integer r**

  A positive integer.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ r ≤ 15</code>.

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

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
