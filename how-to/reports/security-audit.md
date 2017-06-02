---
title: Permissions Audit
description: This article explains how to use SPDocKit Permissions Audit report to track who made certain permissions changes, when and on which securable object that specific action has been performed.
author: Marko Gudan
date: 31/5/2017
---

This article explains how you can use the __Permissions Audit report__ to inspect permission changes on site collections. Permission Audit report enables you to see __the complete history of permission changes on site collections__. Please check the [feature availability by license type for more info.](https://www.spdockit.com/orders)

To track permissions changes, the audit option must be enabled on a site collection level in SharePoint.

1. In your browser, navigate to the root web of the site collection you wish to track permission changes on. Go to Settings -> Site settings -> Site collection audit settings (under Site Collection Administration) and ensure that the Editing users and permissions option is checked. From the moment when this option is enabled, all permission changes within the site collection will be logged by SharePoint and you will be able to see those changes in SPDocKit. __Please note!__ You must be a site collection admin to perform this action.
1. When you want to see permission changes that were made within a specific site collection, you must take a snapshot with Security Audit option enabled. The first time you take a snapshot with Security Audit option enabled, data for the past 10 days will be loaded. The next data collections will collect logs starting from the last collected one.
1. To view the Permissions Audit report, go to __Permissions Reports -> Security Audit -> Permissions Audit__ and select the appropriate filter values to view the report. Alternatively, you can open the Permissions Audit report directly from Permissions Explorer by clicking on the Audit button on the ribbon. In that case, the report filters will automatically be filled with the site collection selected in the Permissions Explorer. 
From the other filters, you can choose the date range, users who performed the actions, type of actions performed and the content display level.  

By default, the Permissions Audit report contains these columns:  

* __Action__ – Type of action performed (e.g. group created, group member added, permissions granted, permission inheritance broken, etc.)  
* __Time__ – Time of day the action was performed (it is shown in Local Time).  
* __Performed By__ – User who performed the action.  
* __Target__ – Principal or permission level which was modified.  
* __Details__ – Details about the performed action; it depends on the type of action that was performed.  
* __Url__ – URL of the SharePoint object on which level action was performed.  

You can customize this grid by adding 3 optional columns:  
* __Email__ - Email of user who performed the action.  
* __Object Type__ – Type of SharePoint object on which level action was performed.  
* __Username__ – Login name of user who performed the action.  

Important: You can only load the Security Audit logs with SPDocKit on a SharePoint machine, not on a workstation. However, loaded data can be viewed on a workstation as well. 
