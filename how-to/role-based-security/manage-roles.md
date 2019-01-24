---
title: Manage Roles
description: How to manage roles
author: Vinko Bedek
date: 19/5/2017
---

# Manage Roles

This section describes how to manage SPDocKit roles.

## Create a new role

To create a new role, follow these instructions: 1. Navigate to the **Backstage Configuration Screen** and click **Manage Roles**. 2. Click Add **Role**. 3. The **SPDocKit Role Wizard** will open. Under **General**, type in the name of the role and add a description.  
Click **Next** to continue. 4. If you wish a user to see and access the Farm Explorer and Best Practices, under **Snapshots**, select the **Allow access to Farm Explorer and Best Practices report categories** check box.  


{% hint style="warning" %}
**Please note** that the Farm Explorer reports may contain sensitive information such as passwords and other important SharePoint settings.
{% endhint %}

In the **Farms** subsection you must choose which farm\(s\) you wish to enable the aforementioned permissions for. Click [here](../../configuration/configure-multiple-farms-to-use-same-spdockit-database.md) to learn more about using the same database with more than one farm. Click **Next** to continue.

1. Under **Report Categories** define the report categories to which the SPDocKit user will have access. You can also fine-tune which SharePoint objects will be visible on these report categories. You can choose to give permissions and access:
   * to all objects \(reports will show data from all farms\),
   * based on SharePoint permissions \(users will only see data from the Site Collections for which they are members of the Site Administrators group\), and/or
   * to the selected site collections \(reports will show data for explicitly defined site collections\).

     Please note that if you choose only certain Site Collections, the user will still need to be a Site Administrator to view the specific Site Collection.  
     Bear in mind that these settings differ from the ones in a previous screen. The farms you choose there only apply to the Farm Explorer and Best Practices.  
     Permissions you can manage here are Site Explorer, Permission Explorer, Permission Reports, and Content and Usage Reports. They directly correspond to the same tabs in SPDocKit.  
     Click **Next** to continue.
2. Add users to this new role. Click **Next** to create your role and exit the Role Wizard.

## Edit an existing role

To edit an existing role, follow these instructions: 1. Navigate to the Backstage Configuration Screen 2. Click **Manage Roles** 3. Select the role you wish to edit, and then click **Edit**.

## Delete an existing role

1. Navigate to the Backstage Configuration Screen
2. Click **Manage Roles**
3. Select the role you wish to edit, and then click **Delete**.

