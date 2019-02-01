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

**Analytics and Usage Reports** provide a quick overview of your farm storage and content usage, features usage and activations, and SharePoint structure.

## **Analytics Dashboard** 

Provides you with an analytics overview of your farm. The dashboard displays information about the number of total hits and visitors on the farm's site collections, the total number of searches, and trends for those metrics compared to the previous week. Here, you can find your most visited site collections, top searched terms and most popular documents. Lastly, the farm's storage usage information is provided.

## Analytics

* **Farm Analytics** - Shows an overview of the general usage metrics of your SharePoint farms - the number of hits and unique farm's visitors in the last 7 days, as well as the number of total and active site collections. Those metrics are compared to the previous week and trends displayed in the Total Hits, Visitors, and Active Site Collections columns. Use the **Explore Farm** button to view Site Collection Analytics report for the selected farm.
* **Site Collection Analytics** - Shows the total number of hits each site collection had in the last 7 days along with the maximum number of daily unique visitors, and how the hits compare to the previous period. Also includes data on each site collection's size, the number of subsites, and a date when it was last accessed and last modified. Use the **Explore Site Collection** button to view Subsite Analytics report for the selected site collection.
* **Site Collection Visitors** – Shows a list of all visitors on the selected site. 
* **Subsite Analytics** - Shows the total number of hits each subsite had in the last 7 days along with the maximum number of daily unique visitors, and how those metrics compare to the previous week. Also includes data on each subsite's size, the number of subsites, as well as date when it was last accessed and modified. Use the **Show Document Analytics** button to open the Document Analytics showing data for the associated site collection.
* **Document Analytics** - Shows recently viewed documents on a site collection, along with the information on the number of times a document has been viewed and edited. Includes details on all the actions performed on a specific document as well as the time and users who performed it. 
* **Most Popular Documents** - Shows the top 1000 most popular documents on a farm base on the number of views in the selected time period.

## Search Analytics

* **Search Analytics** - Shows an overview of the number of search queries performed on each farm in the last 7 days. Also displays trends in those metrics compared to the previous week. Use the **Explore Top Queries** to view the most popular search queries for the selected farm. 
* **Top Queries** - Shows the most popular search queries in the last 7 days, as well as the number and percentage of abandoned and no result searches for each searched term. 

## Usage & Structure

* **SharePoint Structure** – Shows a hierarchical structure of selected site collections down to the list item level. The Include Content filter allows you to change the report’s granularity.
* **Recently Created Subsites** - Shows subsites that have been created recently.
* **Inactive Subsites** - Shows subsites which are inactive because they had no visitors in the selected time range.
* **Recently Created Lists** - Shows lists and document libraries that have been created recently.
* **Unmodified Lists** - Shows lists and document libraries without any content modification in the selected time range
* **Recently Created Documents** - Shows documents and list items that have been created recently.
* **Recently Modified Documents** - Shows documents and list items that have been created recently.
* **Dead Documents** – Shows you a list of documents to which their author no longer has access, documents whose author can no longer be found on the farm, or those whose author has been disabled or deleted from the AD.  
* **Content Type Usage** – Shows all lists that contain a specific content type within a selected site collection.  

## Storage Metrics & Growth

* **Farm Growth** - Shows the total size and the amount of space used by all service and content databases on each farm. Shows the total size of the data files, the amount of space used for storing data, the size of the log files and the total sum of those values. Use the **Explore Farm Databases** button to open the Database Growth report showing data for the selected farm. 
* **Database Growth** - Shows the amount of space used by service and content databases on a farm for data files and the amount of data they actually contain, log files and the total size of the databases.
* **Storage Metrics** – Shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the biggest storage space consumer. 
* **Large Documents** - Lists the top 1000 largest documents on the selected farm. Only shows documents larger than 50MB or with more than 50 versions.
* **Document Extensions Overview** - Shows the number of documents and their total size by extension.
* **Document Extensions Details** - Shows the number of documents and their total size by extension for each site collection. 

## Feature reports

* **Features List** – Shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope. 
* **Activations** – displays a list of SharePoint objects on which a specific feature is activated.
* **Activations by Edition** – displays all features on the selected site collections, grouped by SharePoint edition.

  **Feature Usage**

  **Feature Usage by Edition** – Shows the usage of feature licenses per SharePoint edition \(Foundation, Standard or Enterprise\). To see a complete report, define the number of available feature licenses using [License Management](../../configure-and-extend-spdockit/license-management.md).

  **Feature Usage by Scope** – checks license compliance for custom features at different farm scopes \(**Web application**, **Site Collection**, or **Subsite**\). To see a complete report, define the number of available custom feature licenses using [License Management](../../configure-and-extend-spdockit/license-management.md).

## Document Reports

This SPDocKit plugin will help you detect old documents and list item in your farm. Two reports are available:

**Old List Items** - Lists all list items older than the selected date range.  
**Old Documents** - Lists all documents older than the selected date range.

{% hint style="warning" %}
**Please note!**   
The **Document Reports section** will be visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the extension.
{% endhint %}

## SPCAF Reports

SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s \(WSPs or Add-ins\) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.  
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) using Extension Manager.

**Available reports**: Analysis Summary, Code Quality, Code Metrics, Code Dependencies and Code Inventory.  
**Supported SharePoint versions**: SP2013, SP2016.

{% hint style="warning" %}
**Please note!**   
The **SPCAF Reports section** will become visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the extension.
{% endhint %}

## Workflow Reports

This plugin for SPDocKit will allow you to analyze workflow usage on your farm.

**Workflows per Site** – Lists available workflow templates on your sites.  
**Workflows on Farm** – Shows workflow usage on your farm.

Visit the [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.

{% hint style="warning" %}
**Please note!**   
The **Workflow Reports section** will become visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the extension.
{% endhint %}

