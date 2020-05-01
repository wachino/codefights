---
layout: home
title: Maximum Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given an array of integers <code>a</code>. A _range sum query_ is defined by a pair of non-negative integers <code>l</code> and <code>r</code> (<code>l</code> <= <code>r</code>). The output to a range sum query on the given array <code>a</code> is the sum of all the elements of a that have indices from <code>l</code> to <code>r</code>, inclusive.

You have the array <code>a</code> and a list of _range sum queries_ <code>q</code>. Find an algorithm that can rearrange the array <code>a</code> in such a way that the total sum of all of the query outputs is maximized, and return this total sum.

**Example**

For <code>a = [9, 7, 2, 4, 4]</code> and <code>q = [[1, 3], [1, 4], [0, 2]]</code>, the output should be
<code>maximumSum(a, q) = 62</code>.

You can get this sum if the array <code>a</code> is rearranged to be <code>[2, 9, 7, 4, 4]</code>. In that case, the first _range sum query_ <code>[1, 3]</code> returns the sum <code>9 + 7 + 4 = 20</code>, the second query <code>[1, 4]</code> returns the sum <code>9 + 7 + 4 + 4 = 24</code>, and the third query <code>[0, 2]</code> returns the sum <code>2 + 9 + 7 = 18</code>. The total sum will be <code>20 + 24 + 18 = 62</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  An initial array.

  _Guaranteed constraints:_<br>
  <code>2 ≤ a.length ≤ 10</code>,<br>
  <code>1 ≤ a[i] ≤ 10</code>.

- **[input] array.array.integer q**

  An array of _range sum queries_, where each query is an array of two non-negative integers.

  _Guaranteed constraints:_<br>
  <code>1 ≤ q.length ≤ 10</code>,<br>
  <code>0 ≤ q[i][0] ≤ q[i][1] < a.length</code>.

* **[output] integer**
  - Return the maximum possible total sum of the given _range sum query_ outputs.

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
