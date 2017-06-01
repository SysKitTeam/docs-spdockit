---
title: Permissions Audit
description: This article explains how to use SPDocKit Permissions Audit report to track who made certain permissions changes, when and on which securable object that specific action has been performed.
author: Marko Gudan
date: 31/5/2017
---

This article explains how you can use __Permissions Audit report__ to inspect permission changes on site collections. Permission Audit report enables you to see __complete history of permission changes on site collections__. Please check the [feature availability by license type](https://www.spdockit.com/orders)

To track permissions changes, audit option must be enabled on a site collection level in SharePoint.

1. In your browser, navigate to the site collection you wish to track permission changes. Go to Settings -> Site settings -> Site collection audit settings (under Site Collection Administration) and ensure that Editing users and permissions option is checked. From the moment when this option is enabled, all permission changes on that site collection and its child objects will be logged by SharePoint and you will be able to see that changes in SPDocKit. __Please note!__ You must be a site collection admin to do perform this action.
1. When you want to see permission changes that were made on a specific site collection, you must take a snapshot with Security Audit option enabled. First time when you take a snapshot with Security Audit option enabled, data will be collected 10 days in the past. Next time data will be collected since last time security audit was loaded.
1. To view Permissions Audit report, go to __Permissions Reports -> Security Audit -> Permissions Audit__ and then select filter values to view the report. Alternatively, you can open Permissions Audit report directly from Permissions Explorer by clicking on Audit button in ribbon page. In that case, web application and site collection filter will be automatically preselected, depending on which object was selected in Permissions Explorer. 
From other filters, you can choose date range, users who performed actions, type of actions performed and content display level.  

By default, Permissions Audit report contains these columns:  

__Action__ – Type of action performed (e.g. group created, group member added, permissions granted, permission inheritance broken, etc.)  
__Time__ – Time when action was performed (it is shown in Local Time).  
__Performed By__ – User who performed the action.  
__Target__ – Principal or permission level which was modified.  
__Details__ – Details about action that was performed; it depends on type of action that was performed.  
__Url__ – URL of SharePoint object on which level action was performed.  

You can customize this grid by adding 3 optional columns:  
__Email__ - Email of user who performed the action.  
__Object Type__ – Type of SharePoint object on which level action was performed.  
__Username__ – Login name of user who performed the action.  

Important: You can only load Security Audit with SPDocKit on a SharePoint machine, and not on a workstation. However, once loaded, data can be viewed on a workstation as well. 
