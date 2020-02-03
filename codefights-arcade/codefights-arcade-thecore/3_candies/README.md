---
layout: home
title: Candies
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

<code>n</code> children have got <code>m</code> pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

**Example**

For <code>n = 3</code> and <code>m = 10</code>, the output should be
<code>candies(n, m) = 9</code>.

Each child will eat <code>3</code> pieces. So the answer is <code>9</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The number of children.

    _Guaranteed constraints:_<br>
    <code type='math/tex'>1 \leq n \leq 10</code>.

* **[input] integer m**

    The number of pieces of candy.

    _Guaranteed constraints:_<br>
    <code type='math/tex'>2 \leq m \leq 100</code>.

* **[output] integer**

    * The total number of pieces of candy the children will eat provided they eat as much as they can and all children eat the same amount.

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

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
