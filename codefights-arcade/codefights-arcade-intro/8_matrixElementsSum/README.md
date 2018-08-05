---
layout: home
title: Matrix Elements Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular <code>matrix</code> of rooms. Each cell in the <code>matrix</code> contains an integer that represents the price of the room. Some rooms are free (their cost is <code>0</code>), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is *free* or is located **anywhere below** a *free* room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.

**Example**

* For
<code>
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
</code>
the output should be
<code>matrixElementsSum(matrix) = 9</code>.

Here's the rooms matrix with unsuitable rooms marked with <code>'x'</code>:

<code>
[[x, 1, 1, 2], 
 [x, 5, x, x], 
 [x, x, x, x]]
</code>

Thus, the answer is <code>1 + 5 + 1 + 2 = 9</code>.

* For
<code>
matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
</code>
the output should be
<code>matrixElementsSum(matrix) = 9</code>.

Here's the rooms matrix with unsuitable rooms marked with <code>'x'</code>:

<code>
[[1, 1, 1, x], 
 [x, 5, x, x], 
 [x, 1, x, x]]
</code>
Note that the free room in the first row make the full column unsuitable for bots.

Thus, the answer is <code>1 + 1 + 1 + 5 + 1 = 9</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.array.integer matrix**

A 2-dimensional array of integers representing a rectangular matrix of the building.

*Guaranteed constraints*:

<code type='math/tex'>2 \leq \text{sequence.length} \leq 10^5</code>,
<code type='math/tex'>-10^5 \leq \text{sequence.length} \leq 10^5</code>.

* **[output] boolean**

Return <code>true</code> if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return <code>false</code>.

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
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>