---
title: Permissions wizard issue
description: This article describes the issue appearing in Permissions wizards.
---

__Summary:__ When using SPDockit’s permission wizards from a workstation, some principals cannot be found. It can happen while selecting principals using SPDocKit’s people picker or during the Preview and Apply steps. The problem occurs when the permission wizard targets multiple site collections, some of which are from different SharePoint farms or Office365 tenants.

__Application Version:__ 5.2.0 and newer

__Solution:__ When using permission wizards on a workstation, please target site collections from a single SharePoint farm or a single Office365 tenant.

__Status:__ Not resolved.