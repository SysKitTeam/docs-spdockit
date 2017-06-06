---
title: Clean Site Collections Wizard
description: Article describes how to use Clean Site Collection Wizard to manage users and groups that are unnecessarily present on your SharePoint farm or lost their permissions for any reason.
author: Mia Tomaić
date: 25/5/2017
---
This article explains how to use Clean Site Collection Wizard to keep your SharePoint farm permissions healthy. Track which users and groups are unnecessarily present on your SharePoint farm or lost their permissions for any reason. Use this wizard in combination with Cleanup Reports to find and manage the following: orphaned users, users without permissions or SharePoint groups without permissions.

**Wizard Scope**: site collection

### Delete Orphaned Users
Orphaned users are defined as users (users or AD groups) that are disabled or deleted from AD but had access to SharePoint farm and therefore can still be found on site collection.
1. Navigate to Permissions Explorer and click on the **Clean Site Collection Wizard** in the Wizards ribbon.

2. Select **Delete Orphaned Users** option from the Operation drop down menu.

3. Wizard will crawl specified site collection and list all users that match a selected criteria. You can delete them all, or select the ones you wish to delete permanently from this site collection. Before continuing to the final step, wizard will require one more confirmation that the selected users should be deleted.

4. The final step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

### Delete Users Without Permissions
Users (users or AD groups) without permissions are the ones that have no directly assigned permissions nor they have been granted any rights through some SharePoint group. This will also include users with „Limited access“ that remains after the user no longer has permissions for any specific item in the selected site collection.

1. Navigate to Permissions Explorer and click on the **Clean Site Collection Wizard** in the Wizards ribbon.

2. Select **Delete Users Without Permissions** option from the Operation drop down menu.

3. Wizard will crawl specified site collection and list all users that match a selected criteria. You can delete them all, or select the ones you wish to delete permanently from this site collection. Before continuing to the final step, wizard will require one more confirmation that the selected users should be deleted.

4. The final step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

### Delete SharePoint Groups Without Permissions
SharePoint groups without permissions are the ones that have no assigned permissions on the specified site collection. This will also include groups with „Limited access“ that remains after the group no longer has permissions for any specific item in the selected site collection.
1. Navigate to Permissions Explorer and click on the **Clean Site Collection Wizard** in the Wizards ribbon.

2.  Select **Delete SharePoint Groups Without Permissions** option from the Operation drop down menu.

3. Wizard will crawl specified site collection and list all users that match a selected criteria. You can delete them all, or select the ones you wish to delete permanently from this site collection. Before continuing to the final step, wizard will require one more confirmation that the selected groups should be deleted.

4. The final step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

### Delete SharePoint Groups Without Users
SharePoint groups without users are the ones that have no assigned members on the specified site collection.
1. Navigate to Permissions Explorer and click on the **Clean Site Collection Wizard** in the Wizards ribbon.

2. Select **Delete SharePoint Groups Without Users** option from the Operation drop down menu.

3. Wizard will crawl specified site collection and list all groups that match selected criteria. You can delete them all, or select the ones you wish to delete permanently from this site collection. Before continuing to the final step, wizard will require one more confirmation that the selected groups should be deleted.

4. The final step shows user the changes that were made. If some errors have occurred, they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made, as well as who made those changes.

# Replace Group Owners Disabled in AD
This wizard will help you find group owners which are disabled in Active Directory. After that you can provide a new user to replace the disabled one as a new group owner.
1. Navigate to Permissions Explorer and click on the **Clean Site Collection Wizard** in the Wizards ribbon.

2. Select **Replace Group Owners Disabled in AD** option from the Operation drop down menu.

3. Wizard will crawl specified site collection and list all users that match selected criteria. You can select them all, or just the ones you wish to replace with a new group owner. Before continuing to the final step, wizard will require one more confirmation that the operation should be carried on.

4. The final step shows user the changes that were made. If some errors have occurred, they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.