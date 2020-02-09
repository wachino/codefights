---
layout: home
title: Will You?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is <code>young</code>, <code>beautiful</code> and <code>loved</code>, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

* they are <code>young</code> and <code>beautiful</code> but not loved;
* they are <code>loved</code> but not <code>young</code> or not <code>beautiful</code>.


**Example**

* For <code>young = true</code>, <code>beautiful = true</code>, and <code>loved = true</code>, the output should be<br>
    <code>willYou(young, beautiful, loved) = false.</code><br><br>
    Young and beautiful people are loved according to Mary's belief.

* For <code>young = true</code>, <code>beautiful = false</code>, and <code>loved = true</code>, the output should be<br>
    <code>willYou(young, beautiful, loved) = true.</code><br><br>
    Mary doesn't believe that not beautiful people can be loved.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] boolean young**

* **[input] boolean beautiful**

* **[input] boolean loved**

* **[output] boolean**

    * <code>true</code> if the person contradicts Mary's belief, <code>false</code> otherwise.

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
