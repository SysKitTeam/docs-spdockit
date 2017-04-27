---
title: Server Load Permission Requirements
---
# Server Load Permission Requirements

### Problem

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

#### Why is this warning occurring?

During the Farm Load process SPDocKit will try to retrieve information about your servers. Please note that the following rights on your servers are optional, but depending on them some or all information about your server configuration and the corresponding best practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your servers the following rights are necessary:

* __Local Administrator__ on the server
* Windows Update service up and running

#### What will these granted rights be used for?

1. Adding SPDocKit user accounts to a __Local Administrator__ group on the server is needed for the WMI remote access and to get information about Windows updates. In case that you can’t give that right due to security requirements, see lower what you can grant instead this. The following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Processors Info
  * Farm Explorer -> Servers in Farm -> Programs List
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Farm Explorer -> Servers in Farm -> Disks List
  * Farm Explorer -> Servers in Farm -> Local Admins
  * Best Practices -> Hardware Requirements -> Free Disk Space
  * Best Practices -> Hardware Requirements -> RAM
  * Best Practices -> Servers -> Hotfixes per Server Role -> all reports
1. To retrieve a list of available Windows updates please make sure that Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Best Practices -> Updates -> Servers -> Windows Updates

#### Solution

1. Add your SPDocKit user accounts to a __Local Administrators__ group on the specified server.
In case that you have a very strict security policy and you cannot add this account to the __Local Administrators__ group you can use this procedure to get most of reports working:
  * Add your SPDocKit accounts to following local groups: Backup Operators and Performance Log Users. This will allow us to remotely execute WMI queries and get information about SQL server.
  * Start __winmgmt.msc__, right click on WMI Control and select Properties.
  * Go to the __Security__ tab and expand Root node. In the expanded list select __cimv2__ and click on the __Security__ button.
  * Click on __Advanced__ button, then click __Add…__ and enter desired user and click OK.
  * Select option __This namespace and subnamespaces__ in a dropdown list Apply to.
  * Make sure that you select __Enable Account__ and __Remote Enable__ on the __Allow list__ and then click OK four times.

1. Go to Windows Update service and start it in Service Microsoft Management Console.

# Additional SQL Server Load Requirements

### Problem:

While trying to load SharePoint farm settings with SPDocKit I received a warning:

> Loaded Server ‘ServerName’.

#### Why is this warning occurring?

There are some additional SPDocKit permission requirements to load SQL servers information. Please note that the following rights on your SQL servers are optional, but depending on them, some or all information about your SQL server configuration and the corresponding Best Practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your SQL servers the following rights are necessary:

* __Public__ server role
* __Dbcreator__ server role and __VIEW SERVER STATE__ permission
* __Dbaccess__ permission on __model__ database

#### What will these granted rights be used for?

__Public__ server role is needed to fetch real SQL server name. This right is necessary to connect to SQL and perform some basic T-SQL queries. Also when you add an account to SQL server, public role is automatically granted. If you are not granted this role, following reports will not be available:
* Farm Explorer -> SQL -> SQL Aliases
* Best Practices -> Databases -> SQL Aliases

__dbcreator__ role and VIEW SERVER STATE permission is necessary in order to load configuration of the SQL server. Following reports will not be available:
* Farm Explorer -> SQL -> all reports
* Best Practices -> Databases -> Database Files
* Best Practices -> Databases -> Max Degree of Parallelism
* Best Practices -> Databases -> SharePoint Database Autogrowth
* Best Practices -> Databases -> TempDB -> all reports

__dbaccess__ permission is necessary in order to load information about the model database. In case that you don’t add this right, following reports will not be available:
* Best Practices -> Databases -> ModelDB -> ModelDB Files Autogrowth
* Best Practices -> Databases -> ModelDB -> ModelDB Files Initial Size
* Best Practices -> Databases -> ModelDB -> ModelDB Recovery Model

#### Solution

1. Create a new user on SQL server that will be used for SPDocKit.
1. Add dbcreator role to your SPDocKit account and execute following T-SQL query:
USE master
GO
GRANT VIEW SERVER STATE TO “DOMAIN\ACCOUNT”
1. Execute following T-SQL query to add necessary permissions:
USE model
GO
EXECUTE sp_grantdbaccess 'DOMAIN\ACCOUNT'
