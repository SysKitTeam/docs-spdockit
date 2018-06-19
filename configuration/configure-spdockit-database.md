---  
title: Configure SPDocKit Database
author: Matija Hanzic  
date: 16/5/2017  
description: This article explains how to configure the database for SPDocKit.
--- 
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
