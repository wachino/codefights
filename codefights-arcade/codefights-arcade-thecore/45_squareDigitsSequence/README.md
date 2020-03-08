---
layout: home
title: Square Digits Sequence
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Consider a sequence of numbers <code>a<sub>0</sub></code>, <code>a<sub>1</sub></code>, ..., <code>a<sub>n</sub></code>, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element <code>a<sub>0</sub></code>, find the length of the sequence.

**Example**

- For <code>a<sub>0</sub> = 16</code>, the output should be
<code>squareDigitsSequence(a0) = 9</code>.

  Here's how elements of the sequence are constructed:

  - <code>a0 = 16</code>
  - <code>a1 = 12 + 62 = 37</code>
  - <code>a2 = 32 + 72 = 58</code>
  - <code>a3 = 52 + 82 = 89</code>
  - <code>a4 = 82 + 92 = 145</code>
  - <code>a5 = 12 + 42 + 52 = 42</code>
  - <code>a6 = 42 + 22 = 20</code>
  - <code>a7 = 22 + 02 = 4</code>
  - <code>a8 = 42 = 16</code>, which has already occurred before (<code>a0</code>)

  Thus, there are <code>9</code> elements in the sequence.

- For <code>a0 = 103</code>, the output should be
<code>squareDigitsSequence(a0) = 4</code>.

  The sequence goes as follows: <code>103 -> 10 -> 1 -> 1</code>, <code>4</code> elements altogether.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer a0**

   First element of a sequence, positive integer.<br>

  _Guaranteed constraints:_<br>
   <code>1 ≤ a0 ≤ 10<sup>5</sup></code>.

- **[output] integer**

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
