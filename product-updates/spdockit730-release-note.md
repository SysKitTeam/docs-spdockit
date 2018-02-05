---
title: SPDocKit 7.2.0 - Release Note
description: This article describes new features, improvements and bug fixes delivered in SPDocKit 7.3.0.
author: Tomislav Sirovec
date: 01/02/2018
---
SPDocKit 7.3.0 is a release with GDPR in mind. It contains numerous improvements and bug fixes, but most noticeably we prepared a set of features you can use to become [GDPR](https://gdpr-info.eu/) compliant

Give it a try and let us know what you think!

__Product version:__ 7.3.0 
__Build number:__ XXXX  
__Release date:__ Feb ??, 2018

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Features


* We have significantly improved SQL Server documentation by adding the reports for __Always On Availability Groups.__ These reports include Groups, Replicas, Databases, and Listeners (located in Farm Explorer -> SQL -> Always On). Also, the __Farm Topology__ report has been enhanced to include the server nodes and the high availability group they belong to. 

* With new query options allowing you to query __Audit Settings__, you can __check the status of your site collections’ audit settings.__ For ease of use, there are three predefined sample queries, which conveniently follow the SharePoint structure: Audit Log Trimming, Documents and Items, and Lists, Libraries and Sites. 

* __Audit Settings Rule!__ While the aforementioned queries show the status of your audit settings, the __Audit Users and Permissions Rule__ enables you to change them. You have the very same options here as you do in the SharePoint interface. One major upside of using the Audit Settings Rule is that you can apply your settings to more than one site collection, and more than one web application! Also, by setting it up to run automatically on a schedule, you can ensure that the rule is applied to any new site collections.

* __The Permissions Audit Overview report__ tells you which sites have the audit turned on and how many permission changes there are. From here you can drill down to the Permissions Audit Details report, which allows you to detect changes in your site collections, such as: Group Created/Deleted, Group Member Created/Deleted, Permission Inheritance Broken/Restored, Permission Level Created/Deleted, Permissions Granted/Removed, etc.

* __Comments!__ You can now leave a comment on any row of a report located in the Farm Explorer. This can be very useful when performing an audit in which you wish to leave comments for yourself or someone else. We have also added the __All Comments__ report, which is located in the Snapshots tab. There you can observe your every comment and drill down to any report of interest. Comments are exportable within the Farm Documentation; just check the checkbox in the Options tab of the Generate Documentation form. 

* __SPDocKit Tags!__ You can now tag objects in Permission s Explorer. You can tag anything, from site collections, sites, and subsites, down to lists, folders and list items. A list of all __Tagged Objects__ can be found as a report on the Snapshots tab. This feature makes it easy to categorize your objects (e.g., as personal or classified data).

All the features above can be used to help you __become GDPR compliant__. For more information about these features and about GDPR compliance in general, [click here] (!!!!!!!!!!!!!!!!!!!!!!!!!!! ).


## Improvements

* __New Excel exports!__ We've changed how the export to Excel functionality works across the whole application. Now, every grid report is exported to an Excel document that can be easily filtered and sorted according to your needs.

* Improvements to the __Managed Accounts__ report. Properties we now offer are: Username, Automatic Change, Change Before Expiration, Notify Before Change, Days to Notify Before Change, Change Schedule, Last Change, and Next Password Change.

* Improvements to the __SQL Alias Best Practice__ report. Instead of just showing whether an alias is used on an SQL Server, we now correctly check all the places where connection strings are defined inside SharePoint to find out if the alias was used.

* Improvements to how the __Content Types Hierarchy__ report works. Now we load even those content types that are not used. 

* Improvements to the way the Web App and Site Collection filter works for live reports (all Cleanup reports, Dead Documents). In other words, these reports are truly live now and do not require an initial load to populate the filter. 

* A new icon next to the __Last Run Time column in the Subscription Manager__. The icon alerts you if there was an error during the last attempt to send a subscription/alert, if the service is not turned on, or if the subscription sending feature is turned off in the Options menu. 

* Resolution of all AD groups, except Domain Users, for the __Local Admins and Farm Administrators report__.

* A __new selection template__ that you can use when choosing which reports you wish to see in the Best Practices documentation. We aimed to achieve the same functionality as in the Farm Documentation. 

* Improvements to Excel export for the __Farm Differences report__. It should be more readable now.
Elimination of the color for xml syntax, for performance reasons, when the report has more than 2000 lines or 300,000 characters. 

* A new __Privileged Access Type__ filter to the __Users with Privileged Access report__. This means that you can now filter the farm/site collection admins, users with full control/full read, etc. Also, the BUILTIN\Administrators group is now resolved, and it shows local administrators from every SharePoint server—but not SQL!

* Expansion of the functionality of the __Clone and Transfer Wizards__. Now, you have the ability not to change the existing membership in SharePoint groups, or not to change the directly given permissions of the destination principal.

* A completely new __Windows Services report__ (Farm Explorer -> Servers in Farm -> Windows Services). It lists every service, as well as some of their properties, for all the servers in your farm.

* Addition of a __Name column to the Query Wizard__. If the selected scope of a query wizard are list items, you can use the name column to construct your query. 

* Addition of a URL column to the Group Members report, which might make it more convenient to use during an audit. 

* Addition of __Recycle Settings__ to the IIS group of reports. For more information on recycle settings, [click here](https://docs.microsoft.com/en-us/iis/configuration/system.applicationhost/applicationpools/add/recycling/periodicrestart/). 

* A new __Securable Objects filter__ for User Permission Details report. This means that you can now view items for which the selected user does not have permission. Those items will be colored gray.

* Improvements to Site Collection Size and Web Site Best Practices reports. Before, the report used to say only: “No data,” which would leave users wondering if that was good or bad. Now there is an appropriate message to make things clearer. 

* An __Additional Connection Parameters__ field in the Configuration Wizard. Some users have expressed the need to add an extra property to the connection string when connecting to the database. 

* Numerous general improvements to the process of loading SharePoint Online sites. Also, tenant to tenant compare now works more reliably. 

* Addition of a Property Name column, to make the User Profile Properties report more readable and easier to use in some localized environments.

* Renaming of the custom column, URL, to Site Collection URL, in the following reports: Group reports – Group Members and Member Of, SharePoint Groups report, User Permission Overview, and Permission Level Usage. Also, in Group Members and Member of reports, when using the grid view for “Type column is called Member Type,” a Group Type column is added to the report. 

* Addition of a message that appears when starting SPDocKit Insights for the first time, explaining that you should use the same database here that you use with SPDocKit. This is because Insights requires a database with information about the SharePoint farm you are interested in. 

* Numerous improvements to SharePoint online (tenant) management.

* Improvements in the calculation of the column width in all reports. This should provide a better overall user experience. 

* Fix for an issue with the __Anonymous Access Links report__. Microsoft changed the way Anonymous sharing links work,so we had to update as well. At the same time, we made minor improvements to the report columns. Now they include: Site Collection, List Item, Link Type, Link, Created On, and Expiration Date. 

* A change in the way the proxy setting in SPDocKit works. Now, by default, the proxy settings section is turned off and __SPDocKit natively inherits the system’s default proxy settings__. If you wish to override them, simply fill in the required proxy server data.

## Bug fixes

* Fixed an issue when commenting on Password and Product Keys -> All Accounts report.

* Fixed an issue where SPCAF reports could be scheduled as a subscription. 

* Fixed an issue with the Governance agent never ending. The problem occurred when sending the query results and using an automatic trigger for it. 

* Fixed an issue where an index maintenance job would never end if the service account did not have the required permissions. 

* Included better handling of errors when loading Project Server sites. 

* Improved error handling when importing users to an Office 365 group from a file. 

* Improved error handling if the Best Practices generation fails with the error: “System.NullReferenceException: Object reference not set to an instance of an object.” 

* Fixed a bug with inserting a permission level for a site collection while collecting all of the permissions records: “SQL error: 2627. Error details: Error:System.Data.SqlClient.SqlError: Violation of PRIMARY KEY constraint 'PK_RoleProperties'. Cannot insert duplicate key in object 'dbo.RoleProperties'. ”The problem occurs with subsites that have unique permissions levels.

* Fixed an issue with Tenant Compare (SharePoint Online) where the name of the farm was not visible in the Compare results.

* Fixed an issue when performing a search on the Snapshots tab. In the Farm Name column, “!ERROR:” would appear. 

* Fixed a number of Best Practice reports that would crash the application if upgraded from SPDocKit version 7.2.1 to version 7.3. The reports are: Farm Backup History and SQL Alias.

* Fixed an issue where you would get the error: “System.NotSupportedException: LINQ to Entities does not recognize the method 'Boolean Contains(System.String)' method, and this method cannot be translated into a store expression” while trying to set up the SPDocKit application. 

* Fixed an issue where Configuration Wizard would misbehave when only the SPDocKit Agent was installed and an attempt was being made to perform an upgrade. More precisely, the Configuration window would be out of place and you would see the same popup message twice.

* Fixed an issue where deleting the temp folder that the application uses would prevent the application from starting. Now the folder is recreated automatically. 

## Retired Features 

* We removed the Forwarded Events log collection from SPDocKit Insights, as we had encountered problems with it. Forwarded Events had a collection delay, which resulted in some events being skipped and never logged. 
