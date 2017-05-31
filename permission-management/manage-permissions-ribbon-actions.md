---
title: Manage Permissions Ribbon Actions
description: This article explains how to use Manage Permissions ribbon to easily manage SharePoint permissions on the selected object. 
author: Iva Novoselic
date: 24/5/2017
---

This article explains how to use Manage ribbon to easily manage SharePoint permissions on the selected securable object. Permission management buttons are enabled only in __live mode__ of Permissions Explorer.

__Refresh__ – reloads currently selected SharePoint object permission information or the entire permissions explorer tree.  

## Inheritance
__Break Permission Inheritance__ button copies the parent permissions and then stops the permissions inheritance for the selcected object. Any changes made to a parent site will not apply to the selected site in the future and vice verse.

  * __Available On:__ sites(not the root ones), lists, list items that inherit permissions from the parent site  
  * __Scope:__ currently selected SharePoint object

__Restore Permission Inheritance__ button deletes all unique permissions and selected securable object continues to inherit permissions from the parent site.

  * __Available On:__ sites(not the root ones), lists, list items that have the broken permissions  
  * __Scope:__ currently selected SharePoint object

Please note!  
* If you choose to restore the permission inheritance on a __folder__, you can choose an additional option to restore permission inheritance for __all subitems__ as well.

* Restoring permission inheritance on a __subsite__, will also restore the permission inheritance on lists and list items on that subsite.

## Grant

__Grant Permissions__ allows you to assign permissions to a user or a group on a selected SharePoint securable object with unique permissions.

 *  __Scope:__ currently selected object, Site Collection in which the selected object is if granting permissions through SharePoint Group  
 * __Supported Principal selection:__ SharePoint user, Active Directory Group or SharePoint group  
 * __Assign permissions method:__ directly or through the SharePoint group  

Please note! Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.


__Create Group__ creates a new SharePoint group on the selected SharePoint object with unique permissions.

  * __Scope:__ Site Collection in which the selected object is
  * __Supported owner selection:__ user, SharePoint group
  * __Permission Selection:__ permission levels listed in this step depend on the selected site collection template. If you use site template other than team site template, different list of default SharePoint permission levels will be provided.

  __Add to Group__ allows you to directly add selected principals to the existing SharePoint groups.
  *  __Scope:__ currently selected object, Site Collection in which the selected group is 
 * __Supported Principal selection:__ SharePoint user, Active Directory Group 


## Manage permissions

__Edit Permissions__ modifies assigned permission levels for a selected principal.

  * __Scope__: currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint users, AD groups, SharePoint groups

__Clone Permissions__ Source principal’s permissions will not be changed in any way by this wizard. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

  * __Scope:__ currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint user, Active Directory group
  * __Destination principals selection:__ SharePoint user, Active Directory group

__Transfer Permissions__ Source principal’s permissions will lose all previously directly assigned permissions and group memberships. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

  * __Scope:__ currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint user, Active Directory group
  * __Destination principals selection:__ SharePoint user, Active Directory group

__Remove Permissions__ removes all previously granted permissions from a selected user. User will still exist on this site collection but will no longer have any assigned permissions on this SharePoint object.

  * __Scope:__ currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint user, Active Directory group, SharePoint group

__Move to Group__ removes directly assigned permissions from the selected user and adds him to a SharePoint group. Selected user will now inherit permissions through this group membership.

  * __Scope:__ currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint user, Active Directory group

Please note! Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.

__Copy to group__ adds a selected principal to a SharePoint group, but keeps his directly granted permissions on this SharePoint object also. Selected user will now have both directly given permissions and permissions gained through this group membership.

  * __Scope:__ currently selected SharePoint object with unique permissions
  * __Available On:__ SharePoint user, Active Directory group

Please note! Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.

## Remove

__Delete User__ deletes the selected principal from the entire Site Collection. User or Active Directory group will no longer have any permissions assigned and will be deleted from the entire site collection.

  * __Scope:__ Site Collection in which currently focused SharePoint object is
  * __Available On:__ SharePoint user, Active Directory group

__Delete Group__ deletes the selected SharePoint group from the entire Site Collection. This SharePoint group will no longer have any permissions assigned and will be deleted from the entire site collection.

  * __Scope:__ Site Collection in which currently focused SharePoint object is
  * __Available On:__ SharePoint group

__Remove Users from Groups__ remove the selected user from the selected SharePoint group. User will lose all permissions gained through this group membership.

  * __Scope:__ Site Collection in which currently focused SharePoint object is
  * __Available On:__ SharePoint group members- SharePoint users, Active Directory groups

## Configure

__Permission Levels__ - add, remove or modify permission levels on the selected site collection or subsite. Click on the desired listed permission level to edit its currently configured base permissions or use __Add Permission Level__ button to create new permission level.

  * __Scope:__ currently selected SharePoint object and his hierarchical children
  * __Available On:__ SharePoint objects that do not inherit permission levels from parent

Please note! Base permissions are connected, so if for example, you want to include Manage Lists base permission into the permission level, the View Items, View Pages and Open base permissions are also needed. User do not have to worry about these requirements, SPDocKit will take care of it.

__Site Collection Administrators__ - modify current set of administrators. Change primary and secondary site collection administrators or entire site collection administrators group.

  * __Scope:__ Site Collection in which currently focused SharePoint object is
  * __Primary administrator principal selection:__ SharePoint user
  * __Secondary administrator principal selection:__ SharePoint user
  *__Administrators group principal selection:__ SharePoint users, Active Directory groups (except in SharePoint 2007)

Some of these actions have the __Preview__ step to make sure that the pending changes will do exactly what you wanted and have specified. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using __Save Log__ button.

## Changes*
__Audit__ - use this button to track down all permissions changes made on the selected securable object. This button will take you to a Audit Permissions report and show details about who made a certain action and on which securable object.  
__Restore__ - allows you to restore previous state of permissions for the selected object. Just choose the snapshot date you wish to revert the permissions to and follow the [restore wizard](#internale/permission-management/restore-permissions) steps to finish the process.   
This feature is not available in all license types. Please check [feature availability by license type.](https://www.spdockit.com/orders/features-by-licenses/)


## SPDocPerm Event Log
In addition, you can track and explore all permission changes made by SPDocKit using [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log).

*Please check [feature availability by license type.](https://www.spdockit.com/orders)