---
layout: home
title: Alphanumeric Less
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

An _alphanumeric_ ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string <code>"ab01c004"</code> are <code>[a, b, 01, c, 004]</code>. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

- If a letter is compared with another letter, the usual alphabetical order applies.
- A number is always considered less than a letter.
- When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.

If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered _smaller_.

If the two strings <code>s1</code> and <code>s2</code> appear to be equal, consider the smallest index <code>i</code> such that <code>tokens(s1)[i]</code> and <code>tokens(s2)[i]</code> (where <code>tokens(s)[i]</code> is the <code>i<sup>th</sup></code> token of string <code>s</code>) differ only by the number of leading zeros. If no such <code>i</code> exists, the strings are indeed equal. Otherwise, the string whose <code>ith</code> token has more leading zeros is considered smaller.

Here are some examples of comparing strings using alphanumeric ordering.

<code>
"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
</code>

Your task is to return <code>true</code> if <code>s1</code> is strictly less than <code>s2</code>, and <code>false</code> otherwise.

**Example**

- For <code>s1 = "a"</code> and <code>s2 = "a1"</code>, the output should be <code>alphanumericLess(s1, s2) = true</code>;

  These strings have equal first tokens, but since <code>s1</code> has fewer tokens than <code>s2</code>, it's considered smaller.

- For <code>s1 = "ab"</code> and <code>s2 = "a1"</code>, the output should be <code>alphanumericLess(s1, s2) = false</code>;

  These strings also have equal first tokens, but since numbers are considered less than letters, <code>s1</code> is larger.

- For <code>s1 = "b"</code> and <code>s2 = "a1"</code>, the output should be <code>alphanumericLess(s1, s2) = false</code>.

  Since <code>b</code> is greater than <code>a</code>, <code>s1</code> is larger.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string s1**

  A string consisting of English letters and digits.

  _Guaranteed constraints:_<br>
  <code>1 ≤ s1.length ≤ 20</code>.

- **[input] string s2**

  A string consisting of English letters and digits.

  _Guaranteed constraints:_<br>
  <code>1 ≤ s2.length ≤ 20</code>.

- **[output] boolean**
  - <code>true</code> if <code>s1</code> is alphanumerically strictly less than <code>s2</code>, false otherwise.

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
