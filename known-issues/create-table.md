---
title: CREATE TABLE permissions denied
description: This article describes the error appearing in the ULS log that states that SPDocKit processes are trying to create tables in SharePoint databases.
---

__Summary:__ Errors appear in the ULS log that state that SPDocKit processes are trying to create tables in SharePoint databases.

First and foremost, SPDocKit does not create tables or modify SharePoint databases during the snapshot process. The problem occurs when there is a permissions issue with the SPDocKit service account.

SPDocKit queries the NeedsUpgrade property of the content database, and by a series of unfortunate events in the SharePoint API, the API tries to create some tables in the database. When the permissions are correctly set up, there are no attempts to create tables.

The issue can easily be reproduced in PowerShell by using the SPDocKit account or for that matter any account that lacks sufficient permissions:

    $myDB = Get-SPDatabase | ?{$_.Name -eq "[SPDatabaseName]"}
    $myDB.NeedsUpgrade

After running these commands, two things can be noticed:
1. The NeedsUpgrade property will return the wrong value: it will always be true.
2. CREATE TABLE errors will appear in the ULS log.

__Solution:__ Please ensure that the SPDocKit service account has the required permissions on the database in question. SPDocKit permission requirements article will help you check which are the required permissions.  Specifically, add the SPDocKit service account to the SharePoint_Shell_Access role for all SharePoint databases.