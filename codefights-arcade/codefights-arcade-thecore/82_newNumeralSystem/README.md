---
layout: home
title: New Numeral System
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base <code>26</code>, and its digits are represented by English capital letters - <code>A</code> for <code>0</code>, <code>B</code> for <code>1</code>, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit <code>number</code>, you should find all unordered pairs of one-digit numbers whose values add up to the <code>number</code>.

**Example**

For <code>number = 'G'</code>, the output should be
<code>newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"]</code>.

Translating this into the decimal numeral system we get: <code>number = 6</code>, so it is <code>["0 + 6", "1 + 5", "2 + 4", "3 + 3"]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] char number**

  A character representing a correct one-digit number in the new numeral system.<br>

  _Guaranteed constraints:_<br>
  <code>'A' ≤ number ≤ 'Z'</code>.

- **[output] array.string**
  - An array of strings in the format <code>"letter1 + letter2"</code>, where <code>"letter1"</code> and <code>"letter2"</code> are correct one-digit numbers in the new numeral system. The strings should be sorted by <code>"letter1"</code>.

Note that <code>"letter1 + letter2"</code> and <code>"letter2 + letter1"</code> are equal pairs and we don't consider them to be different.

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
