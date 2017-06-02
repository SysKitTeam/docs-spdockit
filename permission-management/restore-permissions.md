---
title: Restore Permissions Wizard
description: This article describes how to restore SharePoint permissions to a previous state using SPDocKit.
author: Marko Gudan
date: 26/5/2017
---

This article explains how to use SPDocKit's Restore Permissions Wizard to restore permissions on a securable object to an earlier state. Please check the [feature availability by license type](https://www.spdockit.com/orders)  

### Wizard scope: 
A securable object (subsite, list, folder, list item) and it's permissions scope. 

### Prerequisites: 
You must have a snapshot with loaded permissions of the selected object from the date you wish to restore it to.

1. Navigate to __Permissions Explorer__ and select the securable object on which you wish to restore permissions. 
__Please note!__ Date filter must be set to Live, otherwise the Restore Permissions button will be disabled
1. Click on the Restore Permissions in the Manage ribbon.
1. Choose restore options: 
    * __Directly Assigned Permissions__ – Restore permissions for users with directly assigned role assignments.
    * __SharePoint Group Memberships__ – Principals will be added or removed from groups. 
    * __Missing SharePoint Groups__ - Groups that were deleted between now and the selected date will be recreated with the same settings as on the selected date. 
    * __Permission Levels__ – Permission levels that were deleted in the between now and the selected date will be recreated and all permission level settings will be restored to the same settings as on the selected date. 

1. Next step will list all the actions that will be taken in the final step of the wizard. Also, it will show you conflicts that may occur during permission restore. If any, you will have to resolve them before continuing. Make sure that pending changes will do exactly what you wanted and have specified in previous steps of this wizard. At this point you can still go back and modify any settings you'd like. 
1.  When you click on Next, new dialog will popup and you will have to enter a 5 digit number to confirm that you really want to continue and execute listed actions.   
1. The last step shows you the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using __Save Log__ button.  

### Important: 
* This wizard will not delete groups or permission levels that did not exist on the selected date and were created in the meantime. 
* The Permission restore action is reversible only if there is a snapshot containing the current permission data. It is recommended that you have a snapshot containing the current permission data so you can reverse changes if something goes wrong. 

### Limitations:
* Snapshots must be taken with SPDocKit version 7 or higher and must contain permissions data of the target securable object.
* You can only restore permissions on a securable object that currently has unique permissions and had unique permissions on the selected date. 
* Restoring Base Permissions on existing Permission Levels is not possible from a workstation or for SharePoint Online tenants.  
* This wizard does not show or restore membership changes made in AD groups. 
