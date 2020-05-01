---
layout: home
title: Sort By Length
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

**Example**

For

<code type='preformat'>
inputArray = ["abc",
              "",
              "aaa",
              "a",
              "zz"]
</code>

the output should be

<code type='preformat'>
sortByLength(inputArray) = ["",
                            "a",
                            "zz",
                            "abc",
                            "aaa"]
</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.string inputArray**

  A non-empty array of strings.

  _Guaranteed constraints:_<br>
  <code>3 ≤ inputArray.length ≤ 100</code>,<br>
  <code>0 ≤ inputArray[i].length ≤ 100</code>.

* **[output] array.string**

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
