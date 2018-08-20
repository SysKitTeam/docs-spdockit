---  
title: Configure SPDocKit Database
author: Matija Hanzic  
date: 16/5/2017  
description: This article explains how to configure the database for SPDocKit.
--- 

## Database Configuration Wizard
This article explains how to configure the database for SPDocKit.

SPDocKit uses the database for storing data gathered from your SharePoint farm. If you choose not to use a database, some of the features will not be available.

These are as it follows: Some of the Site Explorer reports, Permissions Explorer history records and Permissions reports, Content & Usage reports, report subscriptions and alerts, license management, Queries and Rules and custom made report views.

You can also document more than one SharePoint farm using the same SPDocKit database. When installing SPDocKit on desired farms, just provide the same database details for each installation and you will be able to explore __multiple farm__ reports from each SPDocKit instance.

__Please note!__ This should be a SPDocKit dedicated database, please __do not provide SharePoint databases here__.

1. Select __Configuration__ from the left navigation bar on the __Backstage Screen__ and then click the __Configure__ button.
2. On the __Database__ wizard page select whether to create a new database or use the existing one. Read more about the [SPDocKit database requirements](#internal/requirements/sharepoint-on-premises-user-permissions-requirements/).  

3. On the __Database Configuration__ wizard page specify the __SQL Server, Database Name__ and authentication. It is possible to overwrite the existing database under the same name.
   - If you are using the default instance type  "servername", or "servername.yourdomain.loc"
   - If you are using a named instance type "servername\instancename", or "servername.yourdomain.loc\instancename"
   - If your SQL Server is on a non-standard port (different from 1433), type "severname,port" or "servername\instance,port". (FQDN formats are also supported)

   After providing the information, click the __Test Connection__ button to ensure that the settings are correct.

4. Click Next, wait a few seconds and your SPDocKit database will be ready to use!


## Multiple Farms in a single SPDocKit database
This article will explain how you can configure multiple instances of SPDocKit, on different SharePoint farms, to use the same SPDocKit database.
For general information on how to configure a SPDocKit database go [here](#internal/configuration/configure-spdockit-database/).

1. If you have multiple SPDocKit instances, each using it's own database, you will have to decide whether you want to reuse one database to become a central database for all the instances, or create a brand new one. It is not possible to merge data from multiple databases into one.

2. For each SPDocKit instance, go to the __Configuration__ tab and click __Configure__ to open the Configuration wizard. If the database you want to use as a central database already exists, just input the SQL Server and database name into the wizard and complete the wizard.  
If the database does not exist, __create it only once with one instance of SPDocKit__ and choose to use an existing database for every other instance.

3. After that, you need to make sure of just one more thing: go to __Options__, then __Service Settings__ and check the __SPDocKit Database__ field under __Snapshot Location__. This will ensure all snapshot data is save to the database and available from all connected SPDocKit instances.

Some of the pros and cons of using this kind of setup are:

* You have one centralized place to track data from all your connected SharePoint farms.
* It’s easier to compare changes between farms.
* As any database grows and the more data it stores, executed queries will require more time to execute. Generating reports might slow down a bit.


## Multiple Databases on a Workstation
This article will explain how to use our new Connection String Chooser. A feature used to quickly change between databases on a workstation.

You can notice the Database Connection Chooser in the __top right corner__ of the application.

When you install SPDocKit for the first time, the installation will ask you to use our [Configuration Wizard](#internal/configuration/configure-spdockit-database/). The database you set up there will be the Default one. After that, you can use the Database Connection Chooser to quickly setup other connections.

This is how you do it:
## New database connection

1. Click on the Database Connections dropdown button, which can be found above the ribbon and on the right, and choose __Edit__.

    Alternatively, in the Backstage (File – > Configuration), under Configuration settings click Database Connections.

2. After that, click the __Add__ button. The __New Database Connection__ dialog will open.

    Here you can input your Connection Name, the SQL Server you wish to use, and of course the database you want to connect to. To access the database, you can use either Windows or SQL authentication. Press OK and a Progress dialog will appear. This dialog will output any errors, if they have occurred. If no errors have occurred, you can __Close__ the window and continue on to the next steps.

3. You will be returned to the Database Connection window. Select the connection you just made and click __Set as Active__. In a few moments, the database connection will change - and that is it!

To change the database, you can use the __Database Connection__ dialog to list all created connections and the __Set as Active__ button to connect to a database. A much simpler solution is to use the dropdown. Click on the connection you want and the database will be switched immediately.

## Edit a connection

On the main __Database Connection__ dialog, select the connection you want and click the __Edit__ button. You can edit a connection's name, but you can also completely change the SQL Server or the database you are using. When done click OK.

## Delete a connection

To delete a connection, select it and click the __Delete__ button.