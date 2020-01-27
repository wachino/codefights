---
layout: home
title: Tictactoe Tournament
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

The latest Tic-Tac-Toe World Championship has just concluded. It was a big success and attracted a lot of participants! Now everyone is waiting for the results. As a member of the judging committee, you've been tasked with creating a championship leaderboard.

The results of all the tic-tac-toe matches are stored in the **results** table, which has the following structure:

* **timestamp**: the date and time of the game;
* **name_naughts**: the name of the player that played with naughts (<code>O</code>);
* **name_crosses**: the name of the player that played with crosses (<code>X</code>);
* **board**: the state of the tic-tac-toe board at the end of the game, in the format described below.

The <code>board</code> is a string of <code>9</code> characters that represent the state of board's <code>9</code> cells at the end of the match. The first <code>3</code> characters represent the first (upper) row, the second <code>3</code> characters represent the second row, etc. The character is <code>O</code> if the respective board cell contained a naught, <code>X</code> if it contained a cross, or <code>.</code> if the cell was empty at the end of the game.

For example, this board

<code>
&nbsp;| |O<br>
&nbsp;|O| <br>
X|X|X
</code>

is represented by the string <code>..O.O.XXX</code>.

It is guaranteed that the opposing players have different names. It's also guaranteed that each <code>board</code> represents a valid terminal state for a tic-tac-toe game, meaning that either of the players wins or it's a draw.

Players are awarded points based on their performance: They get <code>2</code> points for each game they win, <code>1</code> point for a draw, and <code>0</code> points if they lose.

Create a leaderboard with the following format:

Given the **results** table, compose a results table that has the following six columns: <code>name</code>, <code>points</code>, <code>played</code>, <code>won</code>, <code>draw</code>, and <code>lost</code>, containing the player names, their points calculated as described above, the number of games they have played, the number of games they have won, and the number of games they have lost, respectively. The table should be sorted in descending order by the <code>points</code>, then in ascending order by the total number of <code>played</code> games, then in descending order by the number of victories, and then in ascending order by player <code>name</code>s.



**Example**

For the following tables **results**

| timestamp           | name_naughts       | name_crosses       | board     |
| ------------------- | ------------------ | ------------------ | --------- |
| 2017-05-01 08:06:00 | Georgine Greely    | Earnestine Kunzman | XO.X.OXXO |
| 2017-05-01 11:20:00 | Earnestine Kunzman | Georgine Greely    | .O.OOXXXX |
| 2017-05-01 16:48:00 | Renee Fortenberry  | Georgine Greely    | XOOXXO..X |
| 2017-05-02 10:57:00 | Renee Fortenberry  | Georgine Greely    | OXXXOOXOX |
| 2017-05-03 01:55:00 | Georgine Greely    | Renee Fortenberry  | .X.OX.OX. |
| 2017-05-03 04:29:00 | Earnestine Kunzman | Renee Fortenberry  | OOXXXOXXO |
| 2017-05-04 14:29:00 | Renee Fortenberry  | Earnestine Kunzman | OOX.X.X.. |
| 2017-05-04 16:00:00 | Earnestine Kunzman | Renee Fortenberry  | OXOOXXXOX |

the output should be

| name               | points | played | won | draw | lost |
| ------------------ | ------ | ------ | --- | ---- | ---- |
| Renee Fortenberry  | 6      | 6      | 2   | 2    | 2    |
| Earnestine Kunzman | 5      | 5      | 2   | 1    | 2    |
| Georgine Greely    | 5      | 5      | 2   | 1    | 2    |

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
