---
description: Article describes how to grant rights to service user that are necessary to connect to the SQL server.
sidebar_position: 5
---

# Service user does not have rights to connect to the SQL server

## Problem

The service user does not have rights to connect to the SQL server.

## Solution

The service user needs to be granted the **dbcreator** and **securityadmin** server roles.

1. Run the Microsoft SQL Server Management Studio. Find the subfolder **Logins** in the Security folder, right-click on it and choose **New Login**.
2. Click on the **Search** button to find the desired service user.
3. Change from which folder to select the user by clicking the **Locations** button.
4. Select the **Entire Directory** folder or the entire **Domain** in which the user is being searched.
5. Enter the object name to select, i.e. the user name you want to grant rights to. Click on the **Check Names** button to make sure that the user exists. If the user exists within the domain, the user’s full name will be displayed.
6. Click on the **Server Roles** tab in the left navigation bar.
7. Check the boxes next to the **dbcreator** and **securityadmin** list items. Granting these privileges to a user means they will be able to create databases and manage other users’ privileges.

   **Note:** _If the user wants to be the system administrator of the SQL server it is enough to check the **sysadmin** item in the list._

8. SQL connection should now be available.

