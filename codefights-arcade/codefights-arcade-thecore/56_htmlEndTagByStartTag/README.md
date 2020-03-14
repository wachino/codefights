---
layout: home
title: HTML End Tag By Start Tag
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note:

> In the HTML syntax, most elements are written with a start tag and an end tag, with the content in between. An HTML tag is composed of the name of the element, surrounded by angle brackets. An end tag also has a slash after the opening angle bracket. Start tags may incorporate any number of HTML attributes (like a class, an id etc) which are not repeated inside the end tags. Each HTML attribute is described by a string of one of the following formats: <code>name=value</code> or just <code>name</code>.

**Example**

- For <code>startTag = "<button type='button' disabled>"</code>, the output should be
  <code>htmlEndTagByStartTag(startTag) = "</button>"</code>;
- For <code>startTag = "<i>"</code>, the output should be
  <code>htmlEndTagByStartTag(startTag) = "</i>"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string startTag**

  _Guaranteed constraints:_<br>
  <code>3 ≤ startTag.length ≤ 75</code>.

- **[output] string**

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
