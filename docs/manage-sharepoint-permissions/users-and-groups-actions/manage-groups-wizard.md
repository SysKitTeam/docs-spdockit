---
description: This article describes how to use SPDocKit Manage Groups Wizard to manage SharePoint Groups on multiple sites within a single web application.
---

---
sidebar_position: 1
---

# Manage Groups Wizard

The wizard supports the basic operations: create, delete and rename SharePoint groups.

**Wizard Scope**: farm, web application, site collection\(s\)  
**SharePoint objects changes can be applied on**: SharePoint groups  
**Supported People Picker principal selection**: user, SharePoint group

## Create SharePoint Group

This wizard option will create a SharePoint groups on the selected site collection\(s\).

1. Navigate to Permissions Explorer and click on the **Manage Groups Wizard** in the Wizards ribbon.
2. Select **Create** option and **Next** to continue. 
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made. 
4. New groups will have the same configuration settings – name, owner, description, etc. In order to proceed to the next step, group will require a valid name and owner. Supported People Picker selection for the group owner are **SharePoint user** and **SharePoint group**. Just like in SharePoint, there are other group properties you can adjust using this wizard:
   * Who can view memberships of the group
   * Who can edit the membership of the group
   * Will the requests to join/leave this group be allowed
   * Will these request be auto-accepted
   * Send membership request to provided email requests
5. All of the newly created groups will have same permissions assigned to them where possible. If, for some reason, some permission levels are not available on a certain site collection, they will be skipped. If no permissions can be assigned to the new group on a site collection, that site collection will be skipped and no new groups will be created.
6. In this step, as Group Members you can add Users and AD groups. Plus, as a default member, you can add Owner of the group by simply checking the provided box.
7. These cases and more will be displayed in the **Preview** step of the wizard, before any action has been made. This step will list all the actions that will be taken in the next step of the wizard, which allows you to modify any settings you might like to.
8. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

## Delete SharePoint Group

This wizard option will delete a SharePoint groups on the selected site collection\(s\).

1. Navigate to Permissions Explorer and click on the **Manage Groups Wizard** in the Wizards ribbon.
2. Select **Delete** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made. 
4. Groups to be deleted can be matched by:
   * **Directly**– select the group you wish to delete from the drop down menu.
   * **Name** – changes will apply only to group with an exact name match \(not case sensitive\).
   * **Name contains** – changes will apply only to groups whose name contains specified term \(not case sensitive\).
   * **Regular expression** – changes will apply only to groups whose name contains specified regular expression.

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such
5. **Directly**– select the group you wish to delete from the drop down menu.
6. **Name** – changes will apply only to group with an exact name match \(not case sensitive\).
7. **Name contains** – changes will apply only to groups whose name contains specified term \(not case sensitive\).
8. **Regular expression** – changes will apply only to groups whose name contains specified regular expression.

   If multiple SharePoint site collections are selected, changes will apply only to the ones where such groups exist. 5. All the groups fitting the selected criteria will be displayed on the **Preview** step, along with their location. This allows you to modify any settings you might like before the wizard action is executed. 6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

## Rename SharePoint Group

This wizard option will rename specific SharePoint groups on selected site collection\(s\).

1. Navigate to Permissions Explorer and click on the **Manage Groups Wizard** in the Wizards ribbon.  
2. Select **Rename** option and **Next** to continue.  
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection\(s\) in which changes will be made.  
4. Groups to be renamed can be matched by:
5. **Directly**– select the group you wish to delete from the drop down menu.
6. **Name** – changes will apply only to group with an exact name match \(not case sensitive\).
7. **Name contains** – changes will apply only to groups whose name contains specified term \(not case sensitive\).
8. **Regular expression** – changes will apply only to groups whose name contains specified regular expression.

{% hint style="warning" %}
**Please note!**  
Since group names must be unique on a site collection, new name must not already be used by an existing group on that site collection, otherwise the rename process will skip that group.
{% endhint %}

1. All the groups fitting the selected criteria will be displayed on the **Preview** step, along with their location. This allows you to modify any settings you might like before the wizard action is executed.  
2. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

