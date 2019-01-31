---
title: Audit Dashboard
description: This article describes Audit Dashboard and its features.
Author: Janko Ban
date: 14/12/2018.
---

# Audit Dashboard

Audit Dashboard is giving you an overview of the audit actions in the farm for the last 7 days, drillable to specific detailed reports.

Audit Dashboard makes monitoring of the audit actions easier and more intuitive.

The following tiles with audit actions are visible:

* Site Collections with Audit enabled/disabled
* Number of SharePoint groups created
* Number of broken Permission Inheritance's
* Top Users by Activity
* Top Site Collections by Changes
* Number of Document Views
* Number of Changes per Event type
* Top 5 Administrative actions performed on the farm

__Site Collections with Audit enabled/disabled__ tile shows you a number of Site Collections with Audit options enabled/disabled. Clicking on the tile drills to the Audit Settings report with all Web Applications preselected.

Tile is disabled when all Site Collections audit settings are disabled.

__SP Groups Created and Number of Permission Inheritance Broken__ tile show a number of Sharepoint Groups Created and Permission Inheritance Broken. Clicking on the tile drills to the Audit Log Details report. For the SP Groups created, the filter is set to Group Created in the Event type filter and for the Number of Permission Inheritance Broken, Event type filter is set to Permission Inheritance Broken.

Horizontal bar charts are showing __Top Users by Activity__ as well as __Top Site Collections by Change__ which when clicked perform a drill to the Audit Log Details Report with all Event type filter options preselected.

__Document Views__ are represented by the vertical bar chart for each of the last 7 days (if data available). Clicking on a specific day performs a drill to the Audit Log Details report with View, Open and Download options selected in the Event type filter.

Number of Changes per Event type shows the following audit actions which when clicked perform a drill opening Audit Details Log:

* Number of updates
* Search Queries
* Objects deleted (Sites/List items) - a number of deleted objects is also represented with the horizontal bar chart

__Top 5 Administrative Actions__ tile shows a number of Administrative actions performed on the farm drillable to detailed Administrative Actions report.

## Learn more:

* [Audit Log Details](../../../explore-reports-and-create-documentation/audit-reports/audit-dashboard.md)
* [Administrative Actions](../../../explore-reports-and-create-documentation/audit-reports/administrative-actions.md)
* [Audit Settings](../../../explore-reports-and-create-documentation/audit-reports/audit-settings.md)