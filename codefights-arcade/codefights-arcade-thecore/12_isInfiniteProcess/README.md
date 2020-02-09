---
layout: home
title: Is Infinite Process
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given integers <code>a</code> and <code>b</code>, determine whether the following pseudocode results in an infinite loop

<code>
while a is not equal to b do<br>
  &nbsp;&nbsp;increase a by 1<br>
  &nbsp;&nbsp;decrease b by 1
</code>

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.


**Example**

* For <code>a = 2</code> and <code>b = 6</code>, the output should be
<code>isInfiniteProcess(a, b) = false</code>;
* For <code>a = 2</code> and <code>b = 3</code>, the output should be
<code>isInfiniteProcess(a, b) = true</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq a \leq 20</code>.

* **[input] integer b**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq b \leq 20</code>.

* **[output] boolean**

    * <code>true</code> if the pseudocode will never stop, <code>false</code> otherwise.

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
