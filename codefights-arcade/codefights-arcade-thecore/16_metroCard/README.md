---
layout: home
title: Metro Card
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You just bought a public transit card that allows you to ride the Metro for a certain number of days.

Here is how it works: upon first receiving the card, the system allocates you a <code>31</code>-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by <code>28</code> days, i.e. the number of days in February (note that leap years are not considered), and so on. The <code>13<sup>th</sup></code> time you extend the pass, you get <code>31</code> days again.

You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.


**Example**

For <code>lastNumberOfDays = 30</code>, the output should be<br>
<code>metroCard(lastNumberOfDays) = [31]</code>.

There are <code>30</code> days in April, June, September and November, so the next months to consider are May, July, October or December. All of them have exactly <code>31</code> days, which means that you will definitely get a <code>31</code>-days pass the next time you extend your card.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer lastNumberOfDays**

    A positive integer, the number of days for which the card was extended the last time.<br>
    _Guaranteed constraints:_<br>
    <code type='math/tex'>lastNumberOfDays = 28 or lastNumberOfDays = 30 or lastNumberOfDays = 31</code>.

* **[output] array.integer**

    * An array of positive integers, the possible number of days for which you will extend your pass. The elements of the array can only be equal to <code>28</code>, <code>30</code> or <code>31</code> and must be sorted in increasing order.

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
