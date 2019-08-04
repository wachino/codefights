---
layout: home
title: Contest Leaderboard
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are working as a recruiter at a big IT company, and you're actively looking for candidates who take the top places in major programming contests. Since the grand finale of the annual City Competition, you've been reaching out to the top participants from the leaderboard, and successfully so.

You have already interviewed all the prize winners (the top <code>3</code> participants), but that's not enough right now. Your company needs more specialists, so now you would like to connect with the participants who took the next <code>5</code> places.

The contest leaderboard is stored in a table **leaderboard** with the following columns:

- **id**: unique id of the participant;
- **name**: the name of the participant;
- **score**: the score the participant achieved in the competition.

The resulting table should contain the names of the participants who took the <code type='math/tex'>4^{th}</code> to <code type='math/tex'>8^{th}</code> places inclusive, sorted in descending order of their places. If there are fewer than <code>8</code> participants, the results should contain those who ranked lower than <code type='math/tex'>3^{rd}</code> place.

_It is guaranteed that there are at least 3 prize winners in the leaderboard and that all participants have different scores._

**Example**

For the following table **leaderboard**

| id  | name          | score |
| --- | ------------- | ----- |
| 1   | gongy         | 3001  |
| 2   | urandom       | 2401  |
| 3   | eduardische   | 2477  |
| 4   | Gassa         | 2999  |
| 5   | bcc32         | 2658  |
| 6   | Alex_2oo8     | 6000  |
| 7   | mirosuaf      | 2479  |
| 8   | Sparik        | 2399  |
| 9   | thomas_holmes | 2478  |
| 10  | cthaeghya     | 2400  |

the output should be

| name          |
| ------------- |
| bcc32         |
| mirosuaf      |
| thomas_holmes |
| eduardische   |
| urandom       |

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
