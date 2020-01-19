---
layout: home
title: Bugs In Component
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You recently started working at a promising new startup. Now that you're at the end of the first week, you're surprised the product is still working at all: there are bugs in almost every one of its components!

Information about all bugs is stored in a table **Bug**, and information about components is stored in a **Component** table. Since some bugs may be present in several components and vice versa, the additional **BugComponent** table contains rows representing connections between bugs and components. In the database the tables are stored as follows:

* **Bug**:
  * num: unique bug number
  * title: bug title
* **Component**:
  * id: unique component id
  * title: component title
* **BugComponent**:
  * bug_num: foreign key referencing <code>Bug.num</code>
  * component_id: foreign key referencing <code>Component.id</code>

There are so many bugs that you don't know what to begin with. To help yourself decide, you want to find all bugs that affect more than one component, and find these components' names. Since it's difficult to test too buggy components, you also want to know how many bugs each such component has. The resulting table should thus contain the following columns:

* **bug_title**: bug title
* **component_title**: title of the component to which this bug belongs
* **bugs_in_component**: total number of bugs in this component

The results should be sorted by the number of bugs in the component in the descending order. In case of a tie, the component with the smallest <code>id</code> should go first. In case it's not enough to break a tie, <code>bug_num</code> should be a tie-breaker: the <code>bug</code> with the smallest <code>num</code> should go first.

**Example**

For the following tables **Bug**

| num | title                               |
| --- | ----------------------------------- |
| 1   | Quotes don't work                   |
| 2   | Highlighting looks weird            |
| 3   | Posts are not automatically updated |
| 4   | Author link doesn't work            |

**Component**:

| id  | title       |
| --- | ----------- |
| 1   | Forum       |
| 2   | Code editor |

and **BugComponent**:

| bug_num | component_id |
| ------- | ------------ |
| 1       | 1            |
| 2       | 1            |
| 2       | 2            |
| 3       | 1            |
| 4       | 2            |
| 4       | 1            |

the resulting table should be

| bug_title                | component_title | bugs_in_component |
| ------------------------ | --------------- | ----------------- |
| Highlighting looks weird | Forum           | 4                 |
| Author link doesn't work | Forum           | 4                 |
| Highlighting looks weird | Code editor     | 2                 |
| Author link doesn't work | Code editor     | 2                 |

Bugs <code>2</code> (<code>Highlighting looks weird</code>) and <code>4</code> (<code>Author link doesn't work</code>) affect both components, so they should be included in the resulting table. The number of bugs in <code>Forum</code> is <code>4</code>, and in <code>Code editor</code> is <code>2</code>.

* **[execution time limit] 10 seconds (mysql)**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight sql linenos=table %}

{% include_relative solution.sql %}

{% endhighlight %}

</div>
</div>
