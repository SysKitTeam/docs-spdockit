---
description: This article explains how you can use the Site Collection Analytics report.
sidebar_position: 3
---

# Site Collection Analytics

The report shows the total number of hits each site collection had in the last seven days, along with the maximum number of daily unique visitors, and how the number of hits during that week compares to the previous period. The report also includes data on each site collection's size, the number of subsites it has, and the dates when it was last accessed and last modified.

Report data comes from the [SPDocKit database](../../configuration/configure-spdockit-database.md), and in order to start collecting the data, you need to enable the SharePoint Analytics Collection. To do so, go to **Options &gt; Service Settings** and enable the checkbox "Enable collection of site analytics from SharePoint's Usage and Health Data Collection service". For more information on available options, read [this article](../../configure-and-extend-spdockit/options-wizard.md).

In the field below, you can find a list of accounts to ignore when collecting analytics. This can be useful if you do not want the report to be cluttered with "less relevant" system users. The form is essentially a people picker; you can add any user you want here. However, the hits made by users you enter here **will not** be taken into account when collecting data used in reports.

To view the report go to **Analytics & Usage Reports &gt; Analytics &gt; Site Collection Analytics**.

The Site Collection Analytics report grid contains these columns:

* **Site Collection Url** - Relative URL of the site collection.
* **Total Hits** - Number of total visits to a given site collection.
* **Visitors** - Average number of **visitors** to a given site collection in the last seven days.

:::warning
**Please note** the red or green triangle indicating the trend. It will show you how the page visits compare to the previous period (the previous seven days).
:::

* **Size \[MB\]** - Size in MBs of a given site collection.
* **Number of Subsites** - Number of subsites in the selected site collection.
* **Active Subsites** - Number of active subsites for every site collection.
* **Last Accessed** - Date when the site collection was last accessed.
* **Last Content Modified** - Date when the content on a site collection was last modified.

You can customize this grid by adding an optional column:

* **Web Application** - Web application name. 

Click on a grid row and a corresponding chart will load at the bottom. The chart can be modified to show **visitors, storage, and subsites**. Also, the data range can be changed either by clicking on a **zoom button** or by moving the mouse wheel.

