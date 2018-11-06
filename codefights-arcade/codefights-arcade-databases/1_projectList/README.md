---
layout: home
title: Project List
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Your boss wants to identify the successful projects running in your company, so he asked you to prepare a list of all the currently active projects and their average monthly income.

You have stored the information about these projects in a simple database with a single **Projects** table that has five columns:

* **internal_id**: the company's internal identifier for the project;
* **project_name**: the official name of the project;
* **team_size**: the number of employees working on the project;
* **team_lead**: the name of the project manager;
* **income**: the average monthly income of the project.
* 
Your boss says that internal project ids are irrelevant to him and that he isn't interested in how big the teams are. Since that's the case, he wants you to create another table by removing the **internal_id** and **team_size** columns from the existing **Projects** table. Return it sorted by <code>internal_id</code> in ascending order.

**Example**

For the following table **Projects**

| internal_id | project_name | team_size | team_lead | income |
| ---- | ---- | ---- | ---- | ---- |
| 1384 | MapReduce | 100 | Jeffrey Dean | 0 |
| 2855 | Windows | 1000 | Bill Gates | 100500 |
| 5961 | Snapchat | 3 | Evan Spiegel | 2000 |

the resulting table should be

| project_name | team_lead | income |
| ---- | ---- | ---- |
| MapReduce | Jeffrey Dean | 0 |
| Windows | Bill Gates | 100500 |
| Snapchat | Evan Spiegel | 2000 |

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
