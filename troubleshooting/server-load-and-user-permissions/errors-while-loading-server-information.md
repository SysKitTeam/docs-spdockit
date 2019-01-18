---
title: Error while loading server Information
description: This article explains how to handle the issues with server load.
author: Igor Mesarić
date: 29/11/2018
---

# Errors while loading server information

## SharePoint Server Information

### Problem:

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your SharePoint farm servers, the following permissions are necessary:

* Local Administrator on the server
* Windows Update service up and running

For more information on how to add the SPDocKit user to the Local Administrators group and how to start Windows Update service, read the [following article.](../../../requirements/server-load-permission-requirements.md#sharepoint-server-information)

## SQL Server Information

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Loaded Server ‘ServerName’.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your SQL servers the following permissions are necessary:

* **Sysadmin** server role

In case that you can’t give those permissions due to security requirements, there are some alternatives available. More information on how to grant the required permissions is available [here.](../../../requirements/server-load-permission-requirements.md#sql-server-information)

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Unable to load database permissions for ‘DatabaseName’.

### Solution:

In order to allow SPDocKit to successfully gather all the database permissions the following permissions are necessary:

* **db\_owner** database role on each of the affected databases.

To eliminate this warning you either have to grant the necessary permissions to SPDocKit accounts or turn off the load **Database Permissions** option.

If you wish to turn off the load **Database Permissions** option, do the following:

1. Select **Configuration** from the left navigation bar on the **Backstage Screen** and then click the **Options** button.
2. On the **SPDocKit Options** dialog select **Snapshot Options**.
3. Under the **Security** section uncheck **Database Permissions**.

If you wish to grant the necessary permissions to the SPDocKit accounts, follow this [link.](../../../requirements/server-load-permission-requirements.md#sql-server-information)

## Project Server

### Problem:

While trying to load Project server site settings with SPDocKit I received:

> The HTTP request is unauthorized with client authentication scheme 'Ntlm'. The authentication header received from the server was 'NTLM'.

### Solution:

In order to allow SPDocKit to successfully gather all the information about your Project server sites the following permissions are necessary:

* **SPDocKit account** needs to be a member of the Project Server **Administrators** group on each of the Project server sites

Take the steps described in the \[following article\]../requirements/server-load-permission-requirements/\#project-server-information.md\) to grant the required permissions.

### Learn more

* [RPC Server is Unavailable](../../../troubleshooting/server-load-and-user-permissions/rpc-server-unavailable.md)

