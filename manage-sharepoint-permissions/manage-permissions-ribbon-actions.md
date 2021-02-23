---
description: This article explains how to use Manage Permissions ribbon to easily manage SharePoint permissions on the selected object.
---

# Manage Permissions Ribbon Actions

Permission management buttons are enabled only in **live mode** of Permissions Explorer.

**Refresh** – reloads currently selected SharePoint object permission information or the entire permissions explorer tree.

## Inheritance

**Break Permission Inheritance** button copies the parent permissions and then stops the permissions inheritance for the selected object. Any changes made to a parent site will not apply to the selected site in the future and vice verse.

* **Available On:** sites\(not the root ones\), lists, list items that inherit permissions from the parent site  
* **Scope:** currently selected SharePoint object

**Restore Permission Inheritance** button deletes all unique permissions and selected securable object continues to inherit permissions from the parent site.

* **Available On:** sites\(not the root ones\), lists, list items that have the broken permissions  
* **Scope:** currently selected SharePoint object

{% hint style="warning" %}
**Please note!**  
If you choose to restore the permission inheritance on a **folder**, you can choose an additional option to restore permission inheritance for **all subitems** as well.

Restoring permission inheritance on a **subsite**, will also restore the permission inheritance on lists and list items on that subsite.
{% endhint %}

## Grant

**Grant Permissions** allows you to assign permissions to a user or a group on a selected SharePoint securable object with unique permissions.

* **Scope:** currently selected object, Site Collection in which the selected object is if granting permissions through SharePoint Group  
* **Supported Principal selection:** SharePoint user, Active Directory Group or SharePoint group  
* **Assign permissions method:** directly or through the SharePoint group  
* **Additional option:** when granting permissions directly, if the currently selected object is a List or Folder, another useful option is available: **Grant to everything in this folder/list, even to items with unique permissions.** If checked, the permission will be granted even on the child objects with broken permission inheritance. 

{% hint style="warning" %}
**Please note!**  
Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.
{% endhint %}

**Create Group** creates a new SharePoint group on the selected SharePoint object with unique permissions.

* **Scope:** Site Collection in which the selected object is
* **Supported owner selection:** user, SharePoint group
* **Permission Selection:** permission levels listed in this step depend on the selected site collection template. If you use site template other than team site template, different list of default SharePoint permission levels will be provided.

  **Add to Group** allows you to directly add selected principals to the existing SharePoint groups.

* **Scope:** currently selected object, Site Collection in which the selected group is
  * **Supported Principal selection:** SharePoint user, Active Directory Group 

## Manage permissions

**Edit Permissions** modifies assigned permission levels for a selected principal.

* **Scope**: currently selected SharePoint object with unique permissions
* **Available On:** SharePoint users, AD groups, SharePoint groups

**Copy Permissions** Source principal’s permissions will not be changed in any way by this wizard. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

* **Scope:** currently selected SharePoint object with unique permissions
* **Available On:** SharePoint user, Active Directory group
* **Destination principals selection:** SharePoint user, Active Directory group

**Move Permissions** Source principal’s permissions will lose all previously directly assigned permissions and group memberships. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

* **Scope:** currently selected SharePoint object with unique permissions
* **Available On:** SharePoint user, Active Directory group
* **Destination principals selection:** SharePoint user, Active Directory group

**Remove Permissions** removes all previously granted permissions from a selected user. User will still exist on this site collection but will no longer have any assigned permissions on this SharePoint object.

* **Scope:** currently selected SharePoint object with unique permissions
* **Available On:** SharePoint user, Active Directory group, SharePoint group

**Move to Group** removes directly assigned permissions from the selected user and adds him to a SharePoint group. Selected user will now inherit permissions through this group membership.

* **Scope:** currently selected SharePoint object with unique permissions
* **Available On:** SharePoint user, Active Directory group

{% hint style="warning" %}
**Please note!**  
Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.
{% endhint %}

**Copy to group** adds a selected principal to a SharePoint group, but keeps his directly granted permissions on this SharePoint object also. Selected user will now have both directly given permissions and permissions gained through this group membership.

* **Scope:** currently selected SharePoint object with unique permissions
* **Available On:** SharePoint user, Active Directory group

{% hint style="warning" %}
**Please note!**  
Adding a principal to a SharePoint group will grant the selected principal permissions across the entire site collection, wherever this SharePoint group has been granted permissions.
{% endhint %}

**Copy Object Permissions** enables you to copy the permissions between objects that are a part of different site collections or even different web applications. Source object permissions will not be affected by this wizard. Based on the options selected in the wizard, the destination principals and/or groups can lose all previously assigned permissions or acquire additional permissions. SharePoint groups of the target site collection can also be changed, which affects not only the target object but also all other objects to which the group is assigned. Where existing, the permission inheritance of target object will be broken in order to apply new role assignments.

* **Scope:** currently selected SharePoint object with unique permissions  
* **Available On:** all objects \(from site collection root site to list item\)  
* **Destination object selection:** all objects \(from site collection root site to list item\) belonging to the same or different site collection/web application

## Remove

**Delete User** deletes the selected principal from the entire Site Collection. User or Active Directory group will no longer have any permissions assigned and will be deleted from the entire site collection.

* **Scope:** Site Collection in which currently focused SharePoint object is
* **Available On:** SharePoint user, Active Directory group

**Delete Group** deletes the selected SharePoint group from the entire Site Collection. This SharePoint group will no longer have any permissions assigned and will be deleted from the entire site collection.

* **Scope:** Site Collection in which currently focused SharePoint object is
* **Available On:** SharePoint group

**Remove Users from Groups** remove the selected user from the selected SharePoint group. User will lose all permissions gained through this group membership.

* **Scope:** Site Collection in which currently focused SharePoint object is
* **Available On:** SharePoint group members- SharePoint users, Active Directory groups

## Configure

**Permission Levels** - add, remove or modify permission levels on the selected site collection or subsite. Click on the desired listed permission level to edit its currently configured base permissions or use **Add Permission Level** button to create new permission level.

* **Scope:** currently selected SharePoint object and his hierarchical children
* **Available On:** SharePoint objects that do not inherit permission levels from parent

{% hint style="warning" %}
**Please note!**  
Base permissions are connected, so if for example, you want to include Manage Lists base permission into the permission level, the View Items, View Pages and Open base permissions are also needed. User do not have to worry about these requirements, SPDocKit will take care of it.
{% endhint %}

**Site Collection Administrators** - modify current set of administrators. Change primary and secondary site collection administrators or entire site collection administrators group.

* **Scope:** Site Collection in which currently focused SharePoint object is
* **Primary administrator principal selection:** SharePoint user
* **Secondary administrator principal selection:** SharePoint user

  \***Administrators group principal selection:** SharePoint users, Active Directory groups \(except in SharePoint 2007\)

Some of these actions have the **Preview** step to make sure that the pending changes will do exactly what you wanted and have specified. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button.

## Changes

**Audit** - use this button to track down all permissions changes made on the selected securable object. This button will take you to the Audit Permissions report and show details about who made a certain action and on which securable object.  
**Restore** - allows you to restore previous state of permissions for the selected object. Just choose the snapshot date you wish to revert the permissions to and follow the [restore wizard](securable-objects-actions/restore-permissions.md) steps to finish the process.

## SPDocPerm Event Log

In addition, you can track and explore all permission changes made by SPDocKit using [SPDocPerm event log](spdockit-permission-management-event-log.md).

