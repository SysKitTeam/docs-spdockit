---
title: Permissions Levels Wizard
description: >-
  This article explains how to use SPDocKit Permission Levels Wizard to create,
  delete, or edit permission levels on your SharePoint Farm.
author: Mia Tomaić
date: 25/5/2017
---

# permission-levels-wizard

This article explains how to use SPDocKit Permission Levels Wizard to create, delete, or edit permission levels on your SharePoint Farm.

**Wizard Scope**: farm, web application, site collection\(s\)

## Add Permission Level

This wizard options allows you to create new permission level across multiple site collections. 1. Navigate to Permissions Explorer and click on the **Permission Levels Wizard** in the Wizards ribbon.

1. Select **Add permission level** option and **Next** to continue.
2. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
3. Upon selecting the wizard scope, please specify the name and the description for the new permission level.
4. Next step is to select which base permissions this permission level will have.

   Every permission level is collection of base permission. These are permissions which allow users to view, create or edit SharePoint objects. List of base permissions is populated based on configuration of the selected web application. Every SharePoint web application specifies the list of base permissions which are available to assign to a SharePoint user on that web application. This is the reason why it is not possible to target more than one web application at the time.

   **Please note!** Base permissions are connected, so if for example, you want to include Manage Lists base permission into the new permission level, the View Items, View Pages and Open base permissions are also needed. User do not have to worry about these requirements, SPDocKit will take care of them.

5. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](permission-levels-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Add Permission\(s\) to Permission Level

This wizard option allows you to edit existing permission levels across the selected wizard scope. This option is useful if you want to add particular base permission to the existing permission level. It is important to note that this option will only add selected base permission\(s\) to specified permission level while the rest of base permissions will stay unaltered.

1. Navigate to Permissions Explorer and click on the **Permission Levels Wizard** in the Wizards ribbon.
2. Select **Add permission\(s\) to permission level** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Define which existing permission levels changes will be applied on. There are three options for targeting desired permission levels. User can define match criteria by:
   * **Name** – changes will apply only to permission levels with an exact name match \(not case sensitive\).  
   * **Name contains** – changes will apply only to permission levels whose name contains specified term \(not case sensitive\).  
   * **Regular expression** – changes will apply only to permission levels whose name matches specified regular expression.

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such permission levels exist.
5. Select which base permissions you would like to add to permission levels that satisfy a matching criteria. The list of base permissions is fetched from selected web application settings. Some base permissions require other base permissions and SPDocKit will automatically select associated base permissions so that user does not have to.
6. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. If selected base permission\(s\) already exist in matched permission levels, SPDocKit will ignore them and add only base permissions that were not previously contained in specified permission level.
7. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](permission-levels-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Remove Permission\(s\) from Permission Level

This wizard option allows you to remove particular base permission from the existing permission level. It is important to note that this option will only remove selected base permissions from permission levels while the rest of base permissions will stay unaltered.

1. Navigate to Permissions Explorer and click on the **Permission Levels Wizard** in the Wizards ribbon.
2. Select **Remove permission\(s\) from permission level** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Define which existing permission levels changes will be applied on. There are three options for targeting desired permission levels. User can define match criteria by:
   * **Name** – changes will apply only to permission levels with an exact name match \(not case sensitive\).  
   * **Name contains** – changes will apply only to permission levels whose name contains specified term \(not case sensitive\).
   * **Regular expression** – changes will apply only to permission levels whose name matches specified regular expression.

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such permission levels exist.
5. Select which base permissions you would like to remove from permission levels that satisfy a matching criteria. The list of base permissions is fetched from selected web application settings. Some base permissions are associated to other base permissions, so SPDocKit will automatically select them also. Extra care should be devoted to configuring this step, as mistakes can result in empty permission levels.
6. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. If selected base permission\(s\) do not exist in matched permission levels, SPDocKit will ignore them and remove only base permissions that previously existed in specified permission level.
7. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](permission-levels-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Edit Permission\(s\) for Permission Level

This wizard option is useful if you want to modify existing permission level with new set of base permissions. It is important to note that this action will overwrite any existing base permission level and all matched permission level\(s\) will only contain set of newly selected base permissions at the end.

1. Navigate to Permissions Explorer and click on the **Permission Levels Wizard** in the Wizards ribbon.
2. Select **Edit permission\(s\) for permission level** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Define which existing permission levels changes will be applied on. There are three options for targeting desired permission levels. User can define match criteria by:

   * **Name** – changes will apply only to permission levels with an exact name match \(not case sensitive\).  
   * **Name contains** – changes will apply only to permission levels whose name contains specified term \(not case sensitive\).  
   * **Regular expression** – changes will apply only to permission levels whose name matches specified regular expression.

   If multiple SharePoint site collections are selected, changes will apply only to the ones where such permission levels exist.

5. Next step is to select which set of base permissions this permission level should have.

   The list of available base permissions is fetched from selected web application settings. Some base permissions are associated with other base permissions. SPDocKit will automatically select associated base permissions depending on the base permissions you choose. Any deselected base permissions will be deleted from matching permission levels.

6. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.

   If selected base permission\(s\) already exist in matched permission levels, SPDocKit will ignore them and add only base permissions that were not previously contained in specified permission level.  
   If selected base permission\(s\) do not exist in matched permission levels, SPDocKit will ignore them and remove only base permissions that previously existed in specified permission level.

7. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](permission-levels-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Delete Permission Level

This wizard option allows you to delete existing permission levels across the specified wizard scope. It is a useful feature when you want to delete multiple permission levels quickly all over multiple site collections. 1. Navigate to Permissions Explorer and click on the **Permission Levels Wizard** in the Wizards ribbon.

1. Select **Delete permission levels** option and **Next** to continue.
2. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
3. Define which existing permission levels changes will be applied on. There are three options for targeting desired permission levels. User can define match criteria by:
   * **Name** – changes will apply only to permission levels with an exact name match \(not case sensitive\).  
   * **Name contains** – changes will apply only to permission levels whose name contains specified term \(not case sensitive\).  
   * **Regular expression** – changes will apply only to permission levels whose name matches specified regular expression.

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such permission levels exist.
4. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
5. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom fSPDocPerm event log\]\(\#internal/permission-management/spdockit-permission-management-event-log\). There will be information about changes that were made as well as who made those changes.

**Please Note!** While it is possible to create, delete or edit subsite’s specific permission levels \(breaking permission level inheritance on each subsite, similar to permission inheritance\) SPDocKit does not support such behavior. From SharePoint version 2010 and forward this functionality is hidden from SharePoint interface. Internally SPDocKit is able to work with these permission levels but will not allow user to create, delete or modify permission levels on subsite with permission levels broken inheritance.

