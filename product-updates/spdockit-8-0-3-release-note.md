---
title: SPDocKit 8.0.3 — Release Note
description: This article describes improvements and bug fixes delivered in SPDocKit 8.0.3
author: Igor Mesarić
date: 16/11/2018
---

# SPDocKit 8.0.3

This is a service release containing minor improvements and bug fixes.

**Product version:** 8.0.3  
**Build number:** 10628  
**Release date:** Nov 16, 2018

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Improvements:

* Improved error handling when loading SP2019 IIS Settings Information. For more information read the following [article.](../troubleshooting/server-load-and-user-permissions/error-while-loading-iis-settings.md)
* Improved error handling when opening snapshots.

## Bug fixes:

* Resolved an issue that involved the Analytics system job causing an error when loading site collections with duplicate GUIDs.

  The following error occurred: 

  > "System.Data.SqlClient.SqlException: Violation of PRIMARY KEY constraint 'PK\_SiteCollectionMetricsByDate'. Cannot insert duplicate key in object  
  > 'dbo.SiteCollectionMetricsByDate'."

* Fixed a bug in which opening SPDocKit by double-clicking a SPDFarm file resulted in a change of an opened snapshot when navigating to Best Practice reports. 
* Fixed an issue related to an incorrect Last Modified date being displayed on the Inactive Sites report.
* Fixed an issue related to the System Account displaying as "Unknown" in the Audit Log Details report. 
* Resolved an issue with the DB Server Hotfixes report, which wrongly displayed non-database servers in single server environments. 
* Fixed a bug in which the Date Range was erroneously exported from Audit Log Details and Administrative Actions reports.
* Resolved an issue related to the app throwing a smart error when trying to load an SP2007 snapshot.
* Fixed a bug in which the ESC key would cause a smart error if pressed in specific situations in the Options dialog. 
* Fixed a bug involving a smart error showing when saving passwords to a snapshot from the Passwords and Product Keys reports.
* Fixed a bug related to a special character \(Hex 0x1B\) causing an error when exporting the Dead Documents report. 
* Resolved an issue with the Project Server load in SharePoint 2016 and 2019 environments.

