---
description: This article describes improvements and bug fixes delivered in SPDocKit 9.1.0.
---

# SPDocKit 9.1.0

**SPDocKit 9.1.0** is a minor release containing a couple of features, improvements and bug fixes.

**Product version:** 9.1.0  
**Build number:** 11029  
**Release date:** Mar 26, 2019  
  
[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Features

**New CSV export is available!** You can now export the Audit Log Overview and Audit Log Details report to CSV file. It is also possible to define CSV file format in subscriptions and alerts of before mentioned reports to get them automatically delivered in your mail or sent to a shared folder.

## Improvements

**Improved behavior of Inactive Subsites report.** Previously, the report showed inactive sites based on the date they were last accessed by a visitor. Now, an additional date is being considered in the report - the Last Content Modified date. 

**Improved descriptions and info bar messages** on Inactive Subsites and Unmodified List reports. We added more details on how the data is retrieved, and what to do in case the report is showing incomplete or seemingly erroneous information.

**Improved messages on Search analytics reports.** Since these reports are not supported in SharePoint 2010 environments, an appropriate message will now appear to state that fact.

## Bug Fixes

Fixed an issue where the following error occurred when taking a snapshot:   
`System.Data.SqlClient.SqlException: Arithmetic overflow error converting IDENTITY to data type int. Arithmetic overflow occurred.` This resulted in missing data in the snapshot, and likewise in reports. To resolve the issue, ID column in SharePointObjectContentType table was set to bigint type.

Fixed a bug with Role Based Security where the Analytics Dashboard and Farm Analytics report were visible in navigation but resulted with an error when accessed by Site Collection admins. These reports are now visible only for users with Admin role assigned.

Fixed an issue where site collection admins couldn't access the All Site Collection Users permission report when Role Based Security was enabled.

Fixed a bug with SharePoint analytics job, which would, when ran on SharePoint 2010 farms, result in the following error:   
`System.Data.SqlClient.SqlException: Invalid column name 'RequestManagementRoutedServerUrl'. Invalid column name 'RequestManagementThrottled'.`   
Hence, SharePoint analytics data were not collected, consequently leading to inaccurate reports.

Fixed a bug with the Directly Assigned Permissions report showing incomplete data in case the SharePoint Objects filter was set to Subsite or Lists level.

Fixed an issue where a document/list item URL was not correctly created for specific types of lists in host-named site collections. This caused a 404 error when opening items in a browser through the View in SharePoint option in Permissions Explorer.

Fixed a bug where the Health Analyzer Problems report erroneously displayed date and time value in the Last Modified column. Instead of the actual value, ‘1/1/0001 12:00:00 AM’ was displayed as date and time.

