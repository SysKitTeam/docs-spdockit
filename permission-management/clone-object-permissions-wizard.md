---
title: Clone Object Permissions Wizard
description: This article describes how to use the Clone Object Permissions Wizard in order to equalize principal and group permissions on two different SharePoint objects.   
author: Igor Mesaric
date: 2/3/2018
---

This article explains how to use SPDocKit to easily clone SharePoint permissions from one object to another.

The Clone Object Permissions Wizard enables you to clone the permissions between objects that are a part of a different site collections or even different web applications.

**Please note!** Source object's permission inheritance must be broken in order to use this wizard. Source object permissions will not be affected by this wizard. Based on the options selected in the wizard, the destination principals and/or groups can lose all previously assigned permissions or acquire additional permissions. SharePoint groups of the target site collection can also be changed, which affects not only the target object but also all other objects to which the group is assigned.

**Wizard Scope**: web application, site collection.  
**Supported source SharePoint Object selection**: all object levels from site collection root site to list item.  
**Supported target SharePoint Object selection**: all object levels from site collection root site to list item.

1.  Navigate to Permissions Explorer and select the source object in the object tree. Select the **Clone Object Permissions** options in the **Manage** ribbon.

2. In the **Target selection** step select the target SharePoint object. 

3. Depending on the previous source and target object selection, the **Configuration** step offers a couple of options. 

    * **Source and target objects are a part of the same site collection.**

        The **Keep existing target object permissions** option is available. If checked, all of the target object permissions are preserved and new permissions are added to existing groups or principals. If not checked, all target object permissions are removed and the source permissions are copied.

        Options **Create SharePoint groups** and **Create missing permission levels** are disabled since they are only applicable in case of different site collections.

        If the target object inheritance is not broken, the following message is displayed: **The target securable object currently inherits permissions from its parent. Permission inheritance will be broken in order to apply new role assignments**.

    * **Source and target objects are a part of different site collections.** 

        The **Create SharePoint groups** option is available. If checked, missing SharePoint groups are created on the target site collection with the same members as in the source group. If unchecked, no new groups are created.

        The **Create missing permission levels** option is also available. If checked, missing permission levels are created on the target site collection with the same base permissions as in the source permission levels. If unchecked, the permission levels are not created and therefore can not be assigned to groups or principals.

        **Please note!** If the source site collection and the target site collection have SharePoint groups with the same name and different members, and the Keep existing target object permissions option is checked, existing members in the target group are preserved and new members from the source group are added.
        If the Keep existing target object permissions option is not checked, the target group members are removed and source group members recreated. The same rules apply to the permission levels.  

4. The **Preview** step shows the changes that will occur in the final step. 

5. In the **Apply Changes** step, all changes are displayed as they are applied. It is possible to save the log for later reference by clicking the **Save Log** button. The changes are also saved in the [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log).

