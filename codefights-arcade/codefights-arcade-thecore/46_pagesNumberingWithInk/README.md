---
layout: home
title: Pages Numbering With Ink
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the <code>current</code> page and <code>numberOfDigits</code> left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page <code>102</code> but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the <code>current</code> page, and that you can't number the last one in the book.

**Example**

- For <code>current = 1</code> and <code>numberOfDigits = 5</code>, the output should be
<code>pagesNumberingWithInk(current, numberOfDigits) = 5</code>.

  The following numbers will be printed: <code>1, 2, 3, 4, 5</code>.

- For <code>current = 21</code> and <code>numberOfDigits = 5</code>, the output should be
<code>pagesNumberingWithInk(current, numberOfDigits) = 22</code>.

  The following numbers will be printed: <code>21, 22</code>.

- For <code>current = 8</code> and <code>numberOfDigits = 4</code>, the output should be
<code>pagesNumberingWithInk(current, numberOfDigits) = 10</code>.

  The following numbers will be printed: <code>8, 9, 10</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer current**

   A positive integer, the number on the current page which is not yet printed.<br>

  _Guaranteed constraints:_<br>
   <code>1 ≤ current ≤ 1000</code>.

- **[input] integer numberOfDigits**

   A positive integer, the number of digits which your printer can print.<br>

  _Guaranteed numberOfDigits:_<br>
   <code>1 ≤ current ≤ 1000</code>.

- **[output] integer**
  - The last printed page number.

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
