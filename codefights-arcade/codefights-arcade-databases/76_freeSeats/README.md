---
layout: home
title: Free Seats
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You're working on the tech support team of an airline company, and your boss has asked you to implement a feature that shows the number of available seats on every flight.

Information about the airline is stored in three tables - **flights**, **planes**, and **purchases**, respectively. The tables are structured as follows:

* **flights**:
  * flight_id: the unique flight id;
  * plane_id: the id of the plane making the flight.
* **planes**:
  * plane_id: the unique plane id;
  * number_of_seats: the number of seats on the plane.
* **purchases**:
  * flight_id: the flight id of the purchase;
  * seat_no: the seat number of the purchase.

It is guaranteed that in the **purchases** table, the pairs <code>(flight_id, seat_no)</code> are unique.

With the information provided in the database, you need to calculate the number of seats that are not yet purchased for each <code>flight_id</code>.

Given tables **flights**, **planes**, and **purchases**, build a table as follows: The resulting table should have columns <code>flight_id</code> and <code>free_seats</code>, where for each <code>flight_id</code>, <code>free_seats</code> is the number of seats that have not been purchased yet. The rows of the table should be ordered by <code>flight_id</code> in ascending order. It is guaranteed that the information in table **purchases** is consistent and there are no purchases for non-existing <code>flight_id</code>s or <code>seat_no</code>s.

**Example**

For the following tables **flights**

| flight_id | plane_id |
| --------- | -------- |
| 111       | 128      |
| 87        | 157      |
| 100       | 23       |
| 121       | 23       |

**planes**

| plane_id | number_of_seats |
| -------- | --------------- |
| 128      | 5               |
| 23       | 7               |
| 157      | 4               |
| 239      | 2               |

and **purchases**

| flight_id | seat_no |
| --------- | ------- |
| 111       | 1       |
| 87        | 1       |
| 87        | 7       |
| 100       | 5       |

the output should be

| flight_id | free_seats |
| --------- | ---------- |
| 87        | 2          |
| 100       | 6          |
| 111       | 4          |
| 121       | 7          |

* Flight number <code>87</code> has <code>4</code> seats, and <code>2</code> of them have been purchased;
* Flight number <code>100</code> has <code>7</code> seats, and one of them has been purchased;
* Flight number <code>111</code> has <code>5</code> seats, and one of them has been purchased;
* Flight number <code>121</code> has <code>7</code> seats, and none of them have been purchased.

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
