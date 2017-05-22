---
title: I am receiving “Could not load User Profile Service Application, check your permissions or event log.”
description: Server Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# I am receiving “Could not load User Profile Service Application, check your permissions or event log.”

## Problem:
While trying to load our SharePoint farm with SPDocKit I received:  

*Could not load User Profile Service Application, check your permissions or event log.*

## Solution:
Your account or user that was running the SPDocKit does not have the proper privileges to load the User Profile Service Application properties.

Here is what you need to do:
1. Open the **SharePoint Central Administration** of your farm.
2. Navigate to **Application Management > Manage Service Applications**.
3. Select your app from the list of Service Applications and click **Permissions** on the ribbon.
4. Choose the desired user from the popup dialog box and make sure it has **Full control** permission checked.
5. Repeat the process for the selected account but now in the **Administrators** group. Select your app from the list of Service Applications and click Administrators on    the ribbon.
6. Choose the desired user from the popup dialog box and make sure it has **Full control** permission checked.
7. Now when your account/user has the proper privileges, please restart both, SPDocKit application and SPDocKit service. You should be able to load the User       Profile Service Application properties.
