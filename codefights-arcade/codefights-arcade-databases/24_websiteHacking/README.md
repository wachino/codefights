---
layout: home
title: Website Hacking
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You've been dreaming about becoming a famous hacker all your life, and now it's time to make your dreams come true! You decided to start by finding a website that has some vulnerability, and you just found a doozy. This particular website has an open database <code>users</code> that contains information about the people using it. What's more, it stores the queries performed on this table on the client side, which makes it super simple to hack them.

The **users** table contains the following columns:

- **id**: The unique user's ID;
- **login**: The unique user's login;
- **name**: The user's name;
- **type**: The user's role type (which can be <code>"user"</code>, <code>"admin"</code>, <code>"moderator"</code>, etc.).

The query you have access to gathers some information about the users who have the <code>"user"</code> <code>type</code>. You don't want to get caught, so you want to carefully update it so that the query will return the records of all existing <code>type</code>s.

Your task is to update the existing query. **Note**: You should **add** something to the query, but don't rewrite it.

**Example**

For the following table **users**

| id  | login    | name  | type  |
| --- | -------- | ----- | ----- |
| 1   | Ann92    | Ann   | user  |
| 2   | Bob88    | Bob   | user  |
| 3   | Carol412 | Carol | admin |
| 4   | Deril39  | Deril | admin |
| 5   | EvaGrin  | Eva   | user  |

the existing query returns the following table:

| id  | login   | name |
| --- | ------- | ---- |
| 1   | Ann92   | Ann  |
| 2   | Bob88   | Bob  |
| 5   | EvaGrin | Eva  |

but the updated query should return the following one:

| id  | login    | name  |
| --- | -------- | ----- |
| 1   | Ann92    | Ann   |
| 2   | Bob88    | Bob   |
| 3   | Carol412 | Carol |
| 4   | Deril39  | Deril |
| 5   | EvaGrin  | Eva   |

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
