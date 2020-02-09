---
layout: home
title: Reach Next Level
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are playing an RPG game. Currently your experience points (XP) total is equal to <code>experience</code>. To reach the next level your XP should be at least at <code>threshold</code>. If you kill the monster in front of you, you will gain more experience points in the amount of the <code>reward</code>.

Given values <code>experience</code>, <code>threshold</code> and <code>reward</code>, check if you reach the next level after killing the monster.


**Example**

* For <code>experience = 10</code>, <code>threshold = 15</code>, and <code>reward = 5</code>, the output should be
<code>reachNextLevel(experience, threshold, reward) = true</code>;
* For <code>experience = 10</code>, <code>threshold = 15</code>, and <code>reward = 4</code>, the output should be
<code>reachNextLevel(experience, threshold, reward) = false</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer experience**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>3 \leq experience \leq 250</code>.

* **[input] integer threshold**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>5 \leq threshold \leq 300</code>.

* **[input] integer reward**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>2 \leq reward \leq 65</code>.

* **[output] boolen**

    * <code>true</code> if you reach the next level, <code>false</code> otherwise.

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
