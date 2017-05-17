---
title: Manual Snapshots
---

# Take Manual Snapshots

This section describes how you can use the SPDocKit Snapshot wizard to collect SharePoint farm settings and permissions.
Please note! Adjustments and settings you make using this wizard apply to the current snapshot-taking process only. If you wish to configure a default snapshot-taking setting, use the [Options wizard](#internal\get-to-know-spdockit\backstage-screen\options-wizard.md). The selection you make there will be used as a default load template.

1. Navigate to the Backstage Actions Screen and click the Take Snapshot button.
2. Select the snapshot mode you wish the application to execute. There are three choices:
    * __Default__ – Performs a load using the setup provided in the [Snapshot Options](#internal\get-to-know-spdockit\backstage-screen\options-wizard.md) and [Load Target](#internal\get-to-know-spdockit\backstage-screen\options-wizard.md). This includes farm settings, features and solutions, and permissions down to the subsite level on the whole farm by default, and can be changed by the user at any time in the Options Wizard.
    * __Custom__ – Allows the user to specify exactly what information should be loaded. You can also choose which web applications, site collections or even subsites data will be retrieved.
    It can be the fastest load option if the user wishes to have access only to specific data, and is aware what data he is interested in. This mode is recommended for more advanced users who are looking to generate specific reports.
    * __Full__ – Performs a load that collects all available information where possible (some data will still not be collected if a database is not used with SPDocKit).
    This is the recommended load mode if you don’t mind waiting and want to be sure you have all the data once the load finishes.

   __Please note!__ What you choose to take a snapshot of, within the Custom mode, applies only to the current load and does not affect loading executed by the SPDocKit service.
3. Choose what you would like to load.

   This page is only available if you have chosen the Custom mode; otherwise it will be skipped together with the Target page.
* With the Load Depth option you can specify the depth to which you want to crawl your farm. Do you need to know the permissions of each list item on the farm? You can get that information by selecting the Permissions check box and setting the Load Depth to list item. If you’re not interested in permissions, but you would like to see the content types used on your sites, you’ll need to crawl down to each list with the Content Type checkbox selected, since that is where the content types are defined.
* SPDocKit also allows you to backup all *.wsp files in use by your farm, but you’ll need to define a location for this backup. This data can also be used later to find out whether there are any problems with the assemblies deployed on your farm.
* 
* The Farm Settings check box will be selected by default. That means that SPDocKit will load farm settings by default and you cannot change this option.
