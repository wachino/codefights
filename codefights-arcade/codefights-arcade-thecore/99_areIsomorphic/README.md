---
layout: home
title: Are Isomorphic?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Two two-dimensional arrays are _isomorphic_ if they have the same number of rows and each pair of respective rows contains the same number of elements.

Given two two-dimensional arrays, check if they are isomorphic.

**Example**

- For
  <code type='preformat'>
  array1 = [[1, 1, 1],
  [0, 0]]
  </code>
  and

  <code type='preformat'>
  array2 = [[2, 1, 1],
            [2, 1]]
  </code>

  the output should be

  <code>areIsomorphic(array1, array2) = true;</code>

- For
  <code type='preformat'>
  array1 = [[2],
  []]
  </code>

  and
  <code type='preformat'>
  array2 = [[2]]
  </code>

  the output should be

  <code>areIsomorphic(array1, array2) = false.</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer array1**

  _Guaranteed constraints:_<br>
  <code>1 ≤ array1.length ≤ 5</code>,<br> <code>0 ≤ array1[i].length ≤ 5</code>,<br> <code>0 ≤ array1[i][j] ≤ 50</code>.

* **[input] array.array.integer array2**

  _Guaranteed constraints:_<br>
  <code>1 ≤ array2.length ≤ 5</code>,<br> <code>0 ≤ array2[i].length ≤ 5</code>,<br> <code>0 ≤ array2[i][j] ≤ 50</code>.

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
