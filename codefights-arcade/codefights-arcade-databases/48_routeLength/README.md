---
layout: home
title: Route Length
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You've been traveling all over the world for the past year, and now it's time for you to come home. You marked each city that you visited on a map in the order that you visited them, and wrote down the cities' coordinates. For the sake of simplicity, the cities are assigned coordinates on a plane map, so they can be written as <code>(x, y)</code>.

The information about the **cities** you visited is stored in the table cities, which has the structure:

* **id**: the unique city ID;
* **x**: the x coordinate of the city;
* **y**: the y coordinate of the city.

Now that your journey is over, you're curious about the distance you covered. Given the **cities** table, your task is to calculate the total length of your route as follows: First, calculate the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between the first and second cities, then add it to the distance between the second and the third cities, and so on.

Return the table with a single <code>total</code> column containing only one row which contains the total length of your route, calculated as described above.

**Example**

For the following table **cities**

| id  | x   | y   |
| --- | --- | --- |
| 1   | 0   | 0   |
| 2   | 1   | 1   |
| 3   | 2   | 2   |
| 4   | 4   | 2   |


the output should be

|total|
| --- |
|4.828427125|

Here is how the answer was calculated:
<code>distance(0, 0, 1, 1) + distance(1, 1, 2, 2) + distance(2, 2, 4, 2) = sqrt(2) + sqrt(2) + 2 = 4.828427125.</code>

The answer should be rounded to exactly <code>9</code> digits after the decimal point.

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
