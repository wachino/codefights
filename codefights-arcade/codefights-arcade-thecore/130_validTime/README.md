---
layout: home
title: Valid Time
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Check if the given string is a correct time representation of the 24-hour clock.

**Example**

- For <code>time = "13:58"</code>, the output should be
  <code>validTime(time) = true</code>;
- For <code>time = "25:51"</code>, the output should be
  <code>validTime(time) = false</code>;
- For <code>time = "02:76"</code>, the output should be
  <code>validTime(time) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string time**

  A string representing time in <code>HH:MM</code> format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

* **[output] boolean**
  - <code>true</code> if the given representation is correct, <code>false</code> otherwise.

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
