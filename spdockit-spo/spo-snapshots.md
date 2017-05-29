---
title: Explore SharePoint Online Reports
description: This article describes how to take snapshot of your Office 365 tenant or a specific Site Collection to explore permissions.
author: Iva Novoselic
date: 25/5/2017
---

This article will explain how to make a snapshot of your SPO Tennant.

Requirements: To make a snapshot of your SPO tennant you need a Consultant Plus or SPDocKit Online license.   
Also, read more about the [user permissions](#internal/requirements/sharepoint-online-user-permissions-requirements) required to run SPDocKit properly on a workstation.  

__Please note__ that in order for this feature to work, __you will need to use a database__.
You can either use a [classic database](#internal/configuration/configure-spdockit-database) or a [localDB](#internal/configuration/configure-localdb) which we enabled for use in version 7 and onwards.

Here is what you need to do:
1. You can start the loading proces (snapshot) from Backstage. __File -> Actions -> Take Snapshot__. Or click the __Take Snapshot button__ in __Home ribbon__ of Farm and Site Explorer, Permissions Reports, Content & Usage Reports section, and Snapshots tab.

1. Select the snapshot mode you wish the application to execute. There are three choices:
    * __Default__ – Performs a load using the setup provided in the [Snapshot Options](#internal/get-to-know-spdockit/backstage-screen/options-wizard) and [Load Target](#internal/get-to-know-spdockit/backstage-screen/options-wizard). This includes farm settings, features and solutions, and permissions down to the subsite level on the whole tennant by default, and can be changed by the user at any time in the Options Wizard.
    * __Custom__ – Allows the user to specify exactly what information should be loaded. You can also choose which Web applications, site collections or even subsites data will be retrieved.
    It can be the fastest load option if the user wishes to have access only to specific data, and is aware what data he is interested in. This mode is recommended for more advanced users who are looking to generate specific reports.
    * __Full__ – Performs a load that collects all available information where possible. 
    This is the recommended load mode if you don’t mind waiting and want to be sure you have all the data once the load finishes.

   __Please note!__ What you choose to take a snapshot of, within the Custom mode, applies only to the current load and does not affect loading executed by the SPDocKit service.

    There are some differences in what you can load compared to the classic load of a sharepoint farmm. 
    These are the only available options:      
    ### SharePoint section:  
    * The __Farm Settings__ check box will be selected by default. That means that SPDocKit will load farm settings by default and you cannot change this option. 
    * Content Types - If you would like to see the content types used on your sites, you’ll need to crawl down to each list with the __Content Type__ checkbox selected, since that is where the content types are defined.
    * __Workflows__

    ### Security
    * __Permissions__ - If you want to know the permissions of each list item on the farm, you can get that information by selecting the __Permissions check box__ and setting the Load Depth to list item. You can also select the __Active Directory Group Members__ check box if you wish to load members of the AD groups. 

1. Select the snapshot target.  
Again, this step will be skipped unless you chose the Custom snapshot mode. You can choose your target to be the entire farm, Web application, site collection or specific subsites. 

1. Click Next and the loading will start. Wait for the SPDocKit wizard to finish, then SharePoint [farm settings](#internal/get-to-know-spdockit/farm-explorer-screen/farm-explorer-reports) and [permission reports](#internal/get-to-know-spdockit/permissions-reports-screen) will be ready for use!