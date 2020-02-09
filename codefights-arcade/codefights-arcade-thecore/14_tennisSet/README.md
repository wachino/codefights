---
layout: home
title: Tennis Set
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

In tennis, the winner of a set is based on how many games each player wins. The first player to win <code>6</code> games is declared the winner **unless** their opponent had already won <code>5</code> games, in which case the set continues until one of the players has won <code>7</code> games.

Given two integers <code>score1</code> and <code>score2</code>, your task is to determine if it is possible for a tennis set to be finished with a final score of <code>score1</code> : <code>score2</code>.


**Example**

* For <code>score1 = 3</code> and <code>score2 = 6</code>, the output should be
<code>tennisSet(score1, score2) = true</code>.

Since player 1 hadn't reached <code>5</code> wins, the set ends once player 2 has won <code>6</code> games.

* For <code>score1 = 8</code> and <code>score2 = 5</code>, the output should be
<code>tennisSet(score1, score2) = false</code>.

Since both players won at least <code>5</code> games, the set would've ended once one of them won the <code>7<sup>th</sup></code> one.

* For <code>score1 = 6</code> and <code>score2 = 5</code>, the output should be
<code>tennisSet(score1, score2) = false</code>.

This set will continue until one of these players wins their 7<sup>th</sup> game, so this can't be the final score.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer score1**

    Number of games won by the 1st player, non-negative integer.<br>
    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq score1 \leq 10</code>.

* **[input] integer score2**

    Number of games won by the 2nd player, non-negative integer.<br>
    _Guaranteed constraints:_<br>
    <code type='math/tex'>0 \leq score2 \leq 10</code>.

* **[output] boolean**

    * <code>true</code> if <code>score1</code> : <code>score2</code> represents a possible score for an ended set, <code>false</code> otherwise.

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
