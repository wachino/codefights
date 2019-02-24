---
layout: home
title: Books Catalogs
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
You have your very own library at home, and it's getting bigger and bigger with each passing month. You've decided to create a database in which to store information about your books, in the hope that it will help you remember which books you have in your library.

Information about the books in your library is stored in the table **catalogs**, which contains the following columns:

* **doc_id**: The unique ID of the catalog;
* **xml_doc**: The catalog as an XML file in the following format:
<code>
<br>
&#60;catalog&#62;<br>
  &nbsp;&#60;book id="..."&#62;<br>
    &nbsp;&nbsp;&#60;author&#62;...&#60;/author&&nbsp;&nbsp;#62;<br>
    &#60;title&#62;...&#60;/title&#62;<br>
  &nbsp;&#60;/book&#62;<br>
  &nbsp;&#60;book id="..."&#62;<br>
    &nbsp;&nbsp;&#60;author&#62;...&#60;/author&#62;<br>
    &nbsp;&nbsp;&#60;title&#62;...&#60;/title&#62;<br>
  &nbsp;&#60;/book&#62;<br>
  &nbsp;...<br>
&#60;/catalog&#62;.<br>
</code>

Each catalog represents the work of one distinct <code>&#60;author&#62;</code> in your library. There is exactly one <code>&#60;catalog&#62;</code> element in each <code>xml_doc</code>, and the <code>id</code> for each book is unique.

Given the **catalogs** table, you want to find out which authors you have represented in your library. Your task is to create a new table with the <code>author</code> column that will contain all the distinct authors, sorted by their names.

**Example**

For the following table **catalogs**

| doc_id | xml_doc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1      | &#60;catalog&#62; <br> &#60;book id="11"&#62; <br> &#60;author&#62;Chuck Palahniuk&#60;/author&#62; <br> &#60;title&#62;Fight Club&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;book id="12"&#62; <br> &#60;author&#62;Chuck Palahniuk&#60;/author&#62; <br> &#60;title&#62;Survivor&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;/catalog&#62;                                                                                                                                                                |
| 2      | &#60;catalog&#62; <br> &#60;book id="21"&#62; <br> &#60;author&#62;Bernard Werber&#60;/author&#62; <br> &#60;title&#62;Les Thanatonautes&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;/catalog&#62;                                                                                                                                                                                                                                                                                                              |
| 3      | &#60;catalog&#62; <br> &#60;book id="31"&#62; <br> &#60;author&#62;Boris Vian&#60;/author&#62; <br> &#60;title&#62;The Big Sleep&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;book id="32"&#62; <br> &#60;author&#62;Boris Vian&#60;/author&#62; <br> &#60;title&#62;The Lady in the Lake&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;book id="33"&#62; <br> &#60;author&#62;Boris Vian&#60;/author&#62; <br> &#60;title&#62;The World of Null-A&#60;/title&#62; <br> &#60;/book&#62; <br> &#60;/catalog&#62; |

the output should be

| name  |
| ----  |
|Bernard Werber|
|Boris Vian|
|Chuck Palahniuk|

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
