---
layout: home
title: Make Array Consecutive 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Ratiorg got <code>statues</code> of _different_ sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by <code>1</code>. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

**Example**

For <code>statues = [6, 2, 3, 8]</code>, the output should be
<code>makeArrayConsecutive2(statues) = 3</code>.

Ratiorg needs statues of sizes <code>4</code>, <code>5</code> and <code>7</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer statues**

   An array of _distinct_ non-negative integers.<br>

  _Guaranteed constraints:_<br>
   <code>1 ≤ statues.length ≤ 10</code>,<br>
   <code>0 ≤ statues[i] ≤ 20</code>.

- **[output] integer**

   - The minimal number of statues that need to be added to existing <code>statues</code> such that it contains every integer size from an interval <code>[L, R]</code> (for some <code>L, R</code>) and no other sizes.

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
