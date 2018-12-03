---
title: Analytics and Usage Reports Screen
description: This article describes how to use SPDocKit analytics and usage section to quickly get an overview of your farm storage and content usage, features usage and activations and SharePoint structure.
author: Iva Novoselic
date: 24/5/2017
---

Analytics and Usage Reports provide a quick overview of your farm storage and content usage, features usage and activations and SharePoint structure.

__Content Overview__ – graphical overview of your farm metrics. Displays information about site collection and content database sizes, total SharePoint's site collections sizes over time, used SharePoint space, servers by role, site collections per Web application and content databases over time.  

### Analytics
* __SharePoint Analytics__ - Shows the total number of hits each site collection had in the last 7 days along with the maximum number of daily unique visitors, and how the hits compare to the previous period. Also includes data on each site collection's size, number of subsites, date when it was last accessed and last modified. 
* __Site Visitors List__ – Shows a list of all visitors on the selected site. 

###  Usage & Structure
* __SharePoint Structure__ – Shows a hierarchical structure of selected site collections down to the list item level. The Include Content filter allows you to change the report’s granularity.
* __Recently Created Sites__ - Shows sites that have been created recently.
* __Inactive Sites__ - Shows sites which are inactive because they had no visitors in the selected time range.
* __Recently Created Lists__ - Shows lists and document libraries that have been created recently.
* __Unmodified Lists__ - Shows lists and document libraries without any content modification in the selected time range
* __Recently Created Documents__ - Shows documents and list items that have been created recently.
* __Recently Modified Documents__ - Shows documents and list items that have been created recently.
* __Dead Documents__ – Shows you a list of documents to which their author no longer has access, documents whose author can no longer be found on the farm, or those whose author has been disabled or deleted from the AD.  
* __Content Type Usage__ – Shows all lists that contain a specific content type within a selected site collection.  
 
### Storage Metrics & Growth
* __Storage Metrics__ – Shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the biggest storage space consumer. 
* __Database Disk Usage__ - Shows the relation between the allocated space for a certain database (solid line) and the actual space used by the database (dotted line). Allocated space is calculated by summing the .mdf and .ndf database files.
* __Database Size Growth__ - Shows farm database size over a given time period. Use the forecast option to predict future database growth.
* __Logs Size Growth__ – Shows the size of farm database logs. Also, with the forecast option, you can track and manage the growth.
* __Document Extensions Overview__ - Shows the number of documents and their total size by extension.
* __Document Extensions Details__ - Shows the number of documents and their total size by extension for each site collection. 
  
### Feature reports
* __Features List__ – Shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope. 
* __Activations__ – displays a list of SharePoint objects on which a specific feature is activated.
* __Activations by Edition__ – displays all features on the selected site collections, grouped by SharePoint edition.  
#### Feature Usage
__Feature Usage by Edition__ – Shows the usage of feature licenses per SharePoint edition (Foundation, Standard or Enterprise). To see a complete report, define the number of available feature licenses using [License Management](#internal/configure-and-extend-spdockit/license-management).
__Feature Usage by Scope__ – checks license compliance for custom features at different farm scopes (__Web application, Site Collection, or Subsite__). To see a complete report, define the number of available custom feature licenses using [License Management](#internal/configure-and-extend-spdockit/license-management).

### SPCAF reports
SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s (WSPs or Add-ins) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.       
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions) using Extension Manager. 

__Available reports__: Analysis Summary, Code Quality, Code Metrics, Code Dependencies and Code Inventory.  
__Supported SharePoint versions__: SP2013, SP2016.  

__Please note! SPCAF section will be visible in the navigation tree only after [installing](#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions/) the extension.__


### Workflow reports
This plugin for SPDocKit will allow you to analyze workflow usage on your farm.

__Workflows per Site__ – Lists available workflow templates on your sites.  
__Workflows on Farm__ – Shows workflow usage on your farm.

Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.

__Please note! Workflow Analytics section will be visible in the navigation tree only after [installing](#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions/) the extension.__
