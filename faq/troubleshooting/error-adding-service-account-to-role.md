---
title: Error adding service account to "spdockit_service_role" database role.
description: >-
  This article explains how to manually add the "spdockit_service_role" database
  role to the SPDocKit service account.
author: Vinko Bedek
date: 12/10/2017
---

# Error adding service account to role

## Problem:

There is a warning during SPDocKit configuration:

> _Error adding service account to "spdockit\_service\_role" database role. Check your SQL permissions._

## Information

The **spdockit\_service\_role** database role is given to the service account automatically during the configuration process. When the **SPDocKit install account** is not in the **securityadmin** SQL role then this step fails and must be performed manually.

## Solution

To resolve this issue execute the following SQL commands. The account running these commands must be in the _sysadmin_ or _securityadmin_ server role.  
Replace **SPDocKitServiceAccount** and **SPDocKit\_DB** with the actual values from your environment.  
In case the local system account was selected during SPDocKit configuration please use _NT AUTHORITY\SYSTEM_ as the value for **SPDocKitServiceAccount**.

```sql
CREATE LOGIN [__SPDocKitServiceAccount__] FROM WINDOWS;

USE [__SPDocKit\_DB__];  

CREATE USER [__SPDocKitServiceAccount__] FOR LOGIN [__SPDocKitServiceAccount__] WITH DEFAULT_SCHEMA=[__SPDocKitServiceAccount__];

DECLARE @username nvarchar(max)  
SELECT @username = principal.name FROM sys.database_principals AS principal WHERE sid=SUSER_SID('__SPDocKitServiceAccount__')  
 EXEC sp_addrolemember @rolename = spdockit\_service\_role, @membername = @username
```

