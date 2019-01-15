---
title: Permissions Audit
description: >-
  This article explains how to use SPDocKit Permissions Audit report to track
  who made certain permissions changes, when and on which securable object that
  specific action has been performed.
author: Marko Gudan
date: 31/5/2017
---

# security-audit

This article explains how you can use the **Permissions Audit report** to inspect permission changes on site collections. Permission Audit report enables you to see **the complete history of permission changes on site collections**. Please check the [feature availability by license type for more info.](https://www.spdockit.com/orders)

To track permissions changes, the audit option must be enabled on a site collection level in SharePoint.

1. In your browser, navigate to the root web of the site collection you wish to track permission changes on. Go to **Settings &gt; Site settings &gt; Site collection audit settings** \(under Site Collection Administration\) and ensure that the Editing users and permissions option is checked. From the moment when this option is enabled, all permission changes within the site collection will be logged by SharePoint and you will be able to see those changes in SPDocKit.  

   **Please note!** You must be a site collection admin to perform this action.

2. When you want to see permission changes that were made within a specific site collection, you must take a snapshot with Security Audit option enabled. The first time you take a snapshot with Security Audit option enabled, data for the past 10 days will be loaded. The next data collections will collect logs starting from the last collected one.
3. To view the Permissions Audit report, go to **Permissions Reports -&gt; Security Audit -&gt; Permissions Audit** and select the appropriate filter values to view the report. Alternatively, you can open the Permissions Audit report directly from Permissions Explorer by clicking on the Audit button on the ribbon. In that case, the report filters will automatically be filled with the site collection selected in the Permissions Explorer. 

   From the other filters, you can choose the date range, users who performed the actions, type of actions performed and the content display level.  

By default, the Permissions Audit report contains these columns:

* **Action** – Type of action performed \(e.g. group created, group member added, permissions granted, permission inheritance broken, etc.\)  
* **Time** – Time of day the action was performed \(it is shown in Local Time\).  
* **Performed By** – User who performed the action.  
* **Target** – Principal or permission level which was modified.  
* **Details** – Details about the performed action; it depends on the type of action that was performed.  
* **Url** – URL of the SharePoint object on which level action was performed.  

You can customize this grid by adding 3 optional columns:

* **Email** - Email of user who performed the action.  
* **Object Type** – Type of SharePoint object on which level action was performed.  
* **Username** – Login name of user who performed the action.  

Important: You can only load the Security Audit logs with SPDocKit on a SharePoint machine, not on a workstation. However, loaded data can be viewed on a workstation as well.

