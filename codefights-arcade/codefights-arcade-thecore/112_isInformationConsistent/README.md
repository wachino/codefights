---
layout: home
title: Is Information Consistent
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:

- I am sure he/she is guilty.
- I am sure he/she is innocent.
- I have no idea.

The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses <code>A</code> and <code>B</code> and a defendant <code>C</code> such that <code>A</code> says <code>C</code> is guilty while <code>B</code> says <code>C</code> is innocent.

**Example**

- For

  <code type='preformat'>
  evidences = [[ 0, 1, 0, 1], 
              [-1, 1, 0, 0], 
              [-1, 0, 0, 1]]
  </code>

  the output should be

  <code type='preformat'>
  isInformationConsistent(evidences) = true
  </code>

- For

  <code type='preformat'>
  evidences = [[ 1, 0], 
              [-1, 0], 
              [ 1, 1],
              [ 1, 1]]
  </code>

  the output should be

  <code type='preformat'>
  isInformationConsistent(evidences) = false
  </code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.array.integer evidences**

  2-dimensional array of integers representing the set of testimonials. <code>evidences[i][j]</code> is the testimonial of the <code>i<sup>th</sup></code> witness on the <code>j<sup>th</sup></code> defendant. -1 means <code>"innocent"</code>, <code>0</code> means <code>"no idea"</code>, and <code>1</code> means "guilty".

  _Guaranteed constraints:_<br>
  <code>2 ≤ evidences.length ≤ 5</code>,<br>
  <code>2 ≤ evidences[0].length ≤ 10</code>,<br>
  <code>evidences[i].length = evidences[j].length</code>,<br>
  <code>-1 ≤ evidences[i][j] ≤ 1</code>.

* **[output] boolean**
  - <code>true</code> if the evidence is consistent, <code>false</code> otherwise.

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
