---
layout: home
title: Sort By Height
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

**Example**

For <code>a = [-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be
<code>sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

If <code>a[i] = -1</code>, then the <code type='math/tex'>i^{th}<code> position is occupied by a tree. Otherwise <code>a[i]</code> is the height of a person standing in the <code type='math/tex'>i^{th}<code> position.

*Guaranteed constraints*:
<code>5 ≤ a.length ≤ 15</code>,
<code>-1 ≤ a[i] ≤ 200</code>.

* **[output] integer**

Sorted array <code>a</code> with all the trees untouched.

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