---
title: Analytics and Usage Reports Screen
description: >-
  This article describes how to use SPDocKit analytics and usage section to
  quickly get an overview of your farm storage and content usage, features usage
  and activations and SharePoint structure.
author: Iva Novoselic
date: 24/5/2017
---

# Analytics and Usage Reports Screen

Analytics and Usage Reports provide a quick overview of your farm storage and content usage, features usage and activations and SharePoint structure.

**Content Overview** – graphical overview of your farm metrics. Displays information about site collection and content database sizes, total SharePoint's site collections sizes over time, used SharePoint space, servers by role, site collections per Web application and content databases over time.

## Analytics

* **SharePoint Analytics** - Shows the total number of hits each site collection had in the last 7 days along with the maximum number of daily unique visitors, and how the hits compare to the previous period. Also includes data on each site collection's size, number of subsites, date when it was last accessed and last modified. 
* **Site Visitors List** – Shows a list of all visitors on the selected site. 

## Usage & Structure

* **SharePoint Structure** – Shows a hierarchical structure of selected site collections down to the list item level. The Include Content filter allows you to change the report’s granularity.
* **Recently Created Sites** - Shows sites that have been created recently.
* **Inactive Sites** - Shows sites which are inactive because they had no visitors in the selected time range.
* **Recently Created Lists** - Shows lists and document libraries that have been created recently.
* **Unmodified Lists** - Shows lists and document libraries without any content modification in the selected time range
* **Recently Created Documents** - Shows documents and list items that have been created recently.
* **Recently Modified Documents** - Shows documents and list items that have been created recently.
* **Dead Documents** – Shows you a list of documents to which their author no longer has access, documents whose author can no longer be found on the farm, or those whose author has been disabled or deleted from the AD.  
* **Content Type Usage** – Shows all lists that contain a specific content type within a selected site collection.  

## Storage Metrics & Growth

* **Storage Metrics** – Shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the biggest storage space consumer. 
* **Database Disk Usage** - Shows the relation between the allocated space for a certain database \(solid line\) and the actual space used by the database \(dotted line\). Allocated space is calculated by summing the .mdf and .ndf database files.
* **Database Size Growth** - Shows farm database size over a given time period. Use the forecast option to predict future database growth.
* **Logs Size Growth** – Shows the size of farm database logs. Also, with the forecast option, you can track and manage the growth.
* **Document Extensions Overview** - Shows the number of documents and their total size by extension.
* **Document Extensions Details** - Shows the number of documents and their total size by extension for each site collection. 

## Feature reports

* **Features List** – Shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope. 
* **Activations** – displays a list of SharePoint objects on which a specific feature is activated.
* **Activations by Edition** – displays all features on the selected site collections, grouped by SharePoint edition.  

  **Feature Usage**

  **Feature Usage by Edition** – Shows the usage of feature licenses per SharePoint edition \(Foundation, Standard or Enterprise\). To see a complete report, define the number of available feature licenses using [License Management](analytics-and-usage-reports-screen.md#internal/configure-and-extend-spdockit/license-management).

  **Feature Usage by Scope** – checks license compliance for custom features at different farm scopes \(**Web application, Site Collection, or Subsite**\). To see a complete report, define the number of available custom feature licenses using [License Management](analytics-and-usage-reports-screen.md#internal/configure-and-extend-spdockit/license-management).

## SPCAF reports

SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s \(WSPs or Add-ins\) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.  
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](analytics-and-usage-reports-screen.md#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions) using Extension Manager.

**Available reports**: Analysis Summary, Code Quality, Code Metrics, Code Dependencies and Code Inventory.  
**Supported SharePoint versions**: SP2013, SP2016.

**Please note! SPCAF section will be visible in the navigation tree only after** [**installing**](analytics-and-usage-reports-screen.md#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions/) **the extension.**

## Workflow reports

This plugin for SPDocKit will allow you to analyze workflow usage on your farm.

**Workflows per Site** – Lists available workflow templates on your sites.  
**Workflows on Farm** – Shows workflow usage on your farm.

Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.

**Please note! Workflow Analytics section will be visible in the navigation tree only after** [**installing**](analytics-and-usage-reports-screen.md#internal/configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions/) **the extension.**

