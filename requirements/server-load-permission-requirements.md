---
title: Server Load Permission Requirements
description: Server Load Requirements for SPDocKit
author: Iva Novoselic
date: 16/5/2017
---

# Server Load Permission Requirements

### Problem:

While trying to load SharePoint farm settings with SPDocKit I received:

> Error occurred while loading server ‘ServerName’.

### Why is this warning showing?

During the Take Snapshot process SPDocKit will try to retrieve information about your servers. Please note that the following rights on your servers are optional, but depending on them some or all information about your server configuration and the corresponding best practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your servers, the following rights are necessary:

* **Local Administrator** on the server
* **Windows Update service** up and running

### What will these granted rights be used for?

1. Adding SPDocKit user accounts to the **Local Administrator** group on the server is needed for WMI remote access and to get information about Windows updates. In case that you can’t give that right due to security requirements, see lower for what you can grant instead this. The following reports will not be available:
   * Farm Explorer -&gt; Servers in Farm -&gt; Processors Info
   * Farm Explorer -&gt; Servers in Farm -&gt; Programs List
   * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
   * Farm Explorer -&gt; Servers in Farm -&gt; Disks List
   * Farm Explorer -&gt; Servers in Farm -&gt; Local Admins
   * Best Practices -&gt; Hardware Requirements -&gt; Free Disk Space
   * Best Practices -&gt; Hardware Requirements -&gt; RAM
   * Best Practices -&gt; Servers -&gt; Hotfixes per Server Role -&gt; all reports
2. To retrieve a list of available Windows updates please make sure that the Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
   * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
   * Best Practices -&gt; Updates -&gt; Servers -&gt; Windows Updates

### Solution

1. Add your SPDocKit user accounts to the **Local Administrators** group on the specified server. In case you have a very strict security policy and cannot add this account to the **Local Administrators** group, you can use this procedure to get most of the reports working:
   * Add your SPDocKit accounts to the following local groups: **Backup Operators** and **Performance Log Users**. This will allow us to remotely execute WMI queries and get information about SQL servers.
   * Start **winmgmt.msc**, right click on WMI Control and select Properties.
   * Go to the **Security** tab and expand Root node. In the expanded list select **cimv2** and click on the **Security** button.
   * Click on **Advanced** button, then click **Add…** and enter desired user and click OK.
   * Select option **This namespace and subnamespaces** in a dropdown list Apply to.
   * Make sure that you select **Enable Account** and **Remote Enable** on the **Allow list** and then click OK four times.
2. Go to Windows Update service and start it in Service Microsoft Management Console.

## Additional SQL Server load requirements

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Loaded Server ‘ServerName’.

### Why is this warning showing?

There are some additional SPDocKit permission requirements necessary to load SQL servers information. Please note that the following rights on your SQL servers are optional, but depending on them, some or all information about your SQL server configuration and the corresponding Best Practice reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your SQL servers the following rights are necessary:

* **Public** server role
* **Dbcreator** server role and **VIEW SERVER STATE** permission
* **Dbaccess** permission on **model** database

### What will these granted rights be used for?

**Public** server role is needed to fetch the real SQL server name. This right is necessary to connect to the SQL server and perform some basic T-SQL queries. Also when you add an account to SQL server, public role is automatically granted. If you are not granted this role, following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; SQL Aliases
* Best Practices -&gt; Databases -&gt; SQL Aliases

**dbcreator** role and **VIEW SERVER STATE** permission is necessary in order to load SQL server configuration data. Following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; all reports
* Best Practices -&gt; Databases -&gt; Database Files
* Best Practices -&gt; Databases -&gt; Max Degree of Parallelism
* Best Practices -&gt; Databases -&gt; SharePoint Database Autogrowth
* Best Practices -&gt; Databases -&gt; TempDB -&gt; all reports

**dbaccess** permission is necessary in order to load information about the model database. In case this right is not granted, the following reports will not be available:

* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Autogrowth
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Initial Size
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Recovery Model

### Solution

1. Create a new user on the SQL server that will be used by SPDocKit.
2. Add **dbcreator** role to your SPDocKit account and execute the following T-SQL query:

   ```sql
      USE master  
      GO  
      GRANT VIEW SERVER STATE TO “DOMAIN\ACCOUNT”
   ```

3. Execute following T-SQL query to add necessary permissions:

   ```sql
      USE model  
      GO  
      EXECUTE sp_grantdbaccess 'DOMAIN\ACCOUNT'
   ```

## SQL Always On reports load requirements

### Problem:

After taking a SPDocKit snapshot, Always On reports show the following warning:

> There is no data to show for this report.

### Why is this warning showing?

It is possible that there are no Always On Groups configured in your SPDocKit farm. Therefore, no data is available. If that is not the case, the user running SPDocKit probably doesn't have necessary permissions to execute required system stored procedures on SQL server.

To retrieve data for Always On reports, the user running SPDocKit needs to have the **sysadmin** database role on targeted SQL Server.

### Solution

1. The user running the SPDocKit snapshot needs to be given a sysadmin role.
2. To add the user to the sysadmin role, execute the following T-SQL query:

   ```sql
      EXECUTE sp_addsrvrolemember 'DOMAIN\ACCOUNT', 'sysadmin';  
      GO
   ```

   You can also make these changes by using the SQL **Server Management Studio**.

   Navigate to **Security** &gt; **Logins** &gt; **'SPDocKit user'**, right click and select **Properties**.

   Select the **Server Roles** page, mark the **sysadmin** checkbox under Server Roles, and click OK to apply changes.

## Database Permissions load requirements

### Problem:

While trying to create a SPDocKit snapshot, I received the following warning:

> Unable to load database permissions for ‘DatabaseName’.

### Why is this warning showing?

There are some additional SPDocKit permission requirements necessary to load the database permission information. Please note that the following rights on your SQL Server databases are optional, but depending on them, data for the **Database Permissions** report will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the database permissions the following rights are necessary:

* **db\_owner** database role on each of the affected databases

### Solution

To eliminate this warning you either have to grant the necessary permissions to SPDocKit accounts or turn off the load **Database Permissions** option.

If you wish to turn off the load **Database Permissions** option, do the following:

1. Select **Configuration** from the left navigation bar on the **Backstage Screen** and then click the **Options** button.
2. On the **SPDocKit Options** dialog select **Snapshot Options**.
3. Under the **Security** section uncheck **Database Permissions**.

If you wish to grant the necessary permissions to the SPDocKit accounts:

1. Connect to your SQL server using **SQL Server Management Studio**.
2. Navigate to **Security** &gt; **Logins** and select the SPDocKit account.
3. Right click on the account and open the **Login Properties** dialog.
4. Under **User Mappings**, make sure that the account has the **db\_owner** database role for all affected databases.

### Learn more

* [RPC Server is Unavailable](server-load-permission-requirements.md#internal/faq/troubleshooting/rpc-server-unavailable)

