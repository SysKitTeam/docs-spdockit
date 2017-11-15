---  
title: Configure SPDocKit
author: Matija Hanzic  
date: 22/5/2017  
description: This article explains how to configure the SPDocKit database and snapshot service before the first usage.
--- 
This article explains how to configure the SPDocKit database and service before the first usage. __SPDocKit Configuration wizard__ will automatically start when you start SPDocKit for the first time. Follow these steps to successfully configure the application:

1. On the __Database__ wizard page select whether to create a new database or use an existing one. [Read more](#internal/configuration/configure-spdockit-database/) about the SPDocKit database.
2. On the __Database Configuration__ wizard page specify the __SQL Server, Database Name__ and authentication. It is possible to overwrite the existing database under the same name. 
   - If you are using the default instance type  "servername", or "servername.yourdomain.loc"
   - If you are using a named instance type "servername\instancename", or "servername.yourdomain.loc\instancename"
   - If your SQL Server is on a non-standard port (different from 1433), type "severname,port" or "servername\instance,port". (FQDN formats are also supported)

    After providing the information, click the __Test Connection__ button to ensure that the settings are correct.

3. On the __Service Configuration__ wizard page check __Enable Service__ and type the service account details. The service account needs to have the [following privileges](#internal/requirements/sharepoint-on-premises-user-permissions-requirements/) to be able to run the service, create snapshots and other associated jobs. If you do not want to use the SPDocKit Service you can leave the __Enable Service__ unchecked, but the following features will not be available:
    * Automatic Snapshots
    * Automatic Data Retention
    * Automatic Subscriptions and Alerts
    * Index Reorganization
    * Automatic Rules and Queries

    If you installed a SPDocKit Insights Agent and wish to setup SPDocKit Insights Service, you can also check __Enable SPDocKit Insights Service.__  
    As of version 7.2 there is only one Configuration Wizard for setting up the database, SPDocKit and SPDocKit Insights Service. Also note that now you must use the __same service account for both SPDocKit and SPDocKit Insights Service.__ 

4. If you have chosen to enable SPDocKit Insights Service in the previous step, now you need to provide more details to properly setup the agent:
- **Index Location** – you need to ensure that the provided service account has write access to the index location directory. The directory for the index must be empty or contain an existing index.  It is recommended not to place the index on the system drive. Be careful if you plan to use the system drive for index location, as it can be quickly filled up.
- **Port To Use** - this is the port that the SPDocKit Insight Agent will use to communicate with the SPDocKit Insights application. By default, port 7895 is set, but you can change it to suit your needs.
- **Max Index Size** – by default we set this value to 200GB with a maximum of 1TB. Feel free to change it to suit your needs and hardware capabilities.
    - If the service determines that the index exceeds the maximum index size, it will stop the data collection. Note that the actual size of the index can vary because of index reorganization and can require up to 3 times the amount of disk space specified here.
   - Take note of the Connection URL. This is needed to connect to the SPDocKit Insights Agent if the SPDocKit Insights Viewer is installed on a separate server or workstation. If that is the case copy the URL, start the Viewer on whatever server or workstation you installed it, and paste it into the required field. If the SPDocKit Insights Viewer is installed on the same server as the SPDocKit Insights Agent, SPDocKit Insights will start automatically. 

5. click __Next__ to complete the Configuration Wizard and apply the changes.

__Please note!__ To configure your SPDocKit settings more thoroughly, navigate to the __File__ tab, click on the __Configuration__ in the left navigation bar and press [Options](#internal/get-to-know-spdockit/backstage-screen/options-wizard/) button.