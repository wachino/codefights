---
layout: home
title: Ordering Emails
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You've started to receive a lot of emails every day, and you decide to sort them in order to make it quicker to navigate through them.

Information about your **emails** is stored in a table emails, which has the following structure:

- **id**: The unique email id;
- **email_title**: The title of the email;
- **size**: The size of the email's body in bytes.

You decide to sort all the emails by their body sizes in descending order, because you think that the bigger an email is the more important it is. However, you don't like having the sizes written in bytes because they are usually too large and don't make much sense. You want them to be written in kilobytes (<code type='math/tex'>1 Kb = 2^{10} bytes</code>) and megabytes (<code type='math/tex'>1 Mb = 2^{20} bytes</code>) instead, rounded down if necessary. For example, <code>21432432</code> bytes is equal to <code>20</code> megabytes and <code>460912</code> bytes, so the result should be rounded down to <code>20 Mb</code>.

Given the table **emails**, build a table as follows: The resulting table should have the columns <code>id</code>, <code>email_title</code>, and <code>short_size</code>, and should be sorted in descending order by the initial sizes of the emails. It is guaranteed that all the emails are of unique sizes, so there will not be any ties.

**Example**

For the following table **emails**

| id  | email_title            | size      |
| --- | ---------------------- | --------- |
| 1   | You won 1M dollars!    | 21432432  |
| 2   | You are fired          | 312342    |
| 3   | Black Friday is coming | 323       |
| 4   | Spam email             | 23532     |
| 5   | Your requested backup  | 234234324 |

the output should be

| id  | email_title            | short_size |
| --- | ---------------------- | ---------- |
| 5   | Your requested backup  | 223 Mb     |
| 1   | You won 1M dollars!    | 20 Mb      |
| 2   | You are fired          | 305 Kb     |
| 4   | Spam email             | 22 Kb      |
| 3   | Black Friday is coming | 0 Kb       |

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
