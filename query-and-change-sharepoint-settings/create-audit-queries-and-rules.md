---
title: Create Audit Queries and Rules
description: This section describes how to create audit settings queries and rules in SPDocKit.
author: Igor Mesarić  
date: 02/02/2017  
---
This section describes how to use predefined __Audit Settings__ Query and Rule samples and how to create your own Audit Settings Queries and Rules.

From SPDocKit version 7.3.0 onwards, you can find new sample Queries and Rules in the __Queries & Rules__ section in the  __Audit Settings__ folder under __Queries__ and __Rules__. 

## Audit Queries

With the help of __Audit Settings__ Query samples, you can easily monitor the current Audit Settings on your site collections. The sample Queries mirror the site collection Audit Settings categories in Sharepoint, and therefore, three Audit Settings sample Queries are available: __Audit Log Trimming__, __Documents and Items__ and __Lists, Libraries, and Sites__.

When you run the Audit Settings sample Queries, each of them enables you to choose the target web application and/or site collections from which you want to retrieve the Audit Settings.

You can also create your own Queries and determine which Audit Settings to retrieve and show on the generated report. Just make sure that the __Query Scope__ is set to __Site Collections__ in order to make the __Audit Settings__ category visible in the __Select Fields__ step of the __Query Wizard__. 

You can find more details about Query creation [here](#internal/query-and-change-sharepoint-settings/create-spdockit-query).


## Audit Rules

Rules give you the possibility to change all of the Audit Settings on the site collections of your choice. 

With the provided __Audit Editing Users and Permissions__ sample Rule you can enable the __Editing users and permissions__ setting on single or multiple site collections in a single step.

You can also enable or disable all of the other Audit Settings by creating your own Rule that best fits your needs. The before mentioned __Audit Settings__ category is also available in the __Rule Wizard__ when the __Rule Scope__ is set to __Site Collections__. You can also set the rule to run automatically on a schedule, and thereby ensure that it will be applied to all newly created site collections.

For a detailed description of the Rule creation please read [this article](#internal/query-and-change-sharepoint-settings/create-governance-policy-rule).


