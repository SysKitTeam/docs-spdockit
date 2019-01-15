---
title: >-
  I am receiving a warning “All Personal Sites will be loaded” while loading the
  farm.
description: Article describes the issue that might occurre while loading Personal sites.
author: Mia Tomaić
date: 18/5/2017
---

# warning-personal-sites-loaded

## Problem:

While trying to load our SharePoint farm with SPDocKit I received:

> _All Personal Sites will be loaded._

## Solution:

Supported SharePoint versions: SharePoint 2010, SharePoint 2013, SharePoint 2016

Your account or user that was running SPDocKit does not have the proper privileges to load the User Profile Service Application properties. For that reason, SPDocKit is not able to differentiate which sites are personal, so all are loaded. Depending on the SharePoint farm size, this can significantly increase the farm loading time.

Here is what you need to do: 1. Open the **SharePoint Central Administration** of your farm. 2. Navigate to **Application Management &gt; Manage Service Applications**. 3. Select your app from the list of Service Applications and click **Permissions** on the ribbon. 4. Choose the desired user from the popup dialog box and make sure it has **Full control** permission checked.

