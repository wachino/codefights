---
layout: home
title: Cyclic String
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Where:

- **substring**: A string that appears within another string. In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.

  Examples:

  cat is a substring of scatter
  rest is a substring of arrest
  implied is not a substring of simplified because there are other characters in between
  happy is not a substring of happiest because they contain different characters

- **cyclic string**: We call a string cyclic if it can be obtained by concatenating another string to itself many times (for example, <code>s2 = "abcabcabcabc..."</code> is cyclic since it can be obtained from <code>s1 = "abc"</code> in such a way).

**Example**

For <code>s = "cabca"</code>, the output should be
<code>cyclicString(s) = 3</code>.

<code>"cabca"</code> is a substring of a cycle string <code>"abcabcabcabc..."</code> that can be obtained by concatenating "abc" to itself. Thus, the answer is <code>3</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string s**

  _Guaranteed constraints:_<br>
  <code>3 ≤ s.length ≤ 15</code>.

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

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
