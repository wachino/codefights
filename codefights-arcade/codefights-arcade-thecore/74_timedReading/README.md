---
layout: home
title: Timed Reading
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than <code>maxLength</code>, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the <code>text</code> he has read, no longer than <code>maxLength</code>.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

**Example**

For <code>maxLength = 4</code> and
<code>text = "The Fox asked the stork, 'How is the soup?'"</code>,<br>the output should be
<code>timedReading(maxLength, text) = 7</code>.

The boy has read the following words: <code>"The", "Fox", "the", "How", "is", "the", "soup"</code>.

</code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer maxLength**

  A positive integer, the maximum length of the word the boy can read.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ maxLength ≤ 10</code>.

- **[input] string text**

  A non-empty string of English letters and punctuation marks.<br>

  _Guaranteed constraints:_<br>
  <code>3 ≤ text.length ≤ 110</code>.

- **[output] integer**
  - The number of words the boy has read.

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
