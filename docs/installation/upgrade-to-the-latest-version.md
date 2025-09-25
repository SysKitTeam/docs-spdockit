---
description: This article explains how to upgrade SPDocKit to the latest version.
sidebar_position: 2
---

# Upgrade to the Latest Version

## Preparation

1. The account running the application should have **db\_owner** privileges on the SPDocKit database in order to perform the upgrade process successfully. If you are also changing the SPDocKit Service account to a different one, the account running the upgrade should also have the **securityadmin** role on the SQL Server that is storing the database.. This role will allow him to [grant proper privileges to the new Service account](../requirements/user-permissions-requirements.md).
2. Perform a **database backup** before proceeding with the upgrade process, especially when upgrading to a new major versions of SPDocKit.
3. Due to a number of database modifications, the upgrade to SPDocKit 8.0 may take a while. 
4. **Email alerts will not be preserved** when upgrading from version 6.2.0. and lower. You will have to create new alerts. For more information on this, please follow [these](../configure-and-extend-spdockit/options-wizard.md) instructions.
5. Connected **SharePoint Online** tenants and added site collections (on a workstation) **will not be preserved** after the upgrade to SPDocKit 8.0.
6. **SPDocKit Insights** has been discontinued in SPDocKit version 8.0.

## Instructions

1. Download the latest SPDocKit version and run the **SPDocKitSetup.exe**.
2. If a previous SPDocKit version is already installed, the **Installation Wizard** will inform you that it will be **uninstalled automatically**.
3. Click **I Accept the terms of the license agreement** to accept the license and then click **Next** &gt; to proceed.
4. Choose the installation folder e.g. **C:\Program Files\SysKit\SPDocKit**. Click **Next** &gt; to proceed.
5. Select the location where to create application shortcuts and the preferred availability option (**Anyone** or **Only me**). Click **Next** &gt; to proceed.
6. The installation wizard will unpack your files and you will be able to run the application from: **Start** &gt; **All Programs** &gt; **SPDocKit.**

:::warning
**Please note!**

When a **single database** is used with multiple instances of SPDocKit, all instances of SPDocKit have to be upgraded to the new version. Data collection using an older instance of SPDocKit on an upgraded database is **not possible** until SPDocKit is updated.

If you do not want to upgrade all instances of SPDocKit to the latest version, creation of a new database is required.
:::

## Tips & tricks

If you encounter any problems during the installation and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:

* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named **spdockit\_installation\_log.txt** in the **temp** folder on the **C:\** drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`

Note that this will work for both .exe and .msi installation files.

