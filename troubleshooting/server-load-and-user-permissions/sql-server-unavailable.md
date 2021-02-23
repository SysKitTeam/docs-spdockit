---
description: This article explains how to handle issue when SharePoint farm load is not working properly because SQL server was not available.
---

# SQL Server is unavailable

## Problem

While loading a SharePoint farm the following error message was displayed in the event log:

> SQL Server ‘Server Name’ is unavailable. Please check your permissions.

## Solution

The user running the application and the account under which the SPDocKit Service is running, if you have configured it, need to be granted rights to connect to the server for which this exception appears.

Here is how to do it:

1. Create a new login for each of these accounts on the SQL server for which this exception appears.
2. Select **User Mapping** tab and grant them the **db\_datareader and public** rights on the master database.

