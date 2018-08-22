---
layout: home
title: Is IPv4 Address
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the *IPv4 address*.

*IPv4 addresses* are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from <code>0</code> to <code>255</code> inclusive, separated by dots, e.g., <code>172.16.254.1</code>.

Given a string, find out if it satisfies the *IPv4 address* naming rules.


**Example**

* For <code>inputString = "172.16.254.1"</code>, the output should be
<code>isIPv4Address(inputString) = true</code>;

* For <code>inputString = "172.316.254.1"</code>, the output should be
<code>isIPv4Address(inputString) = false</code>.

<code>316</code> is not in range <code>[0, 255]</code>.

* For <code>inputString = ".254.255.0"</code>, the output should be
<code>isIPv4Address(inputString) = false</code>.

There is no first number.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

*Guaranteed constraints*:
<code>1 ≤ inputString.length ≤ 30</code>.

* **[output] boolean**

<code>true</code> if <code>inputString</code> satisfies the IPv4 address naming rules, <code>false</code> otherwise.


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