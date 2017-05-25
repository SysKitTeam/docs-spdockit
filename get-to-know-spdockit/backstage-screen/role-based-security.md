---
title: Role Based Security
description: This article describes how to use Role Based Security feature in SPDocKit to grant different permission levels to SPDocKit end users.
author: Tomislav Kunaj
date: 25/5/2017
---
This advanced security feature is meant to help admins take control and allow them to define different SPDocKit access levels. Users and groups can be assigned to specific roles based on elements of SPDocKit or on SharePoint site collection permissions.

## How to set up role based security

To enable this feature, navigate to the __Backstage Configuration Screen__, click __Role Based Security__, and select the __Enable role based security__ check box. Click Save to apply this change.

Please note that the user who enables this feature will automatically be assigned to the Admin role. For role based security to work, you have to use a database and have the __db_owner__ permissions.

## Admin role
This role gives you full control over SPDocKit, as well as over the entire role based security system. As an admin you can create new custom roles, and assign users or groups to them or to one of our predefined roles (Admin and Viewer).

Please note that the first person who activates the RBS (role based security) will be automatically given the admin role.

## Viewer role
The Viewer role is predefined, along with the Admin role. This is a read-only role, and some reports are unavailable to members of this role due to security reasons.

__Please note!__ With the Viewer role, you cannot see certain reports, like the Web.config files, Storage Metrics, All Farm Users, Users with Privileged Access, and the entire Passwords and Product Keys section in the Farm Explorer. You also cannot create a new view for a report.

### Learn more
* [How to: Manage Roles](#internal/how-to/role-based-security/manage-roles/)
* [How to: Manage Users](#internal/how-to/role-based-security/manage-users/)
