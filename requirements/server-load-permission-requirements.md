---
title: Server Load Permission Requirements
description: Server Load Requirements for SPDocKit
author: Iva Novoselic
date: 16/5/2017
---

# Server Load Permission Requirements

## SharePoint Server Information

During the Snapshot creation process, SPDocKit will try to retrieve information about your servers. Please note that the following permissions on your servers are optional, but depending on them some or all information about your server configuration and the corresponding best practices reports will not be available in SPDocKit.

### Required permissions

In order to allow SPDocKit to successfully gather all the information about your SharePoint farm servers, the following permissions are necessary:

* **Local Administrator** on the server
* **Windows Update service** up and running

### Affected reports

* Adding SPDocKit user accounts to the **Local Administrator** group on the server is needed for WMI remote access and to get information about Windows updates. In case you can’t give that kind of permissions due to security requirements, see lower for what you can grant instead this. The following reports will not be available:
  * Farm Explorer -&gt; Servers in Farm -&gt; Processors Info
  * Farm Explorer -&gt; Servers in Farm -&gt; Programs List
  * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
  * Farm Explorer -&gt; Servers in Farm -&gt; Disks List
  * Farm Explorer -&gt; Servers in Farm -&gt; Local Admins
  * Best Practices -&gt; Hardware Requirements -&gt; Free Disk Space
  * Best Practices -&gt; Hardware Requirements -&gt; RAM
  * Best Practices -&gt; Servers -&gt; Hotfixes per Server Role -&gt; all reports
* To retrieve a list of available Windows updates please make sure that the Windows Update service is up and running. If the service is disabled or not running the following reports will not be available:
  * Farm Explorer -&gt; Servers in Farm -&gt; Available Windows Updates
  * Best Practices -&gt; Updates -&gt; Servers -&gt; Windows Updates

### Granting permissions

To add the SPDocKit user to the **Local Administrator group** follow these steps:

1. On the server open the **Local Users and Groups** management console. Find it by typing **"Edit local users and groups"** or **"lusrmgr.msc"** in Windows Search.
2. Under Groups find the **Administrators** group.
3. Click the **Add** button and enter the user accounts running SPDocKit.
4. Confirm your changes by clicking **OK**.

In case you have a very strict security policy and cannot add this account to the **Local Administrators** group, you can use the following procedure to get most of the reports working:

* Add your SPDocKit accounts to the following local groups: **Backup Operators** and **Performance Log Users**. This will allow us to remotely execute WMI queries and get information about SQL servers.
* Start **winmgmt.msc**, right click on WMI Control and select Properties.
* Go to the **Security** tab and expand Root node. In the expanded list select **cimv2** and click on the **Security** button.
* Click on **Advanced** button, then click **Add…** and enter the desired user and click OK.
* Select option **This namespace and subnamespaces** in a dropdown list Apply to.
* Make sure that you select **Enable Account** and **Remote Enable** on the **Allow list** and then click OK four times.

To start the **Windows Update service**, open the Service Microsoft Management Console, right click on the service and choose **Start**.

## SQL Server Information

There are some additional SPDocKit permission requirements necessary to load SQL servers information. Please note that the following permissions on your SQL servers are optional, but depending on them, some or all information about your SQL server configuration and the corresponding Best Practices reports will not be available in SPDocKit.

### Required permissions

In order to allow SPDocKit to successfully gather all the information about your SQL servers the following permissions are necessary:

* **Sysadmin** server role

In case that you can’t give those permissions due to security requirements, you can use the following permissions to get most of the SQL specific reports working:

* **Public** server role
* **Dbcreator** server role and **VIEW SERVER STATE** permission
* **Dbaccess** permission on **model** database
* **Db\_owner** database role on each of the affected databases

### Affected reports

**Sysadmin** database role is needed to run system extended stored procedures on the Master system database. Without the Sysadmin role, the following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; Always On reports

The **Public** server role is needed to fetch the real SQL server name. This permission is necessary to connect to the SQL server and perform some basic T-SQL queries. Also when you add an account to the SQL server, public role is automatically granted. If you are not granted this role, the following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; SQL Aliases
* Best Practices -&gt; Databases -&gt; SQL Aliases

**Dbcreator** role and **VIEW SERVER STATE** permission is necessary in order to load SQL server configuration data. Following reports will not be available:

* Farm Explorer -&gt; SQL -&gt; all reports
* Best Practices -&gt; Databases -&gt; Database Files
* Best Practices -&gt; Databases -&gt; Max Degree of Parallelism
* Best Practices -&gt; Databases -&gt; SharePoint Database Autogrowth
* Best Practices -&gt; Databases -&gt; TempDB -&gt; all reports

**Dbaccess** permission is necessary in order to load information about the model database. In case this permission is not granted, the following reports will not be available:

* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Autogrowth
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Files Initial Size
* Best Practices -&gt; Databases -&gt; ModelDB -&gt; ModelDB Recovery Model

**Db\_owner** database role on each of the affected databases is necessary in order to allow SPDocKit to successfully gather all the database permissions. In case this permission is not granted, the following report will not be available:

* Farm Explorer -&gt; SQL -&gt; Database Permissions

### Granting permissions

Follow these steps to grant required permissions:

1. Create a new user on the SQL server that will be used by SPDocKit.
2. Add the **sysadmin** role to your SPDocKit account.

In case you have a very strict security policy and cannot add the sysadmin role to the SPDocKit account, you can use the following procedure to get most of the SQL reports working:

1. Create a new user on the SQL server that will be used by SPDocKit.
2. Add the **dbcreator** role to your SPDocKit account and execute the following T-SQL query:

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

  
    To grant the **db\_owner** database role to the SPDocKit accounts, follow these steps:

4. Connect to your SQL server using **SQL Server Management Studio**.
5. Navigate to **Security** &gt; **Logins** and select the SPDocKit account.
6. Right click on the account and open the **Login Properties** dialog.
7. Under **User Mappings**, make sure that the account has the **db\_owner** database role for all affected databases.

## Project Server Information

During the snapshot creation process, SPDocKit will try to retrieve information about your Project server sites. Please note that the following permissions on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit.

### Required Permissions

In order to allow SPDocKit to successfully gather all the information about your Project server sites the following permissions are necessary:

* **SPDocKit account** needs to be a member of the Project Server **Administrators** group on each of the Project server sites

### Affected reports

The mentioned permissions on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit. Without the above-mentioned permissions, the following reports will not be available:

* Farm Explorer -&gt; Project Server -&gt; all reports

### Granting permissions

To add your SPDocKit account to the Administrators group, follow these steps:

1. In a browser navigate to your Project server site.
2. Click **Settings** &gt; **PWA Settings** to open up the PWA Settings page.
3. Under **Security** click **Manage Users**.
4. Click **New User** and add your **SPDocKit user accounts** \(console account and the service account, if you are using automatic snapshots\).
   * Under **User logon account** specify the **Domain\Username** of the **SPDocKit user account**.
   * Under **Security Groups** make sure that this user is a member of the **Administrators** security group.

