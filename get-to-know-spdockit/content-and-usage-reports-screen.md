---
title: Content and Usage Reports Screen
description: This article describes how to use SPDocKit content and usage section to quickly get an overview of your farm storage and content usage, features usage and activations and SharePoint structure.
author: Iva Novoselic
date: 24/5/2017
---

Content and Usage Reports provide a quick overview of your farm storage and content usage, features usage and activations and SharePoint structure.


### Usage reports
__Content Overview__ – graphical overview of your farm metrics. Displays information about site collection and content database sizes, total SharePoint's site collections sizes over time, used SharePoint space, servers by role, site collections per Web application and content databases over time.  
__Number of Unique Visitors__ – shows the number of unique visitors, for each site collection. The number of total farm visitors is the set of all unique visitors on specific site collections.
__List of Site Visitors__ – shows a list of all visitors on the selected site. 

__Content Usage__
  * __Content Type Usage__ – shows all lists that contain a specific content type within a selected site collection.  
  * __Dead Documents__ – shows you a list of documents to which their author no longer has access, documents whose author can no longer be found on the farm, or those whose author has been disabled or deleted from the AD.  
  * __Storage Metrics__ – shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the biggest storage space consumer.  
  * __Unmodified Content__– gives you an easy overview of how much time has elapsed since certain SharePoint documents have been modified. With the Content Type filter, you can select the type of data you’re interested in.  

__Database Growth__  
  * __DB Size Growth__ – shows farm database size over a given time period. Use the forecast option to predict future database growth.
  * __Logs Size Growth__ – shows the size of farm database logs. Also, with the forecast option, you can track and manage the growth.
  * __DB Disk Usage__ – shows the relation between the allocated space for a certain database (solid line) and the actual space used by the database (dotted line). Allocated space is calculated by summing the .mdf and .ndf database files.

### Feature reports
__Features List__ – shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope. 

__Feature activations__
  * __Activations__ – displays a list of SharePoint objects on which a specific feature is activated.
 * __Activations by Edition__ – displays all features on the selected site collections, grouped by SharePoint edition.  

__Feature Usage by Edition__ – shows the usage of feature licenses per SharePoint edition (Foundation, Standard or Enterprise). To see a complete report, define the number of available feature licenses using [License Management](#internal/get-to-know-spdockit/backstage-screen/license-management).

__Feature Usage by Scope__ – checks license compliance for custom features at different farm scopes (Web application, site collection, or subsite). To see a complete report, define the number of available custom feature licenses using [License Management](#internal/get-to-know-spdockit/backstage-screen/license-management).

### Structure reports
__Site Structure__ – shows a hierarchical structure of a selected site collection down to the list item level. Content Display Level filter allows you to change the report’s granularity.

### SPCAF reports
SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s (WSPs or Add-ins) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.       
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](#internal/how-to/reports/install-spdockit-extensions) using Extension Manager. 

__Available reports__: Analysis Summary, Code Quality, Code Metrics, Code Dependencies and Code Inventory.  

__Supported SharePoint versions__: SP2013, SP2016.

### Workflow reports
This plugin for SPDocKit will allow you to analyze workflow usage on your farm.

__Workflows per Site__ – Lists available workflow templates on your sites.  
__Workflows on Farm__ – Shows workflow usage on your farm.

Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.
