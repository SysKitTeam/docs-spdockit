---
title: Server Load Permission Requirements
description: Server Load Requirements for SPDocKit
author: Iva Novoselic
date: 16/5/2017
---

## SharePoint Server Information

During the Snapshot creation process, SPDocKit will try to retrieve information about your servers. Please note that the following permissions on your servers are optional, but depending on them some or all information about your server configuration and the corresponding best practices reports will not be available in SPDocKit.

### Required permissions
In order to allow SPDocKit to successfully gather all the information about your SharePoint farm servers, the following permissions are necessary:

* __Local Administrator__ on the server
* __Windows Update service__ up and running


### Granting permissions  

To add the SPDocKit user to the __Local Administrator group__ follow these steps:

1. On the server open the __Local Users and Groups__ management console. Find it by typing __"Edit local users and groups"__ or __"lusrmgr.msc"__ in Windows Search.
1. Under Groups find the __Administrators__ group.
1. Click the __Add__ button and enter the user accounts running SPDocKit.
1. Confirm your changes by clicking __OK__.

In case you have a very strict security policy and cannot add this account to the __Local Administrators__ group, you can use the following procedure to get most of the reports working:
  * Add your SPDocKit accounts to the following local groups: __Backup Operators__ and __Performance Log Users__. This will allow us to remotely execute WMI queries and get information about SQL servers.
  * Start __winmgmt.msc__, right click on WMI Control and select Properties.
  * Go to the __Security__ tab and expand Root node. In the expanded list select __cimv2__ and click on the __Security__ button.
  * Click on __Advanced__ button, then click __Add…__ and enter the desired user and click OK.
  * Select option __This namespace and subnamespaces__ in a dropdown list Apply to.
  * Make sure that you select __Enable Account__ and __Remote Enable__ on the __Allow list__ and then click OK four times.

To start the __Windows Update service__, open the Service Microsoft Management Console, right click on the service and choose __Start__.


## SQL Server Information

There are some additional SPDocKit permission requirements necessary to load SQL servers information. Please note that the following permissions on your SQL servers are optional, but depending on them, some or all information about your SQL server configuration and the corresponding Best Practices reports will not be available in SPDocKit. 

### Required permissions

In order to allow SPDocKit to successfully gather all the information about your SQL servers the following permissions are necessary:

* __Sysadmin__ server role

In case that you can’t give those permissions due to security requirements, you can use the following permissions to get most of the SQL specific reports working:

* __Public__ server role
* __Dbcreator__ server role and __VIEW SERVER STATE__ permission
* __Dbaccess__ permission on __model__ database
* __Db_owner__ database role on each of the affected databases

### Affected reports

__Sysadmin__ database role is needed to run system extended stored procedures on the Master system database. Without the Sysadmin role, the following reports will not be available:

* Farm Explorer -> SQL -> Always On reports

The __Public__ server role is needed to fetch the real SQL server name. This permission is necessary to connect to the SQL server and perform some basic T-SQL queries. Also when you add an account to the SQL server, public role is automatically granted. If you are not granted this role, the following reports will not be available:
* Farm Explorer -> SQL -> SQL Aliases
* Best Practices -> Databases -> SQL Aliases

__Dbcreator__ role and __VIEW SERVER STATE__ permission is necessary in order to load SQL server configuration data. Following reports will not be available:
* Farm Explorer -> SQL -> all reports
* Best Practices -> Databases -> Database Files
* Best Practices -> Databases -> Max Degree of Parallelism
* Best Practices -> Databases -> SharePoint Database Autogrowth
* Best Practices -> Databases -> TempDB -> all reports

__Dbaccess__ permission is necessary in order to load information about the model database. In case this permission is not granted, the following reports will not be available:
* Best Practices -> Databases -> ModelDB -> ModelDB Files Autogrowth
* Best Practices -> Databases -> ModelDB -> ModelDB Files Initial Size
* Best Practices -> Databases -> ModelDB -> ModelDB Recovery Model

__Db_owner__ database role on each of the affected databases is necessary in order to allow SPDocKit to successfully gather all the database permissions. In case this permission is not granted, the following report will not be available:
* Farm Explorer -> SQL -> Database Permissions

### Granting permissions  

Follow these steps to grant required permissions:

1. Create a new user on the SQL server that will be used by SPDocKit.
1. Add the __sysadmin__ role to your SPDocKit account.

In case you have a very strict security policy and cannot add the sysadmin role to the SPDocKit account, you can use the following procedure to get most of the SQL reports working:

1. Create a new user on the SQL server that will be used by SPDocKit.
1. Add the __dbcreator__ role to your SPDocKit account and execute the following T-SQL query:
```sql
      USE master  
      GO  
      GRANT VIEW SERVER STATE TO “DOMAIN\ACCOUNT”
```     
3. Execute following T-SQL query to add necessary permissions:
```sql
      USE model  
      GO  
      EXECUTE sp_grantdbaccess 'DOMAIN\ACCOUNT'
```  
<br/>
To grant the __db_owner__ database role to the SPDocKit accounts, follow these steps:

1. Connect to your SQL server using __SQL Server Management Studio__.
2. Navigate to __Security__ > __Logins__ and select the SPDocKit account.
3. Right click on the account and open the __Login Properties__ dialog.
4. Under __User Mappings__, make sure that the account has the __db_owner__ database role for all affected databases.


## Project Server Information

During the snapshot creation process, SPDocKit will try to retrieve information about your Project server sites. Please note that the following permissions on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit.

### Required Permissions
In order to allow SPDocKit to successfully gather all the information about your Project server sites the following permissions are necessary:

* __SPDocKit account__ needs to be a member of the Project Server __Administrators__ group on each of the Project server sites

### Affected reports

The mentioned permissions on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit. Without the above-mentioned permissions, the following reports will not be available:

* Farm Explorer -> Project Server -> all reports

### Granting permissions  

To add your SPDocKit account to the Administrators group, follow these steps:

1. In a browser navigate to your Project server site.
2. Click __Settings__ > __PWA Settings__ to open up the PWA Settings page.
3. Under __Security__ click __Manage Users__.
4. Click __New User__ and add your __SPDocKit user accounts__ (console account and the service account, if you are using automatic snapshots).
    * Under __User logon account__ specify the __Domain\Username__ of the __SPDocKit user account__.
    * Under __Security Groups__ make sure that this user is a member of the __Administrators__ security group.

