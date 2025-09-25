---
description: This article describes Audit Dashboard and its features.
---

# Audit Dashboard

**The Audit Dashboard** gives you an overview of the audit actions in the farm for the previous seven days, drillable to specific detailed reports.

The Audit Dashboard makes the monitoring of audit actions easier and more intuitive.

**The following tiles with audit actions are visible:**

* Site Collections with Audit enabled/disabled
* Number of SharePoint groups created
* Number of broken Permission Inheritances
* Top Users by Activity
* Top Site Collections by Change
* Number of Document Views per day
* Number of Changes per Event type
* Top 5 Administrative actions

The **Site Collections with Audit enabled/disabled tile** shows you a number of Site Collections with Audit options enabled/disabled. Clicking on the tile drills to the[ **Audit Settings**](audit-settings.md) report with all Web Applications preselected. The tile is disabled when all Site Collections audit settings are disabled.

The **SP Groups Created** and number of **Permission Inheritances Broken** **tile** shows the number of Sharepoint Groups Created and Permission Inheritances Broken. Clicking on the tile drills to the [**Audit Log Details**](audit-log-details.md) report. For the SP Groups created, the filter is set to Group Created in the Event type filter, and for the Number of Permission Inheritances Broken, the Event type filter is set to Permission Inheritance Broken.

Horizontal bar charts show **Top Users by Activity** as well as **Top Site Collections by Change**. Click on them to perform a drill to the [**Audit Log Details**](audit-log-details.md) report with all Event type filter options preselected.

**Document Views** are represented by a vertical bar chart for each of the previous seven days \(if data are available\). Clicking on a specific day performs a drill to the [**Audit Log Details**](audit-log-details.md) report, with View, Open, and Download options selected in the Event type filter.

**Number of Changes per Event type** shows the following audit actions, which when clicked on will open the [**Audit Log Details**](audit-log-details.md) report:

* Number of updates
* Search Queries
* Objects deleted \(Sites/List items\) – the number of deleted objects is also shown in a horizontal bar chart

The **Top 5 Administrative Actions tile** shows the number of Administrative actions performed on the farm, and is drillable to a detailed [**Administrative Actions**](administrative-actions.md) report.

{% hint style="warning" %}
**Please note!**  
The Administrative Actions data is available only if you have SharePoint 2016 Feature Pack 1 installed.
{% endhint %}

## Learn more:

* [Audit Log Details](audit-dashboard.md)
* [Administrative Actions](administrative-actions.md)
* [Audit Settings](audit-settings.md)

