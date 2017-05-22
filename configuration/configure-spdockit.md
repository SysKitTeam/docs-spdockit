---  
title: Configure SPDocKit
author: Matija Hanzic  
date: 16/5/2017  
description: This article explains how to configure the SPDocKit database and snapshot service before the first usage.
--- 
This article explains how to configure the SPDocKit database and snapshot service before the first usage. __SPDocKit Configuration Wizard__ will automatically start when you start SPDocKit for the first time. Follow these steps to successfully configure the application:

1. On the __Database__ wizard page select whether to create a new database or use the existing one. [Read more](#internal/configuration/configure-spdockit-database/) about the SPDocKit database.
2. On the __Database Configuration__ wizard page specify the __SQL Server, Database Name__ and authentication. It is possible to overwrite the existing database under the same name. After providing the information, click the __Test Connection__ button to ensure that the settings are correct.
3. On the __Service Configuration__ wizard page check __Enable Service__ and type service account details. The service account needs to have the [following privileges](#internal/requirements/sharepoint-on-premises-user-permissions-requirements/) to be able to run the service and retrieve changes. If you do not want to us SPDocKit service you can leave the __Enable Service__ unchecked but the following features will not be available:
    * Automatic Snapshots
    * Automatic Data Retention
    * Automatic Subscriptions
    * Alerts 
4. On the __Service Configuration__ wizard page click __Next__ to complete the Configuration Wizard and apply the changes.

__Please note!__ To configure your SPDocKit settings more thoroughly, navigate to the __File__ tab, click on the __Configuration__ in the left navigation bar and press [Options](#internal/get-to-know-spdockit/backstage-screen/options-wizard/) button.