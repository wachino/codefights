---
layout: home
title: Are Equally Strong
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people *equally strong* if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.


**Example**

* For <code>yourLeft = 10</code>, <code>yourRight = 15</code>, <code>friendsLeft = 15</code> and <code>friendsRight = 10</code>, the output should be
<code>areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true</code>;

* For <code>yourLeft = 15</code>, <code>yourRight = 10</code>, <code>friendsLeft = 15</code> and <code>friendsRight = 10</code>, the output should be
<code>areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true</code>;

* For <code>yourLeft = 15</code>, <code>yourRight = 10</code>, <code>friendsLeft = 15</code> and <code>friendsRight = 9</code>, the output should be
<code>areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer yourLeft**

A non-negative integer representing the heaviest weight you can lift with your left arm.

*Guaranteed constraints*:
<code>0 ≤ yourLeft ≤ 20</code>.

* **[input] integer yourRight**

A non-negative integer representing the heaviest weight you can lift with your right arm.

*Guaranteed constraints*:
<code>0 ≤ yourRight ≤ 20</code>.

* **[input] integer friendsLeft**

A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

*Guaranteed constraints*:
<code>0 ≤ friendsLeft ≤ 20</code>.

* **[input] integer friendsRight**

A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

*Guaranteed constraints*:
<code>0 ≤ friendsRight ≤ 20</code>.

* **[output] boolean**

<code>true</code> if you and your friend are equally strong, <code>false</code> otherwise.



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