---
layout: home
title: Valid Phone Numbers
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
You recently started a new job, and you were frustrated to discover that the company you joined has a very poorly written front-end client application. It doesn't even have validation checks for data entered by users! The biggest problem is with the <code>phone_number</code> field, which your company uses to send automatic notifications to users.

Your first task as a company employee is to retrieve all the valid records from the given table of phone numbers. The record is valid if its <code>phone_number</code> is a valid American or Canadian phone number, which means that it has a format of <code>1-###-###-####</code> or <code>(1)###-###-####</code>, where <code>#</code> stands for any digit from <code>0</code> to <code>9</code>.

Information is stored in the table **phone_numbers**, which has the following fields:

* **name**: the user's first name;
* **surname**: the user's unique surname;
* **phone_number**: the user's unique phone number.

You should return a new table that contains only the valid records from the **phone_numbers** table, sorted by the users' surnames.



**Example**

For the following table **phone_numbers**

| name      | surname  | phone_number     |
| --------- | -------- | ---------------- |
| Cornelius | Walsh    | 1-234-567-8910   |
| Frank     | McKenzie | 1-2345-678-911   |
| John      | Smith    | (1)111-111-1111  |
| Lester    | Goodwin  | (1)-111-111-1111 |


the output should be

| name      | surname | phone_number    |
| --------- | ------- | --------------- |
| John      | Smith   | (1)111-111-1111 |
| Cornelius | Walsh   | 1-234-567-8910  |

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
