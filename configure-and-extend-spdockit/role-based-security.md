---
title: Role Based Security
description: >-
  This article describes how to use Role Based Security feature in SPDocKit to
  grant different permission levels to SPDocKit end users.
author: Tomislav Kunaj
date: 25/5/2017
---

# Role Based Security

This advanced security feature is meant to help admins take control and allow them to define different SPDocKit access levels. Users and groups can be assigned to specific roles based on elements of SPDocKit or on SharePoint site collection permissions.

## Enable Role Based Security

To enable this feature, navigate to the **Backstage Configuration Screen**, click **Role Based Security**, and select the **Enable role based security** check box. Click Save to apply this change.

{% hint style="warning" %}
**Please note!**  
The user who enables this feature will automatically be assigned to the Admin role. For role based security to work, you have to use a database and have the **securityadmin** and **db\_owner** permissions.
{% endhint %}

## Admin role

This role gives you full control over SPDocKit, as well as over the entire role based security system. As an admin you can create new custom roles, and assign users or groups to them or to one of our predefined roles \(Admin and Viewer\).

{% hint style="warning" %}
**Please note!**  
The first person who activates the RBS \(role based security\) will be automatically given the admin role.
{% endhint %}

## Viewer role

The Viewer role is predefined, along with the Admin role. This is a read-only role, and some reports are unavailable to members of this role due to security reasons.

{% hint style="warning" %}
**Please note!**  
With the Viewer role, you cannot see certain reports, like the Web.config files, Storage Metrics, All Farm Users, Users with Privileged Access, and the entire Passwords and Product Keys section in the Farm Explorer. You also cannot create a new view for a report.
{% endhint %}

## Manage Roles

This section describes how to manage SPDocKit roles.

### Create a new role

To create a new role, follow these instructions: 

1. Navigate to the **Backstage Configuration Screen** and click **Manage Roles**.   
2. Click Add **Role**.   
3. The **SPDocKit Role Wizard** will open. Under **General**, type in the name of the role and add a description. Click **Next** to continue.   
4. If you wish a user to see and access the Farm Explorer and Best Practices, under **Snapshots**, select the **Allow access to Farm Explorer and Best Practices report categories** check box.

{% hint style="warning" %}
**Please note!**  
The Farm Explorer reports may contain sensitive information such as passwords and other important SharePoint settings.
{% endhint %}

In the **Farms** subsection you must choose which farm\(s\) you wish to enable the aforementioned permissions for. Click [here](../configuration/configure-spdockit-database.md) to learn more about using the same database with more than one farm. Click **Next** to continue.

5. Under **Report Categories** define the report categories to which the SPDocKit user will have access. You can also fine-tune which SharePoint objects will be visible on these report categories. You can choose to give permissions and access:

* to all objects \(reports will show data from all farms\),
* based on SharePoint permissions \(users will only see data from the Site Collections for which they are members of the Site Administrators group\), and/or
* to the selected site collections \(reports will show data for explicitly defined site collections\).

  Please note that if you choose only certain Site Collections, the user will still need to be a Site Administrator to view the specific Site Collection.

Bear in mind that these settings differ from the ones in a previous screen. The farms you choose there only apply to the Farm Explorer and Best Practices.  
Permissions you can manage here are Site Explorer, Permission Explorer, Permission Reports, and Content and Usage Reports. They directly correspond to the same tabs in SPDocKit.  
Click **Next** to continue.

6. Add users to this new role. Click **Next** to create your role and exit the Role Wizard.

### Edit an existing role

To edit an existing role, follow these instructions: 

1. Navigate to the Backstage Configuration Screen 
2. Click **Manage Roles** 
3. Select the role you wish to edit, and then click **Edit**.

### Delete an existing role

1. Navigate to the Backstage Configuration Screen
2. Click **Manage Roles**
3. Select the role you wish to edit, and then click **Delete**.

## Manage Users

This section explains how to add principals and manage users.

1. Navigate to the **Backstage Configuration Screen**, and click **Manage Users**.
2. To add a new user, click **Add Users**.

   Enter user names or search to add them as principals and assign them a certain role. Click **Assign** to finish and save your changes.

3. To edit or delete a user use the corresponding buttons in the toolbar.

{% hint style="warning" %}
**Please note!**   
For convenience we provide an option to delete the SQL login of the selected user as part of deleting the user from the SPDocKit database.

If the selected user is using a database other than the SPDocKit on a given server, you shouldn’t try to delete its SQL login. However, if the SPDocKit database is the only one the selected user is using, you can completely remove his or her logon rights
{% endhint %}

