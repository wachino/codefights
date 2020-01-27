---
layout: home
title: Drivers Info
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Your company is an authorized Chevrolet dealer, and you have your own database of the clients who've come to you for vehicle inspections. Right now it's not very convenient to analyze because it contains only the information retrieved during each inspection. You'd like to make this database easier to use.

Information about the inspections is given in the table **inspections**, which has the following columns:

* **inspection_id**: the unique inspection ID;
* **driver_name**: the name of the driver;
* **date**: the inspection date (guaranteed to be distinct for each driver);
* **miles_logged**: the number of miles the vehicle has covered since the previous inspection (or since the time of purchase if it's the car's first inspection).

Your goal is to make a new table with a single <code>summary</code> column that contains the following information:

* The first row should contain the total number of miles covered by all the drivers combined;
* The following rows should contain information about each driver, sorted by the drivers' names:
  * The first row should contain the driver's name, the total number of inspections, and the total number of miles covered;
  * The following rows should, for each inspection, contain the date of the inspection and the miles covered since the previous inspection (or the purchase time). The entries should be sorted by the inspection dates.

This information should be given in the following format:

| summary |
| ------- |
| Total miles driven by all drivers combined: \<the sum of all driven miles\> |
| Name: [...]; number of inspections: [...]; miles driven: [...]|
| date: [...]; miles covered: [...]|
| date: [...]; miles covered: [...]|
| ... |
| Name: [...]; number of inspections: [...]; miles driven: [...]|
| ... |

**Note**: Every row should start with a whitespace character, and the rows containing information about the inspections should should start with two whitespace characters.

**Example**

For the following tables **inspections**

| inspection_id | driver_name | date       | miles_logged |
| ------------- | ----------- | ---------- | ------------ |
| 1             | Gary        | 2014-03-15 | 256          |
| 2             | Dave        | 2014-01-18 | 231          |
| 3             | Dave        | 2014-01-16 | 45           |
| 4             | Gary        | 2014-02-03 | 30           |
| 5             | Dave        | 2014-01-17 | 180          |

the output should be

|summary|
| ----- |
| Total miles driven by all drivers combined: 742|
| Name: Dave; number of inspections: 3; miles driven: 456|
|  date: 2014-01-16; miles covered: 45|
|  date: 2014-01-17; miles covered: 180|
|  date: 2014-01-18; miles covered: 231|
| Name: Gary; number of inspections: 2; miles driven: 286|
|  date: 2014-02-03; miles covered: 30|
|  date: 2014-03-15; miles covered: 256|


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
