---
title: Site Collection Administrators Wizard
description: >-
  This article describes how to use Site Collection Administrators wizard to
  manage site collection admins on multiple sites within a single web
  application.
author: Mia Tomaić
date: 25/5/2017
---

# Site Collection Administrators Wizard

This article describes how to use Site Collection Administrators wizard to manage site collection admins on multiple sites within a single web application. The operations this wizard supports are setting the primary or secondary administrator, adding a user to the Site Collection’s Administrators Group, and removing a user from the Site Collection’s Administrators Group.

**Wizard Scope**: farm, web application, site collection

Supported People Picker principal selection for:

* **Primary Administrator**: SharePoint user
* **Secondary Administrator**: SharePoint user
* **Administrators Group**: SharePoint user, Active Directory group \(multiselect allowed\)

## Set Primary Administrator

This wizard option allows you to set a specified user as a primary administrator in place of the existing one across the selected wizard scope. People picker supports exactly one SharePoint user as a valid choice. 1. Navigate to Permissions Explorer and click on the **Site Collection Administrators Wizard** in the Wizards ribbon.

1. Select **Set Primary Administrator** option and **Next** to continue.
2. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
3. Specify which user should be set as the primary administrator. Just like in SharePoint, exactly one primary administrator is allowed.
4. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. If the user is already set as the primary admin on any of selected site collections, wizard will inform you.
5. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](site-collection-administrators-wizard.md#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Set Secondary Administrator

This wizard option allows you to set a specified user as a secondary administrator in place of the existing one \(if they are not the same\) on the selected site collections.

1. Navigate to Permissions Explorer and click on the **Site Collection Administrators Wizard** in the Wizards ribbon.
2. Select **Set Secondary Administrator** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Specify which user should be set as the secondary administrator. Just like in SharePoint, you may specify one user or none, in which case, the secondary administrators of the selected site collections will be removed.
5. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. If the user is already set as the secondary admin on any of selected site collections, wizard will inform you.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](site-collection-administrators-wizard.md#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Add to Site Collection Administrators Group

This wizard option allows you to add one or more users to the Site Collection Administrators Group of the selected site collections.

1. Navigate to Permissions Explorer and click on the **Site Collection Administrators Wizard** in the Wizards ribbon.
2. Select **Add To Site Collection Administrators Group** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Specify which users should be added to a Site Collection Administrators group. You can specify any number of users and Active Directory groups here. **Please note!** Active directory groups are not supported choice for SharePoint 2007 Site Collection Administrators group.
5. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. . If any of specified users is already a primary or secondary administrator of the site collection, you will be notified in this step.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](site-collection-administrators-wizard.md#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Remove from Site Collection Administrators Group

This wizard option allows you to remove one or more users and AD groups from the Site Collection Administrators Group of the selected site collections.

1. Navigate to Permissions Explorer and click on the **Site Collection Administrators Wizard** in the Wizards ribbon.
2. Select **Remove from Site Collection Administrators Group** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.
4. Specify which users should be removed from a Site Collection Administrators group. You can specify any number of users and Active Directory groups here.

   **Please note!** You can specify a primary administrator here \(he is also a member of the Administrators Group\), but he will not be removed from the group because a site collection needs to always have a primary administrator.

5. This step will list all the actions that will be taken in the next step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](site-collection-administrators-wizard.md#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

