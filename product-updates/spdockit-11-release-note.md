---
description: >-
  This article describes new features, improvements and bug fixes delivered in
  SPDocKit 11.
---

# SPDocKit 11

**SPDocKit 11** is a major release that comes with new reports, a useful wizard, and many improvements. Scroll down to see what's new!

**Product version:** 11.0.0  
**Build number:** 11792  
**Release date:** Oct 07, 2020

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Features

* **New Workflow Reports are available**! Three new reports – **Workflows on Farm**, **Workflow Templates**, and **Workflow Associations** – enable you to:
  * **detect all workflows and workflow templates in your SharePoint farm**, be it SharePoint 2010, 2013, 2013 Project Server workflows, or third party vendor workflows, such as Nintex workflows,
  * **view the count of associations and active instances**, and other information related to workflows,
  * **discover when a workflow was last active**.

    You can find the new reports in the Analytics & Usage Reports category.
* **Two new Storage reports are available**!
  * **The List and Libraries report shows you a complete overview of Lists and Document Libraries** in the selected SharePoint subsite; for each of them, you can find the **number of items**, **size**, and time when it was **last updated**, among others. 
  * **The Files report provides you with information about each document in a subsite**, such as **size**, **versioning**, and time when it was **last updated**.

    To obtain the reports, install the Storage Reports extension and find them in the Storage Metrics & Growth category inside the Analytics & Usage Reports section.
* **The new Remove Permissions Wizard is available**! With the help of the wizard, you can:
  * **remove permissions for one or multiple users**
  * **remove permissions for selected users on one or multiple sites**, or even the **entire SharePoint farm**
  * **remove permissions in bulk by importing a CSV file**

    [For more details about the Remove Permissions wizard, continue to the following article.](../manage-sharepoint-permissions/users-and-groups-actions/remove-permissions-wizard.md)
* **SPDocKit now supports contextual auditing down to the file level**! Now you can easily find audit logs even for a single document in your environment by altering the **SharePoint Object filter selection, which is now enabled for all content levels**. With this addition, the **Audit drill available on the Permissions Explorer** will **open the Audit Log Details report with the SharePoint Objects filter automatically set**.
* **SPDocKit now supports PowerPivot for SharePoint 2016**! You can find all PowerPivot service settings inside the Farm Explorer’s PowerPivot Services report category. 
* **New actions added to the Subscriptions and Alerts screen**! Use the **Disable action** to temporarily stop the automatic sending of selected subscriptions and alerts without the need to delete them. To activate and start sending subscriptions and alerts again, select them, and use the **Enable action**.

## Improvements & Bug Fixes

* **The Groups Without Permissions cleanup report was renamed Unused SharePoint Groups** to explain its content better. Two additional columns – **Primary Administrator** and **Secondary Administrator** – were also added to the report.
* **Improved how snapshots are saved to the database**. Before, when running a manual snapshot in larger environments, the following exception would be thrown: `System.OutOfMemoryException: Exception of type 'System.OutOfMemoryException' was thrown.   at System.Text.StringBuilder.ToString().`
* **Build numbers are now updated automatically** each time you open SPDocKit. Before, the update would need to be done manually and often caused false positives on the **Is SharePoint up to Date** Best Practices report. 
* **Group Memberships filter on the Permissions Matrix report was improved**.

  A new option was added – **Hierarchical Structure \(exclude deselected groups\)**. When selected, the report shows a hierarchical structure without deselected groups, as the name suggests. Such groups are not displayed even if they contain users selected to be shown in the report.

* **Site Collection Visitors report was improved to handle many site visitors better**. In case the selected site collection had thousands of visitors, the report would result in a system error and wouldn’t show expected results.
* **Fixed an issue** with custom queries created on the site collection scope. When run, the query resulted in the following error: `System.ArgumentNullException: 'dataType' argument cannot be null.`

  Parameter name: datatype.

* **Fixed an issue** where newly added SharePoint farm servers would not be included in Snapshots. New servers are now automatically added to the server list and included in all Snapshots.
* **Fixed a bug** where SPDocKit activation would fail with the following error: `System.InvalidOperationException: This implementation is not part of the Windows Platform FIPS validated cryptographic algorithms.`
* **Fixed a bug** where Farm documentation and Best Practices documentation export would not show the **Click here for details** links if the **Add extra spacing after each heading** option was enabled.
* **Fixed an issue** that would appear when upgrading SPDocKit on SharePoint 2010 Foundation environments. The Configuration Wizard would result in the following error:

  `System.IO.FileNotFoundException: Could not load file or assembly 'Microsoft.Office.Policy, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c' or one of its dependencies. The system cannot find the file specified.`

* **Improved error messages, descriptions, and UX** on various screens and wizards.

