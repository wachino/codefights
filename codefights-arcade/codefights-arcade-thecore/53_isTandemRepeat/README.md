---
layout: home
title: Is Tandem Repeat?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Determine whether the given string can be obtained by one concatenation of some string to itself.

**Example**

- For <code>inputString = "tandemtandem"</code>, the output should be
  <code>isTandemRepeat(inputString) = true</code>;
- For <code>inputString = "qqq"</code>, the output should be
  <code>isTandemRepeat(inputString) = false</code>;
- For <code>inputString = "2w2ww"</code>, the output should be
  <code>isTandemRepeat(inputString) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  _Guaranteed constraints:_<br>
  <code>2 ≤ inputString.length ≤ 20</code>.

- **[output] boolean**
  - <code>true</code> if <code>inputString</code> represents a string concatenated to itself, <code>false</code> otherwise.

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
