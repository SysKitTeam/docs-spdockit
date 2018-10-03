---
title: Explore Farm Documents
description: This article explains how to use SPDocKit Document Extensions Overview report and Document Extension Details report to track the largest documents on a farm.
author: Mia Tomaić
date: 02/10/2018
---

This article explains how you can use the __Document Extensions Overview report__  and __Document Extension Details report__ to inspect space usage by documents. Document Extension Overview report enables you to see __number of documents on a farm and their total size by extension__, while Document Extension Details report enables you to see __number of documents and their total size by extension on each site collection__. This report also contains a list of all documents for the selected site collection and extension.

Report data comes from [SPDocKit database](#internal/configuration/configure-spdockit-database).

In order to view space usage by farm documents, you must take a snapshot with load depth set to List Items and Document Versions, Extensions and Sizes option checked.  

To view the Document Extensions Overview report and the Document Extension Details report go to __Analytics & Usage Report -> Storage Metrics & Growth__. Both reports are listed here. Document Extensions Overview report includes the Farm filter if stored data comes from multiple farms. Document Extension Details report additionally includes the Extension filter. Select the appropriate filter values to view the reports. Alternatively, you can open the Document Extension Details report directly from the Document Extensions Overview report by clicking on the Drill Down button on the ribbon. In that case, the report filters will automatically be filled with the farm and the file extension selected in the Document Extensions Overview report.

The Document Extensions __Overview report__ contains chart and grid with these columns:

* __Document Extension__ - File extension type (e.g. docx, xlsx, pdf, txt, bin, etc.).
* __Document Count__ - Number of documents by extension (on a farm).
* __Document Size [MB]__ - Total space used by documents expressed in megabytes.

The Document Extension __Details report__ contains these columns:

* __Site Collection Url__ - Absolute URL of the site collection.
* __Document Extension__ - File extension type (e.g. docx, xlsx, pdf, txt, bin, etc.).
* __Document Count__ - Number of documents by extension (on a site collection).
* __Document Size [MB]__ - Total space used by documents expressed in megabytes.

You can customize this grid by adding optional column:

* __Site Collection__ - Relative URL of the site collection.

The Document Extension Details report also includes a list of all documents for the selected site collection and file extension, placed below the main grid.
By default, this additional grid contains these columns:

* __Name__ - Document name.
* __Version Count__ - Total number of the document versions.
* __Document Size [MB]__ - Total space used by document expressed in megabytes.
* __Url__ - Absolute URL of the document.

Important: You can only load the Document Versions, Extensions and Sizes with SPDocKit on a SharePoint machine, not on a workstation. However, once loaded, data can be viewed on a workstation as well.