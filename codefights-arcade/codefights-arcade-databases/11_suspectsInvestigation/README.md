---
layout: home
title: Suspects Investigation
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

A large amount of money was stolen today from the main city bank, and as the chief of police it's your duty to find the robber.

You store information about your suspects in the table **Suspect**, which has the structure:

* **id**: unique suspect id;
* **name**: suspect first name;
* **surname**: suspect surname;
* **height**: suspect height;
* **weight**: suspect weight.

You have already gathered some evidence and discovered the following clues:

* according to the camera records, the robber is not taller than <code>170cm</code>;
* the robber left their signature near the crime scene: <code>"B. Gre?n"</code>. <code>"B"</code> definitely stands for the first letter of robber's name, and <code>"Gre?n"</code> is their surname. The <code type='math/tex'>4^{th}</code> letter of the surname is smudged by ketchup and is unreadable.
* 
To make the list of suspects smaller, you would like to filter out the suspects who can't possibly be guilty according to the information obtained from the clues. For each remaining suspect, you want to save his/her <code>id</code>, <code>name</code> and <code>surname</code>. Please note that the information obtained from the clue should be considered case-insensitive, so for example <code>"bill Green"</code>, and <code>"Bill green"</code>, and <code>"Bill Green"</code> should all be included in the new table.

Given the table **Suspect**, build the resulting table as follows: the table should have columns <code>id</code>, <code>name</code> and <code>surname</code> and its values should be ordered by the suspects' <code>id</code>s in ascending order.

**Example**

For the following table **Suspect**

| id | name | surname | height | weight |
| ---- | ---- | ---- | ---- | ---- |
| 1 | John | Doe | 165 | 60 |
| 2 | Bill | Green | 170 | 67 |
| 3 | Baelfire | Grehn | 172 | 70 |
| 4 | Bill | Gretan | 165 | 55 |
| 5 | Brendon | Grewn | 150 | 50 |
| 6 | bill | Green | 169 | 50 |

the output should be

| id | name | surname |
| ---- | ---- | ---- |
| 2 | Bill | Green |
| 5 | Brendon | Grewn |
| 6 | bill | Green |

The name of the <code type='math/tex'>1^{st}</code> suspect doesn't start with <code>"B"</code>, the <code type='math/tex'>3^{rd}</code> suspect is taller than <code>170cm</code>, and the surname of the <code type='math/tex'>4^{th}</code> suspect doesn't match the given pattern, meaning that these suspects are not included in the results.

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
