---
layout: home
title: Message From Binary Code
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive <code>8</code> bits of the code stand for the character with the corresponding [extended ASCII code](http://www.ascii-code.com/).

Assuming that your hunch is correct, decode the message.


**Example**

For <code>code = "010010000110010101101100011011000110111100100001"</code>, the output should be
<code>messageFromBinaryCode(code) = "Hello!"</code>.

The first <code>8</code> characters of the code are <code>01001000</code>, which is <code>72</code> in the binary numeral system. <code>72</code> stands for <code>H</code> in the ASCII-table, so the first letter is <code>H</code>.
Other letters can be obtained in the same manner.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string code**

A string, the encrypted message consisting of characters <code>'0'</code> and <code>'1'</code>.

*Guaranteed constraints*:  

<code>0 < code.length < 800</code>.


* **[output] string**

The decrypted message.


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
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>