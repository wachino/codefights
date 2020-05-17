---
layout: home
title: Is Sentence Correct
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

A sentence is considered correct if:

- it starts with a capital letter;
- it ends with a full stop, question mark or exclamation point (<code>'.'</code>, <code>'?'</code> or <code>'!'</code>);
- full stops, question marks and exclamation points don't appear anywhere else in the sentence.

Given a <code>sentence</code>, return <code>true</code> if it is correct and <code>false</code> otherwise.

**Example**

- For <code>sentence = "This is an example of _correct_ sentence."</code>,
  the output should be
  <code>isSentenceCorrect(sentence) = true</code>;

- For <code>sentence = "!this sentence is TOTALLY incorrecT"</code>,
  the output should be
  <code>isSentenceCorrect(sentence) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string sentence**

  A string without newline characters.

  _Guaranteed constraints:_<br>
  <code>2 ≤ sentence.length ≤ 100</code>.

* **[output] boolean**

  - <code>true</code> if the given sentence is correct, <code>false</code> otherwise.

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
