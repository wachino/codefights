---
layout: home
title: Christmas Tree
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks (<code>'\*'</code> symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

Here is a formal definition of how the tree should be built, but before you read it the Elf **HIGHLY** recommends first looking at the examples that follow:

- Each tree has a crown as follows:
  <code> \* \*
  ***
  </code>
- Define a _line_ as a horizontal group of asterisks and a _level_ as a collection of <code>levelHeight</code> lines stacked one on top of the other.

- Below the _crown_ there are <code>levelNum</code> _levels_.

- The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.

- Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);

- The number of asterisks in the first line of each _level_ is chosen as follows:

  - the first line of the first level has <code>5</code> asterisks;
  - the first line of each consecutive level contains two more asterisks than the first line of the previous level.

- And finally there is the tree foot which has a height of <code>levelNum</code> and a width of:

  - <code>levelHeight</code> asterisks if <code>levelHeight</code> is odd;
  - <code>levelHeight + 1</code> asterisks if <code>levelHeight</code> is even.

Given <code>levelNum</code> and <code>levelHeight</code>, return the Christmas tree of the young elf.

**Example**

- For <code>levelNum = 1</code> and <code>levelHeight = 3</code>, the output should be

  <code type='preformat'>
  christmasTree(levelNum, levelHeight) =
      ["   *",
      "    *",
      "   ***",
      "  *****",
      " *******",
      "*********",
      "   ***"]
  </code>

  , which represents the following tree:

  <code type='preformat'>
              ___
       *        |
       *        |-- the crown      
      ***    ___|       
     *****      |
    *******     |-- level 1
   ********* ___|
      ***    ___|-- the foot
  </code>

- For <code>levelNum = 2</code> and <code>levelHeight = 4</code>, the output should be

  <code type='preformat'>
  christmasTree(levelNum, levelHeight) = 
      ["      *", 
       "      *", 
       "     ***", 
       "    *****", 
       "   *******", 
       "  *********", 
       " ***********", 
       "   *******", 
       "  *********", 
       " ***********", 
       "*************", 
       "    *****", 
       "    *****"]
  </code>

  , which represents the following tree:

  <code type='preformat'>
                  ___ 
          *          |
          *          | -- the crown
        ***      ___|
        *****        |
      *******       | -- level 1
      *********      |
    ***********  ___|
      *******       |
      *********      | -- level 2
    ***********     |
    ************* ___|
        *****        | -- the foot
        *****     ___|
  </code>

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer levelNum**

  A positive integer, the number of _levels_.

  _Guaranteed constraints:_<br>
  <code>1 ≤ levelNum ≤ 25</code>.

- **[input] integer levelHeight**

  The number of _lines_ in each _level_.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ levelHeight ≤ 25</code>.

* **[output] array.string**
  - The Christmas tree according to the specs and inputs. Output elements should not contain trailing whitespaces, and at least one of them should start with the <code>'\*'</code> symbol.

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
