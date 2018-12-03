---
title: Permissions Reports Screen
description: This article describes how SPDocKit permissions reports can help administrators track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.
author: Iva Novoselic
date: 24/5/2017
---

The Permissions Reports section contains a number of reports on SharePoint Permissions and Logical and Structural Reports. With these reports a SharePoint administrator can track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.

## Permission Reports
* __Unique Permissions__ – shows SharePoint objects (sites, lists, items) with unique permissions, e.g. objects with broken permission inheritance.  
* __Permissions Matrix__ – shows permission levels for selected principals on selected securable objects. It also includes a complete hierarchy structure overview including the objects with broken permission inheritance. Use the Include Content filter to select how granular these reports should be. They go down to the list item level. 
* __Permissions Details__ – shows which types of base permissions are present on selected securable objects. Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how they got the assigned permissions.  
* __Permission Level Usage__ - displays all the site collections where the selected permission level exists and if it is being used (assigned to any principal).

## User reports
* __All Farm Users__ – shows all users with permissions to the selected farm, sorted by domain. This report also provides information about a user’s status in AD (enabled or disabled).  
* __All Site Users__ - lists all users that have access to the selected site collections. 
* __Users with Privileged Access__ – shows all users with privileged access on the farm, such as farm and site administrators, or primary and secondary administrators, Users with Full Control / Full Read Web Application Policy, etc. 
* __User Permissions Overview__ – summary of principals' permissions on the farm. Shows site collections in which users have permissions, permissions that the users have as an individual, and the permissions that were given through a group. To see a more detailed permissions breakdown on a particular site collection, use the __Explore Permissions__ button.  
* __User Permissions Details__ – shows all permissions on selected securable objects for a specific user. The report shows permissions that a certain user has on each item within the particular site collection, along with the permissions that were given through a group. To see a more detailed permissions breakdown, use the __Explore Permissions__ button.

## Group reports
* __Group Members__ – shows all members of a selected SharePoint or Active Directory group. By using the Principal Status filter, you can check for enabled or disabled users, and change the report display type from flat to structured by using the Layout type filter.  
* __Member Of__ – shows all the groups the selected principal is a member of.
* __SharePoint Groups__ – shows all SharePoint groups and its members across the selected site collections.

## Cleanup reports
* __Groups Without Permissions__ – lists all SharePoint groups that haven’t been assigned any permissions. This includes groups with ”Limited Access” that remained after their permissions on a specific item in this site collection were removed.
* __Groups With Disabled Owner__ – lists all SharePoint groups whose owners have been disabled in Active Directory.  
* __Groups Without Users__ – lists all SharePoint groups without any members.  
* __Orphaned Users__ – lists all farm users that still have access to the farm and are listed as site collection user, but have been disabled or deleted in Active Directory.  
* __Users Without Permissions__ – lists all users that no longer have any permissions assigned, neither directly nor through any SharePoint groups. This also includes users with ”Limited Access” that have remained after their permissions on a specific item in this site collection were removed.
* __Site Collections with Disabled Owner__ - crawls the selected site collections and lists those in which the primary or secondary administrator was disabled or deleted from Active Directory.  

## Health checks
* __Directly Assigned Permissions__ - shows users who have directly assigned permissions to securable objects within the selected site collections. Avoid granting permissions directly to individuals and work with groups instead.
* __Lists with Uniquely Secured Items__ - shows lists and libraries that contain list items with broken permissions inheritance. 
* __Uniquely Secured List Items__ - shows all list items with broken permissions inheritance.


Visit [SPDocKit resources center](https://www.syskit.com/products/spdockit/resources/) for videos and samples of SharePoint documentation and reports by SPDocKit.

