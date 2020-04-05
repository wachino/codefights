---
layout: home
title: Reflect String
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Define an _alphabet reflection_ as follows: <code>a</code> turns into <code>z</code>, <code>b</code> turns into <code>y</code>, <code>c</code> turns into <code>x</code>, ..., <code>n</code> turns into <code>m</code>, <code>m</code> turns into <code>n</code>, ..., <code>z</code> turns into <code>a</code>.

Define a _string reflection_ as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

**Example**

For <code>inputString = "name"</code>, the output should be
<code>reflectString(inputString) = "mznv"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  A string of lowercase characters.<br>

  _Guaranteed constraints:_<br>
  <code>3 ≤ inputString.length ≤ 1000</code>.

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
