---
title: Error occurred while loading ‘Application Name’ Web Application
description: >-
  This article explains how to handle issue when Web Application load is not
  working properly.
author: Mia Tomaić
date: 18/5/2017
---

# Error occurred while loading Web Application

## Problem:

While trying to load a SharePoint farm the following error message was displayed:

> _Error occurred while loading ‘Application Name’ Web Application_

and the following error messages are stored in the event log:

> _The following sites are not loaded properly because you do not have the right privileges for these databases._ _Unavailable databases:_  
> _WSS\_Content\_7c8cd57018d5404bb5f6c8d4db8a7f8b_  
> _WSS\_Content\_99d31b6221f849079028a2ce91ad6d47_
>
> _Unavailable sites:_  
> [http://intranet](http://intranet)  
> [http://intranet/sites/HR](http://intranet/sites/HR)  
> [http://intranet/sites/Sales](http://intranet/sites/Sales)

## Solution:

The user running the application needs to have proper privileges to access the information about Site Collections stored in the content databases. [See this article](../../../troubleshooting/requirements/user-permissions-requirements.md) for more details on configuring privileges.

If you are still having issues with individual Web Applications or other items you need to do the following: make sure the user has Shell access to the given content database, using the following PowerShell code to grant access:

```text
 $spcdb = Get-SPContentDatabase WSS_Content_Intranet
 Add-SPShellAdmin -UserName DOMAIN\User -Database $spcdb
```

