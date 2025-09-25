---
description: This article explains available Farm Explorer options.
sidebar_position: 1
---

# Farm Explorer Screen

Farm Explorer allows system administrators to explore SharePoint configuration settings that SPDocKit has loaded. Use the explorer on the left to browse and select specific reports.

## Home ribbon

The following commands are available:

* **Take Snapshot**– create a snapshot of your SharePoint farm.
* **Open** – allows you to open a previously saved snapshot.
* **Save** – save changes made to the snapshot.
* **Generate** – generate SPDocKit farm documentation in a **.docx, .pdf or .xlsx** file format.
* **Change Styles** – customize the farm documentation's final look, choose different color styles or upload a custom template.
* **Export as PDF** button allows you to export the selected report as a PDF document.
* **Export as XLSX** button allows you to export the selected report as an XLSX document.
* **Export as DOCX** button allows you to export the selected report as a DOCX document.
* **Compare Wizard** – read more about the [Compare Wizard](../../compare-sharepoint-configurations/compare-wizard.md).
* **Subscriptions and Alerts** – create and manage your SPDocKit report subscriptions and alerts.
* **Schedule this Report** – add the currently selected SPDocKit report to a new report subscription or a previously created one.
* **Options** – read more about the [Options Wizard](../../configure-and-extend-spdockit/options-wizard.md).
* **Save XML Configuration** – [wizard that helps you generate an AutoSPInstaller XML file](generate-autospinstaller-xml-configuration-file.md) based on the currently opened snapshot.

## Comments ribbon

The following commands are available:

* **Show** - enable or disable comments.
* **Go to Report** - opens the **All Comments** report.
* **Add** - allows you to add a new comment on the selected row.
* **Edit** - enables you to edit existing comments.
* **Delete** - enables you to delete existing comments. 

For more information about comments please read the [following article](../customizing-reports/add-comments.md).

## View ribbon

The following commands are available:

* **Choose Columns** allows customization of a report view. Remove or reorder columns to personalize the report for your needs.
* **Reset Layout** button restores the default report view settings.
* **Expand/Collapse** buttons make exploring much easier especially when there is a large amount of data.
* **View in SharePoint** – opens the specific Central Administration configuration page, depending on the selected report.

:::info
The Site and Principal Permissions buttons are not enabled for Farm Explorer reports.
:::

In version 7.2 we streamlined the selection of farms and snapshots by including those filters on the Farm Explorer and Best Practices tabs and persisting the selection across all tabs. This should remove the need to switch back and forth between the snapshots list and the other tabs in order to change the viewed snapshot data. We hope this results in a much more enjoyable experience for you.

