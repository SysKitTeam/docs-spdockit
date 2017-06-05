---
title: Administrative actions
description: This article explains how you can use Administrative Actions report to get centralized overview of all administrative actions made on your SharePoint farm.
author: Marko Gudan
date: 05/6/2017
---

This article explains how you can use Administrative Actions report to get centralized overview of all administrative actions made on your SharePoint farm. It enables you too see which administrator did what, and when. 

__Applies to__: SharePoint 2016  
__Prerequisites__: SharePoint 2016 Feature Pack 1  
1. Administrative Actions logging must be turned on in SharePoint. It is turned on by default when you install Feature Pack 1. But if you want to be sure, go to __Central Administration -> Monitoring -> Reporting -> Configure usage and health data collection__ and ensure that __Administrative Actions__ option is checked under Events to log. 
1. Take a snapshot of your farm with __Administrative Actions Log__ option enabled using SPDocKit's Snapshot Wizard.  
1. To view __Administrative Actions__ report, go to __Permissions Reports -> Security Audit > Administrative Actions__. You can change filter values and choose between different date ranges and different farms if you have multiple farms stored in your database.

Administrative Actions report lists every action, along with some useful information, such as:  
* Action type 
* Timestamp when the action happend 
* Username that made the change and in which domain (target) 
* Correlation ID 
* Further action details 

Actions are listed in master-detail grid, so you can see additional details of every action by clicking on it. SharePoint logs different types of actions. This [TechNet article](https://technet.microsoft.com/en-us/library/mt790698(v=office.16).aspx#Anchor_6) lists all the actions that can be detected and monitored. 

__Limitations__: This report is available only for SharePoint On-Premises.