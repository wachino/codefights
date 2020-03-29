---
layout: home
title: Switch Lights
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

<code>N</code> candles are placed in a row, some of them are initially lit. For each candle from the <code>1st</code> to the <code>Nth</code> the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

**Example**

- For <code>a = [1, 1, 1, 1, 1]</code>, the output should be
<code>switchLights(a) = [0, 1, 0, 1, 0]</code>.<br>
  Check out the image below for better understanding:<br>

  ![](./images/example.png)

- For <code>a = [0, 0]</code>, the output should be
<code>switchLights(a) = [0, 0]</code>.

  The candles are not initially lit, so their states are not altered by the algorithm.

</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ a.length ≤ 5000</code>.

- **[output] array.integer**
  - Situation after applying the algorithm - array in the same format as input with the same length.

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

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
