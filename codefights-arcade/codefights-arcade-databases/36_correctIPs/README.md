---
layout: home
title: Correct IPs
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
The company you work for has a database with the [IP addresses](https://en.wikipedia.org/wiki/IP_address) of all the company's computers in it. When a new computer is purchased, an employee adds its IP address to this database. Unfortunately, you've just discovered that there is no address validation, so some of the records are incorrect.

Now your boss wants you to write a program that will find and retain only the correct records from this table. A record is correct if the IP it contains is a valid [IPv4](https://en.wikipedia.org/wiki/IPv4) address, and either the first or the second component in the host portion is a two-digit number.

The **ips** table contains the following columns:

* **id**: the unique ID of the computer;
* **ip**: the unique IP address of the computer.


Your task is to create a new table that contains only the correct records from the given **ips** table. This table should be sorted by <code>id</code>.

**Example**

For the following table **ips**

| id  | ip                  |
| --- | ------------------- |
| 4   | "1.1.1.1"           |
| 3   | "1.111.111.11"      |
| 2   | "11.11.11.11"       |
| 1   | "11.11.11.11.11.11" |
| 5   | "11.11.11.111"      |


the output should be

| id  | ip             |
| --- | -------------- |
| 2   | "11.11.11.11"  |
| 3   | "1.111.111.11" |
| 5   | "11.11.11.111" |

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
