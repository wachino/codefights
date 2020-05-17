---
layout: home
title: Regular Months
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!

You and your colleagues have started calling these months _regular_ months. Since you're a fan of working from home, you decide to find out how far away the nearest _regular_ month is, given that the <code>currMonth</code> has just started.

For your convenience, here is a list of month lengths (from January to December, respectively):

- Month lengths: <code>31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31</code>.

Please, note that in leap years February has <code>29</code> days.

Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

**Example**

For <code>currMonth = "02-2016"</code>, the output should be
<code>regularMonths(currMonth) = "08-2016"</code>.

February of <code>2016</code> year is _regular_, but it doesn't count since it has started already, so the next _regular_ month is August of <code>2016</code> - which is the answer.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string currMonth**

  A string representing the current month in the format <code>mm-yyyy</code>, where mm is the number of the month (1-based, i.e. <code>01</code> for January, <code>02</code> for February and so on) and <code>yyyy</code> is the year.

  _Guaranteed constraints:_<br>
  <code>1 ≤ int(mm) ≤ 12</code><br>,
  <code>1970 ≤ int(yyyy) ≤ 2100</code>.

* **[output] string**

  - The earliest _regular_ month after the given one in the same format as <code>currMonth</code>.

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
