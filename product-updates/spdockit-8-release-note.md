---
title: SPDocKit 8 — Release Note
description: >-
  This article describes the new features, improvements, and bug fixes that are
  delivered in SPDocKit 8.
author: Igor Mesarić
date: 10/05/2018
---

# SPDocKit 8

**SPDocKit 8.0.2** is a major release that comes with several big changes: a lot of new and improved reports, filters and exports, SharePoint 2019 support, improved UI/UX, and much more. We heard your voice and tried to implement as many of your feature requests as possible. We hope to continue receiving your precious feedback and make SPDocKit even better.

Give it a try and let us know what you think!

**Product version:** 8.0.2

**Build number:** 10521

**Release date:** Oct 18, 2018

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Important Changes

* **SPDocKit Consultant** is now a standalone installation designed with the intent to simplify and better focus the usage of SPDocKit on your client's farm, as opposed to the old interface, which was better suited for internal usage. In response to your requests, we removed the need to install any software on your client's farm servers. To create snapshots, use the zero footprint executable **SPDocKit Snapshot Wizard - Consultant**, or, if you prefer to use PowerShell, the new [**SPDocKit Powershell module**](https://www.powershellgallery.com/packages/SysKit.SPDocKit.PS). For more information about SPDocKit Consultant, please visit the following [link](https://docs.syskit.com/spconsultant/product-updates/spconsultant-release-note-8/).
* For Farm users, the **use of a dedicated SPDocKit database is now required**. 
* SPDocKit 8 is bringing some **changes in licensing** - we are transitioning from perpetual licensing to a subscription model. Read more about these changes [here](https://blog.syskit.com/spdockit-v8-licensing-changes).

## Features

* A new **SharePoint Analytics** and **Inactive Sites** report is available! We created a new **Analytics job** that aggregates data from the SharePoint Usage Request tables. The SharePoint Analytics report displays the collected data on a graph and gives you an overview of site visitors and hits over time. The Inactive Sites report uses this data to show you which site collections have no activity and could, therefore, be retired. To emphasize the importance of this changes, we **renamed the Content & Usage category into "Analytics & Usage"**. For more details read [this article](https://blog.syskit.com/analytics-in-sharepoint-on-premises).
* And we have added even more new reports! The new **Recently Created Sites**, **Recently Created Lists**, **Unmodified Lists**, **Recently Created Documents**, and **Recently Modified Documents** reports make it easy to check what kind of content was recently created or modified, by whom, and when. You can find these reports in the **Usage & Structure** folder under the **Analytics & Usage Reports** category.
* New **Document Extensions Overview** and **Document Extensions Details** reports are also available! With the Document Extensions Overview report, you can now easily check the number of documents in your farm, grouped by document extension, and see their total size. To view more details about each document extension simply drill down to the Details report, where you can find every single document, its location, and size. To find out more about new extensions reports, read [this article](../explore-reports-and-create-documentation/analytics-and-usage-reports/document-extensions-reports.md).
* New and better **Audit reports** are available! You can now **view all actions** logged by SharePoint in the Audit logs. View the total number of actions performed on all site collections in the **Audit Log Overview report**. For more details, drill down to the [**Audit Log Details**](../explore-reports-and-create-documentation/audit-reports/audit-log-details.md) report which shows every action that was made, by whom, and when. To see the configured audit settings on each site collection in your farm, take a look at the new Audit Settings report. You can now find these reports in a separate category — Audit Logs.
* Our new **User to User Compare** is available! It is now possible to compare permissions between users and between AD and SP Groups. You can also check to see how one user’s permissions differ between two snapshots. More on this topic is available in [this article](../compare-sharepoint-configurations/compare-sharepoint-permissions.md).
* SPDocKit's **new XLSX export** comes with built-in functionality to sort and filter data in each column! It is available in all reports, subscriptions and Compare results. The old export style is available under a different name — Legacy Export as XLSX.
* **SharePoint 2019 is supported!** SPDocKit has been tested on the latest SharePoint 2019 environments. All features are working flawlessly. Try it out yourself!

## Improvements

* **SharePoint Object filter** — instead of having a separate filter for each level of SharePoint objects \(Web App, Site Collection, Subsite etc.\), we merged them together into a **new SharePoint Object filter**. We now use the filter on all reports where applicable.
* **Improved category navigation:** Category navigation is now positioned on the left side of the main window and can be collapsed to create even more space for the reports.
* **Hierarchy and Matrix reports have been merged into the Permissions Matrix report** due to the introduction of the SharePoint Object filter. The **Permission Matrix** report shows which permission levels the users have on selected SharePoint objects. All existing Hierarchy and Matrix report views and subscriptions will also be upgraded without any loss of information.
* **Grid View is now available on DB Disk Usage and Database Growth reports**. Cells of the DB Disk Usage report are automatically colored if their values fall into warning or into the error threshold defined for the Content Database Capacity BP report.
* The **Farm name is now automatically set** based on the snapshot data, if available. Otherwise, the usual naming is used: Farm 1, Farm 2, etc. The "\#" symbol is no longer a part of this naming, since it caused problems when used with cloud-based services.
* The **Enable Usage and Health Data Collection report has been renamed "Usage and Health Data Collection Enabled"**, and the status of **two additional timer jobs has been added** \(Microsoft SharePoint Foundation Usage Data Processing and Microsoft SharePoint Foundation Usage Data Import\).
* The **TempDB Files** Best Practice report now checks to see if the tempDB files are on a separate drive from Binaries, Data, and Log Files; however, all the tempDB files can be on the same drive. For more information, consult [this link](https://docs.syskit.com/bp/databases/tempdb/files/).
* The **Content Database Capacity** Best Practice report now **shows the Data File Free Space column instead of Data File Full**.
* An **IIS Instance ID column has been added** to the **IIS Sites report**.
* **The Site Structure report has been renamed "SharePoint Structure"**.
* **Clone and Transfer Wizard renamed "Copy and Move Wizard"**.
* The text "\[MB\]" has been added to headers of Storage Maximum Level, Storage Warning Level, and Usage Storage columns on the **Site Collection Quotas report** to clarify which measurement units are being displayed.
* The **Content Display Level filter has been renamed "Include Content"** and improved to support different behavior on specific reports.
* The **improved Permission Level filter** now works on the Permission Matrix and the User Permissions Details report when multiple site collections are selected.
* The **Snapshot filter can now be extended**, in which case it shows load depth, snapshot mode, permissions loaded status, and whether a snapshot is marked as a good configuration.
* The **Validation of Snapshot files has been improved**. When trying to import a snapshot that was created with a newer version of SPDocKit than the one you are running, an appropriate message appears.
* The **latest snapshot is now automatically opened** when viewing Farm Explorer and Best Practices reports. The "Reopen last accessed snapshot on start up" option has, therefore, been removed from SPDocKit Options.
* The **details of inner exceptions are now displayed** if they occur while taking a snapshot to make troubleshooting easier.
* **Numerous UX/UI improvements have been made:** new icons, improved report and filter descriptions, clearer error and warning messages, and many more.
* **Multiple Export buttons have been replaced with one Export button**. The default export type is set to XLSX, with an available dropdown option where you can select a different export type.
* The **look of emails** you receive from SPDocKit subscriptions, alerts, and queries has been improved.
* Servers in the **Browse for Servers list** in the Configuration Wizard are now in **alphabetical order**, so you can quickly find the server you need.

## Bug Fixes

* Fixed a bug where special characters in a report name could cause an error when exporting to an Excel file.
* Fixed an issue with the Subscription and Alerts dialog. It can no longer be opened if no snapshots exist; instead, a message appears to remind you to take your first snapshot.
* Fixed a bug where the Source and Target rows of the Compare Results window were out of sync when the horizontal scroll was visible.
* Fixed a bug where a wrong total number of site collections was displayed on the Snapshot Wizard while taking a snapshot of the SharePoint 2016 environment.
* Fixed an issue where the Best Practice Wizard would result in a smart error when a DateTime type of column was selected during the Conditional Formatting step.
* Improved how the Permission Differences Compare handles changes in the Content Display Level filter \(now known as "Include Content" filter\). When selecting an object in the navigation tree, the filter now automatically changes to the appropriate content level.
* Fixed a bug where changing between Farm Explorer and Best Practices reports caused the app to crash in multi-farm environments.
* Fixed an issue where you could change steps during the Finish step of the Configuration Wizard, which resulted in an error.
* Fixed a bug where AutoSPInstaller would cause a cast exception: "Unable to cast object of type 'System.DBNull' to type 'System.String'."
* Fixed an issue where the License Details form didn’t display the Name and Email values.
* Fixed an issue where the Configuration Wizard would display a System.TimeoutException. A more detailed error message is now displayed if the SPDocKit service fails to start.
* Fixed a rare bug in various BP reports where filtering the underlying data for the report would cause a syntax error exception.
* Fixed a bug where the Permission Differences Compare displayed the wrong content level when exported to PDF.
* Fixed an issue where the Incremental Search BP report didn’t show an error, even though the setting was not in the defined range.

## Discontinued Features

* **SPDocKit Insights is no longer a part of SPDocKit**. However, a new and improved option is available: [**SysKit Insights**](https://www.syskit.com/products/insights/) — a standalone monitoring solution for your SharePoint farm. Existing customers eligible for upgrade will find their new product keys on our [customers portal](https://my.syskit.com). For more information on how to **migrate from SPDocKit Insights to SysKit Insights**, visit the following [link](https://docs.syskit.com/spdockit/faq/spdockit-insights-migration/).
* **SharePoint Online** connections are no longer supported in SPDocKit. Consequently, the Externally Shared report category in Permissions Reports is also not available. To manage SharePoint Online permissions and view reports, consider using [**SysKit Security Manager**](https://www.syskit.com/products/security-manager/).
* **LocalDB is no longer supported** when SPDocKit is installed on a workstation. Only SPDocKit's installed on SharePoint servers can create databases. Workstations cannot create their own database; they must connect to already existing databases.
* **SPDocKit run mode** has been replaced with new apps used with SPDocKit Consultant. For more information, visit the [following link](https://docs.syskit.com/spconsultant/).
* The **XML File** option for saving snapshots has been removed.

