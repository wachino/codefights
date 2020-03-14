---
layout: home
title: Is Case-Insensitive Palindrome?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Given a string, check if it can become a palindrome (a palindrome is a string that reads the same left-to-right and right-to-left) through a case change of some (possibly, none) letters.

**Example**

- For <code>inputString = "AaBaa"</code>, the output should be
  <code>isCaseInsensitivePalindrome(inputString) = true</code>.

<code>"aabaa"</code> is a palindrome as well as <code>"AABAA"</code>, <code>"aaBaa"</code>, etc.

- For <code>inputString = "abac"</code>, the output should be
  <code>isCaseInsensitivePalindrome(inputString) = false</code>.

All the strings which can be obtained via changing case of some group of letters, i.e. <code>"abac"</code>, <code>"Abac"</code>, <code>"aBAc"</code> and 13 more, are not palindromes.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  Non-empty string consisting of English letters.<br>

  _Guaranteed constraints:_<br>
  <code>4 ≤ inputString.length ≤ 10</code>.

- **[output] boolean**

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
