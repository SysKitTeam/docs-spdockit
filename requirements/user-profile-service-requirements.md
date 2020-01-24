---
title: >-
  I am receiving “Could not load User Profile Service Application, check your
  permissions or event log.”
description: >-
  This article describes the issue of SPDocKit not being able to load User
  Profile Service Application.
author: Mia Tomaić
date: 18/5/2017
---

# User Profile Service Application Requirements

## Problem:

While trying to load a SharePoint farm with SPDocKit I received:

_Could not load User Profile Service Application, check your permissions or event log._

## Solution:

The account running SPDocKit does not have the proper privileges to load the User Profile Service Application properties.

Here is what you need to do: 1. Open the **SharePoint Central Administration** of your farm. 2. Navigate to **Application Management &gt; Manage Service Applications**. 3. Select your app from the list of Service Applications and click **Permissions** on the ribbon. 4. Choose the account running SPDocKit from the popup dialog box and make sure it has **Full control** permission checked. 5. Repeat the process for the selected account but now in the **Administrators** group. Select your app from the list of Service Applications and click Administrators on the ribbon. 6. Choose the account running SPDocKit from the popup dialog box and make sure it has **Full control** permission checked. 7. Now when your account/user has the proper privileges, please restart both the SPDocKit application and the SPDocKit service. You should be able to load the User Profile Service Application properties now.

## Learn More

* [SharePoint On-Premises User Permissions Requirements](sharepoint-on-premises-user-permissions-requirements.md)

