# sharepoint-on-premises-user-permissions-requirements

title: SharePoint On-Premises User Permissions Requirements author: Matija Hanzic  
date: 17/5/2017

## description: This article lists required privileges to load SharePoint settings with tutorial how to acquire those privileges.

To run SPDocKit and to retrieve all SharePoint settings you want to document, both the user running SPDocKit and the SPDocKit service account need to have proper privileges. Here is the list of required privileges to load SharePoint farm settings:

1. **Local Administrators** and **WSS\_ADMIN\_WPG group member** on every machine in the SharePoint farm. Required to retrieve list of installed applications on farm servers.
2. **SharePoint farm administrator**. Required to retrieve SharePoint farm settings.
3. **Member of SharePoint\_Shell\_Access role** on SharePoint Server databases. Required to retrieve particular SharePoint farm properties via PowerShell.
4. Special privileges for the **Service Account**: Service account needs to have privileges listed above as well as the **Log on as a Service** right. [Click here for instructions](https://goo.gl/MRGS73) on how to configure that right.
5. [Server specific requirements](sharepoint-on-premises-user-permissions-requirements.md#internal/requirements/server-load-permission-requirements/) needed to retrieve additional server configuration data \(RAM, processors, disk space…\) and SQL Server configuration information for DB servers.
6. [Search service application requirements](sharepoint-on-premises-user-permissions-requirements.md#internal/requirements/search-service-requirements/) needed to retrieve Search service application configuration data \(content sources, crawl rules, managed properties, search topologies...\).
7. [User Profile service application requirements](sharepoint-on-premises-user-permissions-requirements.md#internal/requirements/user-profile-service-requirements/) needed to retrieve User Profile service application configuration data \(Synchronization Connections, MySite Settings, Audiences, User Profile Properties...\).

Here is how you can give user these privileges:

#### To add a user account to the **Local Administrators** group \(repeat the same steps for **WSS\_ADMIN\_WPG**\):

* On the server, click Start, right-click Computer, and then click **Manage**.
* Navigate to Configuration, expand **Local Users and Group** and then click Groups.
* Right-click the Administrators group, and then click **Add to Group**.
* In the Administrators Properties dialog box, click **Add**.
* In the Select User, Computers, or Groups dialog box, in the Enter the object names to select box, type the account name on which you want your worker process to run \(for example, **Domain\YourAccount**\), and then click OK.
* In the Administrators dialog box, click OK.
* Close the Server Manager screen.

#### To add a user account to **SharePoint farm Administrators** group:

* Open SharePoint **Central Administration**.
* Navigate to Security &gt; Manage the farm administrators group.
* Use the **New** button to add users to this group.

#### To add a user account to **SharePoint\_Shell\_Access role**:

* Open SharePoint Management Shell.
* Type the following PowerShell command: `<Add-SPShellAdmin -UserName DOMAIN\YourAccount>` [\(click here to learn more\)](http://technet.microsoft.com/en-us/library/ff607596.aspx).
* If you want to grant PowerShell shell access to a single database [check this article](http://technet.microsoft.com/en-us/library/ff607596.aspx) for more details.
* If you want to grant PowerShell shell access to all content databases, run this script [download Configure-SPShellAdmin.ps1](sharepoint-on-premises-user-permissions-requirements.md#internal/_assets/Configure-SPShellAdmin.zip):

  ```text
  if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"})-eq $null) 
  {Add-PSSnapin Microsoft.SharePoint.PowerShell;}  
  cls  
  $username = Read-Host "Enter username";  
  Get-SPDatabase | ForEach-Object {Add-SPShellAdmin -UserName $username -database $_.Id}
  ```

Please note:

* The cmdlet Add-SPShellAdmin is going to apply to all current SharePoint databases. If more SharePoint databases are added in the future, you might have to re-run the cmdlet again.
* The cmdlet might fail in some environments; please contact us for further assistance.

### SPDocKit database requirements

#### Creating a new database

To be able to create a new SPDocKit dedicated database, the user account running the installation and configuration wizard \(i.e. install account\) should be granted both the **dbcreator** and **securityadmin** roles on the preferred SQL Server. This allows the account to create a new database and to assign proper privileges after creation. The install account will be automatically given **db\_owner** privileges on the newly created database, if possible. Otherwise, it is advised that the account is given that privilege manually, as it is needed for upgrading the database.

#### Privileges required to run the application

These privileges will be granted automatically when a new SPDocKit database is created or during a database upgrade.

* SPDocKit service account will be granted the **SPDocKit\_service\_role** role on the SPDocKit database. This role will make the service account a member of the **db\_datawrite** and **db\_datareader** roles and grant **EXECUTE** permissions on all the stored procedures in the database.
  * In the event that the SPDocKit install account is not in the **securityAdmin** role, please add the SPDocKit service account manually to the **SPDocKit\_service\_role**. [Consult the following article](sharepoint-on-premises-user-permissions-requirements.md#internal/faq/troubleshooting/error-adding-service-account-to-role/) for additional information.
  * The account running load from the SPDocKit console needs to have the same privileges as the SPDocKit service account \(see above\).

### Workstation Requirements

When running the application on a workstation, the SPDocKit user connecting to any SharePoint 2010, SharePoint 2013 or SharePoint 2016 site will need to be granted **Site Collection Administrator** privileges for each site he is trying to explore and manage.

To connect to an existing SPDocKit database from the workstation, the SPDocKit user will need to be granted the **db\_datareader** rights on SPDocKit database.

### Error Message

If the user does not have proper privileges, the following error message will be shown:

> “You do not have privileges to load the current farm! Please contact your administrator.”

