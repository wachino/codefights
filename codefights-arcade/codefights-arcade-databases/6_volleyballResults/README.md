---
layout: home
title: Volleyball Results
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are creating a website that will help you and your friends keep track of the results of volleyball teams from all around the world. Your website regularly crawls the web searching for new games, and adds the results of these games to the **results** table stored in your local database. After each update, the table should be sorted in ascending order by the total number of games won. This year's results are quite marvelous - at any given moment there are no two teams that have won the same number of games!

The **results** table contains the following columns:

- **name**: the unique name of the team;
- **country**: the country of the team;
- **scored**: the number of scored goals;
- **missed**: the number of missed goals;
- **wins**: the total number of games the team has won.

Your task is to sort the given **results** table in ascending order by the number of <code>wins</code>.

**Example**

For given table **results**

| name             | country   | scored | missed | wins |
| ---------------- | --------- | ------ | ------ | ---- |
| FC Tokyo         | Japan     | 26     | 28     | 1    |
| Fujian           | China     | 24     | 26     | 0    |
| Jesus Maria      | Argentina | 25     | 23     | 3    |
| University Blues | Australia | 16     | 25     | 2    |

the output should be

| name             | country   | scored | missed | wins |
| ---------------- | --------- | ------ | ------ | ---- |
| Fujian           | China     | 24     | 26     | 0    |
| FC Tokyo         | Japan 26  | 28     | 1      |
| University Blues | Australia | 16     | 25     | 2    |
| Jesus Maria      | Argentina | 25     | 23     | 3    |

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
