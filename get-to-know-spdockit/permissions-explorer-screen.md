---
title: Permissions Explorer Screen
description: This article describes how to use SPDocKit Permissions Explorer to explore SharePoint permissions.
author: Iva Novoselic
title: 24/5/2017
---
With Permissions Explorer farm administrators can explore SharePoint permissions real time by simply navigating to the specific securable object. Use the tree view in the navigation on the left-hand side to expand the desired SharePoint securable objects and view permissions details in the main grid.

To create and use the SPDocKit permission reports, you will have to take snapshot of your farm with the SharePoint permissions settings included. Each time SharePoint permissions are loaded, one loading info is created. From the filtering options on the right-hand side, you can choose the date you wish to explore the permissions from.

## Manage Ribbon
Use permissions management actions to grant, edit or remove SharePoint permissions on the selected securable object. You can also audit permissions changes or restore permissions to previously recorded state. Read more about available [permissions management actions](#internal/permissions-management/manage-permissions-ribbon-actions).

### Tips & Tricks
Select a principal and right-click. A context menu will appear with all available permission management options. They work in same way as the ones from the Manage ribbon.

## Wizards Ribbon
Use SPDocKit permission wizards to easily grant, edit or remove SharePoint permissions across the selected scope. Read more about [permission management wizards](#internal/permission-management.md) and how to use them.

## Compare Ribbon
The following buttons are available in the Compare ribbon:

__Compare to Parent__ – available for sites with broken permissions only. Choose this button to compare differences between the selected subsite and the parent SharePoint securable object.    
__Compare to Previous__ – available when there are previous permission records for the selected securable object. Explore how permissions for a selected site have changed over time.  
__Advanced Compare__ – to compare the selected securable object to any other securable object from historical loading info.

## View Ribbon
The following buttons are available in the View ribbon:  
__Choose Columns__ – customize your report view. Remove or reorder columns to personalize it for your needs.
__Reset Layout__ – restore he default report view settings.
__Expand/Collapse__ – makes browsing reports much easier when you have large amount of data.
__View in SharePoint__ – view the selected site in SharePoint.  
__Site Permissions__ – view and manage the selected permissions in SharePoint directly from your browser.  
__Principal Permissions__ – view and manager permissions for the selected principal on a specific object, directly from your browser.  
__Principal Properties__ – show principal properties.  
__Permission Details__ – show permission details.  
__Allow AD Access__ - enable this option if you would like to see AD group memberships, but have in mind that this might increase the report generation time.  
__Show All Groups__ - enable this option if you would like to see SharePoint groups that do not have any permissions assigned but still exist on this site collection.

