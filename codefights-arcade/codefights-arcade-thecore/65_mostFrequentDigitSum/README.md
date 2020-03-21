---
layout: home
title: Most Frequent Digit Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

A <code>step(x)</code> operation works like this: it changes a number <code>x</code> into <code>x - s(x)</code>, where <code>s(x)</code> is the sum of <code>x</code>'s digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: <code>n</code>, <code>step(n)</code>, <code>step(step(n))</code>, etc., with <code>0</code> as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (<code>s(x)</code>). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

**Example**

- For <code>n = 88</code>, the output should be
  <code>mostFrequentDigitSum(n) = 9</code>.

  - Here is the first sequence you built: <code>88, 72, 63, 54, 45, 36, 27, 18, 9, 0</code>;
  - And here is <code>s(x)</code> for each of its elements: <code>16, 9, 9, 9, 9, 9, 9, 9, 9, 0</code>.

  As you can see, the most frequent number in the second sequence is <code>9</code>.

- For <code>n = 8</code>, the output should be
  <code>mostFrequentDigitSum(n) = 8</code>.

  - At first you built the following sequence: <code>8, 0</code>
  - <code>s(x)</code> for each of its elements is: <code>8, 0</code>

As you can see, the answer is <code>8</code> (it appears as often as <code>0</code>, but is greater than it).

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  _Guaranteed constraints:_<br>
  <code>1 ≤ n ≤ 10<sup>5</sup></code>.

- **[output] integer**
  - The most frequent number in the sequence <code>s(n)</code>, <code>s(step(n))</code>, <code>s(step(step(n)))</code>, etc.

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
