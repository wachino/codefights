---
layout: home
title: Missed Classes
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.

You're given an array, <code>daysOfTheWeek</code>, with the weekdays on which your teacher's classes are scheduled, and <code>holidays</code>, representing the dates of the holidays throughout the academic year (from <code>1<sup>st</sup></code> of September in <code>year</code> to <code>31<sup>st</sup></code> of May in <code>year + 1</code>). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?

For your convenience, here is the list of month lengths (from January to December, respectively):

- Month lengths: <code>31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31</code>.

Please, note that in leap years February has <code>29</code> days.

Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

**Example**

For <code>year = 2015</code>, <code>daysOfTheWeek = [2, 3]</code>, and
<code>holidays = ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"]</code>,
the output should be
<code>missedClasses(year, daysOfTheWeek, holidays) = 3</code>.

November <code>4<sup>th</sup></code> of <code>2015</code> is a Wednesday, February <code>23<sup>th</sup></code> of <code>2016</code> and March <code>8<sup>th</sup></code> of <code>2016</sup> are Tuesdays, and the other holidays fall on Mondays. Classes are scheduled on Wednesdays and Tuesdays, so there will be only <code>3</code> missed classes.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] integer year**

  An integer representing the correct year. The current academic year started on September <code>1<sup>st</sup></code> and will finish on May <code>31<sup>st</sup></code> of <code>year + 1</code>.

  _Guaranteed constraints:_<br>
  <code>1900 ≤ year ≤ 2100</code>.

- **[input] array.integer daysOfTheWeek**

  A sorted array of integers from <code>1</code> to <code>7</code> representing the days of the week (1-based, i.e. <code>1</code> for Monday, <code>2</code> for Tuesday and so on) on which classes are scheduled.

  _Guaranteed constraints:_<br>
  <code>0 ≤ daysOfTheWeek.length ≤ 7</code>,<br>
  <code>1 ≤ daysOfTheWeek[i] ≤ 7</code>.

- **[input] array.string holidays**

  An array of strings representing the correct dates of holidays in this academic year in the format <code>"mm-dd"</code>, where <code>"mm"</code> stands for the month (1-based, i.e. <code>"01"</code> for January, <code>"02"</code> for February and so on) and <code>"dd"</code> stands for the day.

  _Guaranteed constraints:_<br>
  <code>0 ≤ holidays.length ≤ 30</code>,<br>
  <code>1 ≤ int(mm) ≤ 12</code>, except <code>6</code>, <code>7</code> and <code>8</code>,<br>
  <code>1 ≤ int(dd) ≤ 31</code>.

* **[output] integer**

  - The number of classes that will be missed.

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
