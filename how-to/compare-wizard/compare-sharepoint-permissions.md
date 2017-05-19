---
title: Compare SharePoint Permissions
description: This section describes how to use SPDocKit to compare SharePoint permissions between any two selected SharePoint objects.
author: Martin Pisacic
date: 18/5/2017
---

## Compare SharePoint Permissions

This section describes how to use SPDocKit to compare SharePoint permissions between any two selected SharePoint objects.

1. Navigate to the **Backstage Actions Screen** and click the **Compare Wizard** button.

2. Select **Permission** for the comparison type. Click **Next** to continue.

### Object-to-Object Compare

Use the Compare wizard to:

* examine the permission settings in relation to another SharePoint object,
* find out which permissions should be given/taken to the preferred SharePoint object users in compare to another similar SharePoint object,
compare SharePoint object permissions for the entire history by selecting the same SharePoint object for a different time period.

1. Select **Object to Object Compare** subtype and click **Next** to proceed to the results screen.

2. Choose a certain permission record by the date you want to compare from the **Permissions Date** dropdown menu. Select a web application and site collection, then drill down to the site, subsite, list and list item. Do this on both sides to compare the permissions for selected objects.

### Permission Differences

The Permissions compare subtype allows you to track all permission changes at a site collection level. It can help you detect whether: the permission inheritance has been broken or restored, the permissions have been granted or removed, the principals’ status has changed in the AD, or even if some SharePoint objects have been created or removed on a selected site collection.

1. Select the **Permission Differences** subtype and click **Next** to proceed to the results screen.

2. Select the dates for which you want to compare the permissions, and then select the site collection which SPDocKit will crawl for differences.
    * The **Content Display level** filter enables you to define the granularity of this report. You can track changes down to the list item level.
    * **The Permissions** filter defines whether permissions will be compared only for objects with broken permission inheritance or for all objects.
    * The **Permission View Type** defines whether you will track only directly given permissions, or group memberships also.

### Group to Group Compare

Group To Group Compare subtype allows you to compare members of two different groups. This can be useful when troubleshooting permissions and finding identical SharePoint or Active Directory groups.

1. Select the Group To Group Compare subtype and click Next to proceed to the results screen
    * The **Farm** filter is preselected to your local farm, but you can easily choose any farm in your SPDocKit database. (This filter will show if you have two or more farms in your SPDocKit database.)
    * Use the **Permission Date** filter to select on which date you want to explore permissions.
    * Use **Principal** filter to select either an AD or SharePoint Group you wish to explore.
    * **Layout Type** can either be Flat or Structured. Flat means that members of the selected groups will not keep their structure. On the other hand, if you select Structured, members of the selected groups will keep their tree-like structure.

### Membership Differences

Membership Differences report allows you to check if group members of your SharePoint or Active Directory groups have changed. This can be useful when you want to view differences in group memberships at different points in time.

1. Select the Membership Differences Compare subtype and click Next to proceed to the results screen.
    * The **Farm** filter is preselected to your local farm, but you can easily choose any farm in your SPDocKit database. (This filter will show if you have two or more farms in your SPDocKit database.)
    * Use the **Permission Date** filter to select on which date you want to explore permissions.
    * Use **Principal** filter to select either an AD or SharePoint Group you wish to explore.
    * **Layout Type** can either be Flat or Structured. Flat means that members of the selected group will not keep their structure. On the other hand, if you select Structured, members of the selected group will keep their tree-like structure.