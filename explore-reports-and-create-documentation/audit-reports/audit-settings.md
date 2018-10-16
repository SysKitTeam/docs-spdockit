---
title: Audit Settings Report
description: This article describes how to use the Audit Settings report. 
author: Tomislav Sirovec
date: 03/10/2018
---

This article describes how to use the Audit Settings report.  
The report shows the state of specific audit settings on the selected site collections.

To view this report, go to __Audit Reports > Audit Settings__.

Once you [take a snapshot](#internal/create-sharepoint-farm-snapshots/manual-snapshots) of your farm, the report will list all site collections and their respective audit settings.  

If you want SharePoint (and then SPDocKit) to gather your audit logs, you need to enable them (to do this, go to Site Settings > Site collection audit settings). This report will give you an overview of your audit settings state for each site collection. 

The Audit Settings report contains the following columns:

* Site Collection
* Url
* __Trim Audit Log__
* __Days of Audit Log Data to Retain__
* __Audit Report Storage Location__

Once you click on a certain row, the Audit Settings details will load at the bottom, and show you the rest of the Audit Settings. They are:

* __Editing Users and Permissions__
* __Searching Site Content__
* __Editing Content Types and Columns__
* __Deleting or Restoring Items__
* __Moving or Copying Items__
* __Checking Out or Checking In Items__
* __Editing Items__
* __Opening, Downloading, Viewing Items, or Viewing Item Properties__


You can use the filters on the right-hand side to customize the report. 
* The __Farm filter__ is visible in case a database connected to multiple farms is being used by SPDocKit.
* The __SharePoint Objects filter__ enables you to select web applications and site collections. You can view the settings of __all the site collections in a SharePoint farm__ by selecting all web applications. 
* The __Audit Settings filter__ makes it possible to filter the report by the status of specific audit settings (On or Off). By default, all audit settings are selected. <br/>
__Please note!__ When selecting two or more audit settings in the __Audit Settings__ filter, the __AND operator is used__ between them, as demonstrated in the following __example__:
    - Editing Users and Permissions setting - Off checkbox is selected. 
    - Searching Site Content setting - On checkbox is selected. 

    In this example, the report will show site collections for which the Editing Users and Permissions setting is turned Off __AND__ the Searching Site Content setting is turned On.