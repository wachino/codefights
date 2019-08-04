---
layout: home
title: Currency Codes
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are developing an application for working with different currencies. You've decided to represent each currency using _three_ letter codes from [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

You've parsed some data that you found on the Internet and stored it in a **currencies** table, which has the following structure:

- **code**: the unique code of the currency;
- **country**: the name of the country in which this currency is used.

Unfortunately, your parser didn't check the length of the codes and some erroneous data got into the table by mistake.

Your task is to delete all rows from the **currencies** table in which <code>code</code> is not exactly _three_ letters long.

**Example**

For the following table **currencies**

| code | country   |
| ---- | --------- |
| AD   | Andorra   |
| AUD  | Australia |
| BRL  | Brazil    |
| MXN  | Mexico    |
| RUB  | Russia    |
| RUR  | Russia    |
| SEKR | Sweden    |
| USD  | USA       |

should become

| code | country   |
| ---- | --------- |
| AUD  | Australia |
| BRL  | Brazil    |
| MXN  | Mexico    |
| RUB  | Russia    |
| RUR  | Russia    |
| USD  | USA       |

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
