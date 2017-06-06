---
title: SPDocKit 7 - Release Note
description: This article describes all new features, improvements and bug fixes delivered in SPDocKit 7.
author: Iva Novoselic
date: 7/6/2017
---

We have just shipped a new major release, SPDocKit 7, and are proud to present SPDocKit Insights - a feature set designed to help you track SharePoint performance and ease searching through ULS, windows event and SQL logs. The release also delivers Project Server documentation, SharePoint Online support, and a new advanced permissions management feature - restoring permissions to a previously recorded state. Read more about all the available features in the list below.

__Product version:__ 7.0.0  
__Build number:__   4786    
__Release date:__ Jun 7, 2017  

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Features
* __SPDocKit Insights:__ A brand new set of SPDocKit features opens a completely different era in tracking [SharePoint performance and troubleshooting issues.](#internal/spdockit-insights/use-spdockit-insights) Install SPDoKit Insights to find out which farm servers are the most critical, drill down to a specific performance counter, and resolve issues before it is too late.
  * An improved __SPDocKit Event Viewer__ is now also available as a part of SPDocKit Insights. It will help you crawl and search through ULS logs, Windows event entries, and SQL logs from all of the farm servers to quickly isolate the problem and make sure that everything keeps running smoothly.   
  * Consultants will again be able to [manually load SPDocKit Event Viewer](#internal/spdockit-insights/manual-load) entries.  
* You can now schedule [SPDocKit Event Viewer alerts](#internal/spdockit-insights/search-alerts) for a specific error and receive email notifications when one of your servers satisfies this query.  
* The most wanted feature for the last year has finally arrived. You can now use SPDocKit and previously taken farm snapshots to [restore SharePoint permissions](#internal/permission-management/restore-permissions) from a certain date for a selected securable object.  
* There is a new [Permissions Audit](#internal/how-to/reports/security-audit) report for tracking who changed certain SharePoint permissions, as well as when and what the exact action performed was. 
Navigate to our Permissions Reports section to easily detect all permissions changes across the entire site collection and keep your SharePoint security at the high level.
* SPDocKit 7 delivers __Project Server documentation__. Load project server settings and permissions, explore reports using Farm Explorer, compare settings through a desired time period and schedule these reports to be directed to your email.
* [SharePoint Online Snapshots](#internal/spdockit-spo/sharepoint-online) are now available in SPDocKit. Apart from being able to manage SharePoint Online permissions, you can now take snapshot of your entire tenant or a selected site collection. Use Permissions Reports section to gather valuable information about structure, granted permissions, broken permissions inheritance, and more. 
  * You can also __compare SharePoint Online permissions__ for a selected securable object and group memberships, as well as track permissions differences using Compare Wizard.
   * __Restoring SharePoint Online permissions__ to a selected snapshot state is also available.
* [Externally Shared](#internal/get-to-know-spdockit/permissions-reports-screen) reports help you find out what tenant content has been shared with an external user, who has access to your SharePoint Online sites, and if there is some content that has been shared using anonymous guest links. 

* SPDocKit 7 supports __Office 365 groups__.  You can connect to Office 365 group site collection's in Permissions Explorer, as well as gather farm explorer and permissions report data for these kinds of sites.

* New Best Practices Reports
  *	[DC Collocation Compliance](https://bp.spdockit.com/article/configuration/distributed-cache/distributed-cache-collocation-compliance/) checks if the distributed cache service is running on the same server as any Search, Excel, or Project Server services.
  *	[Search Running](https://bp.spdockit.com/article/service-applications/search/search-running/) checks if your Search service is up and running and if it has at least one crawl schedule configured.
  *	[Number of Web Applications](https://bp.spdockit.com/article/sharepoint-software-boundaries-and-limits/limits-by-hierarchy/web-application-limits/number-web-applications/), [Number of Content Databases](https://bp.spdockit.com/article/sharepoint-software-boundaries-and-limits/limits-by-hierarchy/content-database-limits/number-content-databases/), [Number of Site  Collections](https://bp.spdockit.com/article/sharepoint-software-boundaries-and-limits/limits-by-hierarchy/site-collection-limits/number-site-collections/) check recommended SharePoint topology limitations.
  *	[Farm in Trial](https://bp.spdockit.com/article/updates/sharepoint/farm-in-trial/) checks if your SharePoint farm is in trial mode.
  *	[Visio Services Cache Age](https://bp.spdockit.com/article/sharepoint-software-boundaries-and-limits/limits-by-feature/visio-services-limits/visio-services-cache-age/) checks whether Visio Graphic Services cache ages are set so that Visio does not affect SharePoint performance.
  * Numerous best practices reports addressing [search services boundaries and limits](https://bp.spdockit.com/article/sharepoint-software-boundaries-and-limits/limits-by-feature/search-limits/search-topology-limits/): 
    *	Analytics Processing Components per Search Service Application
    *	Analytics Processing Components per Server
    *	Content Processing Components
    *	Crawl Components per Search Service Application
    *	Crawl Components per Server
    *	Index Components per Search Service Application
    *	Index Components per Server
    *	Index Partitions
    *	Index Replicas
    *	Query Processing Components
    *	Search Components
    *	Analytic Reporting Databases

* [Permissions Health Check](#internal/get-to-know-spdockit/permissions-reports-screen) reports are a set of new permissions reports, which can help you stay compliant with permissions governance best practices and detect users with directly given permissions, lists containing items with broken permissions inheritance, and what those items are specifically.  
* New Cleanup report called, __Site Collections with Disabled Owner__, lists all site collection owners who have been disabled or deleted in Active Directory.  
* __Permission Level Usage__ report shows site collections where a certain permission level exists and whether it is being used.
* Now, you can choose to __restore permission inheritance recursively on folder__ structures. If you decide to use this feature, permissions inheritance will be restored for all list items of the currently selected folder. 
* New management action, called __Add to Group__, helps you add a specified principal to the selected SharePoint group.   
* [Server to Server Compare](#internal/how-to/compare-wizard/compare-servers) is now possible. Compare any two SQL, IIS, or other server settings in your farm using Compare Wizard.  
* A __Database Permissions__ report has been added to the SQL part of the SPDocKit farm documentation. It lists all users who have been added to a certain database role on the farm databases.  
* Farm Explorer gained new PowerPivot and Secure Store service application reports.  
* The __Manage Servers__ button allows you to document third party servers in your farm documentation. Go to the Snapshots tab to include servers that are not part of your SharePoint farm in SPDocKit snapshot.  
* Save AutoSPInstaller XML Configuration file wizard now supports __SharePoint 2016 minroles__ and has been updated to the latest AutoSPInstaller XML schema. You can modify server minroles when creating AutoSPInstaller file from SPDocKit snapshot.
* SPDocKit installation now includes the __LocalDB__ option. This option will automatically appear during the installation when SPDocKit is used on a workstation and will come in handy when documenting SPO.
* It is now possible to __manually start report generation__. If you choose to turn off automatic report generation, report data will not be generated until you finish configuring all the available filters. Clicking the button, Generate, will start the execution.

## Improvements
* New query property, __Author__, was added for lists and subsites reports. 
* The farm name will now be visible in the Compare Wizard exported results.
* Query results can now be sent in __XLSX and DOCX format__ as well, not only PDF.
* You can now see how long it took for SPDocKit to take a snapshot of your farm. We've added a load duration column to the Snapshots tab.
* Farm Account and Crawl Account passwords are no longer required fields in the wizard for creating configuration XML file for the AutoSPInstaller.
* The Principals filter now supports __principal type as a filtering option__. Expand the Principals filter to select only desired principal types.
* Object-to-object comparison type in the Permissions Compare wizard can now detect group membership differences.
* It is now possible to cancel the report export process.
* SPDocKit database autogrowth is automatically set to 100MB.
* View in SharePoint action is now available on Number of Unique Visitors and List of Site Visitors reports.
* Cancelled snapshots will no longer appear under the Snapshots tab and create incomplete report data when generating reports.
* Better error logging when loading IIS settings.
* Optimized loading process and expansion of the permissions explorer structure.
* Personal sites are now ignored in the Cleanup reports.
* Added report throttling for Permissions reports and configurable options to the General tab in Options wizard. This way, the SQL server cannot get overloaded by the number of selected site collections and principals.
* Grant permissions and Add to Group permissions management actions will no longer offer groups without permissions on the selected securable object.
* If farm snapshots fail for any reason, you will now receive a note explaining why you did not receive any subscription or alert reports.
* AppFabric Patch Best practices report now supports SP2016.
* Now, you can track what the SPDocKit Service is doing in the background. We’ve added it's status details in the lower right corner.
* FarmID information has been added to the Farm Info report and License Details.
* A Web application scope has been added to the Load Depth selection. Now, you can take a snapshot of your farm, down to the Web application level, without having to load all site collections and lower securable objects.
* It is now possible to create alerts directly from the Compare wizard UI.
* All Site Users reports are no longer just a SPDocKit extension, it is now part of the built-in Permissions Reports. This report will show you a complete list of users who have access to the selected site collection.
* The Last Compiled Time Property of the Audiences report (User Profiles) has been removed from the compare template. 
* SPDocKit can now be installed on Windows Server 2008.
* Permissions Explorer gained improved Group Memberships filter.
* You can now use the permissions management wizards with the NT AUTHORITY/Authenticated Users but only when using SPDocKit on a SharePoint server.

## UI improvements
* New splash screen with our theme colours.
* View in SharePoint, Site Permissions, Principal Permissions, Principal Properties, Permission Details, Allow AD Access, and Show All Groups buttons are now located in the View ribbon.
* An Insights ribbon has been added, allowing easy access to information about agents and viewers or to start SPDocKit Insights.
* Improved SPDocKit UI for smaller resolutions.
* Added tooltips explaining the button actions.
* New icon set for different lists types. We now distinguish between document library, task list, and calendar.
* Snapshot Options UI has been redesigned. New properties have been added and divided into new logical categories.

## Bug fixes
* Resolved an issue with Number of Unique Visitors report, which showed some users twice due to being case sensitive.
* Resolved issue with the exception “System.Data.SqlClient.SqlException: Cannot use the special principal 'dbo'.” appearing when trying to add user to an Admin role in SPDocKit role based security.
* Resolved issue with exception “System.Security.SecurityException: The source was not found, but some or all event logs could not be searched. Inaccessible logs: Security.” appearing when users were running the SPDocKit on a workstation, when they were not a local administrator on the machine, and tried to use permissions management actions.
* Resolved issue with exception “System.NullReferenceException: Object reference not set to an instance of an object.” appearing when trying to edit a best practices report on a workstation without opening a snapshot first. 
* Users with privileged access report was not showing Full Read policy users.
* Permissions from sites with broken permissions level inheritance were not properly loaded.
* Resolved display issue with the embedded web browser control which is used for some reports, such as SPCAF reports, web.config, or Content Hierarchy report. Internet Explorer security settings should no longer interfere with the report generation.
* If a SPDocKit report was scheduled to generate and send data for all available securable objects, and a new securable object was added afterwards in the farm, the report data would not include it in sent reports.  
* Resolved issue with displaying the wrong number of selected reports when generating a documentation. Farm Overview reports were not included in the report count.
* Resolved issue with EventID field from the windows event log not being indexed.
* It is now possible to run SPDocKit rules on the lists and document libraries with the AllowDeletion property set to False.
* Resolved an issue with the exception “System.InvalidOperationException: No language-neutral solution exists in the store.” appearing when SPDocKit tries to load a solution that is not working properly.
* Resolved an issue with SharePoint Groups report remembering the filter state from the Site Collection Hierarchy report and using it to generate the report data.
* Resolved an issue with the transfer action removing the source principal's permissions from the whole site collection instead of just from the current scope.
* Resolved an issue with the inability to change the Queries and Rules folder name.
* Resolved an issue with the MonthlyDayOfWeekSchedule enum schedule not being supported in the Scheduled Task report.

## Deprecated features
* Language Packs up to Date best practices report is no longer available.
* Site Collection Duplicate IDs best practices report is no longer available.
* Scope Rules Count per Search Scope is no longer available for SharePoint 2013/2016.
* Scope Rules Count per Search Service Application is no longer available for SharePoint 2013/2016.
* SharePoint Edition Name property is no longer available in the Farm Info report.
* Farm Differences report no longer supports the PDF format.

## Licensing changes
* SPDocKit 7 brings new __Plus__ license edition.
Learn more about the [licensing changes](https://www.spdockit.com/orders/) and download the detailed [comparison of available features by license type.](http://www.spdockit.com/wp-content/uploads/2017/06/spdockit-compare-editions.pdf) 

  If you like the new __Plus__ features, and if you are interested to upgrade from your current license type to a Plus edition, please [contact our sales team](https://www.spdockit.com/support/contact-us/). They will help you to find your best possible upgrade path.

* Workstation and Site licenses no longer support SharePoint Online permissions management or reporting. We now offer a dedicated [SPDocKit Online license](http://spdockit.staging.wpengine.com/orders/#online) that allows you to manage and document your SharePoint Online environment.

* Software Assurance has been renamed __Support & Upgrade Protection__, which is an additional recommended option for perpetual licenses. The annual cost of this option covers customers support for SPDocKit and entitles you to free upgrades, major and minor, during the validity period.
*  Please note that Acceleratio will no longer grant an additional non-production license alongside the perpetual licences, upon purchase of Support and Upgrade Protection.  

   Those users with a valid Software Assurance at the moment of this release will be upgraded free of charge to non-production licenses. You will be able to see these licenses on your profile in our Customers Portal.

    If you would like to document your non-production SharePoint farms, please [contact our sales team](https://www.spdockit.com/support/contact-us/) and ask them to provide you with the non-production licensing options.


* We've changed the Offline activation process for consultants. [Read more about it.](#internal/activation/offline-activation)


[Click here to download the new release.](https://www.spdockit.com/downloads/)
