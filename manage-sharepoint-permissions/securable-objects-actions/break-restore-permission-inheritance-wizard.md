---
title: Break or Restore Permissions Inheritance Wizard
description: This article explains how to break and restore permission inheritance
author: Mia Tomaić
date: 24/5/2017
---

# Break/Restore Permission Inheritance Wizard

This article explains how to use SPDocKit **Break/Restore Inheritance Wizard** to break or restore SharePoint permission inheritance on the desired subsite or list. SPDocKit applies changes to the current permission state on your SharePoint farm.

**Wizard Scope**: farm, web application, site collection\(s\)  
**SharePoint objects changes can be applied on**: subsite\(s\) \(excluding root sites\), list\(s\)

## Break Permission Inheritance

This wizard allows you to break permission inheritance on the desired subsites or lists all across the selected farm, web application or site collection. Once the permission inheritance has been broken, all permission changes applied to the selected object will no longer apply to parent permissions and vice verse.

1. Navigate to Permissions Explorer and click on the **Break/Restore Inheritance Wizard** in the Wizards ribbon.  
2. Select **Break permission Inheritance** option. Click **Next** to continue.
3. Select how wide across your farm this wizard should make changes.
   * **Farm** - all subsites/lists that match specified criteria in the selected farm will be affected.
   * **Web Application**– all subsites/lists that match specified criteria on the selected web application will be affected.
   * **Site Collection** - all subsites/lists that match specified criteria on the selected site collection will be affected. Changes will not affect other site collections on the same web application, unless you’ve selected them also.
4. Select which objects this wizard will affect: lists or subsites. Both of the provided options can be matched by:
   * **Name** – changes will apply only to object with an exact name match \(not case sensitive\).
   * **Name contains** – changes will apply only to object whose name contains specified term \(not case sensitive\).
   * **Regular expression** – changes will apply only to object whose name matches specified regular expression.
   * **Template**– changes will apply only to object whose base template matches the selected one.

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such objects exist.
5. In the Preview step, make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](break-restore-permission-inheritance-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about what changes were made as well as who made those changes.

## Restore Permission Inheritance

This wizard allows you to restore permission inheritance on the desired subsites or lists all across the selected farm, web application or site collection.

**Please note!** Restoring permission inheritance on a subsite, will also restore the permission inheritance on lists and list items on that subsite.

1. Navigate to Permissions Explorer and click on the **Break/Restore Inheritance Wizard** in the Wizards ribbon.
2. Select **Restore permission Inheritance** option. Click **Next** to continue.
3. Select how wide across your farm this wizard should make changes.
   * **Farm**-  all subsites/lists that match specified criteria in the selected farm will be affected.
   * **Web Application**– all subsites/lists that match specified criteria on the selected web application will be affected.
   * **Site Collection**- all subsites/lists that match specified criteria on the selected site collection will be affected. Changes will not affect other site collections on the same web application, unless you’ve selected them also.
4. Select which objects this wizard will affect: lists or subsites. Both of the provided options can be matched by:
   * **name** – changes will apply only to object with an exact name match \(not case sensitive\)
   * **name contains** – changes will apply only to object whose name contains specified term \(not case sensitive
   * **regular expression** – changes will apply only to object whose name contains specified regular expression
   * **template** – changes will apply only to object whose base template matches the selected one

     If multiple SharePoint site collections are selected, changes will apply only to the ones where such objects exist.
5. In the Preview step, make sure that the pending changes will do exactly what you wanted and specified in previous steps of this wizard.
6. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](break-restore-permission-inheritance-wizard.md#internal/manage-sharepoint-permissions/spdockit-permission-management-event-log). There will be information about what changes were made as well as who made those changes.

