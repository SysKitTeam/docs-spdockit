---
title: Take Manual Snapshots
author: Tomislav Sirovec
date: 23/5/2017
description: This article explains how to perform a manual snapshot in SPDocKit
---

# manual-snapshots

This section describes how you can use the SPDocKit Snapshot wizard to collect SharePoint farm settings and permissions. Please note! Adjustments and settings you make using this wizard apply to the current snapshot-taking process only. If you wish to configure a default snapshot-taking setting, use the [Options wizard](manual-snapshots.md#internal/get-to-know-spdockit/backstage-screen/options-wizard). The selection you make there will be used as a default load template.

1. Navigate to the Backstage Actions Screen and click the Take Snapshot button.
2. Select the snapshot mode you wish the application to execute. There are three choices:

   * **Default** – Performs a load using the setup provided in the [Snapshot Options](manual-snapshots.md#internal/get-to-know-spdockit/backstage-screen/options-wizard) and [Load Target](manual-snapshots.md#internal/get-to-know-spdockit/backstage-screen/options-wizard). This includes farm settings, features and solutions, and permissions down to the subsite level on the whole farm by default, and can be changed by the user at any time in the Options Wizard.
   * **Custom** – Allows the user to specify exactly what information should be loaded. You can also choose which Web applications, site collections or even subsites data will be retrieved.

     It can be the fastest load option if the user wishes to have access only to specific data, and is aware what data he is interested in. This mode is recommended for more advanced users who are looking to generate specific reports.

   * **Full** – Performs a load that collects all available information where possible \(some data will still not be collected if a database is not used with SPDocKit\).

     This is the recommended load mode if you don’t mind waiting and want to be sure you have all the data once the load finishes.

   **Please note!** What you choose to take a snapshot of, within the Custom mode, applies only to the current load and does not affect loading executed by the SPDocKit service.

3. Choose what you would like to load. This page is only available if you have chosen the Custom mode; otherwise it will be skipped together with the Target page.

   With the Load Depth option you can specify the depth to which you want to crawl your farm.

   We redesigned the load screen to be more user friendly, and added more loading options. There are 4 categories:

   * **SharePoint**
     * The **Farm Settings** check box will be selected by default. That means that SPDocKit will load farm settings by default and this option cannot be changed. 
     * **Content Types** - When this option is selected, you’ll need to crawl down to each list on the farm, since that is where the content types are defined.
     * SPDocKit also allows you to backup all **\*.wsp files** in use by your farm, but you’ll need to define a location for this backup. This data can also be used later to find out whether there are any problems with the assemblies deployed on your farm.
     * **Features and Solutions**, **Workflows**
   * **Security**
     * **Database Permissions** - Selecting this will enable you to view the Database Permissions report. This report shows information about all users, across all databases on a SQL Server. 
     * **Permissions** - If you want to know the permissions of each list item on the farm, you can get that information by selecting the **Permissions check box** and setting the Load Depth to list item. You can also select the **Active Directory Group Members** check box if you wish to load members of the AD groups. 
     * **Administrative Actions Log** - this option will be visible only for SharePoint 2016 FP1 farms and enables you to browse and analyze administrative actions logs collected from your SharePoint farm.
     * **Security Audit** - this option is required for Permission Audit report which enables you to see complete history of permission changes on site collection.
   * **Server Settings**
     * **Installed Programs and available Updates**
     * **SQL Server and IIS Settings Information**
   * **Project Server**
     * **Settings**
     * **Projects**  

   To reduce the farm load time we recommend unchecking Personal Sites. You can use the load performance slider to switch between low resource usage and a high-performance load.

4. Select the snapshot target. Again, this step will be skipped unless you chose the Custom snapshot mode. Some data is collected from the Central Administration and farm servers regardless of the selection here; however, permissions, workflows, content types, etc., will not show information for items that have not been selected here. You can choose your target to be the entire farm, Web application, site collection or specific subsites.
5. Click Next and the loading will start. Wait for the SPDocKit wizard to finish, then SharePoint [farm settings](manual-snapshots.md#internal/get-to-know-spdockit/farm-explorer-screen/farm-explorer-reports) and [permission reports](manual-snapshots.md#internal/get-to-know-spdockit/permissions-reports-screen) will be ready for use!

