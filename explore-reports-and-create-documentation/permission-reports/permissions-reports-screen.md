---
title: Permissions Reports Screen
description: >-
  This article describes how SPDocKit permissions reports can help
  administrators track permissions for different users and groups across a
  SharePoint farm and easily manage the SharePoint environment.
author: Iva Novoselic
date: 24/5/2017
---

# Permissions Reports screen

The Permissions Reports section contains a number of reports on SharePoint Permissions and Logical and Structural Reports. With these reports a SharePoint administrator can track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.

## Permission Reports

* **Unique Permissions** – shows SharePoint objects \(sites, lists, items\) with unique permissions, e.g. objects with broken permission inheritance.  
* **Permissions Matrix** – shows permission levels for selected principals on selected securable objects. It also includes a complete hierarchy structure overview including the objects with broken permission inheritance. Use the Include Content filter to select how granular these reports should be. They go down to the list item level. 
* **Permissions Details** – shows which types of base permissions are present on selected securable objects. Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how they got the assigned permissions.  
* **Permission Level Usage** - displays all the site collections where the selected permission level exists and if it is being used \(assigned to any principal\).

## User reports

* **All Farm Users** – shows all users with permissions to the selected farm, sorted by domain. This report also provides information about a user’s status in AD \(enabled or disabled\).  
* **All Site Users** - lists all users that have access to the selected site collections. 
* **Users with Privileged Access** – shows all users with privileged access on the farm, such as farm and site administrators, or primary and secondary administrators, Users with Full Control / Full Read Web Application Policy, etc. 
* **User Permissions Overview** – summary of principals' permissions on the farm. Shows site collections in which users have permissions, permissions that the users have as an individual, and the permissions that were given through a group. To see a more detailed permissions breakdown on a particular site collection, use the **Explore Permissions** button.  
* **User Permissions Details** – shows all permissions on selected securable objects for a specific user. The report shows permissions that a certain user has on each item within the particular site collection, along with the permissions that were given through a group. To see a more detailed permissions breakdown, use the **Explore Permissions** button.

## Group reports

* **Group Members** – shows all members of a selected SharePoint or Active Directory group. By using the Principal Status filter, you can check for enabled or disabled users, and change the report display type from flat to structured by using the Layout type filter.  
* **Member Of** – shows all the groups the selected principal is a member of.
* **SharePoint Groups** – shows all SharePoint groups and its members across the selected site collections.

## Cleanup reports

* **Groups Without Permissions** – lists all SharePoint groups that haven’t been assigned any permissions. This includes groups with ”Limited Access” that remained after their permissions on a specific item in this site collection were removed.
* **Groups With Disabled Owner** – lists all SharePoint groups whose owners have been disabled in Active Directory.  
* **Groups Without Users** – lists all SharePoint groups without any members.  
* **Orphaned Users** – lists all farm users that still have access to the farm and are listed as site collection user, but have been disabled or deleted in Active Directory.  
* **Users Without Permissions** – lists all users that no longer have any permissions assigned, neither directly nor through any SharePoint groups. This also includes users with ”Limited Access” that have remained after their permissions on a specific item in this site collection were removed.
* **Site Collections with Disabled Owner** - crawls the selected site collections and lists those in which the primary or secondary administrator was disabled or deleted from Active Directory.  

## Health checks

* **Directly Assigned Permissions** - shows users who have directly assigned permissions to securable objects within the selected site collections. Avoid granting permissions directly to individuals and work with groups instead.
* **Lists with Uniquely Secured Items** - shows lists and libraries that contain list items with broken permissions inheritance. 
* **Uniquely Secured List Items** - shows all list items with broken permissions inheritance.

Visit [SPDocKit resources center](https://www.syskit.com/products/spdockit/resources/) for videos and samples of SharePoint documentation and reports by SPDocKit.

