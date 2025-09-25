---
description: This article explains how to use SPDocKit Document Extensions Overview report and Document Extension Details report to track the largest documents on a farm.
---

---
sidebar_position: 4
---

# Document Extensions Reports

This article explains how you can use the **Document Extensions Overview report** and **Document Extension Details report** to inspect space usage by documents. The Document Extension Overview report enables you to see the **number of documents on a farm and their total size by extension**, while the Document Extension Details report enables you to see the **number of documents and their total size by extension on each site collection**. This report also contains a list of all documents for the selected site collection and extension.

Report data comes from the [SPDocKit database](../../configuration/configure-spdockit-database.md).

In order to view space usage by farm documents, you must take a snapshot with load depth set to List Items and Document Versions, with the Extensions and Sizes option checked.

To view the Document Extensions Overview report and the Document Extension Details report, go to **Analytics & Usage Report &gt; Storage Metrics & Growth**. Both reports are listed here. The Document Extensions Overview report includes the farm filter if stored data comes from multiple farms. Document Extension Details report additionally includes the Extension filter. Select the appropriate filter values to view the reports. Alternatively, you can open the Document Extension Details report directly from the Document Extensions Overview report by clicking on the **Drill Down** button on the ribbon. In that case, the report filters will automatically be filled with the farm and the file extension selected in the Document Extensions Overview report.

The Document Extensions **Overview report** contains a chart and grid with the following columns:

* **Document Extension** - File extension type \(e.g., docx, xlsx, pdf, txt, bin, etc.\).
* **Document Count** - Number of documents by extension \(on a farm\).
* **Document Size \[MB\]** - Total amount of space used by documents, expressed in megabytes.

The Document Extension **Details report** contains the following columns:

* **Site Collection Url** - Absolute URL of the site collection.
* **Document Extension** - File extension type \(e.g., docx, xlsx, pdf, txt, bin, etc.\).
* **Document Count** - Number of documents by extension \(in a site collection\).
* **Document Size \[MB\]** - Total amount of space used by documents, expressed in megabytes.

You can customize this grid by adding an optional column:

* **Site Collection** - Relative URL of the site collection.

The Document Extension Details report also includes a list of all documents for the selected site collection and file extension, placed below the main grid. By default, this additional grid contains the following columns:

* **Title** - Document title.
* **Version Count** - Total number of versions of the document.
* **Document Size \[MB\]** - Total amount of space used by the document, expressed in megabytes.
* **Url** - Absolute URL of the document.

Important: You can only load the Document Versions, Extensions and Sizes with SPDocKit on a SharePoint machine, not on a workstation. However, once loaded, data can be viewed on a workstation as well.

