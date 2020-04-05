---
layout: home
title: Stolen Lunch
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a <code>note</code> with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit <code>0</code> is replaced with <code>'a'</code>, <code>1</code> is replaced with <code>'b'</code> and so on, with digit <code>9</code> replaced by <code>'j'</code>.

The <code>note</code> is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

**Example**

For <code>note = "you'll n4v4r 6u4ss 8t: cdja"</code>, the output should be
<code>stolenLunch(note) = "you'll never guess it: 2390"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string note**

  A string consisting of lowercase English letters, digits, punctuation marks and whitespace characters (<code>' '</code>).<br>

  _Guaranteed constraints:_<br>
  <code>0 ≤ note.length ≤ 500</code>.

- **[output] string**
  - The deciphered <code>note</code>.

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
