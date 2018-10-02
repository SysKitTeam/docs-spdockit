---
title: Farm Explorer Screen
description: This article explains available Farm Explorer options. 
author: Tomislav Sirovec
date: 24/5/2017
---
Farm Explorer allows system administrators to explore SharePoint configuration settings that SPDocKit has loaded. Use the explorer on the left to browse and select specific reports.

## Home ribbon
The following commands are available:

* __Take Snapshot__– create a snapshot of your SharePoint farm.
* __Open__ – allows you to open a previously saved snapshot.
* __Save__ – save changes made to the snapshot.
* __Generate__ – generate SPDocKit farm documentation in a __.docx, .pdf or .xlsx__ file format.
* __Change Styles__ – customize the farm documentation's final look, choose different color styles or upload a custom template.
* __Export as PDF__ button allows you to export the selected report as a PDF document.
* __Export as XLSX__ button allows you to export the selected report as an XLSX document.
* __Export as DOCX__ button allows you to export the selected report as a DOCX document.
* __Compare Wizard__ – read more about the [Compare Wizard](#internal/compare-sharepoint-configurations/compare-wizard/).
* __Subscriptions and Alerts__ – create and manage your SPDocKit report subscriptions and alerts.
* __Schedule this Report__ – add the currently selected SPDocKit report to a new report subscription or a previously created one.
* __Options__ – read more about the [Options Wizard](#internal/configure-and-extend-spdockit/options-wizard).
* __Save XML Configuration__ – [wizard that helps you generate an AutoSPInstaller XML file](#internal/explore-reports-and-create-documentation/farm-explorer/generate-autospinstaller-xml-configuration-file/) based on the currently opened snapshot.

## Comments ribbon
The following commands are available:

* __Show__ - enable or disable comments.
* __Go to Report__ - opens the __All Comments__ report.
* __Add__ - allows you to add a new comment on the selected row.
* __Edit__ - enables you to edit existing comments.
* __Delete__ - enables you to delete existing comments. 

For more information about comments please read the [following article](#internal/explore-reports-and-create-documentation/customizing-reports/add-comments/).

## View ribbon
The following commands are available:

* __Choose Columns__ allows customization of a report view. Remove or reorder columns to personalize the report for your needs.
* __Reset Layout__ button restores the default report view settings.
* __Expand/Collapse__ buttons make exploring much easier especially when there is a large amount of data.
* __View in SharePoint__ – opens the specific Central Administration configuration page, depending on the selected report.

_The Site and Principal Permissions buttons are not enabled for Farm Explorer reports._


In version 7.2 we streamlined the selection of farms and snapshots by including those filters on the Farm Explorer and Best Practices tabs and persisting the selection across all tabs. This should remove the need to switch back and forth between the snapshots list and the other tabs in order to change the viewed snapshot data. We hope this results in a much more enjoyable experience for you.
