---
title: Upgrade to the Latest Version
author: Tomislav Sirovec      
date: 17/5/2017
description: This article explains how to upgrade SPDocKit to the latest major version.
---

This article explains how to upgrade SPDocKit to the latest major version. SPDocKit database, saved farms, snapshots and application settings will be preserved in the upgrade process.

## Preparation
1. The account running the application should have __db_owner__ privileges on the SPDocKit database in order to perform the upgrade process successfully. If you are also changing the SPDocKit Service account to a different one, the account running the upgrade should also have the __securityadmin__ role on the SQL Server that is storing the database.. This role will allow him to [grant proper privileges to the new Service account](#internal/requirements/user-permissions-requirements/).
1. Perform a __database backup__ before proceeding with the upgrade process, especially when upgrading to a new major versions of SPDocKit.
1. Due to a number of database modifications, the upgrade to SPDocKit 8.0 may take a while. 
1. __Email alerts will not be preserved__ when upgrading from version 6.2.0. and lower. You will have to create new alerts. For more information on this, please follow [these](#internal/configure-and-extend-spdockit/options-wizard) instructions.
1. Connected __SharePoint Online__ tenants and added site collections (on a workstation) __will not be preserved__ after the upgrade to SPDocKit 8.0.
1. __SPDocKit Insights__ has been discontinued in SPDocKit version 8.0.

## Instructions
1. Download the latest SPDocKit version and run the __SPDocKitSetup.exe__.
1. If a previous SPDocKit version is already installed, the __Installation Wizard__ will inform you that it will be __uninstalled automatically__.
1. Click __I Accept the terms of the license agreement__ to accept the license and then click __Next__ > to proceed.
1. Choose the installation folder e.g. __C:\Program Files\SysKit\SPDocKit__. Click __Next__ > to proceed.
1. Select the location where to create application shortcuts and the preferred availability option (__Anyone__ or __Only me__). Click __Next__ > to proceed.
1. The installation wizard will unpack your files and you will be able to run the application from: __Start__ > __All Programs__ > __SPDocKit.__

## PleaseNote:

   When a __single database__ is used with multiple instances of SPDocKit, all instances of SPDocKit have to be upgraded to the new version. Data collection using an older instance of SPDocKit on an upgraded database is __not possible__ until SPDocKit is updated.

   If you do not want to upgrade all instances of SPDocKit to the latest version, creation of a new database is required.

   With a major release of SPDocKit, you need a new license key. If you have a valid Software Assurance go to our customer’s portal, where you will see your new key. In case you do not have it, you will need a new license. In that case, please [contact us](https://www.syskit.com/company/contact-us/).

## Tips & tricks
If you encounter any problems during the installation and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:
* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named __spdockit_installation_log.txt__ in the __temp__ folder on the __C:\\__ drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`


Note that this will work for both .exe and .msi installation files.
