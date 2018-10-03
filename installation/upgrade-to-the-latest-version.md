---
title: Upgrade to the Latest Version
author: Tomislav Sirovec      
date: 17/5/2017
description: This article explains how to upgrade SPDocKit to the latest major version.
---

This article explains how to upgrade SPDocKit to the latest major version. SPDocKit database, saved farms, snapshots and application settings will be preserved in the upgrade process.

## Preparation:
1. The account running the application should have __db_owner__ privileges on the SPDocKit database in order to perform the upgrade process successfully. If you are also changing the SPDocKit Service account to a different one, the account running the upgrade should also have the __securityadmin__ role on the SQL Server that is storing the database.. This role will allow him to [grant proper privileges to the new Service account](#internal/requirements/user-permissions-requirements/).
2. Perform a __database backup__ before proceeding with the upgrade process, especially when upgrading to a new major versions of SPDocKit.
3. Due to a number of database modifications, the upgrade to SPDocKit 8.0 may take a while. 
4. __Email alerts will not be preserved__ when upgrading from version 6.2.0. and lower. You will have to create new alerts. For more information on this, please follow [these](#internal/get-to-know-spdockit/backstage-screen/options-wizard#email-alerts)  instructions.
5. Connected __SharePoint Online__ tenants and added site collections (on a workstation) __will not be preserved__ after the upgrade to SPDocKit 8.0.
6. __SPDocKit Insights__ has been discontinued in SPDocKit version 8.0.

## Instructions
1. Download the latest SPDocKit version and run the __SPDocKitSetup.exe__.
2. If a previous SPDocKit version is already installed, the __Installation Wizard__ will inform you that it will be __uninstalled automatically__.
3. Click __I Accept the terms of the license agreement__ to accept the license and then click __Next__ > to proceed.
4. Choose the desired installation type:
    * __Install__ – the product will be installed on your computer.
    * __Run__ – the application will NOT be installed on your server but rather unpacked to a temporary folder. This is a zero footprint run, the application will not make any changes to your server. Some functions like automatic snapshots will not be available in this mode.
5. Choose the installation folder e.g. __C:\Program Files\SysKit\SPDocKit__. Click __Next__ > to proceed.
6. Select the location where to create application shortcuts and the preferred availability option (__Anyone__ or __Only me__). Click __Next__ > to proceed.
7. The installation wizard will unpack your files and you will be able to run the application from: __Start__ > __All Programs__ > __SPDocKit.__

   Note that with a major release of SPDocKit you need a new license key. If you have a valid Software Assurance go to our customer’s portal, where you will see your new key. In case you do not have it, you will need a new license. In that case, please [contact us](https://www.spdockit.com/support/contact-us/).

## Tips & tricks
If you encounter any problems during the installation and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:
* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named __spdockit_installation_log.txt__ in the __temp__ folder on the __C:\\__ drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`


Note that this will work for both .exe and .msi installation files.
