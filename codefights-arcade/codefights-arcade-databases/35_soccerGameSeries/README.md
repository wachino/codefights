---
layout: home
title: Soccer Game Series
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
You have a table **scores** that contains information about a series of soccer games. Your goal is to determine the winner of the series. A team is declared the winner if it won more games than the other team. If both teams had the same number of wins, then the winner is determined by the better goal difference (the difference between the goals that a team scores and the goals that the opposing team scores on them over all the games). If the goal differences are equal, the winner is the team that scored more goals during away games (i.e. games when it was not the host team). The result is the index of the winning team. If the above criteria are not sufficient for determining the winner, return <code>0</code>.

The **scores** table contains the following columns:

* **match_id** - the unique ID of the match;
* **first_team_score** - the score of the <code type='math/tex'>1^{st}</code> team in the current match;
* **second_team_score** - the score of the <code type='math/tex'>2^{nd}</code> team in the current match;
* **match_host** - the team that is the host of the match (can be <code>1</code> or <code>2</code>).


Your task is to return a new table with a single column <code>winner</code>, which can contain <code>1</code>, <code>2</code>, or <code>0</code>.

**Example**

For the following table **scores**

| match_id | first_team_score | second_team_score | match_host |
| -------- | ---------------- | ----------------- | ---------- |
| 1        | 3                | 2                 | 1          |
| 2        | 2                | 1                 | 2          |
| 3        | 1                | 2                 | 1          |
| 4        | 2                | 1                 | 2          |



the output should be

| winner |
| ------ |
|    1   |

The first team won <code>3</code> games out of <code>4</code>, so it's the winner of the series.

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
