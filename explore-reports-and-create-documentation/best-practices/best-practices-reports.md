---
title: Available Best Practices Reports
description: >-
  This article describes which best practices reports are available in SPDocKit
  and can help you keep your SharePoint farm healthy.
author: Iva Novoselic
date: 25/5/2017
---

# Best Practices Reports

## Available Reports

We have prepared a detailed overview of all available reports in SPDocKit with descriptions and instructions in our [Best Practices Library](https://docs.syskit.com/bp/).

### Visit our best practices library

The built-in reports contain information from various sources: most of them come from official articles by **TechNet**, **MSDN**, or other reliable sources, and some pieces of information come from personal experience. The purpose of these articles is to help you validate your farm configuration and optimize it according to the latest SharePoint best practices.

### Available best practices checks

With each new release, Best Practices are extended with new reports. Our tool covers the following areas:

* Configuration
* Databases
* Hardware Requirements
* Maintenance
* Monitoring and Logging
* Service Applications
* SharePoint Software Boundaries and Limits
* Site Collection Health
* Updates
* Web Applications

We will regularly update all articles delivered with this product, but please note that the guidance information might change frequently, so we encourage you to check the official resources for changes. Below every article [in the library](https://docs.syskit.com/bp/) you will find all relevant and official articles listed in the Additional information section.

## Create Custom Reports

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

Download this report: [Number of content databases per Web Application](../_assets/Number-of-content-databases-per-Web-Application.zip).

## Personalize Reports

### Create a new best practices report

The first option is to create a completely new Best Practices report using the Best Practices wizard.

The second option is to save the built-in Best Practices report as a new one and then modify some of the settings so that this report better matches your SharePoint settings. Use the **Save As** button to save the desired report under a different name and then the **Edit** button to configure new settings.

### Adjust the best practices dashboard view

Click **Customize Best Practices** on the Best Practices Home ribbon. Deselect the check boxes for the reports you don’t want to monitor. Click Save to finish adjusting your dashboard view.

### Customize the built-in best practices values

Best Practices reports checking some numerical values, like the amount of RAM per server, can be customized as well. Select the Best Practices report you would like to modify, click **Customize Best Practices** and edit the numerical values on the right to fit your requirements.

Please note that if you edit these values, the Best Practice report will display a warning that the default values have been changed.

