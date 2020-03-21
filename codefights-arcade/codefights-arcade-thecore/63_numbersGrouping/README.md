---
layout: home
title: Numbers Grouping
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are given an array of integers that you want distribute between several groups. The first group should contain numbers from <code>1</code> to <code>10<sup>4</sup></code>, the second should contain those from <code>10<sup>4</sup> + 1</code> to <code>2 \* 10<sup>4</sup></code>, ..., the <code>100<sup>th</sup></code> one should contain numbers from <code>99 \* 10<sup>4</sup> + 1</code> to <code>10<sup>6</sup></code> and so on.

All the numbers will then be written down in groups to the text file in such a way that:

- the groups go one after another;
- each non-empty group has a header which occupies one line;
- each number in a group occupies one line.

Calculate how many lines the resulting text file will have.

**Example**

For <code>a = [20000, 239, 10001, 999999, 10000, 20566, 29999]</code>, the output should be
<code>numbersGrouping(a) = 11</code>.

The numbers can be divided into <code>4</code> groups:

- <code>239</code> and <code>10000</code> go to the <code>1<sup>st</sup></code> group (<code>1 ... 10<sup>4</sup></code>);
- <code>10001</code> and <code>20000</code> go to the second <code>2<sup>nd</sup></code> (<code>10<sup>4</sup> + 1 ... 2 \* 10<sup>4</sup></code>);
- <code>20566</code> and <code>29999</code> go to the <code>3<sup>rd</sup></code> group (2 _ 10<sup>4</sup> + 1 ... 3 _ 10<sup>4</sup>);
- groups from <code>4</code> to <code>99</code> are empty;
- <code>999999</code> goes to the <code>100<sup>th</sup></code> group (<code>99 \* 10<sup>4</sup> + 1 ... 10<sup>6</sup></code>).

Thus, there will be <code>4</code> groups (i.e. four headers) and <code>7</code> numbers, so the file will occupy <code>4 + 7 = 11</code> lines.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  _Guaranteed constraints:_<br>
  <code>1 ≤ a.length ≤ 10<sup>5</sup></code>,<br>
  <code>1 ≤ a[i] ≤ 10<sup>9</sup></code>.

- **[output] integer**
  - The number of lines needed to store the grouped numbers.

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
