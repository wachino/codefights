---
layout: home
title: Countries Info
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Your friend wants to become a professional tour guide and travel all around the world. In pursuit of this dream, she enrolled in tour guide school. The professors in this school turned out to be very demanding, and one of them gave your friend a difficult assignment that she has to finish over the weekend.

Here's the task: Given a list of countries, your friend should calculate the average population and total population of all the countries in the list. To help her, you have decided to write a function that will calculate the required values for any number of countries. The **countries** table in which the countries are stored has the following structure:

* **name**: the name of the country;
* **continent**: the continent on which the country is situated;
* **population**: the population of the country.

Your task is to return a new table that contains the number of countries in the given list, along with their average and total population, in columns titled <code>number</code>, <code>average</code> and <code>total</code>.

**Example**

For the following table **countries**

| name | continent | population |
| ---- | ---- | ---- |
| Grenada | North America | 103328 |
| Monaco | Europe | 38400 |
| San Marino | Europe | 33005 |
| Vanuatu | Australia | 277500 |

the output should be

| number | average | total |
| ---- | ---- | ---- |
| 4 | 113058.2500 | 452233 |


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
