---
layout: home
title: Film Library
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have a very big personal library of movies. You also have information about these movies stored in three tables - <code>movies</code>, <code>starring_actors</code>, and <code>actor_ages</code>. These tables have the following structures:

* **movies**:
  * movie: the unique name of the movie;
  * genre: the genre of the movie.
* **starring_actors**:
  * id: the unique ID of the record;
  * movie_name: the name of the movie;
  * actor: the unique actor who stars in the movie. (You've made the decision to only add only one movie for each actor, the one in which they had the best role.)
* **actor_ages**:
  * actor: the unique name of the actor;
  * age: the actor's age.

You've noticed that an actor usually only acts in the movies from one genre. And you believe that the older an actor is, the better they perform.

Now you don't know what to watch! So you decided to create a list of actors, from oldest to youngest (if actors are the same age, sort them by name), who star in the movies in your favorite genre. (Your favorite genre is the most common one in your list of the movies, and it's guaranteed that only one such genre exists.) So now you can find the movies these actors star in, and there is a strong chance that these movies will be in your favorite genre.

**Example**

For the following tables **movies**

| movie             | genre       |
| ----------------- | ----------- |
| Don't Breathe     | crime movie |
| Drive             | crime movie |
| Enemy             | thriller    |
| Mulholland Drive  | mystery     |
| Nocturnal Animals | thriller    |
| The Neon Demon    | thriller    |

**starring_actors**:

| id  | movie_name        | actor                |
| --- | ----------------- | -------------------- |
| 1   | Drive             | Ryan Gosling         |
| 2   | Drive             | Carey Mulligan       |
| 3   | Don't Breathe     | Dylan Minnette       |
| 4   | Enemy             | Jake Gyllenhaal      |
| 5   | Enemy             | Sarah Gadon          |
| 6   | Mulholland Drive  | Naomi Watts          |
| 7   | Mulholland Drive  | Laura Harring        |
| 8   | Nocturnal Animals | Amy Adams            |
| 9   | Nocturnal Animals | Aaron Taylor-Johnson |
| 10  | Nocturnal Animals | Michael Shannon      |
| 11  | The Neon Demon    | Elle Fanning         |
| 12  | The Neon Demon    | Keanu Reeves         |

and **actor_ages**:

| actor                | age |
| -------------------- | --- |
| Aaron Taylor-Johnson | 26  |
| Amy Adams            | 42  |
| Carey Mulligan       | 31  |
| Dylan Minnette       | 19  |
| Elle Fanning         | 18  |
| Jake Gyllenhaal      | 36  |
| Keanu Reeves         | 52  |
| Laura Harring        | 52  |
| Michael Shannon      | 42  |
| Naomi Watts          | 48  |
| Ryan Gosling         | 36  |
| Sarah Gadon          | 29  |

the output should be

| actor                | age |
| -------------------- | --- |
| Keanu Reeves         | 52  |
| Amy Adams            | 42  |
| Michael Shannon      | 42  |
| Jake Gyllenhaal      | 36  |
| Sarah Gadon          | 29  |
| Aaron Taylor-Johnson | 26  |
| Elle Fanning         | 18  |

As you can see in the first table, the most common genre is "thriller" - it appears <code>3</code> times out of <code>6</code>. These <code>3</code> movies are "Enemy", "Nocturnal Animals", and "The Neon Demon". The actors starring in these movies are presented in the resulting table, sorted by ages.

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
