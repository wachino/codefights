---
layout: home
title: Item Counts
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You recently started working in the IT department of a large store. You were put in charge of the inventory database **availableItems**, which has the following structure:

* **id**: unique item ID;
* **item_name**: the name of the item;
* **item_type**: the type of the item.

Note that it is possible for items that are of different types to have the same names.

One of the most common operations performed on this database is querying the number of specific items available at the store. Since the database is quite large, queries of this type can take up too much time. You have decided to solve this problem by creating a new table that contains item counts for all available items.

Given the **availableItems** table, compose a results table that has the following three columns: <code>item_name</code>, <code>item_type</code> and <code>item_count</code>, containing the names of the items, their types, and the amount of those items, respectively. The table should be sorted in ascending order by item type, with items of the same type sorted in ascending order by their names.

**Example**

For the following table **availableItems**

| id | item_name | item_type |
| ---- | ---- | ---- |
| 1 | SafeDisk 4GB | USB drive |
| 2 | SafeDisk 8GB | USB drive |
| 3 | Cinco 50-Pack | DVD |
| 4 | SafeDisk 4GB | Memory card |
| 5 | SafeDisk 8GB | Memory card |
| 6 | Cinco 30-Pack | DVD |
| 7 | SafeDisk 4GB | Memory card |
| 8 | SafeDisk 4GB | Memory card |
| 9 | DiskHolder | Misc |
| 10 | Cinco 50-Pack | DVD |
| 11 | SafeDisk 4GB | USB drive |
| 12 | DiskCleaner Pro | Misc |

the output should be

| item_name | item_type | item_count |
| ---- | ---- | ---- |
| Cinco 30-Pack | DVD | 1 |
| Cinco 50-Pack | DVD | 2 |
| SafeDisk 4GB | Memory card | 3 |
| SafeDisk 8GB | Memory card | 1 |
| DiskCleaner Pro | Misc | 1 |
| DiskHolder | Misc | 1 |
| SafeDisk 4GB | USB drive | 2 |
| SafeDisk 8GB | USB drive | 1 |


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
