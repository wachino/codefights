---
layout: home
title: Local Calendar
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are developing a calendar application that will allow users to schedule various events on different dates. The dates are all stored in the server local time as a <code>DATETIME</code>. You want to display the dates using the settings specified by the user.

Event dates and user settings are stored in the **events** and **settings** tables, which have the following structures:

* **events**:
    * **event_id**: the unique event ID;
    * **date**: the time and date of the event;
    * **user_id**: the ID of the user who scheduled this event.
* **settings**
    * **user_id**: the unique ID of the user with these settings;
    * **timeshift**: the number of minutes the user's time differs from the server (this could potentially be negative or zero);
    * **hours**: the number of hours in the user's clock (either <code>12</code> or <code>24</code>).

The displayed dates should have the format <code>yyyy-mm-dd hh:mm</code> if the user's clock has 24 hours. Otherwise, the format should be <code>yyyy-mm-dd hh:mm <p></code>, where <code><p></code> is either <code>AM</code> or <code>PM</code> depending on the time.

Given the **events** and **settings** tables, compose the result as follows: The resulting table should have two columns, <code>event_id</code> and <code>formatted_date</code>, that contain the event IDs and the formatted event dates according to settings of the user who scheduled that event, respectively. The table should be sorted in ascending order by the event IDs.

**Example**

For the following table **events**

| event_id | date       | user_id  |
| -------- | ---------- | -------- |
| 1        | 2011-11-11 | 13:37:00 | 4242 |
| 2        | 2012-12-12 | 04:04:00 | 4987 |
| 3        | 2016-01-01 | 11:19:00 | 4242 |
| 4        | 2011-11-11 | 13:37:00 | 4987 |

and **settings**

| user_id | timeshift | hours |
| ------- | --------- | ----- |
| 1       | 30        | 24    |
| 4242    | 0         | 24    |
| 4987    | 60        | 12    |


the output should be

| event_id | formatted_date      |
| -------- | ------------------- |
| 1        | 2011-11-11 13:37    |
| 2        | 2012-12-12 05:04 AM |
| 3        | 2016-01-01 11:19    |
| 4        | 2011-11-11 02:37 PM |


* **[execution time limit] 10 seconds (mysql)**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight sql linenos=table %}

{% include_relative solution.sql %}

{% endhighlight %}

</div>
</div>
