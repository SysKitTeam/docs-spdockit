---
title: I am receiving “The service application ‘UPA Name’ does not have any proxies that are default in a proxy group.”
description: Server Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# I am receiving “The service application ‘UPA Name’ does not have any proxies that are default in a proxy group.”

## Problem:
While trying to load SharePoint farm settings with SPDocKit I received the following message:
> *“The service application ‘UPA name’ does not have any proxies that are default in a proxy group.”*

## Solution:
For each UPA (User Profile Application) you need to have its proxy set as a default in a proxy group. This means that if you have three UPAs, you need to have at least three proxy groups.

Here is what you need to do:

1. Create a new proxy group. Unfortunately, there is no UI for this, so you have to use PowerShell. Use command:
```
   New-SPServiceApplicationProxyGroup "NewProxyGroup”;
```

2. Then add your service application to a newly created proxy group. Use command:
```
   Add-SPServiceApplicationProxyGroupMember NewProxyGroup – Member babab30e-8e3a-428b-8ff4-4d5c8f455e6d 
```
   where “NewProxyGroup” is a proxy group you created in a previous step. In terms of the member you are adding (service application), you need to obtain its GUID. You can do that using:
```
   Get‐SPServiceApplicationProxy.
```