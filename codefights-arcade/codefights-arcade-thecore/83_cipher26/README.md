---
layout: home
title: Cipher 26
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

- Let all letters from <code>'a'</code> to <code>'z'</code> correspond to the numbers from <code>0</code> to <code>25</code>, respectively.
- The number corresponding to the <code>i<sup>th</sup></code> letter of the encrypted message is then equal to the sum of numbers corresponding to the first <code>i</code> letters of the initial unencrypted <code>message</code> _modulo 26_.

Now that you know how the <code>message</code> was encrypted, implement the algorithm to decipher it.

**Example**

For <code>message = "taiaiaertkixquxjnfxxdh"</code>, the output should be
<code>cipher26(message) = "thisisencryptedmessage"</code>.

The initial message <code>"thisisencryptedmessage"</code> was encrypted as follows:

- letter <code>0</code>: <code>t -> 19 -> t</code>;
- letter <code>1</code>: <code>th -> (19 + 7) % 26 -> 0 -> a</code>;
- letter <code>2</code>: <code>thi -> (19 + 7 + 8) % 26 -> 8 -> i</code>;
- etc.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string message**

  An encrypted string containing only lowercase English letters.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ message.length ≤ 200</code>.

- **[output] string**
  - A decrypted message.

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
