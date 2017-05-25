---
title: Permissions Reports Screen
description: This article describes how SPDocKit permissions reports can help administrators track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.
author: Iva Novoselic
date: 24/5/2017
---

The Permissions Reports section contains a number of reports on SharePoint Permissions and Logical and Structural Reports. With these reports a SharePoint administrator can track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.

## Site Collection Reports
__Unique Permissions__ – shows SharePoint objects (sites, lists, items) with unique permissions, e.g. objects with broken permission inheritance.  
__Site Collection Hierarchy__ – shows all principals and their permissions across the selected site collection. It also includes a complete hierarchy structure overview including, objects with broken permission inheritance. Use the content display level filter to select how granular these reports should be—they go down to the list item level.  
__SharePoint Groups__ – shows all SharePoint groups and its members across the selected site collections.
__Permission Level Usage__ - displays all the site collections where seleceted permission level exists and if it is being used (assigned to any principal).

__Cleanup Reports__
  * __Groups Without Permissions__ – lists all SharePoint groups that haven’t been assigned any permissions. This includes groups with ”Limited Access” that remained after their permissions on a specific item in this site collection were removed.
  * __Groups With Disabled Owner__ – lists all SharePoint groups whose owners have been disabled in Active Directory.  
  * __Groups Without Users__ – lists all SharePoint groups without any members.  
  * __Orphaned Users__ – lists all farm users that still have access to the farm and are listed under Site Collection user, but have been disabled or deleted in Active Directory.  
  * __Users Without Permissions__ – lists all users that no longer have any permissions assigned, neither directly nor through some of the SharePoint groups. This also includes users with ”Limited Access” that have remained after their permissions on a specific item in this site collection have been removed.
  * __Site Collections with Disabled Owner__ - crawls the selected site collections and lists those in which primary or secondary administrator was disabled or deletedd from Active Directory.  

__Health Checks__
  * __Directly Assigned Permissions__ - shows user who have directly assigned permissions on the selected site collection. Avoid granting permissions directly to individuals and work with groups instead.
  * __Lists with Uniquely Secured Items__ - shows lists and libraries that contain list items with broken permissions inheritance. 
  * __Uniquely Secured List Items__ - shows all list items with broken permissions inheritance.


## Subsite Reports
__Subsite Hierarchy__ – shows all the principals and their permissions (all or unique) on selected subsite, down to the list item. With Content Display Level you can decide how granular the report will be and how it will be structured.  
__Subsite Permissions Details__ – shows which types of base permissions are present on a selected subsite (one or more). Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how they got this type of permissions.  
__Subsite Permissions Matrix__ – shows all principals on a selected subsite and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.  

## List Reports
__List Hierarchy__ – shows all principals and their permissions (all or unique) on a selected list.  
__List Permissions Details__ – shows which types of base permissions are present on a selected list (one or more). Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how the principal got this type of permission.  
__List Permissions Matrix__ – shows all principals on selected list and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.  

## List Item Reports
__List Item Permissions Details__ – shows which types of base permissions are present on a selected list item (one or more). Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how he got this type of permissions.  
__List Item Permissions Matrix__ – shows all principals on a selected list item and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.

## User Reports
__User Permissions Overview__ – summary of principal’s permissions on the farm. Shows site collections in which a user has permissions, permissions that this user has as an individual, and the permissions that were given through a group. To see a more detailed permissions breakdown on a particular site collection, use the __Explore Permissions__ button.  
__User Permissions Details__ – shows all permissions on all subsites inside a selected site collection for a specific user. The report shows permissions that a certain user has on each item within the particular site collection, along with the permissions that were given through a group. To see a more detailed permissions breakdown of a particular subsite, list, or list item, use the __Explore Permissions__ button.

## Group Reports
__Group Members__ – shows all members of a selected SharePoint or Active Directory group. By using the Principal Status filter, you can check for enabled or disabled users, and change the report display type from flat to structured by using the Layout type filter.  
__Member Of__ – shows all the groups the selected principal is a member of.

## Externally Shared*
__External Users__ - lists all external users in tenant.  
__Externally Shared Content__  - list of content in the tenant shared with the external users, along with the external users it is shared with and with the permissions they have on teh content.   
__Externaly Shared Content Hierarchy__ - shows externally shared content in the tenant hierarchy. Only the externally shared content is displayed.  
__Anonymous Access Links__ - a list of content in the tenant that has been shared with an anonymous guest link.

*These reports are available only as a part of SPDocKit Online edition for SharePoint Online.  

## Security Audit
__All Farm Users__ – shows all users with permissions on all your farms, sorted by domain. This report also provides information about a user’s status in AD (enabled or disabled).  
__All Site Users__- lists all users that have access to the selected site collection(s).  
__Number of Users per Site__ – shows the number of users with some type of permission across the entire farm, grouped by site collections. This total number is then broken down by their active and disabled status.  
__Users with Privileged Access__ – shows all users with privileged access on the farm, i.e., site administrators, or primary and secondary administrators.  
__Administrative Actions__  -  This report is available only for SharePoint 2016 farms with FP1 installed.   
__Permissions Audit__ - shows a complete log of permissions changes on a specific site collection in a given time period. This report requires that you enable __Editing users and permissions__ events to audit and take a snapshot with the Security Audit option checked.


Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.