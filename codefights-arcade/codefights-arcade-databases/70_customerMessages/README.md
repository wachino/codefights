---
layout: home
title: Customer Messages
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You recently added feedback functionality to the small web service you own. You were able to handle everything manually at first, but the amount of messages you receive now is overwhelming. As such, you've decided to start generating generic responses automatically.

All customer names are stored in the table **customers** with the following structure:

- **id**: unique customer id;
- **name**: the name of the customer in the format described below.

The customer's <code>name</code> is stored in the following format: <code>\<first name\> \<last name\></code> (two words separated by single space), where first and last names can contain both uppercase and lowercase English letters.

Your task is to write a function that, given the customer's <code>name</code>, will return the following message:

<code>
Dear <Firstname> <Lastname>! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team.
</code>

Here, <code>\<Firstname\></code> and <code>\<Lastname\></code> are the first and the last names of the customer, with the first letter in uppercase and with all other letters in lowercase.

**Example**

For the following tables **customers**

| id  | name        |
| --- | ----------- |
| 1   | JOHN GaLT   |
| 2   | SANDY COHEN |

the output should be

| id  | name        | response                                                                                                                                      |
| --- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | JOHN GaLT   | Dear John Galt! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team.   |
| 2   | SANDY COHEN | Dear Sandy Cohen! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team. |

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
