---
layout: home
title: Minimal Number Of Coins
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

The coin values available in Bananaland are stored in a sorted array <code>coins</code>. <code>coins[0] = 1</code>, and for each <code>i (0 < i < coins.length) coins[i]</code> is divisible by <code>coins[i - 1]</code>. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's <code>price</code>.

**Example**

For <code>coins = [1, 2, 10]</code> and <code>price = 28</code>, the output should be
<code>minimalNumberOfCoins(coins, price) = 6</code>.

You have to use <code>10</code> twice, and <code>2</code> four times.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer coins**

  The coin values available in Bananaland.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ coins.length ≤ 5</code>,<br> <code>1 ≤ coins[i] ≤ 120</code>.

- **[input] integer price**

  A positive integer representing the price of the banana.<br>

  _Guaranteed constraints:_<br>
  <code>8 ≤ price ≤ 250</code>.

- **[output] integer**
  - The minimal number of coins you can use to buy the banana.

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
