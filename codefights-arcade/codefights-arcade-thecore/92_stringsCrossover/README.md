---
layout: home
title: Strings Crossover
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Define _crossover_ operation over two equal-length strings <code>A</code> and <code>B</code> as follows:

- the result of that operation is a string of the same length as the input strings
- <code>result[i]</code> is either A[i] or B[i], chosen at random

Given array of strings <code>inputArray</code> and a string <code>result</code>, find for how many pairs of strings from <code>inputArray</code> the result of the crossover operation over them may be equal to <code>result</code>.

Note that <code>(A, B)</code> and <code>(B, A)</code> are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

**Example**

For <code>inputArray = ["abc", "aaa", "aba", "bab"]</code> and <code>result = "bbb"</code>, the output should be
<code>stringsCrossover(inputArray, result) = 2</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.string inputArray**

  A non-empty array of equal-length strings.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ inputArray.length ≤ 10</code>,<br> <code>1 ≤ inputArray[i].length ≤ 10</code>,<br>

- **[input] string result**

  A string of the same length as each of the <code>inputArray</code> elements.<br>

  _Guaranteed constraints:_<br>
  <code>result.length = inputArray[i].length</code>.

* **[output] integer**

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
