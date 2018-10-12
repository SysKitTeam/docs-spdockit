---
title: SPDocKit 8 — Release Note
description: This article describes the new features, improvements, and bug fixes that are delivered in SPDocKit 8.
author: Igor Mesarić
date: 10/05/2018
---

SPDocKit 8.0.2 is a major release that comes with several big changes: a lot of new and improved reports, filters and exports, SharePoint 2019 support, improved UI/UX, and much more. We heard your voice and tried to implement as many of your feature requests as possible. We hope to continue receiving your precious feedback and make SPDocKit even better. 

Give it a try and let us know what you think! 

__Product version:__ 8.0.2 

__Build number:__ 10515 

__Release date:__ Oct 18, 2018 

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)



## Important Changes

* __SPDocKit Consultant__ is now a standalone installation designed with the intent to simplify and better focus the usage of SPDocKit on your client's farm, as opposed to the old interface, which was better suited for internal usage. In response to your requests, we removed the need to install any software on your client's farm servers. To create snapshots, use the zero footprint executable __SPDocKit Snapshot Wizard - Consultant__, or, if you prefer to use PowerShell, the new __[SPDocKit Powershell module](https://www.powershellgallery.com/packages/SysKit.SPDocKit.PS)__. For more information about SPDocKit Consultant, please visit the following [link](https://www.syskit.com/products/spconsultant/).
* For Farm users, the __use of a dedicated SPDocKit database is now required__. 
* SPDocKit 8 is bringing some __changes in licensing__ - we are transitioning from perpetual licensing to a subscription model. Read more about these changes [here](https://blog.syskit.com/spdockit-v8-licensing-changes).

## Features

* A new __SharePoint Analytics__ and __Inactive Sites__ report is available! We created a new __Analytics job__ that aggregates data from the SharePoint Usage Request tables. The SharePoint Analytics report displays the collected data on a graph and gives you an overview of site visitors and hits over time. The Inactive Sites report uses this data to show you which site collections have no activity and could, therefore, be retired. To emphasize the importance of this changes, we __renamed the Content & Usage category into "Analytics & Usage"__. For more details read [this article](https://blog.syskit.com/analytics-in-sharepoint-on-premises). 

* And we have added even more new reports! The new __Recently Created Sites__, __Recently Created Lists__, __Unmodified Lists__, __Recently Created Documents__, and __Recently Modified Documents__ reports make it easy to check what kind of content was recently created or modified, by whom, and when. You can find these reports in the __Usage & Structure__ folder under the __Analytics & Usage Reports__ category.

* New __Document Extensions Overview__ and __Document Extensions Details__ reports are also available! With the Document Extensions Overview report, you can now easily check the number of documents in your farm, grouped by document extension, and see their total size. To view more details about each document extension simply drill down to the Details report, where you can find every single document, its location, and size. To find out more about new extensions reports, read [this article](https://docs.syskit.com/spdockit/v8/explore-reports-and-create-documentation/analytics-and-usage-reports/document-extensions-report/). 

* New and better __Audit reports__ are available! You can now __view all actions__ logged by SharePoint in the Audit logs. View the total number of actions performed on all site collections in the __Audit Log Overview report__. For more details, drill down to the __[Audit Log Details](https://docs.syskit.com/spdockit/v8/explore-reports-and-create-documentation/audit-reports/audit-log/)__ report which shows every action that was made, by whom, and when. To see the configured audit settings on each site collection in your farm, take a look at the new Audit Settings report. You can now find these reports in a separate category — Audit Logs.

* Our new __User to User Compare__ is available! It is now possible to compare permissions between users and between AD and SP Groups. You can also check to see how one user’s permissions differ between two snapshots. More on this topic is available in [this article](#internal/compare-sharepoint-configurations/compare-sharepoint-permissions). 

* SPDocKit's __new XLSX export__ comes with built-in functionality to sort and filter data in each column! It is available in all reports, subscriptions and Compare results. The old export style is available under a different name — Legacy Export as XLSX.

* __SharePoint 2019 is supported!__ SPDocKit has been tested on the latest SharePoint 2019 environments. All features are working flawlessly. Try it out yourself!



## Improvements

* __SharePoint Object filter__ — instead of having a separate filter for each level of SharePoint objects (Web App, Site Collection, Subsite etc.), we merged them together into a __new SharePoint Object filter__. We now use the filter on all reports where applicable.

* __Improved category navigation:__ Category navigation is now positioned on the left side of the main window and can be collapsed to create even more space for the reports.

* __Hierarchy and Matrix reports have been merged into the Permissions Matrix report__ due to the introduction of the SharePoint Object filter. The __Permission Matrix__ report shows which permission levels the users have on selected SharePoint objects. All existing Hierarchy and Matrix report views and subscriptions will also be upgraded without any loss of information.

* __Grid View is now available on DB Disk Usage and Database Growth reports__. Cells of the DB Disk Usage report are automatically colored if their values fall into warning or into the error threshold defined for the Content Database Capacity BP report. 

* The __Farm name is now automatically set__ based on the snapshot data, if available. Otherwise, the usual naming is used: Farm 1, Farm 2, etc. The "#" symbol is no longer a part of this naming, since it caused problems when used with cloud-based services.

* The __Enable Usage and Health Data Collection report has been renamed "Usage and Health Data Collection Enabled"__, and the status of __two additional timer jobs has been added__ (Microsoft SharePoint Foundation Usage Data Processing and Microsoft SharePoint Foundation Usage Data Import).

* The __TempDB Files__ Best Practice report now checks to see if the tempDB files are on a separate drive from Binaries, Data, and Log Files; however, all the tempDB files can be on the same drive. For more information, consult [this link](https://docs.syskit.com/bp/v1/databases/tempdb/files/). 

* The __Content Database Capacity__ Best Practice report now __shows the Data File Free Space column instead of Data File Full__.

* An __IIS Instance ID column has been added__ to the __IIS Sites report__.

* __The Site Structure report has been renamed "SharePoint Structure"__. 

* __Clone and Transfer Wizard renamed "Copy and Move Wizard"__.

* The text "[MB]" has been added to headers of Storage Maximum Level, Storage Warning Level, and Usage Storage columns on the __Site Collection Quotas report__ to clarify which measurement units are being displayed.

* The __Content Display Level filter has been renamed "Include Content"__ and improved to support different behavior on specific reports.

* The __improved Permission Level filter__ now works on the Permission Matrix and the User Permissions Details report when multiple site collections are selected.

* The __Snapshot filter can now be extended__, in which case it shows load depth, snapshot mode, permissions loaded status, and whether a snapshot is marked as a good configuration.

* The __Validation of Snapshot files has been improved__. When trying to import a snapshot that was created with a newer version of SPDocKit than the one you are running, an appropriate message appears. 

* The __latest snapshot is now automatically opened__ when viewing Farm Explorer and Best Practices reports. The "Reopen last accessed snapshot on start up" option has, therefore, been removed from SPDocKit Options. 

* The __details of inner exceptions are now displayed__ if they occur while taking a snapshot to make troubleshooting easier.

* __Numerous UX/UI improvements have been made:__ new icons, improved report and filter descriptions, clearer error and warning messages, and many more. 

* __Multiple Export buttons have been replaced with one Export button__. The default export type is set to XLSX, with an available dropdown option where you can select a different export type. 

* The __look of emails__ you receive from SPDocKit subscriptions, alerts, and queries has been improved.

* Servers in the __Browse for Servers list__ in the Configuration Wizard are now in __alphabetical order__, so you can quickly find the server you need.



## Bug Fixes

* Fixed a bug where special characters in a report name could cause an error when exporting to an Excel file. 

* Fixed an issue with the Subscription and Alerts dialog. It can no longer be opened if no snapshots exist; instead, a message appears to remind you to take your first snapshot.

* Fixed a bug where the Source and Target rows of the Compare Results window were out of sync when the horizontal scroll was visible.  

* Fixed a bug where a wrong total number of site collections was displayed on the Snapshot Wizard while taking a snapshot of the SharePoint 2016 environment. 

* Fixed an issue where the Best Practice Wizard would result in a smart error when a DateTime type of column was selected during the Conditional Formatting step. 

* Improved how the Permission Differences Compare handles changes in the Content Display Level filter (now known as "Include Content" filter). When selecting an object in the navigation tree, the filter now automatically changes to the appropriate content level.

* Fixed a bug where changing between Farm Explorer and Best Practices reports caused the app to crash in multi-farm environments. 

* Fixed an issue where you could change steps during the Finish step of the Configuration Wizard, which resulted in an error. 

* Fixed a bug where AutoSPInstaller would cause a cast exception: "Unable to cast object of type 'System.DBNull' to type 'System.String'."

* Fixed an issue where the License Details form didn’t display the Name and Email values.

* Fixed an issue where the Configuration Wizard would display a System.TimeoutException. A more detailed error message is now displayed if the SPDocKit service fails to start.

* Fixed a rare bug in various BP reports where filtering the underlying data for the report would cause a syntax error exception.

* Fixed a bug where the Permission Differences Compare displayed the wrong content level when exported to PDF. 

* Fixed an issue where the Incremental Search BP report didn’t show an error, even though the setting was not in the defined range.  



## Discontinued Features

* __SPDocKit Insights is no longer a part of SPDocKit__. However, a new and improved option is available: __[SysKit Insights](https://www.syskit.com/products/insights/)__ — a standalone monitoring solution for your SharePoint farm. Existing customers eligible for upgrade will find their new product keys on our [customers portal](https://my.syskit.com). For more information on how to __migrate from SPDocKit Insights to SysKit Insights__, visit the following [link](https://docs.syskit.com/spdockit/v8/faq/spdockit-insights-migration/). 

* __SharePoint Online__ connections are no longer supported in SPDocKit. Consequently, the Externally Shared report category in Permissions Reports is also not available. To manage SharePoint Online permissions and view reports, consider using __[SysKit Security Manager](https://www.syskit.com/products/security-manager/)__.

* __LocalDB is no longer supported__ when SPDocKit is installed on a workstation. Only SPDocKit's installed on SharePoint servers can create databases. Workstations cannot create their own database; they must connect to already existing databases.

* __SPDocKit run mode__ has been replaced with new apps used with SPDocKit Consultant.
For more information, visit the [following link](https://docs.syskit.com/spconsultant/v8/).

* The __XML File__ option for saving snapshots has been removed.

