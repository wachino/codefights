---
layout: home
title: Order Prices
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You're writing queries for the database of an online store.

You were given access to the **orders** and **item_prices** tables, which have the following structures:

- **orders**:
  - id: the unique order ID;
  - buyer: the buyer's name;
  - items: the ID of the items included in the order, separated by a semicolon <code>;</code>. Contains at least one ID.
- **item_prices**:
  - id: the unique item ID;
  - price: the price of the item.

Given the **orders** and **item_prices** tables, write a function that will calculate each order's total price, given the purchased <code>items</code> as a string of item IDs separated by semicolons.

**Example**

For the following tables **orders**

| id  | buyer          | items   |
| --- | -------------- | ------- |
| 1   | Justin Penrose | 1       |
| 2   | Bertha Neiman  | 1;2;14  |
| 3   | John Doe       | 1;14;15 |

and **item_prices**

| id  | price |
| --- | ----- |
| 1   | 100   |
| 2   | 200   |
| 3   | 500   |
| 4   | 250   |
| 14  | 50    |
| 15  | 75    |
| 16  | 100   |

the output should be

| id  | buyer          | total_price |
| --- | -------------- | ----------- |
| 1   | Justin Penrose | 100         |
| 2   | Bertha Neiman  | 350         |
| 3   | John Doe       | 225         |

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
