---
title: SPDocKit 7.4.0 - Release Note
description: This article describes new features, improvements and bug fixes delivered in SPDocKit 7.4.0.
author: Igor Mesarić
date: 26/02/2018
---
SPDocKit 7.4.0 is a release ... TODO

__Product version:__ 7.4.0  
__Build number:__ TODO  
__Release date:__ Apr 14, 2018

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Features

* New option available when you Grant the permissions directly. If you check the __Grant to everything in this list/folder, even to items with unique permission__, the principal will get the same permissions on all child objects.

* __TODO__ Clone object Permissions.

* The __Modified Content__ report was added to the Content Usage reports. You can now see all newly created and/or modified documents in the given time period in one place. 

* Added a new option to the Content Display Level filter - __Folder__. Now the folder level can be shown without the need to display the List Items. 

* New options when comparing current snapshot to older ones. You can now compare it to the last snapshot, the last snapshot marked as good, or any other previously taken snapshot.

## Improvements

* Improved how the Content Display Level filter is set when you drill from Permissions Audit Overview to Permissions Audit Details report. The filter is now automatically changed to List Items Level.

* The SharePoint Groups report now has the Owner displayed as the first child of the group. All other members are alphabetically ordered like they were before.

* Improved how the About SpDocKit section in the Backstage looks and feels - elements were centered, icons added and old buttons removed. 

* All of SPDocKit's wizards had a facelift. The changes were made in order to comply with the company's new visual identity. 

* The Help button was replaced with the __Help link__ on all wizards to make them simpler and easier to use. 

* When there are no comments on a report, the Comments panel now displays a message instead of being empty. It gives you a brief instruction how to easily create a new comment.

* __TODO__ Activation form

## Bug fixes

* __TODO__ UI freeze

* __TODO__ Prazan error u Load Wizardu

* Fixed an issue where the Compare Result window could not be accessed if the Compare Wizard main window was closed.

* Improved the visibility of filters on reports. Filters are now visible even when the opened report has no data to show. This way you can easily navigate to a farm or snapshot where the data is available and the report is generated. 

* Improved UX - Export and Save tab removed from Backstage.

* Fixed an issue where an unwanted folder was created during the installation of SPDocKit on a workstation computer. All of the folders and files are now created in the C:\ProgramData\SPDocKit folder. 

* Fixed an issue where Editing an On-prem connection on a workstation would result with an unexpected error.

* Fixed an issue where loading Projects would time out. The timeout value is now set to 1800 seconds.   

* Fixed an issue with the Best Practices reports which are supported only in SharePoint 2013 and 2016 but were also visible in a SharePoint 2010 environment.

* Fixed an issue that ocurred when starting the Insights service. An Inner Exception was thrown and the service would not start.

* __TODO__ modeldb  i tempdb info

* __TODO__ external users više nisu članovi everyone grupe

* __TOTO__ reset layouta postavlja custom sort na SPGroups reportu

* Fixed an issue where Best Practices Dashboard would show incorrect data, e.g. a green checkmark, although the report itself had some errors.


## Retired Features 
