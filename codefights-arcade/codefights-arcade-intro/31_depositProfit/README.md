---
layout: home
title: Deposit Profit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth <code>rate</code>. Find out how long it would take for your balance to pass a specific <code>threshold</code> with the assumption that you don't make any additional deposits.


**Example**

For <code>deposit = 100</code>, <code>rate = 20</code> and <code>threshold = 170</code>, the output should be
<code>depositProfit(deposit, rate, threshold) = 3</code>.

Each year the amount of money on your account increases by <code>20%</code>. It means that throughout the years your balance would be:

* year 0: <code>100</code>;
* year 1: <code>120</code>;
* year 2: <code>144</code>;
* year 3: <code>172,8</code>.

Thus, it will take <code>3</code> years for your balance to pass the <code>threshold</code>, which is the answer.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer deposit**

The initial deposit as a positive integer.

*Guaranteed constraints*:
<code>1 ≤ deposit ≤ 100</code>.

* **[input] integer rate**

The rate of increase. Each year the balance increases by the <code>rate</code> percent of the current sum.

*Guaranteed constraints*:
<code>1 ≤ rate ≤ 100</code>.

* **[input] integer threshold**

The target balance.

*Guaranteed constraints*:
<code>deposit ≤ threshold ≤ 100</code>.

* **[output] integer**

The number of years it would take to hit the <code>threshold</code>.

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