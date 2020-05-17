---
layout: home
title: Video Part
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

**Example**

For <code>part = "02:20:00"</code> and <code>total = "07:00:00"</code>, the output should be
<code>videoPart(part, total) = [1, 3]</code>.

You have watched <code>1 / 3</code> of the whole video.

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] string part**

  A string of the following format <code>"hh:mm:ss"</code> representing the time you have been watching the video.

- **[input] string total**

  A string of the following format <code>"hh:mm:ss"</code> representing the total video duration.

* **[output] array.integer**

  - An array of the following format <code>[a, b]</code> (where <code>a / b</code> is a reduced fraction).

  Note (reduced fraction): We call a fraction **reduced** if its numerator and denominator are relatively prime.

  Note (relatively prime): Two integers are said to be **relatively prime** (or coprime) if the only positive integer that evenly divides both of them is 1.

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
