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

**Site Collections with Audit enabled/disabled** tile shows you a number of Site Collections with Audit options enabled/disabled. Clicking on the tile drills to the Audit Settings report with all Web Applications preselected.

Tile is disabled when all Site Collections audit settings are disabled.

**SP Groups Created and Number of Permission Inheritance Broken** tile show a number of Sharepoint Groups Created and Permission Inheritance Broken. Clicking on the tile drills to the Audit Log Details report. For the SP Groups created, the filter is set to Group Created in the Event type filter and for the Number of Permission Inheritance Broken, Event type filter is set to Permission Inheritance Broken.

Horizontal bar charts are showing **Top Users by Activity** as well as **Top Site Collections by Change** which when clicked perform a drill to the Audit Log Details Report with all Event type filter options preselected.

**Document Views** are represented by the vertical bar chart for each of the last 7 days \(if data available\). Clicking on a specific day performs a drill to the Audit Log Details report with View, Open and Download options selected in the Event type filter.

Number of Changes per Event type shows the following audit actions which when clicked perform a drill opening Audit Details Log:

* Number of updates
* Search Queries
* Objects deleted \(Sites/List items\) - a number of deleted objects is also represented with the horizontal bar chart

**Top 5 Administrative Actions** tile shows a number of Administrative actions performed on the farm drillable to detailed Administrative Actions report.

{% hint style="warning" %}
**Please Note!** The data is only available if you have Feature Pack 1 installed.
{% endhint %}

## Learn more:

* [Audit Log Details](audit-dashboard.md)
* [Administrative Actions](administrative-actions.md)
* [Audit Settings](audit-settings.md)

