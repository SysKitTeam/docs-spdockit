---
description: This article explains how you can use the Administrative Actions report to get a centralized overview of all administrative actions made on your SharePoint farm.
---

# Administrative Actions

It enables you too see a list of actions an Administrator, with some additional data about the specific action.

**Applies to**: SharePoint 2016  
**Prerequisites**: SharePoint 2016 Feature Pack 1

1. Administrative Actions logging must be turned on in SharePoint. It is turned on by default when you install Feature Pack 1. But if you want to be sure, go to **Central Administration &gt; Monitoring &gt; Reporting &gt; Configure usage and health data collection** and ensure that the **Administrative Actions** option is checked under Events to log.
2. Take a snapshot of your farm with the **Administrative Actions Log** option enabled using SPDocKit's Snapshot Wizard.
3. To view the **Administrative Actions** report, go to **Permissions Reports -&gt; Security Audit &gt; Administrative Actions**. You can change filter values and choose between different date ranges and different farms, if you have multiple farms stored in your database.

Administrative Actions report lists every action executed, along with some additional information, such as:

* Action type 
* Timestamp when the action happened 
* Username of the account that made the change and in which domain \(target\) 
* Correlation ID, which can be used to track changes that are connected to a single action
* Further action details 

Actions are listed in a master-detail grid, meaning you can view additional details of an action by clicking on it. SharePoint logs different types of actions. Please refer to this [TechNet article](https://tinyurl.com/ycs8rawa) for a list of actions that can be detected and monitored.

