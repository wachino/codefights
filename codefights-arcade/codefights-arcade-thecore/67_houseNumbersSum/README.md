---
layout: home
title: House Numbers Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number <code>0</code> written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one <code>0</code> house on the path.

**Example**

For <code>inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2]</code>, the output should be
<code>houseNumbersSum(inputArray) = 11</code>.

The answer was obtained as <code>5 + 1 + 2 + 3 = 11</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer inputArray**

  _Guaranteed constraints:_<br>
  <code>5 ≤ inputArray.length ≤ 10</code>,
  <code>0 ≤ inputArray[i] ≤ 10</code>.

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
