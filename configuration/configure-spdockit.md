---  
title: Configure SPDocKit
author: Matija Hanzic  
date: 22/5/2017  
description: This article explains how to configure the SPDocKit database and snapshot service before the first usage.
--- 

## SharePoint Server

This article explains how to configure the SPDocKit database and service before the first usage, while installed on a SharePoint server. __SPDocKit Configuration wizard__ will automatically start when you start SPDocKit for the first time. Follow these steps to successfully configure the application:

1. On the __Database__ wizard page select whether to create a new database or use an existing one. [Read more](#internal/configuration/configure-spdockit-database/) about the SPDocKit database.

2. On the __Database Configuration__ wizard page specify the __SQL Server, Database Name__ and authentication. It is possible to overwrite the existing database under the same name. 
   - If you are using the default instance type  "servername", or "servername.yourdomain.loc"
   - If you are using a named instance type "servername\instancename", or "servername.yourdomain.loc\instancename"
   - If your SQL Server is on a non-standard port (different from 1433), type "severname,port" or "servername\instance,port". (FQDN formats are also supported)

    After providing the information, click the __Test Connection__ button to ensure that the settings are correct.

3. On the __Service Configuration__ wizard page check __Enable Service__ and type the service account details. The service account needs to have the [following privileges](#internal/requirements/user-permissions-requirements/) to be able to run the service, create snapshots and other associated jobs.  
      
    If you do not want to use the SPDocKit Service you can leave the __Enable Service__ unchecked, but the following features will not be available:
    * Automatic Snapshots
    * Automatic Data Retention
    * Automatic Subscriptions and Alerts
    * Index Reorganization
    * Automatic Rules and Queries

4. click __Next__ to complete the Configuration Wizard and apply the changes.

__Please note!__ To configure your SPDocKit settings more thoroughly, navigate to the __File__ tab, click on the __Configuration__ in the left navigation bar and press [Options](#internal/get-to-know-spdockit/backstage-screen/options-wizard/) button.


## Workstation

This article explains how to configure SPDocKit on a workstation. A SPDocKit workstation instance allows you to manage SharePoint On-Premise, view SPDocKit reports, compare farm settings and track changes without having to connect to a SharePoint server.

__Requirements__: To view SPDocKit reports directly from your PC workstation, you must have the SPDocKit [Workstation license](https://www.syskit.com/products/spdockit/pricing/) and the user running the application on a workstation needs to have adequate [permissions](#internal/requirements/user-permissions-requirements/).

__Please note!__ To use SPDocKit reports on your workstation, you need to have SPDocKit installed on an actual SharePoint server to load the data. A workstation installation cannot create new farm snapshots or load information about permissions; it can only explore previously loaded data and manage permissions in real-time using Permissions Explorer.

To install and configure SPDocKit on a workstation, follow these instructions:

1. [Download](https://www.spdockit.com/downloads/) SPDocKit to your workstation. __The SPDocKitSetup.exe file is the same for both server and workstation installation__.

1. Follow the [Installation Guide](#internal/installation/installation-guide/) to install it on your workstation. Once you have successfully installed the tool, the Configuration Wizard will open.

1. Enter the database server and database name from which you would like to retrieve the data. If you wish to monitor multiple farms from your workstation, all these SharePoint farms must be connected __to the same SPDocKit database__. Click __Next__ to finish your configuration.

1. Click __Finish__ to start using SPDocKit on your workstation.

__Please Note!__ When using SPDocKit on your workstation, the __SPDocKit Service will not be available__. The following features are available: 
- Snapshots (Farm Explorer and Best Practices reports)
- All reports (Site Explorer, Permissions Reports, Analytics & Usage Reports, and Audit Reports) except Queries and Rules
- Live Permissions Explorer
- Permission management for SharePoint On-Premise