---
title: Take Automatic Snapshots
author: Tomislav Sirovec
date: 23/5/2017
description: This article explains how to perform a automatic snapshot (using a service account) in SPDocKit.
---

SPDocKit allows administrators to configure a schedule to create automatic SharePoint farm snapshots. Once configured, the SPDocKit Service can save your farm settings and send report subscriptions and alerts to selected users, document libraries, or network locations. Click [here](#internal/explore-reports-and-create-documentation/subscriptions-and-alerts/create-new-subscription/) for more information on how to do this.

1. Navigate to the Backstage Configuration Screen and click Configure.

1. Skip to the Service Settings option, select the Enable Service check box and type in the service account details. Click Validate Account and then Next to continue.  
__Please note!__ Check the [permission requirements](#internal/requirements/user-permissions-requirements) for the service account.  

1. Once the Configuration wizard is finished, navigate to the __Backstage Configuration Screen > Options > Service Settings__. You can change the snapshots folder location or choose to save them to the database. [Define the period](#internal/configure-and-extend-spdockit/options-wizard) for creating snapshots with the Data Collection Interval.

   With the __Database Index Reorganization__, you can enable automatic index reorganization. That means your database space usage and performance when reading data will improve. During index reorganization, SPDocKit might be unavailable.

1. Skip to the __Snapshot Options__ part of Options wizard and customize the snapshot options that are going to be used by the SPDocKit Service such as __Load Options__ and __Load Performance__.  With the __Load Depth__ option you can specify the depth to which you want to crawl your farm. Also, choose what you would like to load each time that SPDocKit Service crawls your farm.   

The options are grouped into 4 categories: 
  * __SharePoint__
     * The __Farm Settings__ checkbox will be selected by default. That means that SPDocKit will load farm settings by default and this option cannot be changed. 
     * __Content Types__ - When this option is selected, you’ll need to crawl down to each list on the farm since that is where the content types are defined.
     * SPDocKit also allows you to backup all __*.wsp files__ in use by your farm, but you’ll need to define a location for this backup. This data can also be used later to find out whether there are any problems with the assemblies deployed on your farm.
     * __Features and Solutions__, __Workflows__
     * __Document Versions, Extensions and Sizes__ - Enable this option to collect data about the __number of documents on a farm and their total size by extension__, which is used in Document Extensions Overview and Document Extension Details report.

  * __Security__ 
     * __Database Permissions__ - Selecting this will enable you to view the Database Permissions report. This report shows information about all users, across all databases on a SQL Server. 
     * __Permissions__ - If you want to know the permissions of each list item on the farm, you can get that information by selecting the __Permissions check box__ and setting the Load Depth to list item. You can also select the __Active Directory Group Members__ check box if you wish to load members of the AD groups. 
     * __Administrative Actions Log__ - this option will be visible only for SharePoint 2016 FP1 farms and enables you to browse and analyze administrative actions logs collected from your SharePoint farm.
     * __Audit Logs__ - this option is required to collect data for Audit Reports where a complete history of changes made on site collections is shown. Enable the __Include Changes Made by System Account__ to load actions made by the System Account. 

  * __Server Settings__ 
     * __Installed Programs and available Updates__
     * __SQL Server and IIS Settings Information__

  * __Project Server__ 
     * __Settings__
     * __Projects__ 
  
  To reduce the farm load time we recommend unchecking Personal Sites. 
  
  You can use the load performance slider to switch between low resource usage and a high-performance load. Click __Save__ when finished.  

1. Go to Load Target to select the scope on which SPDocKit Service will crawl for data – for example, the entire farm, Web application, site collection or specific subsites.

1. Click Save to apply changes and finish configuring the automatic SPDocKit Service for creating an automatic snapshot of your farm’s permissions state.



If you wish to receive an email notification after automatically-taken farm snapshots, follow these instructions:

1. Navigate to the __Backstage Configure Screen > Options > Subscription Settings.__
1. Check in __Subscriptions Enabled__ box, and select the __Enable email sending__ check box to enable email to be sent. Fill out the necessary details, then click __Test email settings__ to make sure that the email alert is set up properly. [Here](#internal/configure-and-extend-spdockit/options-wizard#subscription-settings) are more information on these settings.
3. Click __Save__ to close the Options wizard and apply the changes.
After that you need to create a new subscription. For detailed information on how to do that please go [here](#internal/explore-reports-and-create-documentation/subscriptions-and-alerts/create-new-subscription).