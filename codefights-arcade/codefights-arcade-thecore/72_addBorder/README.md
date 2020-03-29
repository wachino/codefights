---
layout: home
title: Add Border
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a rectangular matrix of characters, add a border of asterisks(<code>*</code>) to it.

**Example**

For<br>
<code>
picture = ["abc",<br>
           "ded"]
</code>

the output should be <br>

<code>
addBorder(picture) = ["*****",<br>
                      "*abc*",<br>
                      "*ded*",<br>
                      "*****"]
</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.string picture**

  A non-empty array of non-empty equal-length strings.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ picture.length ≤ 100</code>,
  <code>1 ≤ picture[i].length ≤ 100</code>.

- **[output] array.string**
  - The same matrix of characters, framed with a border of asterisks of width <code>1</code>.

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
