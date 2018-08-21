---
title: Move Permissions Wizard
description: This article describes how to use SPDocKit to move all directly assigned SharePoint permissions and group memberships of one principal (SharePoint user or Active Directory group) to another. 
author: Mia Tomaić
date: 25/5/2017
---

This article explains how to use SPDocKit Move Permissions Wizard to move all directly assigned SharePoint permissions and group memberships of one principal (SharePoint user or Active Directory group) to another. 

**Wizard Scope**: farm, web application, site collection.  
**Supported People Picker source selection**: user, Active Directory group.  
**Supported People Picker destination selection**: user(s), Active Directory group(s).

**Please note!** Source principal’s permissions will lose all previously directly assigned permissions and group memberships. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

1. Navigate to Permissions Explorer and click on the **Move Wizard** in the Wizards ribbon.

2. In the **Target** step define which farm, web application or site collection will be a wizard scope.

3. The top people picker will accept selection of exactly one principal. This is a source principal, whose directly assigned SharePoint permissions and SharePoint group memberships (SPDocKit will not modify Active Directory group membership) will be copied to destination principal(s).  It is important to note that selected source principal will lose all its directly given permissions and SharePoint group memberships in this process. This means upon successful completion of wizard, source principal will not have any direct SharePoint permissions and group memberships (will still retain SharePoint permissions gained through Active Directory groups).

    Using bottom people picker you can specify any number of principals. It is important to note that those principals will lose all theirs previously directly assigned permissions and group memberships and will only have a set of directly assigned permissions and group memberships identical to the source principal.
    
4.  This step will list all the actions that will be taken in the final step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. This also allows you to modify any settings you might not like.

5.  The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.