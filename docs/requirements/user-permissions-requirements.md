---
description: This article lists all user privileges needed to retrieve SharePoint farm settings with SPDocKit.
---

# SharePoint On-Premises User Permissions Requirements

## Required Permissions

To run SPDocKit and to retrieve all SharePoint settings you want to document, both the user running SPDocKit and the SPDocKit service account need to have proper privileges. Here is the list of required privileges to load SharePoint farm settings:

1. **Local Administrators** and **WSS\_ADMIN\_WPG group member** on every machine in the SharePoint farm. Required to retrieve list of installed applications on farm servers.
2. **SharePoint farm administrator**. Required to retrieve SharePoint farm settings.
3. **Member of SharePoint\_Shell\_Access role** on SharePoint Server databases. Required to retrieve particular SharePoint farm properties via PowerShell.
4. Special privileges for the **Service Account**: Service account needs to have privileges listed above as well as the **Log on as a Service** right. [Click here for instructions](https://goo.gl/MRGS73) on how to configure that right.
5. [Server specific requirements](server-load-permission-requirements.md) needed to retrieve additional server configuration data \(RAM, processors, disk space…\) and SQL Server configuration information for DB servers.
6. [Search service application requirements](service-app-perm-requirements.md) needed to retrieve Search service application configuration data \(content sources, crawl rules, managed properties, search topologies...\).
7. [User Profile service application requirements](service-app-perm-requirements.md) needed to retrieve User Profile service application configuration data \(Synchronization Connections, MySite Settings, Audiences, User Profile Properties...\).

## Granting Permissions

Here is how you can give user these privileges:

### **Local Administrators** group

* On the server, click Start, right-click Computer, and then click **Manage**.
* Navigate to Configuration, expand **Local Users and Group** and then click Groups.
* Right-click the Administrators group, and then click **Add to Group**.
* In the Administrators Properties dialog box, click **Add**.
* In the Select User, Computers, or Groups dialog box, in the Enter the object names to select box, type the account name on which you want your worker process to run \(for example, **Domain\YourAccount**\), and then click OK.
* In the Administrators dialog box, click OK.
* Close the Server Manager screen.

{% hint style="info" %}
Repeat the same steps for **WSS\_ADMIN\_WPG** group.
{% endhint %}

### **SharePoint farm Administrators** group

* Open SharePoint **Central Administration**.
* Navigate to Security &gt; Manage the farm administrators group.
* Use the **New** button to add users to this group.

### **SharePoint\_Shell\_Access role**

* Open SharePoint Management Shell.
* Type the following PowerShell command: `<Add-SPShellAdmin -UserName DOMAIN\YourAccount>` [\(click here to learn more\)](http://technet.microsoft.com/en-us/library/ff607596.aspx).
* If you want to grant PowerShell shell access to a single database [check this article](http://technet.microsoft.com/en-us/library/ff607596.aspx) for more details.
* If you want to grant PowerShell shell access to all content databases, download and run the following script:

{% file src="../.gitbook/assets/configure-spshelladmin.zip" %}

```bash
if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"})-eq $null) 
{Add-PSSnapin Microsoft.SharePoint.PowerShell;}  
cls  
$username = Read-Host "Enter username";  
Get-SPDatabase | ForEach-Object {Add-SPShellAdmin -UserName $username -database $_.Id}
```

{% hint style="warning" %}
**Please note!**  
The cmdlet **Add-SPShellAdmin** is going to apply to all current SharePoint databases. If more SharePoint databases are added in the future, you might have to re-run the cmdlet again.

The cmdlet might fail in some environments; please [contact us](https://www.syskit.com/company/contact-us/) for further assistance.
{% endhint %}

## SPDocKit database requirements

### Creating a new database

To be able to create a new SPDocKit dedicated database, the user account running the installation and configuration wizard \(i.e. install account\) should be granted both the **dbcreator** and **securityadmin** roles on the preferred SQL Server. This allows the account to create a new database and to assign proper privileges after creation. The install account will be automatically given **db\_owner** privileges on the newly created database, if possible. Otherwise, it is advised that the account is given that privilege manually, as it is needed for upgrading the database.

### Privileges required to run the application

These privileges will be granted automatically when a new SPDocKit database is created or during a database upgrade.

* SPDocKit service account will be granted the **SPDocKit\_service\_role** role on the SPDocKit database. This role will make the service account a member of the **db\_datawrite** and **db\_datareader** roles and grant **EXECUTE** permissions on all the stored procedures in the database.
  * In the event that the SPDocKit install account is not in the **securityAdmin** role, please add the SPDocKit service account manually to the **SPDocKit\_service\_role**. [Consult the following article](../troubleshooting/server-load-and-user-permissions/error-adding-service-account-to-role.md) for additional information.
  * The account running load from the SPDocKit console needs to have the same privileges as the SPDocKit service account \(see above\).

## Workstation Requirements

When SPDocKit is installed on a workstation, only an existing database can be used. Also, the user running SPDocKit will need to be granted the **db\_datareader** rights on the existing SPDocKit database. To create a new database, please install SPDocKit on a SharePoint server.

To view and manage Live permissions in Permissions Explorer the user has to be a Site Collection Administrators of the Site Collection where the changes are made, otherwise, the following warning message appears: **'You do not have sufficient permissions to view this report'.** As a Farm Administrator, you can view and manage permissions on all Site Collections in a SharePoint farm.

{% hint style="warning" %}
**Please note!**  
To create a new snapshot, you need to use SPDocKit installed on a SharePoint server.
{% endhint %}

## Error Message

If the user does not have proper privileges, the following error message will be shown:

> “You do not have privileges to load the current farm! Please contact your administrator.”

