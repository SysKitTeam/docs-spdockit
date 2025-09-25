---
description: Article describes the issue of SPDocKit not being able to load Problems and Solutions and Rule Definitions.
---

# Error occurred while trying to load 'Problems and Solutions' and 'Rule Definitions'

## Problem

While trying to load the SharePoint farm the following errors occurred:

* Error occurred while loading Problems and Solutions.
* Error occurred while loading Rule Definitions.

There is an error message in the event log:

> System.Data.SqlClient.SqlException: Cannot open database “SharePoint\_AdminContent\_bfe62573-2067-4090-a95a-39a13ba51086” requested by the login.  
> The login failed.  
> Login failed for user ‘CONTOSO\bob’.

## Solution

The user running the SPDocKit needs to have the [proper privileges](../../requirements/user-permissions-requirements.md) to retrieve information from the SharePoint farm. To fix this issue make sure the user has Shell access to the given content database, using the following PowerShell code to grant access:

```bash
$spcdb = Get-SPContentDatabase SharePoint_AdminContent_bfe62573-2067-4090-a95a-39a13ba51086
Add-SPShellAdmin -UserName CONTOSO\Bob -Database $spcdb
```

