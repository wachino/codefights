---
layout: home
title: Soccer Players
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have a table **soccer_team** that contains information about the players in your favorite soccer team. This table has the following structure:

* **id**: the unique ID of the player;
* **first_name**: the first name of the player;
* **surname**: the last name of the player;
* **player_number**: the number that the player wears (the number is guaranteed to be unique).

Create a semicolon-separated list of all the players, sorted by their numbers, and put this list in a table under a column called <code>players</code>. The information about each player should have the following format: <code>first_name surname #number</code>.

**Example**

For the following table **soccer_team**

| id | first_name | surname | player_number |
| ---- | ---- | ---- | ---- |
| 1 | Alexis | Sanchez | 7 |
| 2 | Petr | Cech | 33 |
| 3 | Hector | Bellerin | 24 |
| 4 | Olivier | Giroud | 12 |
| 5 | Theo | Walcott | 14 |
| 6 | Santi | Cazorla | 19 |


the output should be

| players |
| ---- |
| Alexis Sanchez #7; Oliver Giroud #12; Theo Walcott #14; Santi Cazorla #19; Hector Bellerin #24; Petr Cech #33 |


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
