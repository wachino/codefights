---
layout: home
title: Important Events
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You're very busy and have a lot of important events coming up. In order to ensure that you don't forget any of these events, you have decided to organize them.

The information about your **events** is stored in the table events, which has the structure:

- **id**: unique event id;
- **name**: the event name;
- **event_date**: the event date in the format <code>YYYY-MM-DD</code>;
- **participants**: the number of people that are going to attend this event.

After some thinking, you decide that it would be easier to navigate though your schedule if you could see all the events ordered by the weekday on which they are scheduled. In order to do so, you want to sort all the events by the weekdays of their <code>event_date</code>s, meaning that Monday events should come first, Tuesday events should come next, and so on, with Sunday events coming last. In the case of a tie, the <code>participants</code> should be a tie-breaker; an event with the largest number of <code>participants</code> should go first, because events with more attendees are more important. It is guaranteed that there are no events that have the same <code>event_date</code> and the same number of <code>participants</code>.

Given the table **events**, sort it as described above and return the resulting table.

**Example**

For the following table **events**

| id  | name      | event_date | participants |
| --- | --------- | ---------- | ------------ |
| 1   | Dinner    | 2016-11-27 | 3            |
| 2   | Comic-con | 2016-10-25 | 100          |
| 3   | Christmas | 2016-12-31 | 5000         |
| 4   | Meeting   | 2016-10-18 | 300          |

the output should be

| id  | name      | event_date | participants |
| --- | --------- | ---------- | ------------ |
| 4   | Meeting   | 2016-10-18 | 300          |
| 2   | Comic-con | 2016-10-25 | 100          |
| 3   | Christmas | 2016-12-31 | 5000         |
| 1   | Dinner    | 2016-11-27 | 3            |

<code>Meeting</code> and <code>Comic-con</code> are both scheduled for Tuesdays, but <code>Meeting</code> is more important because its <code>participants</code> number is bigger. <code>Christmas</code> is scheduled for Saturday and <code>Dinner</code> is scheduled for Sunday.

- **[execution time limit] 10 seconds (mysql)**

</div>
<div class="columnSol" markdown="1">

## Solution

---

{% highlight sql linenos=table %}

{% include_relative solution.sql %}

{% endhighlight %}

</div>
</div>
