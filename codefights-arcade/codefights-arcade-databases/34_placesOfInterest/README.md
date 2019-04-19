---
layout: home
title: Places Of Interest
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
You are trying to decide where you want to go on your vacation, so your travel agency has provided you with a database of possible destinations.

This database contains the table **countryActivities**, which has the following structure:

* **id**: the unique id of the record;
* **country**: the country name;
* **region**: the region of this country;
* **leisure_activity_type**: the type of activity provided in the region. This can only be equal to one of the following values: <code>Adventure park, Golf, Kart racing, River cruise</code>;
* **number_of_places**: the number of resorts in the region at which you can do this activity.


You want to see how many resorts in each country provide the activities you are interested in before you decide where to go on your vacation, but it's hard to do this using only the table provided by your travel agency. To make things easier, you have decided to create a new table with a better structure.

Given the **countryActivities** table, compose the resulting table with five columns: <code>country</code>, <code>adventure_park</code>, <code>golf</code>, <code>river_cruise</code> and <code>kart_racing</code>. The first column should contain the country name, while the second, third, fourth, and fifth columns should contain the number of resorts in the country that offer <code>Adventure park</code>, <code>Golf</code>, <code>River cruise</code>, and <code>Kart racing</code>, respectively. The table should be sorted by the country names in *ascending* order.

**Example**

For the following table **countryActivities**

| id  | country | region        | leisure_activity_type | number_of_places |
| --- | ------- | ------------- | --------------------- | ---------------- |
| 1   | France  | Normandy      | River cruise          | 2                |
| 2   | Germany | Bavaria       | Golf                  | 5                |
| 3   | Germany | Berlin        | Adventure park        | 2                |
| 4   | France  | Ile-de-France | River cruise          | 1                |
| 5   | Sweden  | Stockholm     | River cruise          | 3                |
| 6   | France  | Normandy      | Kart racing           | 4                |


the output should be

| country | adventure_park | golf | river_cruise | kart_racing |
| ------- | -------------- | ---- | ------------ | ----------- |
| France  | 0              | 0    | 3            | 4           |
| Germany | 2              | 5    | 0            | 0           |
| Sweden  | 0              | 0    | 3            | 0           |

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
