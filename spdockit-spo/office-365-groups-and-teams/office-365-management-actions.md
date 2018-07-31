---
title: Office 365 Management Actions 
description: This article explains how to use Manage Groups and Membership ribbon to easily manage Office 365 Groups and Teams on the selected object. 
author: Tomislav Sirovec
date: 14/11/2017
---

**_As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is SysKit Security Manager. For instructions on the upgrade path or any other questions contact us at [support@syskit.com](mailto:support@syskit.com)._**

This article explains how to use Manage Groups and Membership ribbon to easily manage Office 365 Groups and Teams on the selected object.  
Management buttons are enabled in __live mode__ of Permissions Explorer, when Groups and Teams node is selected as well as any specific group bellow the node.

### Groups

__Create__ button will create a new Office 365 group. Fields to fill in are: Name, Group ID, Description (not required), Privacy and Owner.
- Available on: Groups and Teams node of the given tenant.
- Scope: entire tenant.

__Delete__ button will delete selected group. You can pick a group from the main report while on Groups and Teams node, or you can select it from a list inside the Groups and Teams node.
- Available on: Groups and Teams node of the given tenant.
- Scope: group is deleted on entire tenant.

### Membership

__Add Owner__ button will add owner/s to the selected group.
Along the classic way of adding each user individually, clicking on the __Import from File__ button you can add, as much users, as you want. We support both .csv and .txt files. The users can be separated by a tab, semicolon, comma or a space. 
- Available on: main report while on Groups and Teams node or from a list inside the Groups and Teams node.
- Scope: currently selected Office 365 group

__Add Member__ button will add member/s to the selected group.
Along the classic way of adding each user individually, clicking on the __Import from File__ button you can add, as much users, as you want. We support both .csv and .txt files. The users can be separated by a tab, semicolon, comma or a space.
- Available on: main report while on Groups and Teams node or from a list inside the Groups and Teams node.
- Scope: currently selected Office 365 group 

__Remove__ button will remove the selected user (either owner or a member) from the selected group. 
- Available on: list of Office 365 groups inside the Groups and Teams node.
- Scope: selected members or owners of the currently selected Office 365 group


