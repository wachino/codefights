---
layout: home
title: Personal Hobbies
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You've been looking for new friends on the Internet. You just came across a cool website that helps people all over the world become friends by suggesting perfect friend candidates based on the information in users' profiles.

The system suggested some people for you to reach out to, and you're ready to make a move. However, you don't want to exercise your communication skills in vain, which is why prior to contacting a person you want to make sure you'll have something in common to talk about. The best option is to check whether they have the same hobbies you do, which are _sports_ and _reading_.

You downloaded the list of suggested people and saved it in the **people_hobbies** table, which has the following structure:

- **name**: The unique person's name;
- **hobbies**: A list of hobbies the person has (this column is of the datatype <code>set</code>).

Given the **people_hobbies** table, your goal is to return the sorted names of people who have _sports_ and _reading_ in their list of <code>hobbies</code>.

**Example**

For the following table **people_hobbies**

| name  | hobbies                 |
| ----- | ----------------------- |
| Adam  | swimming                |
| Amy   | reading,sports,swimming |
| Carl  | filmwatching,writing    |
| Carol | reading,swimming        |
| Deril | sports                  |
| Jake  | reading,sports,swimming |
| Lola  | reading,sports,painting |
| Nina  | sports,painting         |
| Sam   | sports                  |

the output should be

| name |
| ---- |
| Amy  |
| Lola |

As you can see, only Amy and Lola have both _reading_ and _sports_ in their <code>hobbies</code> lists.

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
