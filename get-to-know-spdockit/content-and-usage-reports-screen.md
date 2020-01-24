---
title: Content and Usage Reports Screen
description: >-
  This article describes how to use SPDocKit content and usage section to
  quickly get an overview of your farm storage and content usage, features usage
  and activations and SharePoint structure.
author: Iva Novoselic
date: 24/5/2017
---

# Content and Usage Reports Screen

Content and Usage Reports provide a quick overview of your farm storage and content usage, features usage and activations and SharePoint structure.

## Usage reports

**Content Overview** – graphical overview of your farm metrics. Displays information about site collection and content database sizes, total SharePoint's site collections sizes over time, used SharePoint space, servers by role, site collections per Web application and content databases over time.  
**Number of Unique Visitors** – shows the number of unique visitors, for each site collection. The number of total farm visitors is the set of all unique visitors on specific site collections. **List of Site Visitors** – shows a list of all visitors on the selected site.

### Content Usage

* **Content Type Usage** – shows all lists that contain a specific content type within a selected site collection.  
* **Dead Documents** – shows you a list of documents to which their author no longer has access, documents whose author can no longer be found on the farm, or those whose author has been disabled or deleted from the AD.  
* **Storage Metrics** – shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the biggest storage space consumer.  
* **Modified Content** - shows you the Content that was created and/or modified in the selected time period, on one or multiple selected site collections. 
* **Unmodified Content**– gives you an easy overview of how much time has elapsed since certain SharePoint documents have been modified. With the Content Type filter, you can select the type of data you’re interested in.

### Database Growth

* **DB Size Growth** – shows farm database size over a given time period. Use the forecast option to predict future database growth.
* **Logs Size Growth** – shows the size of farm database logs. Also, with the forecast option, you can track and manage the growth.
* **DB Disk Usage** – shows the relation between the allocated space for a certain database \(solid line\) and the actual space used by the database \(dotted line\). Allocated space is calculated by summing the .mdf and .ndf database files.

## Feature reports

**Features List** – shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope.

### Feature activation

* **Activations** – displays a list of SharePoint objects on which a specific feature is activated.
* **Activations by Edition** – displays all features on the selected site collections, grouped by SharePoint edition.  

**Feature Usage by Edition** – shows the usage of feature licenses per SharePoint edition \(Foundation, Standard or Enterprise\). To see a complete report, define the number of available feature licenses using [License Management](backstage-screen/license-management.md).

**Feature Usage by Scope** – checks license compliance for custom features at different farm scopes \(Web application, site collection, or subsite\). To see a complete report, define the number of available custom feature licenses using [License Management](backstage-screen/license-management.md).

## Structure reports

**Site Structure** – shows a hierarchical structure of a selected site collection down to the list item level. Content Display Level filter allows you to change the report’s granularity.

## SPCAF reports

SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s \(WSPs or Add-ins\) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.  
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](../how-to/reports/install-spdockit-extensions.md) using Extension Manager.

**Available reports**: Analysis Summary, Code Quality, Code Metrics, Code Dependencies and Code Inventory.

**Supported SharePoint versions**: SP2013, SP2016.

## Workflow reports

This plugin for SPDocKit will allow you to analyze workflow usage on your farm.

**Workflows per Site** – Lists available workflow templates on your sites.  
**Workflows on Farm** – Shows workflow usage on your farm.

Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.

