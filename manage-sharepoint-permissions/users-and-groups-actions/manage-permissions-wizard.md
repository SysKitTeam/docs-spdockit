---
title: Manage Permissions Wizard
description: >-
  Article explains how to grant permissions to the desired principal on a
  specific SharePoint objects.
author: Mia Tomaić
date: 25/5/2017
---

# Manage Permissions Wizard

This article describes how to grant permissions to the desired principal on a specific SharePoint objects. It also has the ability to remove permissions from the desired principals across the selected scope.

**Wizard Scope**: farm, web application, site collection\(s\), subsite\(s\)  
**Supported People Picker principal selection**: user, Active Directory group, SharePoint group \(multiselect allowed\)  
**SharePoint objects changes can be applied on**: subsites, lists, list items

## Grant Permissions

This wizard option will grant specified permissions to selected principals on a selected SharePoint objects all across the defined wizard scope. 1. Navigate to Permissions Explorer and click on the **Manage Permissions Wizard** in the Wizards ribbon.

1. Select **Grant permissions** option and **Next** to continue.
2. The **Target** step allows you to specify the entire farm, web application, specific site collections or subsites in which changes will be made.
   * **Farm**- all SharePoint objects that match specified criteria across the selected farm will be affected.  
   * **Web Application**– all SharePoint objects that match specified criteria across the selected web application will be affected.  
   * **Site Collection** – all SharePoint objects that match specified criteria across the selected site collections will be affected. Changes will not affect other site collections on the same web application, unless you’ve selected them also.  
   * **Subsite** – all SharePoint objects that match specified criteria across the selected subsite will be affected. Changes will not affect other subsites, unless you’ve selected them also.
3. Select which SharePoint objects this wizard will affect: subsites, lists or list items. Provided options can be matched by:
   * **Name** – changes will apply only to object with an exact name match \(not case sensitive\).  
   * **Name contains** – changes will apply only to object whose name contains specified term \(not case sensitive\).  
   * **Regular expression** – changes will apply only to object whose name matches specified regular expression.  
   * **Template**– changes will apply only to object whose base template matches the selected one \(not applicable for list items\).

     If multiple site collections or subsites are selected, changes will apply only to the ones where such objects exist.

     Select users which you wish to grant the permissions to. People Picker supports users, Active Directory groups and SharePoint groups as a valid choice.
4. Permission levels listed in this step depend on the selected site collection template. If you use site template other than team site template, different list of default SharePoint permission levels will be provided.

   All of the specified principals will have the same permissions assigned to them, where possible. If, for some reason, some permission levels are not available on a certain site, they will be skipped. If no permissions can be assigned to the selected principal on that site no new role assignment will be granted.

5. In the **Preview** step, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](manage-permissions-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

## Remove Permissions

This wizard option will remove specified permissions from desired principals on a selected SharePoint objects all across the defined wizard scope.

1. Navigate to Permissions Explorer and click on the **Manage Permissions Wizard** in the Wizards ribbon.
2. Select **Remove permissions** option and **Next** to continue.
3. The **Target** step allows you to specify the entire farm, web application, specific site collections or subsites in which changes will be made.
   * **Farm**- all SharePoint objects that match specified criteria across the selected farm will be affected. 
   * **Web Application**– all SharePoint objects that match specified criteria across the selected web application will be affected.  
   * **Site Collection** – all SharePoint objects that match specified criteria across the selected site collections will be affected. Changes will not affect other site collections on the same web application, unless you’ve selected them also.  
   * **Subsite** – all SharePoint objects that match specified criteria across the selected subsite will be affected. Changes will not affect other subsites, unless you’ve selected them also.
4. Select which SharePoint objects this wizard will affect: subsites, lists or list items. Provided options can be matched by:
   * **Name** – changes will apply only to object with an exact name match \(not case sensitive\).   
   * **Name contains** – changes will apply only to object whose name contains specified term \(not case sensitive\).
   * **Regular expression** – changes will apply only to object whose name matches specified regular expression.
   * **Template**– changes will apply only to object whose base template matches the selected one \(not applicable on list items\).

     If multiple site collections or subsites are selected, changes will apply only to the ones where such objects exist.

     Select users which you wish to remove the permissions from. People Picker supports SharePoint users, Active Directory groups and SharePoint groups as a valid choice.
5. Permission levels listed in this step depend on the selected site collection template. If you use site template other than team site template, different list of default SharePoint permission levels will be provided.

   Same permissions will be removed from all of the specified principals, where possible. If some principals were not assigned with all of the selected permissions, only permissions they had and are specified in this wizard will be removed. If non of the selected permissions were previously assigned to the specified principals, no changes will be applied.

6. In the **Preview** step, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
7. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](manage-permissions-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.

