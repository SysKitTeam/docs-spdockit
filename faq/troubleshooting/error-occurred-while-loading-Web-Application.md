---
title: Error occurred while loading ‘Application Name’ Web Application
description: Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# Error occurred while loading ‘Application Name’ Web Application

## Problem:
While trying to load a SharePoint farm the following error message was displayed:

> *Error occurred while loading ‘Application Name’ Web Application*

and the following error messages are stored in the event log:

> *The following sites are not loaded properly because you do not have the right privileges for these databases.*
*Unavailable databases:*   
*WSS_Content_7c8cd57018d5404bb5f6c8d4db8a7f8b*  
*WSS_Content_99d31b6221f849079028a2ce91ad6d47*  

> *Unavailable sites:*  
 *http://intranet*  
 *http://intranet/sites/HR*  
 *http://intranet/sites/Sales*

## Solution:
The user running the application needs to have the proper privileges to access the information about Site Collections stored in the content databases. [See this article](#internal/requirements/user-permissions-requirements) for more details on configuring privileges.

If you are still having issues with individual Web Applications or other items you need to do the following:
make sure the user has Shell access to the given content database, using the following PowerShell code to grant access:
```
 $spcdb = Get-SPContentDatabase WSS_Content_Intranet
 Add-SPShellAdmin -UserName DOMAIN\User -Database $spcdb
```