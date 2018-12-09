---
layout: home
title: Users By Continent
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are curious about the geographical distribution of CodeFights users, so you have created a list of countries along with the number of registered users from each. Your task now is to calculate the number of users on each continent.

The information about the countries is stored in a table **countries**, which has <code>3</code> columns:

* **country**: the name of the country;
* **continent**: the name of the continent where the country is located;
* **users**: the number of users registered on CodeFights in the country.

The answer should be a table with <code>2</code> columns, <code>continent</code> and <code>users</code>, sorted by the number of users in decreasing order.

**Example**

For the following table **countries**

| country | continent | users |
| ---- | ---- | ---- |
| Armenia | Europe | 1000 |
| France | Europe | 1300 |
| Russia | Europe | 3000 |
| USA | North America | 5000 |

the output should be

| continent | users |
| ---- | ---- |
| Europe | 5300 |
| North America | 5000 |


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
