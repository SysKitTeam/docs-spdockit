---
title: Create Custom Best Practices Reports
description: >-
  This section describes how SharePoint administrators can use SPDocKit to
  create Best Practices reports for a SharePoint Farm.
author: Iva Novoselic
date: 25/5/2017
---

# create-custom-best-practices-reports

This section describes how SharePoint administrators can use SPDocKit to create Best Practice reports for a SharePoint Farm. In this guide, we will show you how you can build a report that counts the number of content databases per Web application.

1. After taking a manual snapshot or loading an older snapshot, go to the Best Practices tab in your navigation bar. To create a custom report, click **New**.
2. The Best Practice wizard will open. Type in the **Name** and the **Description** of your new report. Select a Location and then click Next to continue.
3. Choose the **Data Source** from the list. For the purposes of this report, select Farm &gt; Application Management &gt; Databases &gt; Content Databases, and then click Next to continue.
4. Select the fields you want to include in your report. The fields offered depend on your **Data Source** selection from the previous step. For this report, choose Database Name and Web Application. Click Next to continue.
5. Once you have selected your fields, choose how your data will be grouped. For this report,group data by the Web Application name field. Click Next to continue.
6. Choose the Aggregation Type **Count**. Click Next to continue.
7. You can choose the sorting order and specify the order of your fields. In this case, we are going to choose **Ascending**. Click Next to continue.
8. Select the fields where you want to apply the formatting. You can edit the conditional formatting rules by clicking the underlined value **specific**. For this report, select the field **COUNT \(Database Name\)**. Click Next to continue.
9. Enter the preferred values and formatting rules. Click OK. In this case, we will adjust the values so that when the number of databases per Web application is over 300, the report will show an error. If the value is between 250 and 300, the report will show a warning, and if the value is less than 250 the report will give a positive result.
10. You can add conditions to filter data. Click the underlined value **specific** to edit the conditions. For example, when the condition **Does Not Contain** is selected, the report will not show Web applications that contain an entered value in their names. For this case, enter "Central Administration" to filter out that Web application from the report.
11. Click Next, then click Finish to close the wizard. Wait a few seconds and your SharePoint Best Practice report will be created!

Download this report: [Number of content databases per Web Application](create-custom-best-practices-reports.md#internal/_assets/Number-of-content-databases-per-Web-Application.zip).

