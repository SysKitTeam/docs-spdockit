---
title: Error while loading server Information
description: This article explains how to handle the issues with server load.
author: Igor Mesarić
date: 29/11/2018
---

# Errors while loading server information

## SharePoint Server Information

### Problem

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

### Solution

In order to allow SPDocKit to successfully gather all the information about your SharePoint farm servers, the following permissions are necessary:

* Local Administrator on the server
* Windows Update service up and running

For more information on how to add the SPDocKit user to the Local Administrators group and how to start Windows Update service, read the [following article](../../requirements/server-load-permission-requirements.md#granting-permissions).

### Affected reports

* Adding SPDocKit user accounts to the **Local Administrator** group on the server is needed for WMI remote access and to get information about Windows updates. In case you can’t give that kind of permissions due to security requirements, see lower for what you can grant instead this. The following reports will not be available:
  * Farm Explorer -&gt; Servers in Farm -&gt; Processors Info
  * Farm Explorer -&gt; Servers in Farm -&gt; Programs List
  * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
  * Farm Explorer -&gt; Servers in Farm -&gt; Disks List
  * Farm Explorer -&gt; Servers in Farm -&gt; Local Admins
  * Best Practices -&gt; Hardware Requirements -&gt; Free Disk Space
  * Best Practices -&gt; Hardware Requirements -&gt; RAM
  * Best Practices -&gt; Servers -&gt; Hotfixes per Server Role -&gt; all reports
* To retrieve a list of available Windows updates please make sure that the Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
  * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
  * Best Practices -&gt; Updates -&gt; Servers -&gt; Windows Updates

## SQL Server Information

### Problem

While trying to create a SPDocKit snapshot, I received the following warning:

> Loaded Server ‘ServerName’.

### Solution

In order to allow SPDocKit to successfully gather all the information about your SQL servers the following permissions are necessary:

* **Sysadmin** server role

In case that you can’t give those permissions due to security requirements, there are some alternatives available. More information on how to grant the required permissions is available [here](../../requirements/server-load-permission-requirements.md#granting-permissions-1).

### Problem

While trying to create a SPDocKit snapshot, I received the following warning:

> Unable to load database permissions for ‘DatabaseName’.

### Solution

In order to allow SPDocKit to successfully gather all the database permissions the following permissions are necessary:

* **db\_owner** database role on each of the affected databases.

To eliminate this warning you either have to grant the necessary permissions to SPDocKit accounts or turn off the load **Database Permissions** option.

If you wish to turn off the load **Database Permissions** option, do the following:

1. Select **Configuration** from the left navigation bar on the **Backstage Screen** and then click the **Options** button.
2. On the **SPDocKit Options** dialog select **Snapshot Options**.
3. Under the **Security** section uncheck **Database Permissions**.

If you wish to grant the necessary permissions to the SPDocKit accounts, follow this [link](../../requirements/server-load-permission-requirements.md#granting-permissions-1).

### Affected reports

**Sysadmin** database role is needed to run system extended stored procedures on the Master system database. Without the Sysadmin role, the following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; Always On reports

The **Public** server role is needed to fetch the real SQL server name. This permission is necessary to connect to the SQL server and perform some basic T-SQL queries. Also when you add an account to the SQL server, public role is automatically granted. If you are not granted this role, the following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; SQL Aliases
* Best Practices -&gt; Databases -&gt; SQL Aliases

**Dbcreator** role and **VIEW SERVER STATE** permission is necessary in order to load SQL server configuration data. Following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; all reports
* Best Practices -&gt; Databases -&gt; Database Files
* Best Practices -&gt; Databases -&gt; Max Degree of Parallelism
* Best Practices -&gt; Databases -&gt; SharePoint Database Autogrowth
* Best Practices -&gt; Databases -&gt; TempDB -&gt; all reports

**Dbaccess** permission is necessary in order to load information about the model database. In case this permission is not granted, the following reports will not be available:

* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Autogrowth
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Initial Size
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Recovery Model

**Db\_owner** database role on each of the affected databases is necessary in order to allow SPDocKit to successfully gather all the database permissions. In case this permission is not granted, the following report will not be available:

* Farm Explorer -&gt; SQL -&gt; Database Permissions

## Project Server

### Problem

While trying to load Project server site settings with SPDocKit I received:

> The HTTP request is unauthorized with client authentication scheme 'Ntlm'. The authentication header received from the server was 'NTLM'.

### Solution

In order to allow SPDocKit to successfully gather all the information about your Project server sites the following permissions are necessary:

* **SPDocKit account** needs to be a member of the Project Server **Administrators** group on each of the Project server sites

Take the steps described in the [following article](../../requirements/server-load-permission-requirements.md#granting-permissions-2) to grant the required permissions.

### Affected reports

The mentioned permissions on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit. Without the above-mentioned permissions, the following reports will not be available:

* Farm Explorer -&gt; Project Server -&gt; all reports

## Learn more

* [RPC Server is Unavailable](rpc-server-unavailable.md)

