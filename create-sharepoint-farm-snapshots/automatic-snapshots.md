---
title: Take Automatic Snapshots
author: Tomislav Sirovec
date: 23/5/2017
description: >-
  This article explains how to perform a automatic snapshot (using a service
  account) in SPDocKit.
---

# Automatic Snapshots

SPDocKit allows administrators to configure a schedule to create automatic SharePoint farm snapshots. Once configured, the SPDocKit Service can save your farm settings and send report subscriptions and alerts to selected users, document libraries, or network locations. Click [here](../explore-reports-and-create-documentation/subscriptions-and-alerts/create-new-subscription.md) for more information on how to do this.

1. Navigate to the Backstage Configuration Screen and click Configure.  
2. Skip to the Service Settings option, select the Enable Service check box and type in the service account details. Click Validate Account and then Next to continue. 

{% hint style="warning" %}
**Please note!** Check the [permission requirements](../requirements/user-permissions-requirements.md) for the service account.
{% endhint %}

1. **Once the Configuration wizard is finished, navigate to the** Backstage Configuration Screen &gt; Options &gt; Service Settings\*\*. You can change the snapshots folder location or choose to save them to the database. [Define the period](../configure-and-extend-spdockit/options-wizard.md) for creating snapshots with the Data Collection Interval.

With the **Database Index Reorganization**, you can enable automatic index reorganization. That means your database space usage and performance when reading data will improve. During index reorganization, SPDocKit might be unavailable.

1. Skip to the **Snapshot Options** part of Options wizard and customize the snapshot options that are going to be used by the SPDocKit Service such as **Load Options** and **Load Performance**. With the **Load Depth** option you can specify the depth to which you want to crawl your farm. Also, choose what you would like to load each time that SPDocKit Service crawls your farm.

The options are grouped into 4 categories:

* **SharePoint**
  * The **Farm Settings** checkbox will be selected by default. That means that SPDocKit will load farm settings by default and this option cannot be changed. 
  * **Content Types** - When this option is selected, you’ll need to crawl down to each list on the farm since that is where the content types are defined.
  * SPDocKit also allows you to backup all **\*.wsp files** in use by your farm, but you’ll need to define a location for this backup. This data can also be used later to find out whether there are any problems with the assemblies deployed on your farm.
  * **Features and Solutions**, **Workflows**
  * **Document Versions, Extensions and Sizes** - Enable this option to collect data about the **number of documents on a farm and their total size by extension**, which is used in Document Extensions Overview and Document Extension Details report.
* **Security**
  * **Database Permissions** - Selecting this will enable you to view the Database Permissions report. This report shows information about all users, across all databases on a SQL Server. 
  * **Permissions** - If you want to know the permissions of each list item on the farm, you can get that information by selecting the **Permissions check box** and setting the Load Depth to list item. You can also select the **Active Directory Group Members** check box if you wish to load members of the AD groups. 
  * **Administrative Actions Log** - this option will be visible only for SharePoint 2016 FP1 farms and enables you to browse and analyze administrative actions logs collected from your SharePoint farm.
  * **Audit Logs** - this option is required to collect data for Audit Reports where a complete history of changes made on site collections is shown. Enable the **Include Changes Made by System Account** to load actions made by the System Account. 
* **Server Settings**
  * **Installed Programs and available Updates**
  * **SQL Server and IIS Settings Information**
* **Project Server**

  * **Settings**
  * **Projects** 

  To reduce the farm load time we recommend unchecking Personal Sites.

  You can use the load performance slider to switch between low resource usage and a high-performance load. Click **Save** when finished.

* Go to Load Target to select the scope on which SPDocKit Service will crawl for data – for example, the entire farm, Web application, site collection or specific subsites.
* Click Save to apply changes and finish configuring the automatic SPDocKit Service for creating an automatic snapshot of your farm’s permissions state.

If you wish to receive an email notification after automatically-taken farm snapshots, follow these instructions:

1. Navigate to the **Backstage Configure Screen &gt; Options &gt; Subscription Settings.**
2. Check in **Subscriptions Enabled** box, and select the **Enable email sending** check box to enable email to be sent. Fill out the necessary details, then click **Test email settings** to make sure that the email alert is set up properly. [Here](../configure-and-extend-spdockit/options-wizard.md#subscription-settings) are more information on these settings.
3. Click **Save** to close the Options wizard and apply the changes.

   After that you need to create a new subscription. For detailed information on how to do that please go [here](../explore-reports-and-create-documentation/subscriptions-and-alerts/create-new-subscription.md).

