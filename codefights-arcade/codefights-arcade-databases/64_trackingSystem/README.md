---
layout: home
title: Tracking System
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your web application tracks the activities of its users using a tracking system. While a user hasn't logged in or signed up, all the user's actions are tracked using <code>anonymous_id</code> and the <code>user_id</code> is <code>null</code>, and afterwards they are tracked using the same <code>anonymous_id</code> and <code>user_id</code>. It is known that after a user logs in or signs up, the <code>user_id</code> is no longer <code>null</code>.

You are given the table **tracks**, which contains the following columns:

- **received_at** - the unique timestamp of action;
- **event_name** - the name of the action that was performed at this time;
- **anonymous_id** - the anonymous ID of user;
- **user_id** - the user ID, which can be <code>null</code>.

Your task is to find two events for each <code>anonymous_id</code>, which will be the column <code>anonym_id</code> in the returned table. Find the last event where the user was tracked only by <code>anonymous_id</code> (column <code>last_null</code>) and the first event that was tracked by <code>user_id</code> (column <code>first_notnull</code>). The resulting table should be sorted by <code>anonym_id</code>.

**Note**: It is not guaranteed that a user ever logs in or signs up. In this case, the column <code>first_notnull</code> should have a value of <code>null</code>. However, it is guaranteed that for each <code>anonymous_id</code>, there is at least one event where <code>user_id</code> equals <code>null</code>.

**Example**

For the following tables **tracks**

| received_at         | event_name     | anonymous_id | user_id |
| ------------------- | -------------- | ------------ | ------- |
| 2016-01-01 12:13:12 | buttonClicked  | 1            | NULL    |
| 2016-01-02 12:14:15 | pageReloaded   | 3            | NULL    |
| 2016-02-02 13:15:13 | pageRendered   | 2            | NULL    |
| 2016-02-03 13:15:23 | commentWritten | 3            | NULL    |
| 2016-03-03 14:15:15 | avatarUpdated  | 2            | 2       |
| 2016-03-04 14:15:24 | statusUpdated  | 1            | 1       |

the output should be

| anonym_id | last_null      | first_notnull |
| --------- | -------------- | ------------- |
| 1         | buttonClicked  | statusUpdated |
| 2         | pageRendered   | avatarUpdated |
| 3         | commentWritten | NULL          |

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
