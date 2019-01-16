---
title: Permissions Explorer Screen
description: >-
  This article describes how to use SPDocKit Permissions Explorer to explore
  SharePoint permissions.
author: Iva Novoselic
date: 24/5/2017
---

# Permissions Explorer Screen

With Permissions Explorer farm administrators can explore SharePoint permissions in real time by simply navigating to the specific securable object. Use the explorer on the left-hand side to navigate and expand to the desired SharePoint securable objects and view permissions details.

To create and use the SPDocKit permission reports, you will have to take a snapshot of your farm with the SharePoint permissions settings included. From the filtering options on the right-hand side, you can choose the date you wish to explore permissions from.

## Manage ribbon

Use permissions management actions to grant, edit or remove SharePoint permissions on the selected securable object. You can also audit permissions changes or restore permissions to a previously recorded state. Read more about available [permissions management actions](manage-permissions-ribbon-actions.md).

### Tips & tricks

Select a principal and right-click. A context menu will appear with all available permission management options. They work the same way as the ones from the Manage ribbon.

## Wizards ribbon

Use SPDocKit permission wizards to easily grant, edit or remove SharePoint permissions across the selected scope. Read more about [permission management wizards](users-and-groups-actions/manage-permissions-wizard.md) and how to use them.

## Compare ribbon

The following buttons are available in the Compare ribbon:

* **Compare to Parent** – available for objects with broken permissions only. Choose this button to compare differences between the selected securable object and it's parent.    
* **Compare to Previous** – available when there are previous permission records for the selected securable object. Explore how permissions for a selected securable object have changed over time.  
* **Advanced Compare** – to compare the selected securable object to any other securable object from historical loading info.

## View ribbon

The following buttons are available in the View ribbon:

* **Choose Columns** – customize your report view. Remove or reorder columns to personalize it to your needs.  
* **Reset Layout** – restore the default report view settings.  
* **Expand/Collapse** – makes browsing reports much easier when you have large amount of data.  
* **View in SharePoint** – view the selected site in SharePoint.  
* **Site Permissions** – view and manage the selected securable object's permissions in SharePoint directly from your browser.  
* **Principal Permissions** – view and manager permissions for the selected principal on a specific object, directly from your browser.  
* **Principal Properties** – show principal properties.  
* **Permission Details** – show permission details.  
* **Allow AD Access** - enable this option if you would like to see AD group memberships, but keep in mind that this might increase the report generation time.  
* **Show All Groups** - enable this option if you would like to see SharePoint groups that do not have any permissions assigned but still exist on this site collection.

