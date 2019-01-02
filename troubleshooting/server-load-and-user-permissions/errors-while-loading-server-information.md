---
title: Error while loading server Information
description: This article explains how to handle the issues with server load.
author: Igor Mesarić    
date: 29/11/2018
---

## SharePoint Server Information

### Problem:

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your SharePoint farm servers, the following permissions are necessary:

* Local Administrator on the server
* Windows Update service up and running

For more information on how to add the SPDocKit user to the Local Administrators group and how to start Windows Update service, read the [following article.](#internal/requirements/server-load-permission-requirements/#sharepoint-server-information)

### Affected reports

* Adding SPDocKit user accounts to the __Local Administrator__ group on the server is needed for WMI remote access and to get information about Windows updates. In case you can’t give that kind of permissions due to security requirements, see lower for what you can grant instead this. The following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Processors Info
  * Farm Explorer -> Servers in Farm -> Programs List
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Farm Explorer -> Servers in Farm -> Disks List
  * Farm Explorer -> Servers in Farm -> Local Admins
  * Best Practices -> Hardware Requirements -> Free Disk Space
  * Best Practices -> Hardware Requirements -> RAM
  * Best Practices -> Servers -> Hotfixes per Server Role -> all reports
* To retrieve a list of available Windows updates please make sure that the Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
  * Farm Explorer -> Servers in Farm -> Available Windows Updates
  * Best Practices -> Updates -> Servers -> Windows Updates

## SQL Server Information

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Loaded Server ‘ServerName’.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your SQL servers the following permissions are necessary:

* __Sysadmin__ server role

In case that you can’t give those permissions due to security requirements, there are some alternatives available. More information on how to grant the required permissions is available [here.](#internal/requirements/server-load-permission-requirements/#sql-server-information)

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Unable to load database permissions for ‘DatabaseName’.

### Solution:

 In order to allow SPDocKit to successfully gather all the database permissions the following permissions are necessary:

* __db_owner__ database role on each of the affected databases.

To eliminate this warning you either have to grant the necessary permissions to SPDocKit accounts or turn off the load __Database Permissions__ option.

If you wish to turn off the load __Database Permissions__ option, do the following:

1. Select __Configuration__ from the left navigation bar on the __Backstage Screen__ and then click the __Options__ button.
2. On the __SPDocKit Options__ dialog select __Snapshot Options__.
3. Under the __Security__ section uncheck __Database Permissions__.


If you wish to grant the necessary permissions to the SPDocKit accounts, follow this [link.](#internal/requirements/server-load-permission-requirements/#sql-server-information)

## Project Server

### Problem:

While trying to load Project server site settings with SPDocKit I received:

> The HTTP request is unauthorized with client authentication scheme 'Ntlm'. The authentication header received from the server was 'NTLM'.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your Project server sites the following permissions are necessary:

* __SPDocKit account__ needs to be a member of the Project Server __Administrators__ group on each of the Project server sites

Take the steps described in the [following article](#internal/requirements/server-load-permission-requirements/#project-server-information) to grant the required permissions.


### Learn more
* [RPC Server is Unavailable](#internal/troubleshooting/server-load-and-user-permissions/rpc-server-unavailable)