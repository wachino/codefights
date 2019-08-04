---
layout: home
title: Test Check
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your professor gave the class a bonus task: Write a program that will check the answers for the latest test. The program will be given a table **answers** with the following columns:

- **id**: the unique ID of the question;
- **correct_answer**: the correct answer to the question, given as a string;
- **given_answer**: the answer given to the question, which can be NULL.

Your task is to return the table with a column <code>id</code> and a column <code>checks</code>, where for each **answers** <code>id</code> the following string should be returned:

- <code>"no answer"</code> if the <code>given_answer</code> is empty;
- <code>"correct"</code> if the <code>given_answer</code> is the same as the <code>correct_answer</code>;
- <code>"incorrect"</code> if the <code>given_answer</code> is not empty and is incorrect.

Order the records in the answer table by <code>id</code>.

**Example**

For given table **answers**

| id  | correct_answer | given_answer |
| --- | -------------- | ------------ |
| 1   | a              | a            |
| 2   | b              | NULL         |
| 3   | c              | b            |

the output should be

| id  | checks    |
| --- | --------- |
| 1   | correct   |
| 2   | no answer |
| 3   | incorrect |

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
