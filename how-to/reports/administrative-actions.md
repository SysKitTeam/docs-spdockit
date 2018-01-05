---
title: Administrative actions
description: This article explains how you can use the Administrative Actions report to get a centralized overview of all administrative actions made on your SharePoint farm.
author: Marko Gudan
date: 05/6/2017
---

This article explains how you can use the Administrative Actions report to get a centralized overview of all administrative actions made on your SharePoint farm. It enables you too see a list of actions an Administrator, with some additional data about the specific action.

__Applies to__: SharePoint 2016  
__Prerequisites__: SharePoint 2016 Feature Pack 1  
1. Administrative Actions logging must be turned on in SharePoint. It is turned on by default when you install Feature Pack 1. But if you want to be sure, go to __Central Administration -> Monitoring -> Reporting -> Configure usage and health data collection__ and ensure that the __Administrative Actions__ option is checked under Events to log. 
1. Take a snapshot of your farm with the __Administrative Actions Log__ option enabled using SPDocKit's Snapshot Wizard.  
1. To view the __Administrative Actions__ report, go to __Permissions Reports -> Security Audit > Administrative Actions__. You can change filter values and choose between different date ranges and different farms, if you have multiple farms stored in your database.

Administrative Actions report lists every action executed, along with some additional information, such as:  
* Action type 
* Timestamp when the action happened 
* Username of the account that made the change and in which domain (target) 
* Correlation ID, which can be used to track changes that are connected to a single action
* Further action details 

Actions are listed in a master-detail grid, meaning you can view additional details of an action by clicking on it. SharePoint logs different types of actions. Please refer to this [TechNet article](https://tinyurl.com/ycs8rawa) for a list of actions that can be detected and monitored. 

__Limitations__: This report is available only for SharePoint On-Premises.
