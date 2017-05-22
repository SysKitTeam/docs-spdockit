---
title: I am receiving “SQL Server ‘Server Name’ is unavailable. Please check your permissions.”
description: Server Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# I am receiving “SQL Server ‘Server Name’ is unavailable. Please check your permissions.”

## Problem:
While loading a SharePoint farm the following error message was displayed in the event log:

> *SQL Server ‘Server Name’ is unavailable. Please check your permissions.*

## Solution:
The user running the application and the account under which the SPDocKit Service is running, if you have configured it, need to be granted rights to connect to the server for which this exception appears. 

Here is how to do it:

1. Create a new login for each of these accounts on the SQL server for which this exception appears.
2. Select **User Mapping** tab and grant them the **db_datareader and public** rights on the master database.
