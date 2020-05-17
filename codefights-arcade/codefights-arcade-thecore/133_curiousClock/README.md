---
layout: home
title: Curious Clock
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.

Indeed, the clock did surprise Benjamin: without warning, at <code>someTime</code> the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at <code>leavingTime</code> he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.

Given the <code>someTime</code> at which the clock started to go backwards, find out what time will be shown on the curious clock at <code>leavingTime</code>.

For your convenience, here is the list of months lengths (from January to December, respectively):

Months lengths: <code>31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31</code>.
Please, note that in leap years February has <code>29</code> days.

Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

**Example**

For <code>someTime = "2016-08-26 22:40"</code> and <code>leavingTime = "2016-08-29 10:00"</code>, the output should be
<code>curiousClock(someTime, leavingTime) = "2016-08-24 11:20"</code>.

There are <code>2</code> days, <code>11</code> hours and <code>20</code> minutes till the meeting. Thus, the clock will show <code>2016-08-24 11:20</code> at the <code>leavingTime</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string someTime**

  The time at which the clock started going backwards. It is guaranteed that the time is correct.<br>
  The time is given in the format <code>"YYYY-MM-DD HH:MM"</code>.

  _Guaranteed constraints:_<br>
  <code>1970-01-01 00:00 ≤ someTime</code>.

- **[input] string leavingTime**

  The time at which Ben will have to leave for the meeting in the same format as <code>someTime</code> and with the same constraints.

  _Guaranteed constraints:_<br>
  <code>someTime < leavingTime</code>,<br>
  <code>leavingTime ≤ 2035-12-31 23:59</code>.

* **[output] string**

  - The time Ben's curious clock will show when it's time to leave in the same format as <code>leavingTime</code> and <code>someTime</code>. It is guaranteed that it will be not earlier than the midnight of January the 1<sup>st</sup>, 1970.

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
