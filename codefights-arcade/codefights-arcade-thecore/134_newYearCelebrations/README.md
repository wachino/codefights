---
layout: home
title: New Year Celebrations
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!

Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at <code>takeOffTime</code>, and in <code>minutes[i]</code> after takeoff you will cross the <code>i<sup>th</sup></code> border between time zones. After crossing each border you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the [IDL](https://en.wikipedia.org/wiki/International_Date_Line) (i.e. after crossing each time zone border your current time will be set one hour back).

You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows <code>00:00</code>. Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to celebrate New Year slip through your fingers).

**Example**

For <code>takeOffTime = "23:35"</code> and <code>minutes = [60, 90, 140]</code>,
the output should be
<code>newYearCelebrations(takeOffTime, minutes) = 3</code>.

Here is the list of events by the time zones:

- **initial time zone**:
  - at <code>23:35</code> your flight starts;
  - at <code>00:00</code> you celebrate New Year for the first time;
  - at <code>00:35</code> (<code>60</code> minutes after the take off) you cross the first border;
- **time zone -1**:
  - at <code>23:35</code> you cross the border (00:35 by your initial time zone);
  - at <code>00:00</code> you celebrate New Year for the second time (01:00 by your initial time zone);
  - at <code>00:05</code> (<code>90</code> minutes after the take off) you cross the second border;
- **time zone -2**:
  - at <code>23:05</code> you cross the border;
  - at <code>23:55</code> (<code>140</code> minutes after the take off) you cross another border;
- **time zone -3**:
  - at <code>22:55</code> you cross the border;
  - at <code>00:00</code> you celebrate New Year for the third time.

Thus, the output should be <code>3</code>. That's a lot of champagne!

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string takeOffTime**

  The take off time in the 24-hour format <code>"HH:MM"</code>. It is guaranteed that the given time is valid. The <code>"00:00"</code> time corresponds to the midnight of 31<sup>st</sup> of December / 1<sup>st</sup> of January.

  _Guaranteed constraints:_<br>
  <code>"00" ≤ HH ≤ "23"</code><br>,
  <code>"00" ≤ MM ≤ "59"</code>.

- **[input] array.integer minutes**

  A strictly increasing array of integers. <code>minutes[i]</code> stands for the number of minutes from the take off to crossing the <code>i<sup>th</sup></code> time zone border.

  _Guaranteed constraints:_<br>
  <code>0 ≤ minutes.length ≤ 20</code>,<br>
  <code>1 ≤ minutes[i] ≤ 1500</code>.

* **[output] integer**

  - The number of times you will be able to celebrate New Year's Day.

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
