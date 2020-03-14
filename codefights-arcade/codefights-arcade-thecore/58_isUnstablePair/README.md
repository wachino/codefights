---
layout: home
title: Is Unstable Pair?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames _an unstable_ pair if their ordering depends on the case.

To compare two filenames <code>a</code> and <code>b</code>, find the first position <code>i</code> at which <code>a[i] ≠ b[i]<code>/. If <code>a[i] < b[i]</code>, then <code>a < b</code>. Otherwise <code>a > b</code>. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

**Example**

- For <code>filename1 = "aa"</code> and <code>filename2 = "AAB"</code>, the output should be
  <code>isUnstablePair(filename1, filename2) = true</code>.

Because <code>"AAB" < "aa"<code>, but <code>"AAB" > "AA"</code>.

- For <code>filename1 = "A"<code> and <code>filename2 = "z"</code>, the output should be
  <code>isUnstablePair(filename1, filename2) = false</code>.

Both <code>"A" < "z"</code> and <code>"a" < "z"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string filename1**

  A non-empty string of English letters and digits.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ filename1.length ≤ 10</code>.

- **[input] string filename1**

  A non-empty string of English letters and digits. It's guaranteed that there is no ambiguity, i.e. even being considered in the same case strings are never equal.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ filename2.length ≤ 10</code>.

- **[output] boolean**
  - <code>true</code> if <code>filename1</code> and <code>filename2</code> form an unstable pair, <code>false</code> otherwise.

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
