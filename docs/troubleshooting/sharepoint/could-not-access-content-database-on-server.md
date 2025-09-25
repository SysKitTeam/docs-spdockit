---
description: This article explains how to handle issue when site collection load is not working properly.
---

# Could not access content database

## Problem

While trying to load SharePoint farm settings with SPDocKit I received the following message:

> Could not access content database ‘Database Name’ on server ‘Server Name’. The site collections from this database will not be loaded.

## Solution

In order for SPDocKit to load data from site collections, the user account running the load must be a member of the **SharePoint\_Shell\_Access** role on each of the content databases.

The process of adding a user account to the role must be repeated each time a new content database is added to the SharePoint farm. Both the SPDocKit **console user** and **service account** must be added to this role. To add a user account to the **SharePoint\_Shell\_Access** role:

1. Open **SharePoint Management Shell**.
2. Type the following PowerShell command: _Add-SPShellAdmin -UserName DOMAIN\YourAccount_ [\(click here to learn more\)](https://technet.microsoft.com/en-us/library/ff607596.aspx).
3. If you want to grant PowerShell shell access to a single database [check this article](https://technet.microsoft.com/en-us/library/ff607596.aspx) for more details.
4. If you want to grant PowerShell shell access to all content databases run this script:

[Download Configure-SPShellAdmin.zip](../../../static/download/configure-spshelladmin.zip)

```bash
if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"})-eq $null)
{Add-PSSnapin Microsoft.SharePoint.PowerShell;}
cls
$username = Read-Host "Enter username";
Get-SPDatabase | ForEach-Object {Add-SPShellAdmin -UserName $username -database $_.Id}
```

{% hint style="warning" %}
**Please note!**  
The cmdlet **Add-SPShellAdmin** is going to apply to all the current SharePoint databases. If more SharePoint databases are added in the future, you might have to re-run the cmdlet again.

The cmdlet might fail in some environments; please [contact us](https://www.spdockit.com/support/contact-us/) for further assistance.
{% endhint %}

