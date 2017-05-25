---
title: Create Custom Best Practices Reports
description: This section describes how SharePoint administrators can use SPDocKit to create Best Practices reports for a SharePoint Farm.
author: Iva Novoselic
date: 25/5/2017  
---
This section describes how SharePoint administrators can use SPDocKit to create Best Practice reports for a SharePoint Farm. In this guide, we will show you how you can build a report that counts the number of content databases per Web application.

1. After taking a manual snapshot or loading an older snapshot, go to the Best Practices tab in your navigation bar. To create a custom report, click __New__.

1. The Best Practice wizard will open. Type in the __Name__ and the __Description__ of your new report. Select a Location and then click Next to continue.

1. Choose the __Data Source__ from the list. For the purposes of this report, select Farm > Application Management > Databases > Content Databases, and then click Next to continue.

1. Select the fields you want to include in your report. The fields offered depend on your __Data Source__ selection from the previous step. For this report, choose Database Name and Web Application. Click Next to continue.

1. Once you have selected your fields, choose how your data will be grouped. For this report,group data by the Web Application name field. Click Next to continue.

1. Choose the Aggregation Type __Count__. Click Next to continue.

1. You can choose the sorting order and specify the order of your fields. In this case, we are going to choose __Ascending__. Click Next to continue.

1. Select the fields where you want to apply the formatting. You can edit the conditional formatting rules by clicking the underlined value __specific__. For this report, select the field __COUNT (Database Name)__. Click Next to continue.

1. Enter the preferred values and formatting rules. Click OK.
In this case, we will adjust the values so that when the number of databases per Web application is over 300, the report will show an error. If the value is between 250 and 300, the report will show a warning, and if the value is less than 250 the report will give a positive result.

1. You can add conditions to filter data. Click the underlined value __specific__ to edit the conditions. For example, when the condition __Does Not Contain__ is selected, the report will not show Web applications that contain an entered value in their names. For this case, enter "Central Administration" to filter out that Web application from the report.

1. Click Next, then click Finish to close the wizard. Wait a few seconds and your SharePoint Best Practice report will be created!

Download this report: [Number of content databases per Web Application](https://www.spdockit.com/wp-content/uploads/2013/04/Number-of-content-databases-per-Web-Application.zip).