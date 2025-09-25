---
description: This article describes how to create audit settings queries and rules in SPDocKit.
sidebar_position: 5
---

# Create Audit Queries and Rules

This section describes how to use predefined **Audit Settings** Query and Rule samples and how to create your own Audit Settings Queries and Rules.

From SPDocKit version 7.3.0 onwards, you can find new sample Queries and Rules in the **Queries & Rules** section in the **Audit Settings** folder under **Queries** and **Rules**.

## Audit Queries

With the help of **Audit Settings** Query samples, you can easily monitor the current Audit Settings on your site collections. The sample Queries mirror the site collection Audit Settings categories in Sharepoint, and therefore, three Audit Settings sample Queries are available: **Audit Log Trimming**, **Documents and Items** and **Lists, Libraries, and Sites**.

When you run the Audit Settings sample Queries, each of them enables you to choose the target web application and/or site collections from which you want to retrieve the Audit Settings.

You can also create your own Queries and determine which Audit Settings to retrieve and show on the generated report. Just make sure that the **Query Scope** is set to **Site Collections** in order to make the **Audit Settings** category visible in the **Select Fields** step of the **Query Wizard**.

You can find more details about Query creation [here](create-spdockit-query.md).

## Audit Rules

Rules give you the possibility to change all of the Audit Settings on the site collections of your choice.

With the provided **Audit Editing Users and Permissions** sample Rule you can enable the **Editing users and permissions** setting on single or multiple site collections in a single step.

You can also enable or disable all of the other Audit Settings by creating your own Rule that best fits your needs. The before mentioned **Audit Settings** category is also available in the **Rule Wizard** when the **Rule Scope** is set to **Site Collections**. You can also set the rule to run automatically on a schedule, and thereby ensure that it will be applied to all newly created site collections.

For a detailed description of the Rule creation please read [this article](create-governance-policy-rule.md).

