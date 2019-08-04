---
layout: home
title: Date Formating
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your company's accounting department hasn't been doing great work lately, and they've been very sloppy when entering information into their database.

The information about each accounting document is stored in a **documents** table with <code>2</code> columns:

- **id**: the unique id of the document;
- **date**: the date the document was created, as a string in the format <code>YYYY-MM-DD</code> (of type <code>VARCHAR(10)</code>). Since input has been sloppy, the leading zeros of days and months have sometimes been omitted.

The omission of these leading zeros for days and months in the <code>date</code> column is making operations on the database prone to errors. To minimize the number of errors without changing the table structure, you need to translate all the dates to ISO format <code>YYYY-MM-DD</code>.

Given the **documents** table, return a table with one column <code>date_iso</code> that contains all the dates from **documents** sorted by the ids of the corresponding documents.

**Example**

For the following table **documents**

| id  | date_str   |
| --- | ---------- |
| 1   | 2000-1-1   |
| 2   | 2014-8-21  |
| 3   | 2002-03-07 |
| 4   | 2008-10-5  |
| 5   | 2016-12-17 |

the output should be

| date_iso   |
| ---------- |
| 2000-01-01 |
| 2014-08-21 |
| 2002-03-07 |
| 2008-10-05 |
| 2016-12-17 |

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
