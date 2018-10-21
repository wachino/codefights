---
layout: home
title: Chess Knight
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

![](./images/image.jpg)

**Example**

* For <code>cell = "a1"</code>, the output should be
<code>chessKnight(cell) = 2</code>.
![](./images/ex_1.jpg)

* For <code>cell = "c2"</code>, the output should be
<code>chessKnight(cell) = 6</code>.

![](./images/ex_2.jpg)

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string cell**

String consisting of 2 letters - coordinates of the knight on an <code>8 × 8</code> chessboard in chess notation.

*Note*: Each square of the chessboard is identified by a unique coordinate pair—a letter and a number. The vertical columns of squares from white's left to the right are labeled <code>'a'</code> through <code>'h'</code>. The horizontal rows of squares are numbered <code>1</code> to <code>8</code> starting from white's side of the board. Thus each square has a unique identification as a string consisting of two characters: the first is the column label, and the second in the row number.

![](./images/note_1.png)


* **[output] integer**


**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>