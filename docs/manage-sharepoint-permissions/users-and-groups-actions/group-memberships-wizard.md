---
description: This article explains how to manage SharePoint group memberships.
sidebar_position: 2
---

# Group Memberships Wizard

This article describes how to use SPDocKit Group Membership wizard to manage SharePoint group memberships – add users to specific group, remove them from one or all SharePoint groups or even delete them permanently from the entire site collection.

**Wizard Scope**: farm, web application, site collection(s)  
**Supported People Picker principal selection**: Active Directory groups, users (multiselect supported)

## Add User(s) to Specific Group

This wizard option will add a selected principal to a desired SharePoint groups within the selected wizard scope.

1. Navigate to Permissions Explorer and click on the **Membership Wizard** in the Wizards ribbon.
2. Select **Add user(s) to specific group** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection(s) in which changes will be made.
4. In the configuration step select users you wish to add to the specific group. People Picker supports **SharePoint users** and **Active Directory groups** as a valid choice.

   After you’ve chosen the right users, select which group they should be added to. There are couple of possible matching criteria:

   * **Specific group**– drop down menu provides a list of the existing SharePoint groups in the selected site collection.
   * **Name** – changes will apply only to the group with an exact name match (not case sensitive).
   * **Name contains** – changes will apply only to the group whose name contains specified term (not case sensitive).
   * **Regular expression** – changes will apply only to object whose name contains specified regular expression.

     If multiple site collections are selected, changes will apply only to the ones where such objects exist.

5. In the **Preview** step, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

## Remove User(s) from Specific Group

This wizard option will remove a selected principals from a desired SharePoint groups within the selected wizard scope.

1. Navigate to Permissions Explorer and click on the **Membership Wizard** in the Wizards ribbon.
2. Select **Remove user(s) from specific group** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection(s) in which changes will be made.
4. In the configuration step select users you wish to remove from the specific group. People Picker supports **SharePoint users** and **Active Directory groups** as a valid choice.

   After you’ve chosen the right users, select which group they should be removed from. There are couple of possible matching criteria:

   * **Specific group**– drop down menu provides a list of the existing SharePoint groups in the selected site collection.
   * **Name** – changes will apply only to the group with an exact name match (not case sensitive).
   * **Name contains** – changes will apply only to the group whose name contains specified term (not case sensitive).
   * **Regular expression** – changes will apply only to object whose name contains specified regular expression.

   If multiple site collections are selected, changes will apply only to the ones where such objects exist.

5. In the **Preview step**, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

## Remove User(s) from all Groups

This wizard option will remove a selected principal from all SharePoint groups within the selected wizard scope. User will still exist on the specific site collection but will have no assigned permissions through SharePoint groups.

1. Navigate to Permissions Explorer and click on the **Membership Wizard** in the Wizards ribbon.
2. Select **Remove user(s) from all groups** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application or just specific site collection(s) in which changes will be made.
4. In the configuration step select users you wish to remove from all SharePoint groups within the selected scope. People Picker supports **SharePoint users** and **Active Directory groups** as a valid choice.
5. In the **Preview** step, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made as well as who made those changes.

