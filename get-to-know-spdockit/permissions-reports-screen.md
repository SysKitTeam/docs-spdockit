---
title: Permissions Reports Screen
description: >-
  This article describes how SPDocKit permissions reports can help
  administrators track permissions for different users and groups across a
  SharePoint farm and easily manage the SharePoint environment.
author: Iva Novoselic
date: 24/5/2017
---

# Permissions Reports Screen

The Permissions Reports section contains a number of reports on SharePoint Permissions and Logical and Structural Reports. With these reports a SharePoint administrator can track permissions for different users and groups across a SharePoint farm and easily manage the SharePoint environment.

## Site collection reports

* **Unique Permissions** – shows SharePoint objects \(sites, lists, items\) with unique permissions, e.g. objects with broken permission inheritance.  
* **Site Collection Hierarchy** – shows all principals and their permissions across the selected site collections. It also includes a complete hierarchy structure overview including objects with broken permission inheritance. Use the content display level filter to select how granular these reports should be—they go down to the list item level.  
* **SharePoint Groups** – shows all SharePoint groups and its members across the selected site collections.
* **Permission Level Usage** - displays all the site collections where the selected permission level exists and if it is being used \(assigned to any principal\).

**Cleanup reports**

* **Groups Without Permissions** – lists all SharePoint groups that haven’t been assigned any permissions. This includes groups with ”Limited Access” that remained after their permissions on a specific item in this site collection were removed.
* **Groups With Disabled Owner** – lists all SharePoint groups whose owners have been disabled in Active Directory.  
* **Groups Without Users** – lists all SharePoint groups without any members.  
* **Orphaned Users** – lists all farm users that still have access to the farm and are listed as site collection user, but have been disabled or deleted in Active Directory.  
* **Users Without Permissions** – lists all users that no longer have any permissions assigned, neither directly nor through any SharePoint groups. This also includes users with ”Limited Access” that have remained after their permissions on a specific item in this site collection were removed.
* **Site Collections with Disabled Owner** - crawls the selected site collections and lists those in which the primary or secondary administrator was disabled or deleted from Active Directory.  

**Health checks**

* **Directly Assigned Permissions** - shows users who have directly assigned permissions to securable objects within the selected site collections. Avoid granting permissions directly to individuals and work with groups instead.
* **Lists with Uniquely Secured Items** - shows lists and libraries that contain list items with broken permissions inheritance. 
* **Uniquely Secured List Items** - shows all list items with broken permissions inheritance.

## Subsite reports

* **Subsite Hierarchy** – shows all principals and their permissions \(all or unique\) on the selected subsite, down to the list item. With Content Display Level you can decide how granular the report will be and how it will be structured.  
* **Subsite Permissions Details** – shows which types of base permissions are present on the selected subsites. Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how they got the assigned permissions.  
* **Subsite Permissions Matrix** – shows all principals on a selected subsite and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.  

## List reports

* **List Hierarchy** – shows all principals and their permissions \(all or unique\) on a selected list.  
* **List Permissions Details** – shows which types of base permissions are present on the selected lists. Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how the principal got the assigned permissions.  
* **List Permissions Matrix** – shows all principals on selected list and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.  

## List item reports

* **List Item Permissions Details** – shows which types of base permissions are present on a selected list items. Each permissions category displays the list of users that have been granted that type of permission as well as the principal’s role, type, and how he got the assigned permissions.  
* **List Item Permissions Matrix** – shows all principals on a selected list item and which permission level each of them has. If you select the Show option in the Show details filter, you will see how they got a specific permission.

## User reports

* **User Permissions Overview** – summary of principals' permissions on the farm. Shows site collections in which users have permissions, permissions that the users have as an individual, and the permissions that were given through a group. To see a more detailed permissions breakdown on a particular site collection, use the **Explore Permissions** button.  
* **User Permissions Details** – shows all permissions on all subsites inside a selected site collection for a specific user. The report shows permissions that a certain user has on each item within the particular site collection, along with the permissions that were given through a group. To see a more detailed permissions breakdown of a particular subsite, list, or list item, use the **Explore Permissions** button.

## Group reports

* **Group Members** – shows all members of a selected SharePoint or Active Directory group. By using the Principal Status filter, you can check for enabled or disabled users, and change the report display type from flat to structured by using the Layout type filter.  
* **Member Of** – shows all the groups the selected principal is a member of.

## Externally shared\*

* **External Users** - lists all external users in tenant.  
* **Externally Shared Content**  - list of content in the tenant shared with external users, along with the external users it is shared with and the permissions they have on the content.   
* **Externally Shared Content Hierarchy** - shows externally shared content in the tenant \* hierarchy. Only the externally shared content is displayed.  
* **Anonymous Access Links** - a list of content in the tenant that has been shared with an anonymous guest link.

## Security audit

* **All Farm Users** – shows all users with permissions to the selected farm, sorted by domain. This report also provides information about a user’s status in AD \(enabled or disabled\).  
* **All Site Users** - lists all users that have access to the selected site collections.  
* **Number of Users per Site** – shows the number of users with some type of permission across the entire farm, grouped by site collections. This total number is then broken down by their Active Directory status \(either active or disabled\).  
* **Users with Privileged Access** – shows all users with privileged access on the farm, such as farm and site administrators, or primary and secondary administrators, Users with Full Control / Full Read Web Application Policy, etc.  
* **Administrative Actions** - displays various types of administrative actions performed through the Central Administration, related to account configuration, server administration, site collection & web application administration, feature administration, etc. Note that this report is available only for SharePoint 2016 farms with FP1 installed.
* **Permissions Audit Overview** - Shows whether auditing is enabled and provides information about the number of permissions changes made on your site collections in a given date range. To see the details about changes drill down to the Permissions Audit Details report.
* **Permissions Audit Details** \* - shows a complete log of permissions changes on a specific site collection in a given time period. This report requires that you enable **Editing users and permissions** events to audit and take a snapshot with the Security Audit option checked.

Visit [SPDocKit resources center](https://www.spdockit.com/resources/reports) for videos and samples of SharePoint documentation and reports by SPDocKit.

\*Please check [feature availability by license type.](https://www.spdockit.com/orders)

