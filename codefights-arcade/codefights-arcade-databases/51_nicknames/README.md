---
layout: home
title: Nicknames
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You've just opened a registration for the online game you are about to finish developing.

Everyone who wanted to reserve their nicknames for the release of the game had to submit their info using a special form on your website.

The reserved nicknames were stored in the **reservedNicknames** table with the following structure:

* **id**: the unique id of the registered user;
* **nickname**: the nickname submitted by the user with id <code>id</code>.

When you started going through these nicknames you realized that you forgot one important thing: all nicknames should contain exactly <code>8</code> characters.
You have no time to fix this issue properly right now, so you decided to just add <code>rename -</code> to the invalid <code>nicknames</code> with corresponding <code>id</code>s so it would be easier for you to deal with them latter.

Given the **reservedNicknames** table, change all rows with invalid nicknames by prepending <code>rename -</code> to both <code>nickname</code> and <code>id</code>.

**Example**

For the following table **reservedNicknames**


| id      | nickname  |
| ------- | --------- |
| id001   | alex1990  |
| id142   | killer007 |
| id15674 | prohunter |
| id4242  | acc0rdin  |
| id616   | Zoneg     |
| id9999  | butch     |

should become

| id               | nickname           |
| ---------------- | ------------------ |
| id001            | alex1990           |
| id4242           | acc0rdin           |
| rename - id142   | rename - killer007 |
| rename - id15674 | rename - prohunter |
| rename - id616   | rename - Zoneg     |
| rename - id9999  | rename - butch     |

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
