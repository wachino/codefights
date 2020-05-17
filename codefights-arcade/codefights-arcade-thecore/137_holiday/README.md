---
layout: home
title: Holiday
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the <code>x<sup>th</sup></code> week of <code>month</code>, on <code>weekDay</code>.

Your task is to return the day of <code>month</code> on which the holiday will be celebrated in the year <code>yearNumber</code>.

For your convenience, here are the lists of months names and lengths and the list of days of the week names.

- Months: <code>"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"</code>.
- Months lengths: <code>31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31</code>.
- Days of the week: <code>"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"</code>.

Please, note that in leap years February has <code>29</code> days.

Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

**Example**

- For <code>x = 3</code>, <code>weekDay = "Wednesday"</code>, <code>month = "November"</code>, and <code>yearNumber = 2016</code>, the output should be
  <code>holiday(x, weekDay, month, yearNumber) = 16</code>.

  The new holiday will be celebrated every November on the <code>3<sup>rd</sup></code> Wednesday of the month. In 2016 the <code>3<sup>rd</sup></code> Wednesday falls on the <code>16<sup>th</sup></code> of November.

- For <code>x = 5</code>, <code>weekDay = "Thursday"</code>, <code>month = "November"</code>, and <code>yearNumber = 2016</code>, the output should be
  <code>holiday(x, weekDay, month, yearNumber) = -1</code>.

  There are only <code>4</code> Thursdays in November <code>2016</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] integer x**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code>1 ≤ x ≤ 5</code>.

- **[input] string weekDay**

  A string representing a correct name of some day of the week.

  _Guaranteed constraints:_<br>
  <code>weekDay ∈ {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}</code>.

- **[input] string month**

  A string representing a correct name of some month.

  _Guaranteed constraints:_<br>
  <code>month ∈ {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}</code>.

- **[input] integer yearNumber**

  _Guaranteed constraints:_<br>
  <code>2015 ≤ yearNumber ≤ 2500</code>.

* **[output] integer**

  - The day of <code>month</code> on which the holiday will be celebrated in the year <code>yearNumber</code>. If there is no answer, return <code>-1</code>.

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
