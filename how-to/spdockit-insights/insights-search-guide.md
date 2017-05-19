---
title: SPDocKit Insights
description: SPDocKit Insights Usage Guide
author: Vinko Bedek
date: 19/5/2017
---

This article will explain how to use SPDocKit Event Viewer search option for the optimal results.

## Search
A search query consists of terms and operators. By default, the AND operator is utilised when constructing queries. Terms can be a single word or a phrase. A phrase is a group of words enclosed with double quotes.

Input your query in the searchbox then press enter or the search button to start the search. Once you have a set of results, you can easily drill down by using the refiners on the left side of the screen or by clicking on various links in the result text.

## Fields
By default, all fields are searched. To limit your term to a field, type the field name followed by a colon **":"** and your term. 

To get events from the SP2016WFE1 server, you would enter:

>  **Server: SP2016WFE1**

Some useful fields:
* Server
* Level
* CorrelationID
* Source
* Category

Not all result types have the same fields. For a complete list of fields click [here](#fields).

## Wildcard searches
Single and multiple character wildcard queries are supported. Use **"?"** for a single character wildcard and **"*"** for a multiple character wildcard search.

Please note that searches with a starting wildcard are not supported.
Use wildcard searches sparingly, they can be a performance killer.

## Operators
You can combine your terms using logical operators. The supported operators are **AND**, **OR**, **NOT** and **"-"**. Note
                    that the operators must be **UPPERCASED**.

### AND operator
This is the default operator. The query: **database error** is equivalent to **database AND error**. Both terms must exist somewhere in the document. You can also use &amp;&amp; instead of the word AND.

### OR operator
Use this operator when you want to match multiple terms. **Server:Server1 OR Server:Server2** will return events from both Server1 and Server2. You can also use || instead of the word OR.

### NOT operator
Used to exclude events from your search. Level:Critical NOT administration will return critical events that do not have the term administration. You can also use ! instead of the word NOT. 

Similar results can be achieved by using the – operator. **Level:critical – administration**.

## Clause Grouping
Use parantheses to form subqueries. **(Server:Server1 OR Server:Server2) AND Level:Error** will return all events with Level equal to errors from both Server1 and Server2.

You can also write your queries in the following way **Server:(Server1 OR Server2)**

Clause grouping is recommended when writing queries with more than two clauses and different logical operators.
Ie. instead of **test error OR Server:Server1** use the query: **(test error) OR Server:Server1**

## Special characters
The following is a list of special character that are used in the query syntax.

\+ \- && || ! ( ) {}[ ] ^ " ~ * ? : \\

If you wish to use these characters in your terms, you must escape them with a \\.

There are a couple of exceptions:
* If you are searching for a url, everything is escaped automatically.
* \\ is escaped automatically.
* : is escaped automatically unless used to denote a field.

## Examples

**Example 1:** Query **Level:Critical database** will
                    match events that contain the word "database" and that have a Level of Critical.</p>

**Example 2:** Query **(Level:Exception OR Level:Critical) database** will match events that contain the word "database" and that have a Level of Critical or Exception.

**Example 3:** Query **Level:Critical "access the database"** will match events that have a Level of Critical and that contain the words "access" "the" "database" in the exact order.

**Example 4:** Query **Level:Critical admin\*** will match events that have a Level of Critical and contain a word that starts with "admin".

**Example 5:** Query **Level:Critical Server:Server1** will match events that occured on Server1 with a Level of Critical.</p>

**Example 6:** Query **Level:Critical AND Server:Server1**, same as example 5.

**Example 7:** Query **Level:Critical AND Server:Server1– database** will match events that occured on Server1 with a Level of Critical that do not contain the word "database".

**Example 8:** Query **database AND NOT (Level:Critical OR Level:Unexpected)** will match events that contain the word "database" and not of a Level of Critical and are not of a Level of Unexpected.

**Example 9:** Query **SPUpdatedConcurrencyException Source:"SharePoint Server Search"** will match events that contain the word "SPUpdatedConcurrencyException" and have a source of SharePoint Server Search. Note the use of double quotations since the Source is comprised of multiple words.

## Fields by result type 
<a name="fields" ></a>
### ULS fields

* Server
* Level
* Source
* Category
* EventID
* CorrelationID
* Message

### Event Log fields

* Server
* Source
* Category
* Level
* UserName
* Message

### SQL fields

* Server
* Source
* Message
</ul>