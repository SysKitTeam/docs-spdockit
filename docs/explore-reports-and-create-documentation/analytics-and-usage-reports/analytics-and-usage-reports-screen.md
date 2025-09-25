---
description: This article describes how to use SPDocKit analytics and usage section to quickly get an overview of your farm storage and content usage, features usage and activations, and SharePoint structure.
---

# Analytics and Usage Reports Screen

**Analytics and Usage Reports** provide a quick overview of your farm storage and content usage, features usage and activations, and SharePoint structure.

## **Analytics Dashboard**

Provides you with an analytics overview of your farm. The dashboard displays information about the total number of hits on and visitors to the farm’s site collections, the total number of searches, and trends for those metrics compared to the previous week. Here, you can find your most visited site collections, top searched terms, and most popular documents. Lastly, the farm’s storage usage information is provided.

## Analytics

* **Farm Analytics** - Shows an overview of the general usage metrics of your SharePoint farms: the number of hits and unique visitors in the previous seven days, as well as the numbers of total and active site collections. Those metrics are compared with the last week and the trends are displayed in the Total Hits, Visitors, and Active Site Collections columns. Use the **Explore** Farm button to view the Site Collection Analytics report for the selected farm.
* **Site Collection Analytics** - Shows the total number of hits each site collection had in the previous seven days along with the maximum number of unique daily visitors, and how those hits compare to the previous period. It also includes data on each site collection’s size, the number of subsites, and the date when it was last accessed and last modified. Use the **Explore Site Collection** button to view the Subsite Analytics report for the selected site collection.
* **Site Collection Visitors** – Shows a list of all visitors to the selected site.
* **Subsite Analytics** - Shows the total number of hits each subsite had in the previous seven days along with the maximum number of unique daily visitors, and how those metrics compare to the previous week. It also includes data on each subsite’s size, the number of subsites, as well as the dates when it was last accessed and modified. Use the **Show Document Analytics** button to open the Document Analytics report, showing data for the associated site collection.
* **Document Analytics** - Shows the recently viewed documents on a site collection, along with information on the number of times a document has been viewed and edited. It includes details on all the actions performed on a specific document, such as the time, and the users who performed those actions.
* **Most Popular Documents** - Shows the 1,000 most popular documents on a farm base, based on the number of views in the selected time period.

## Search Analytics

* **Search Analytics** - Shows an overview of the number of search queries performed on each farm in the previous seven days. Also displays trends in those metrics compared with the last week. Use the **Explore Top Queries** option to view the most popular search queries for the selected farm.
* **Top Queries** - Shows the most popular search queries in the previous seven days, as well as the number and percentage of abandoned and no-result searches for each searched term.

## Usage & Structure

* **SharePoint Structure** – Shows a hierarchical structure of selected site collections down to the list item level. The Include Content filter allows you to change the report’s granularity.
* **Recently Created Subsites** – Shows subsites that have been created recently.
* **Inactive Subsites** – Shows subsites that are inactive \(with no visitors in the selected time range\).
* **Recently Created Lists** – Shows lists and document libraries that have been created recently.
* **Unmodified Lists** – Shows lists and document libraries without any content modification in the selected time range.
* **Recently Created Documents** – Shows documents and list items that have been created recently.
* **Recently Modified Documents** – Shows documents and list items that have been modified recently.
* **Dead Documents** – Shows you a list of documents to which the authors no longer have access, documents whose authors can no longer be found on the farm, or whose authors have been disabled or deleted from the AD. 
* **Content Type Usage** – Shows all lists that contain a specific content type within a selected site collection. 

## Storage Metrics & Growth

* **Farm Growth** - Shows the total size and the amount of space used by all service and content databases on each farm. Shows the total size of the data files, the amount of space used to store data, the size of the log files, and the total sum of those values. Use the **Explore Farm Databases** button to open the Database Growth report showing data for the selected farm. 
* **Database Growth** - Shows the amount of space used by service and content databases on a farm for data files and the amount of data they contain, log files, and the total size of the databases.
* **Storage Metrics** – Shows you the storage space used by each SharePoint object on the farm. You can easily see the object’s size relative to the total size of the content database and quickly find the consumer of storage space. 
* **Large Documents** - Lists the top 1000 largest documents on the selected farm. Only shows documents larger than 50MB or with more than 50 versions.
* **Document Extensions Overview** - Shows the number of documents and their total size by extension.
* **Document Extensions Details** - Shows the number of documents and their total size by extension for each site collection. 
* **Files** - Provides information about each document in a subsite, such as size, versioning, and time when it was last updated. 
* **Lists and Libraries** - Shows a complete overview of Lists and Document Libraries in the selected SharePoint subsite; for each of them, the number of items, size, and last update time is displayed.

{% hint style="warning" %}
**Please note!**  
The **Lists and Libraries** and **Files** report will be visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the **Storage Reports extension**.
{% endhint %}

## Feature reports

* **Features List** – Shows all features present on a SharePoint farm. It also specifies whether the feature is custom or default, and its scope. 
* **Activations** – displays a list of SharePoint objects on which a specific feature is activated.
* **Activations by Edition** – displays all features on the selected site collections, grouped by SharePoint edition.
* **Feature Usage**
  * **Feature Usage by Edition** – Shows the usage of feature licenses per SharePoint edition \(Foundation, Standard, or Enterprise\). To see a complete report, define the number of available feature licenses using [License Management](../../configure-and-extend-spdockit/license-management.md).
  * **Feature Usage by Scope** – checks license compliance for custom features at different farm scopes \(**Web application**, **Site Collection**, or **Subsite**\). To see a complete report, define the number of available custom feature licenses using [License Management](../../configure-and-extend-spdockit/license-management.md).

## Workflow Reports

Workflow reports enable you to:

* **detect all workflows and workflow templates in your SharePoint farm**, be it SharePoint 2010, 2013, 2013 Project Server workflows, or third party vendor workflows, such as Nintex workflows,
* **view the count of associations and active instances**, and other information related to workflows,
* **discover when a workflow was last active**.

Three reports are available:

* **Workflows on Farm** – Lists all workflows in your farm and gives additional information for each workflow, such as the number of associations and active instance counts and the last activity date. 
* **Workflow Templates** - Shows all workflow templates grouped by site, their type, number of associations, and instance counts. 
* **Workflow Associations** - Shows all workflow associations grouped by template name, target SharePoint objects, and defined History and Task lists.

## Document Reports

This SPDocKit plugin will help you detect old documents and list items in your SharePoint farm. Two reports are available:

**Old List Items** - Lists all list items older than the selected date range.  
**Old Documents** - Lists all documents older than the selected date range.

{% hint style="warning" %}
**Please note!**  
The **Document Reports section** will be visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the **Document Usage extension**.
{% endhint %}

## SPCAF Reports

SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about a SharePoint customization’s \(WSPs or Add-ins\) code quality, dependencies, and complexity, among other things.  
Find out more [about SPCAF](https://www.spcaf.com/) and how it can help you keep your SharePoint farm healthy and clean.  
Use SPDocKit to load WSPs information from your SharePoint farm and then analyze them by [adding SPCAF extension reports](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) using Extension Manager.

**Available reports**: Analysis Summary, Code Quality, Code Metrics, Code Dependencies, and Code Inventory.  
**Supported SharePoint versions**: SP2013, SP2016.

{% hint style="warning" %}
**Please note!**  
The **SPCAF Reports section** will become visible in the navigation tree only after [installing](../../configure-and-extend-spdockit/extend-spdockit/install-spdockit-extensions.md) the **SPCAF Code Analysis Reports extension**.
{% endhint %}

