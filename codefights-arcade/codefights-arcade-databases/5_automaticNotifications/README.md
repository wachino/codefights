---
layout: home
title: Automatic Notifications
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

The application you've been working on for the past year is a huge success! It already has a large and active user community. You know the ID number, username, and email of each user. Each user also has a specific role that shows their position in the community. Information about the users is stored in the database as a table **users**, which has the following structure:

- **id**: the unique user ID;
- **username**: the username of the user;
- **role**: the user's role;
- **email**: the user's email.

You want to send users automatic notifications to let them know about the most recent updates. However, not all users should get these notifications: Administrators don't need notifications since they know about the updates already, and premium users don't need them since they get personalized weekly updates.

Given the **users** table, your task is to return the emails of all the users who should get notifications, i.e. those whose <code>role</code> is not equal to <code>"admin"</code> or <code>"premium"</code>. Note that <code>roles</code> are case insensitive, so users with roles of <code>"Admin"</code>, <code>"pReMiUm"</code>, etc. should also be excluded.

The resulting table should contain a single <code>email</code> column and be sorted by <code>email</code>s in ascending order.

**Example**

For the following table **users**

| id  | username     | role    | email                   |
| --- | ------------ | ------- | ----------------------- |
| 6   | fasalytch    | premium | much.premium@role.com   |
| 13  | luckygirl    | regular | fun@meh.com             |
| 16  | todayhumor   | guru    | today@humor.com         |
| 23  | Felix        | admin   | felix@codefights.com    |
| 52  | admin666     | AdmiN   | iamtheadmin@admin.admin |
| 87  | solver100500 | regular | email@notbot.com        |

the resulting table should be

| email            |
| ---------------- |
| email@notbot.com |
| fun@meh.com      |
| today@humor.com  |

The only three users who should get notifications are <code>luckygirl</code>, <code>todayhumor</code>, and <code>solver100500</code>. Their emails are <code>fun@meh.com</code>, <code>today@humor.com</code>, and <code>email@notbot.com</code> respectively, which should be sorted as <code>email@notbot.com</code>, <code>fun@meh.com</code>, and <code>today@humor.com</code>.

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
