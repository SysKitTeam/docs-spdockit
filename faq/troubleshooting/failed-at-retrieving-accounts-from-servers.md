---
title: I am receiving ”Failed at retrieving SQL Accounts from the following servers: ‘Server Name”’.
description: Server Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# I am receiving ”Failed at retrieving SQL Accounts from the following servers: ‘Server Name”’.

## Problem:
While loading a SharePoint farm the following error message was displayed in the event log:
> *Failed at retrieving SQL Accounts from the following servers: ‘Server Name’. Check your permissions.*

## Solution:
The user running the application and the user under whose Service Account the Snapshot Service is running, if you have configured it, need to be granted rights to read the registry on the remote server. To add a user account to the Local Administrators group do the following **on each server that you get this warning for:**

1. Click **Start**, right-click **Computer**, then click **Manage**.
2. Navigate to **Configuration**, expand Local Users and Groups, then click **Groups**.
3. Right-click the **Administrators** group, then click **Add to Group**.
4. In the **Administrators Properties** dialog box, click **Add**.
5. In the **Select User, Computers, or Groups** dialog box, in the **Enter the object names to select** box, type the account name on which you want your worker process to run (for example, **Domain**/User), then click **OK**.
6. In the Administrators dialog box, click **OK**.
7. Close the **Server Manager** screen.