---
layout: home
title: Dancing Competition
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

During the dance contest, each judge evaluates the dancers' performances based on three criteria, using a score from <code>1</code> to <code>10</code> for each of the criteria. You are given a table of the <code>scores</code> awarded to a specific dancer by each judge. Recently, the dance contest made the decision to drop scores awarded by a certain judge if that judge gave an extreme (either minimum or maximum) score for at least two criteria.

For example, if the judge awarded one of the minimum scores for musicality (i.e., there may be similar scores for musicality, but there may not be smaller scores for that criterion) and one of the maximum scores for floorcraft, all three of the scores given by that judge should not be taken into account.

Return a table that consists of only the scores that should be considered after this filtering, sorted by <code>arbiter_id</code>.

The **scores** table contain the following columns:

* **arbiter_id** - the unique ID of the judge;
* **first_criterion** - the score given for the first criterion;
* **second_criterion** - the score given for the second criterion;
* **third_criterion** - the score given for the third criterion.


**Example**

For the following tables **scores**

| arbiter_id | first_criterion | second_criterion | third_criterion |
| ---------- | --------------- | ---------------- | --------------- |
| 1          | 3               | 10               | 10              |
| 2          | 2               | 3                | 4               |
| 3          | 5               | 6                | 7               |
| 4          | 2               | 5                | 9               |
| 5          | 2               | 2                | 2               |


the output should be

| arbiter_id | first_criterion | second_criterion | third_criterion |
| ---------- | --------------- | ---------------- | --------------- |
| 2          | 2               | 3                | 4               |
| 3          | 5               | 6                | 7               |
| 4          | 2               | 5                | 9               |


The first judge gave the maximal scores for the second and third criteria, so his scores aren't included in the answer. The fifth judge's given scores are all minimal, so her scores aren't included to the answer either.

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
