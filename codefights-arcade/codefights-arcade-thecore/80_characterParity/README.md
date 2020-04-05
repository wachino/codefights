---
layout: home
title: Character Parity
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a character, check if it represents an odd digit, an even digit or not a digit at all.

**Example**

- For <code>symbol = '5'</code>, the output should be
<code>characterParity(symbol) = "odd"</code>;
- For <code>symbol = '8'</code>, the output should be
<code>characterParity(symbol) = "even"</code>;
- For <code>symbol = 'q'</code>, the output should be
<code>characterParity(symbol) = "not a digit"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] char symbol**

  A symbol to check.<br>

  _Guaranteed constraints:_<br>
  <code>symbol is guaranteed to be a UTF-8 symbol</code>.

- **[output] string**

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
