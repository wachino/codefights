---
layout: home
title: Office Branches
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

In order to optimize your business, you've decided to merge a couple of your office branches and get rid of the outdated branch types.

The existing office branches and branch types are stored in the tables **branches** and **branch_types**, respectively. The tables have the following structures:

- **branches**:
  - <code>branch_id</code>: the branch ID;
  - <code>name</code>: the name of the branch;
  - <code>branchtype_id</code>: the branch type ID.
- **branch_types**
  - <code>id</code>: the unique branch ID;
  - <code>name</code>: the name of the branch type.

You've decided to start small. As your first step, you want to delete the outdated branch types, all of which end with <code>-outdated</code>, from the **branch_types** table.

For now, you want to keep all the branches with the deleted branch types in the **branches** table, but to differentiate them you will set their <code>branchtype_id</code> to <code>NULL</code>. Update the database to make the required changes happen automatically when a record is deleted from **branch_types**.

**Example**

For the following tables **branches**

| branch_id | name             | branchtype_id |
| --------- | ---------------- | ------------- |
| 1         | Frankfurt branch | 2             |
| 2         | Paris branch     | 3             |
| 3         | New York branch  | 2             |
| 4         | Madrid branch    | 1             |

and branch_types

| id  | name           |
| --- | -------------- |
| 1   | Small-outdated |
| 2   | Big            |
| 3   | Medium         |

the output should be

| branch_id | name             | branchtype_id |
| --------- | ---------------- | ------------- |
| 1         | Frankfurt branch | 2             |
| 2         | Paris branch     | 3             |
| 3         | New York branch  | 2             |
| 4         | Madrid branch    | NULL          |

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
