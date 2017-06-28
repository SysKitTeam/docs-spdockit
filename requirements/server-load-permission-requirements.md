---
title: Server Load Permission Requirements
description: Server Load Requirements for SPDocKit
author: Iva Novoselic
date: 16/5/2017
---

#### Problem

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

#### Why is this warning showing?

During the Take Snapshot process SPDocKit will try to retrieve information about your servers. Please note that the following rights on your servers are optional, but depending on them some or all information about your server configuration and the corresponding best practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your servers, the following rights are necessary:

* __Local Administrator__ on the server
* __Windows Update service__ up and running

#### What will these granted rights be used for?

1. Adding SPDocKit user accounts to the __Local Administrator__ group on the server is needed for WMI remote access and to get information about Windows updates. In case that you can’t give that right due to security requirements, see lower for what you can grant instead this. The following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Processors Info
  * Farm Explorer -> Servers in Farm -> Programs List
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Farm Explorer -> Servers in Farm -> Disks List
  * Farm Explorer -> Servers in Farm -> Local Admins
  * Best Practices -> Hardware Requirements -> Free Disk Space
  * Best Practices -> Hardware Requirements -> RAM
  * Best Practices -> Servers -> Hotfixes per Server Role -> all reports
2. To retrieve a list of available Windows updates please make sure that the Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Best Practices -> Updates -> Servers -> Windows Updates

#### Solution

1. Add your SPDocKit user accounts to the __Local Administrators__ group on the specified server.
In case you have a very strict security policy and cannot add this account to the __Local Administrators__ group, you can use this procedure to get most of the reports working:
  * Add your SPDocKit accounts to the following local groups: __Backup Operators__ and __Performance Log Users__. This will allow us to remotely execute WMI queries and get information about SQL servers.
  * Start __winmgmt.msc__, right click on WMI Control and select Properties.
  * Go to the __Security__ tab and expand Root node. In the expanded list select __cimv2__ and click on the __Security__ button.
  * Click on __Advanced__ button, then click __Add…__ and enter desired user and click OK.
  * Select option __This namespace and subnamespaces__ in a dropdown list Apply to.
  * Make sure that you select __Enable Account__ and __Remote Enable__ on the __Allow list__ and then click OK four times.

2. Go to Windows Update service and start it in Service Microsoft Management Console.

## Additional SQL Server load requirements
#### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Loaded Server ‘ServerName’.

#### Why is this warning showing?

There are some additional SPDocKit permission requirements necessary to load SQL servers information. Please note that the following rights on your SQL servers are optional, but depending on them, some or all information about your SQL server configuration and the corresponding Best Practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your SQL servers the following rights are necessary:

* __Public__ server role
* __Dbcreator__ server role and __VIEW SERVER STATE__ permission
* __Dbaccess__ permission on __model__ database

#### What will these granted rights be used for?

__Public__ server role is needed to fetch the real SQL server name. This right is necessary to connect to the SQL server and perform some basic T-SQL queries. Also when you add an account to SQL server, public role is automatically granted. If you are not granted this role, following reports will not be available:
* Farm Explorer -> SQL -> SQL Aliases
* Best Practices -> Databases -> SQL Aliases

__dbcreator__ role and __VIEW SERVER STATE__ permission is necessary in order to load SQL server configuration data. Following reports will not be available:
* Farm Explorer -> SQL -> all reports
* Best Practices -> Databases -> Database Files
* Best Practices -> Databases -> Max Degree of Parallelism
* Best Practices -> Databases -> SharePoint Database Autogrowth
* Best Practices -> Databases -> TempDB -> all reports

__dbaccess__ permission is necessary in order to load information about the model database. In case this right is not granted, the following reports will not be available:
* Best Practices -> Databases -> ModelDB -> ModelDB Files Autogrowth
* Best Practices -> Databases -> ModelDB -> ModelDB Files Initial Size
* Best Practices -> Databases -> ModelDB -> ModelDB Recovery Model

#### Solution

1. Create a new user on the SQL server that will be used by SPDocKit.
2. Add __dbcreator__ role to your SPDocKit account and execute the following T-SQL query:
      > USE master  
      > GO  
      > GRANT VIEW SERVER STATE TO “DOMAIN\ACCOUNT”
      
3. Execute following T-SQL query to add necessary permissions:
      > USE model  
      > GO  
      > EXECUTE sp_grantdbaccess 'DOMAIN\ACCOUNT'

## Database Permissions load requirements
#### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Unable to load database permissions for ‘DatabaseName’.

#### Why is this warning showing?

There are some additional SPDocKit permission requirements necessary to load the database permission information. Please note that the following rights on your SQL Server databases are optional, but depending on them, data for the __Database Permissions__ report will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the database permissions the following rights are necessary:

* __db_owner__ database role on each of the affected databases

#### Solution

To eliminate this warning you either have to grant the necessary permissions to SPDocKit accounts or turn off the load __Database Permissions__ option.

If you wish to turn off the load __Database Permissions__ option, do the following:

1. Select __Configuration__ from the left navigation bar on the __Backstage Screen__ and then click the __Options__ button.
2. On the __SPDocKit Options__ dialog select __Snapshot Options__.
3. Under the __Security__ section uncheck __Database Permissions__.

If you wish to grant the necessary permissions to the SPDocKit accounts:

1. Connect to your SQL server using __SQL Server Management Studio__.
2. Navigate to __Security__ > __Logins__ and select the SPDocKit account.
3. Right click on the account and open the __Login Properties__ dialog.
4. Under __User Mappings__, make sure that the account has the __db_owner__ database role for all affected databases.

### Learn more
* [RPC Server Permission Requirements](#internal/faq/troubleshooting/rpc-server-unavailable)