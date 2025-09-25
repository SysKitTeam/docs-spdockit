---
description: This article explains how to handle issue when SharePoint farm settings load is not working properly.
---

# The service application ‘UPA Name’ does not have any proxies that are default in a proxy group

## Problem

While trying to load SharePoint farm settings with SPDocKit I received the following message:

> The service application ‘UPA name’ does not have any proxies that are default in a proxy group.

## Solution

For each UPA \(User Profile Application\) you need to have its proxy set as a default in a proxy group. This means that if you have three UPAs, you need to have at least three proxy groups.

Here is what you need to do:

1. Create a new proxy group. Unfortunately, there is no UI for this, so you have to use PowerShell. Use the command:

   ```bash
   New-SPServiceApplicationProxyGroup "NewProxyGroup”;
   ```

2. Then add your service application to a newly created proxy group with the command:

   ```bash
   Add-SPServiceApplicationProxyGroupMember NewProxyGroup – Member babab30e-8e3a-428b-8ff4-4d5c8f455e6d
   ```

   where “NewProxyGroup” is a proxy group you created in the previous step. When adding a service application, you need to obtain its GUID. You can do that by using:

   ```bash
   Get‐SPServiceApplicationProxy
   ```

