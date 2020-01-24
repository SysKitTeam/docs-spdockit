---
title: SPDocKit 7.4.0 - Release Note
description: >-
  This article describes the new features, improvements, and bug fixes that are
  delivered in SPDocKit 7.4.0.
author: Igor Mesarić
date: 26/02/2018
---

# SPDocKit 7.4.0

SPDocKit 7.4.0 is a minor release that gives SPDocKit an additional facelift. It's not just about looks: some interesting features were also added. Permission management received a set of awesome new possibilities, a new report was added, and numerous improvements were made.

Give it a try and let us know what you think!

**Product version:** 7.4.0  
**Build number:** 9766  
**Release date:** Apr 04, 2018

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Features

* The **Grant to everything in this list/folder, even to items with unique permissions** option, is now available when you grant the permissions directly . The principal will get the same permissions on all child objects, even if their permission inheritance is broken.
* The new **Clone Object Permissions** wizard is available! You can now easily copy permissions from one securable object to another in a couple of clicks. The SharePoint Groups and Permission levels can also be recreated, if the cloning is performed between two different site collections. The action is supported even between objects that belong to different web applications!
* The **Modified Content** report was added to the Content Usage reports. You can now see all newly created and/or modified documents for the given period in one place.

## Improvements

* Enabled the use of TLS 1.2 when establishing secure connections, in preparation for Microsoft's mandatory use of TLS 1.2 for Office 365 connections.
* Added a **new option** to the Content Display Level filter – the Folder. Folders were previously displayed as a part of the List Items Content Display Level. Now, the folders can be filtered separately without the need to display the List Items.
* New options are now available when comparing current snapshots to older ones. You can now compare it to the **last snapshot**, the **last snapshot marked as good**, or **any other** previously taken snapshot.
* Improved how the **Content Display Level filter** is set when you drill from Permissions Audit Overview down to Permissions Audit Details report. The filter is now automatically changed to List Items Level.
* The **SharePoint Groups report** now has the Owner displayed as the first child of the group. All other members are alphabetically ordered like they were before.
* Numerous **UI improvements** were made throughout the whole application to make it easier to use and to comply with the company's new visual identity.
* When there are no comments on a report, the **Comments panel** now displays a message instead of being empty. It gives you a brief instruction on how to easily create a new comment.
* **Activation form** is updated with some new input fields.

## Bug fixes

* Fixed an issue where an empty Error message was displayed when loading a new Snapshot.
* Fixed an issue where the Compare Result window could not be accessed if the Compare Wizard main window was closed. The problem occurred only when the Compare Wizard was opened from the Backstage screen.
* Improved the way filters behave on reports. Filters are now enabled even when the opened report has no data to show. This way, you can easily navigate to a farm or snapshot where the data is available and the report is generated.
* Fixed an issue where an unwanted folder was created during the installation of SPDocKit on a workstation computer. Additionally, some folders that were previously created in the user's My Documents\SPDocKit folder have been transferred to the ProgramData\SPDocKit folder.
* Fixed an issue where Editing an on-prem connection on a workstation would result in an unexpected error.
* Fixed an issue where loading Projects would time out. The timeout value is now set to 1800 seconds.
* Fixed an issue with the Best Practices reports which were only supported in SharePoint 2013 and 2016 but were also visible in a SharePoint 2010 environment.
* Fixed an issue that occurred when starting the Insights service. The following Inner Exception was thrown: **“System.Net.HttpListenerException: The network location cannot be reached.”** This would cause the service to not start.
* Fixed an issue with Snapshot loading on a SharePoint 2010 environment, where the following error would appear: **“Error while loading modeldb and tempDB info for \[SQLServerName\].”**
* Fixed an issue where external users were displayed as a part of the Everyone group. Microsoft made changes in the behaviour and governance of access by external users in Office 365, so we had to make some adjustments. You can find more information about these changes [here](https://support.microsoft.com/en-us/help/4089534/how-to-grant-the-everyone-claim-to-external-users-in-office-365).
* Fixed an issue with the Best Practices Dashboard which would show incorrect data \(e.g., a green checkmark, although the report itself had some errors\).
* Fixed an issue with the Group Memberships filter on Permissions Reports. The **Don't Show Nested Groups Members** option didn't work as it should and showed the same results as if the Show as Flat Structure option was selected.
* Fixed an issue with the export of the Storage Metrics report. The following error occurred while exporting: **"System.NullReferenceException: Object reference not set to an instance of an object."**

