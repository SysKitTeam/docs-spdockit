---
title: Office 365 Management Wizards
description: This article describes how to manage Office 365 groups and teams using the Groups and Membership Wizards. 
author: Tomislav Sirovec
date: 14/11/2017
---

**_As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is SysKit Security Manager. For instructions on the upgrade path or any other questions contact us at [support@syskit.com](mailto:support@syskit.com)._**

This article describes how to use SPDocKit's Groups and Membership Office 365 Wizards.  
Wizard buttons are visible only in __live mode__ of Permissions Explorer and when either Groups and Teams node is selected or a specific group.  
Wizard Scope: entire tenant


## Groups section

### Delete Groups wizard  
-will delete the selected groups(s) from entire tenant.  

1. By default, __Target__ is entire tenant. If you have more than one tenant connected, there is a dropdown where you can choose which one you want.
1. On __Group Selection__ step pick the groups you want to delete.  
    - You can pick specific groups from a dropdown
    - Match teams and groups by name that contains
    - Match teams and groups that match the specified regular expression
1. __Preview step__ will show you changes before executing them. Click Next.
1. The last step shows user the changes that have been made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using Save Log button. In addition, SPDocKit will create Event Log entry in custom SPDocPerm event log. There will be information about changes that were made as well as who made those changes.

## Membership section

### Owners wizard  
-will add or remove owners from Office 365 Teams and Groups.
1. Select whether you want to add or remove owners from Office 365 Teams and Groups
   - Add Owner(s) to specified groups
   - Remove owner(s) from specified groups
   - Remove owner(s) from all groups  

2. In the next step define the __Target__ for your action. By default that is entire tenant. If you have more than one tenant connected, there is a dropdown where you can choose which one you want.
3. In the __Principal Selection__ step populate the people picker with the users of interest.  
Along the classic way of adding each user individually, clicking on the __Import from File__ button you can add, as much users, as you want. We support both .csv and .txt files. The users can be separated by a tab, semicolon, comma or a space.  
In __Group Selection__ subsection select criteria used to match Office  Groups and Teams
   - You can pick specific groups from a dropdown
   - Match teams and groups by name that contains
   - Match teams and groups that match the specified regular expression  

If you chose Remove user/s from all groups - in the first step, Group Selection subsection will be disabled. 

4. __Preview step__ will show you changes before executing them. Click Next.
5. The last step shows the user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using Save Log button. In addition, SPDocKit will create an Event Log entry in custom SPDocPerm event log. There will be information about changes that were made as well as who made those changes.

### Members wizard  
-will add or remove users from Office 365 Teams and Groups
1. Select whether you want to add or remove members from Office 365 Teams and Groups
   - Add users(s) to specified groups
   - Remove users(s) from specified groups
   - Remove users(s) from all groups
2. In next step define the __Target__ for your action. By default that is the entire tenant. If you have more than one tenant connected, there is a dropdown where you can choose which one you want.
3. In the __Principal Selection__ step populate the people picker with the users of interest.  
Along the classic way of adding each user individually, clicking on the __Import from File__ button you can add, as much users, as you want. We support both .csv and .txt files. The users can be separated by a tab, semicolon, comma or a space.   
In the __Group Selection__ subsection select the criteria used to match Office Groups and Teams
   - You can pick specific groups from a dropdown
   - Match teams and groups by the name that contains
   - Match teams and groups that match the specified regular expression  

If you chose Remove user/s from all groups - in the first step, the Group Selection subsection will be disabled. 

4. __The Preview step__ will show you the changes before executing them. Click Next.
5. The last step shows the user the changes that have been made. If some errors have occurred, they will be displayed here. It is possible to save this log to disk as a .txt file using Save Log button. In addition, SPDocKit will create an Event Log entry in the custom SPDocPerm event log. There will be information about the changes that have been made as well as who made those changes.

