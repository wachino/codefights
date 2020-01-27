---
layout: home
title: Sort Book Chapters
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You found a really old computer at your local library, and it looks like there's still some data about old library books left on its hard drive.

After closer examination, you've discovered that there is a **book_chapters** table, which has the following structure:

* **chapter_name**: the name of the book's chapter;
* **chapter_number**: the unique number of the chapter written as a [Roman numeral](https://en.wikipedia.org/wiki/Roman_numerals).

Note that there could be gaps in chapter numbers. Also, every library book has fewer than <code>1000</code> chapters.

Here is the table of Roman numeral symbols and their values:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

After looking through the library, you've found what seems to be the remnants of this same book! Unfortunately its chapters are not numbered on the pages.

You decide to find the order in which you should read the books chapters by using the old computer and the information stored in the **book_chapters** table.

Given the **book_chapters** table, compose a results table that consists of a single column <code>chapter_name</code> that contains the names of the book's chapters. The table should be sorted in ascending order by the chapter's actual numbers (i.e. chapter number <code>III</code> should come before chapter number <code>V</code>).


**Example**

For the following tables **book_chapters**

| chapter_name         | chapter_number |
| -------------------- | -------------- |
| A Dead Man           | LVI            |
| Behaviour in General | I              |
| Cast Up              | XLIX           |
| Imitation            | IX             |
| Nemesis              | L              |
| Paste                | XXIII          |
| The Cub              | XXI            |
| The Oxenham Arms     | XXIV           |
| Two Bequests         | XLVII          |

the output should be

|chapter_name|
|------------|
|Behaviour in General|
|Imitation|
|The Cub|
|Paste|
|The Oxenham Arms|
|Two Bequests|
|Cast Up|
|Nemesis|
|A Dead Man|


Here are the chapter number converted to Hindu-Arabic numerals:

| chapter_name         | chapter_number |
| -------------------- | -------------- |
| A Dead Man           | 56             |
| Behaviour in General | 1              |
| Cast Up              | 49             |
| Imitation            | 9              |
| Nemesis              | 50             |
| Paste                | 23             |
| The Cub              | 21             |
| The Oxenham Arms     | 24             |
| Two Bequests         | 47             |

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
