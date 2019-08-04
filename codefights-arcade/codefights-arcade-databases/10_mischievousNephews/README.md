---
layout: home
title: Mischievous Nephews
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Your nephews Huey, Dewey, and Louie are staying with you over the winter holidays. Ever since they arrived, you've hardly had a day go by without some kind of incident - the little rascals do whatever they please! Actually, you're not even mad; the ideas they come up with are pretty amazing, and it looks like there's even a system to their mischief.

You decided to track and analyze their behavior, so you created the **mischief** table in your local database. The table has the following columns:

- **mischief_date**: the date of the mischief (of the <code>date</code> type);
- **author**: the nephew who caused the mischief ("<code>Huey"</code>, <code>"Dewey"</code> or <code>"Louie"</code>);
- **title**: the title of the mischief.

It looks like each of your nephews is active on a specific day of the week. You decide to check your theory by creating another table as follows:

The resulting table should contain four columns, <code>weekday</code>, <code>mischief_date</code>, <code>author</code>, and <code>title</code>, where <code>weekday</code> is the weekday of <code>mischief_date</code> (<code>0</code> for Monday, <code>1</code> for Tuesday, and so on, with <code>6</code> for Sunday). The table should be sorted by the <code>weekday</code> column, and for each <code>weekday</code> Huey's mischief should go first, Dewey's should go next, and Louie's should go last. In case of a tie, <code>mischief_date</code> should be a tie-breaker. If there's still a tie, the record with the l*exicographically smallest* <code>title</code> should go first.

_Note: String A is lexicographically smaller than string B either if A is a prefix of B (and A ≠ B), or if there exists such index i (0 ≤ i < min(A.length, B.length)), that Ai < Bi, and for any j (0 ≤ j < i) Aj = Bj. The lexicographic comparison of strings is implemented by operator < in modern programming languages._

It is guaranteed that all entries of **mischief** are unique.

**Example**

For the following table **mischief**

| mischief_date | author | title                            |
| ------------- | ------ | -------------------------------- |
| 2016-12-01    | Dewey  | Cook the golden fish in a bucket |
| 2016-12-01    | Dewey  | Paint the walls pink             |
| 2016-12-01    | Huey   | Eat all the candies              |
| 2016-12-01    | Louie  | Wrap the cat in toilet paper     |
| 2016-12-08    | Louie  | Play hockey on linoleum          |
| 2017-01-01    | Huey   | Smash a window                   |
| 2017-02-06    | Dewey  | Create a rink on the porch       |

the output should be

| weekday | mischief_date | author | title                            |
| ------- | ------------- | ------ | -------------------------------- |
| 0       | 2017-02-06    | Dewey  | Create a rink on the porch       |
| 3       | 2016-12-01    | Huey   | Eat all the candies              |
| 3       | 2016-12-01    | Dewey  | Cook the golden fish in a bucket |
| 3       | 2016-12-01    | Dewey  | Paint the walls pink             |
| 3       | 2016-12-01    | Louie  | Wrap the cat in toilet paper     |
| 3       | 2016-12-08    | Louie  | Play hockey on linoleum          |
| 6       | 2017-01-01    | Huey   | Smash a window                   |

The first and the eighth of December are Thursdays, the sixth of February is a Monday, and the first of January is a Sunday.

The dates in the example are given in the format <code>YYYY-MM-DD</code>.

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
