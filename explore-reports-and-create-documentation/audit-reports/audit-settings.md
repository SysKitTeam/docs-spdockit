---
title: Audit Settings Report
description: This article describes how to use Audit Settings report. 
author: Tomislav Sirovec
date: 03/10/2018
---

This article describes how to use the Audit Settings report.  
The report shows the state of specific audit settings on the selected site collections.

To view the report go to __Audit Reports > Audit Settings__.  

Once you [take a snapshot](#internal/create-sharepoint-farm-snapshots/manual-snapshots) of your farm, the report will list all site collections and their respective audit settings.  

If you wish for SharePoint (and then SPDocKit) to gather your audit logs, you need to enable them (Site Settings > Site collection audit settings). This report will give you an overview of your audit settings state, on each site collection. 

The Audit Settings report contains these columns:

* Site Collection
* Url
* __Trim Audit Log__
* __Days of Audit Log Data to Retain__
* __Audit Report Storage Location__

Once you click on a certain row, Audit Settings details will load at the bottom, and show you rest of the Audit Settings. They are:

* __Editing Users and Permissions__
* __Searching Site Content__
* __Editing Content Types and Columns__
* __Deleting or Restoring Items__
* __Moving or Copying Items__
* __Checking out or Checking in Items__
* __Editing Items__
* __Opening, Downloading, Viewing Items, or Viewing Item Properties__


You can use the filters on the right-hand side to customize the report. SharePoint Objects filter will allow you to change the site collections, while the Audit Settings filter will allow you to filter by specific audit setting.