---
layout: home
title: User Countries
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are really interested in statistics, and your new project is to gather some information about the users of a big social network. More specifically, you want to know which countries these users are from. Using the social network's API, you managed to collect enough data to compose two tables **users** and **cities**, which have the following structures:

* **users**:
    * **id**: the unique user ID;
    * **city**: the name of the city where this user lives;
* **cities**:
    * **city**: a unique city name;
    * **country**: the name of the country where this city is located.

Given the tables **users** and **cities**, build the resulting table so that it consists of the columns <code>id</code> and <code>country</code>. The table should consist of user <code>id</code>s, and for each user the country where they live should be given in the <code>country</code> column. If a user's city is missing from the **cities** table, the <code>country</code> column should contain <code>"unknown"</code> instead.

Return the table sorted by users' <code>id</code>s.


**Example**

For the following table **users**

| id  | city             |
| --- | ---------------- |
| 1   | San Francisco    |
| 2   | Moscow           |
| 3   | London           |
| 4   | Washington       |
| 5   | New York         |
| 6   | Saint Petersburg |
| 7   | Helsinki         |

and the following table **cities**:

| city             | country |
| ---------------- | ------- |
| Moscow           | Russia  |
| Saint Petersburg | Russia  |
| San Francisco    | USA     |
| Washington       | USA     |
| New York         | USA     |
| London           | England |

the output should be

| id  | country |
| --- | ------- |
| 1   | USA     |
| 2   | Russia  |
| 3   | England |
| 4   | USA     |
| 5   | USA     |
| 6   | Russia  |
| 7   | unknown |

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
