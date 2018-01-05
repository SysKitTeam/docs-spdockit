---  
title: SharePoint Online User Permissions Requirements
author: Matija Hanzic  
date: 17/5/2017
description: This article lists required privileges to load SharePoint Online settings with tutorial how to acquire those privileges.
--- 
To run SPDocKit and to retrieve all SharePoint Online settings you want to document, the user running the application and SPDocKit service account needs to have proper privileges. Here is the list of required privileges to load SharePoint Online settings:

1. __Office 365 Global Administrator__ account. Required to retrieve SharePoint Online tenant level settings.*
2. __Site Collection Administrator__ privileges for each site you are trying to explore and manage.

*You can use SPDocKit Online without a __Office 365 Global Administrator__ account, but you will not be able to document tenant level settings, only site collection level settings. Also, without Global Admin privilege - Office 365 reports and management will not be available. 
    
### SPDocKit database requirements

#### Creating a new database

To be able to create a new SPDocKit dedicated database, user account running the installation and configuration wizard (i.e. install account) should be granted both __dbcreator__ and __securityadmin__ role on the preferred SQL Server. This allows the account to create a new database and to assign proper privileges after creation. The install account will be automatically given __db_owner__ privileges on the newly created database if possible. Otherwise, it is advised that the account is given that privilege manually, as it is needed for upgrading the database.

#### Privileges required to run the application

These privileges will be granted automatically when a new SPDocKit database is created or during database upgrade.

* SPDocKit user account needs to be granted __SPDocKit_service_role__ role on the SPDocKit database. This role will make service account member of __db_datawriter__ and __db_datareader__ role and grant __EXECUTE__ permissions on all the stored procedures in the database.

### Connecting to SharePoint On-Premises sites

When running SPDocKit Online, besides SharePoint Online sites, the user can connect to any SharePoint 2010, SharePoint 2013 or SharePoint 2016 site. This user will need to be granted __Site Collection Administrator__ privileges for each site he is trying to explore and manage. 