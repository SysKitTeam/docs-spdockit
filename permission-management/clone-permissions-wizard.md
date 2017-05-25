---
title: Clone Permissions Wizard
description: This article explains how to use SPDocKit to copy SharePoint permissions from a specific user and assign these permissions to other users.
author: Mia Tomaić
date: 25/5/2017
---

This article explains how to use SPDocKit to easily copy SharePoint permissions from a specific user and assign these permissions to other users.

Use Clone Permissions Wizard to easily achieve that selected destination principals (SharePoint users or Active Directory groups) have identical permissions across one site collection as a source principal.

**Please note!** Source principal’s permissions will not in any way be changed by this wizard. Destination principals will lose all previously assigned permissions and acquire every directly given permission and SharePoint group memberships as the source principal.

**Wizard Scope**: farm, web application, site collection
**Supported People Picker source selection**: user, Active Directory group
**Supported People Picker destination selection**: user(s), Active Directory group(s)

1.  Navigate to Permissions Explorer and click on the **Clone Wizard** in the Wizards ribbon.
2. In the **Target** step define which farm, web application or site collection will be a wizard scope. 
3. The top people picker will accept selection of exactly one principal (SharePoint user or AD group). This is a source principal, all directly assigned permissions and SharePoint group memberships (SPDocKit will not modify  Active Directory group memberships) of that principal will be acquired by destination principal(s). The permissions and group memberships of the source principal will not be altered.

    Using bottom people picker you can specify any number of principals. It is important to note that those principals will lose all their previously directly granted permissions and SharePoint group memberships, and will only have a set of directly assigned permissions and group memberships identical to the source principal.
4. This step will list all the actions that will be taken in the final step of the wizard. Make sure that the pending changes will do exactly what you wanted and have specified in previous steps of this wizard. This also allows you to modify any settings you might not like.
5. The last step shows user the changes that were made. If some errors have occurred they will be displayed here. It is possible to save this log to disk as a .txt file using **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](#internal/permission-management/spdockit-permission-management-event-log). There will be information about changes that were made as well as who made those changes.
