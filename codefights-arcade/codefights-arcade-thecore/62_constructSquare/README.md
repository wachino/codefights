---
layout: home
title: Construct Square
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a string consisting of lowercase English letters, find the largest square number which can be obtained by _reordering_ the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return <code>-1</code>.

**Example**

- For <code>s = "ab"</code>, the output should be
  <code>constructSquare(s) = 81</code>.
  The largest <code>2</code>-digit square number with different digits is <code>81</code>.
- For <code>s = "zzz"</code>, the output should be
  <code>constructSquare(s) = -1</code>.
  There are no <code>3</code>-digit square numbers with identical digits.
- For <code>s = "aba"</code>, the output should be
  <code>constructSquare(s) = 900</code>.
  It can be obtained after reordering the initial string into <code>"baa"</code> and replacing <code>"a"</code> with <code>0</code> and <code>"b"</code> with <code>9</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string s**

  _Guaranteed constraints:_<br>
  <code>1 ≤ s.length < 10</code>.

- **[output] integer**

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
