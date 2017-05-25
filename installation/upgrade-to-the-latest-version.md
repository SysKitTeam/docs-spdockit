---
title: Upgrade to the Latest Version
author: Tomislav Sirovec      
date: 17/5/2017 
---

# Upgrade to the Latest Version

This article explains how to upgrade SPDocKit to the latest major version. SPDocKit database, saved farms, snapshots and application settings will be preserved in the upgrade process.

## Preparation:
1. The account running the application should have __db_owner__ privileges on the SPDocKit database in order to perform the upgrade process successfully. If you are also changing the SPDocKit Service account to a different one, the account running the upgrade should also have the __securityadmin__ role on the SQL Server that is storing the database.. This role will allow him to [grant proper privileges to the new Service account](#internal/requirements/sharepoint-on-premises-user-permission-requirements/).
2. Perform a __database backup__ before proceeding with the upgrade process, especially when upgrading to a new major versions of SPDocKit.
3. Due to a number of database modifications, the upgrade to SPDocKit 7.0 may take a while. Also, [License Management](#internal/get-to-know-spdockit/backstage-screen/license-management/) configuration will not be preserved.
4. We redesigned the email alerts feature, previously located under the Email Alerts tab in the Options dialog. __Email alerts will not be preserved__ when upgrading to version 6.2.0. and later. You will have to create new alerts. For more information on this, please follow [these](#internal/get-to-know-spdockit/backstage-screen/options-wizard#email-alerts)  instructions.
5. If you are upgrading from an SPDocKit version lower than 5.1.0., make sure you are on the SharePoint farm you were using this database for. Since the latest upgrade process uses the farm ID for data classification, upgrading the SPDocKit database on other farms might result in data corruption.
6. Connected SharePoint Online tennants and added site collections (on a workstation) __will not be preserved__ after the upgrade to SPDocKit 7.0.

## Instructions
1. Download the latest SPDocKit version and run the __SPDocKitSetup.exe__.
2. If a previous SPDocKit version is already installed, the __Installation Wizard__ will inform you that it will be __uninstalled automatically__.
3. Click __I Accept the terms of the license agreement__ to accept the license and then click __Next__ > to proceed.
4. Choose the desired installation type:
    * __Install__ – the product will be installed on your computer.
    * __Run__ – the application will NOT be installed on your server but rather unpacked to a temporary folder. This is a zero footprint run, the application will not make any changes to your server. Some functions like automatic snapshots will not be available in this mode.
5. Choose between Default or Advanced installation. 
    * __Default__ – program will be installed with default features. That is, only the SPDocKit application.
    * __Advanced__ – choose which program features you want to be installed. Available additional features are __SPDocKit Insights Agent__ and __SPDocKit Insights__.
6. When using the Advanced installation mode, the features you chose in the previous version will already be selected. However, if you wish to change the features which will be installed, you can do so.
 
   If the icon next to the feature is gray, this feature will be installed. If the icon next to the feature is a little red cross, then this feature will not be installed at the end of this process.

    * The __Insights Agent__ crawls the ULS and Windows Event Logs and indexes them. Install this feature on a __server outside of your SharePoint farm__ for minimal impact.
    * __SPDocKit Insights__ is used to search and view the events that the Insights Agent has indexed. This is a standalone application which can be run without SPDocKit installed. You can install it on any available server, including the one where SPDocKit is installed. [Read more about SPDocKit Event Collection](#internal/get-to-know-spdockit/spdockit-insights).
7. Choose the installation folder e.g. __C:\Program Files\Acceleratio\SPDocKit__. Click __Next__ > to proceed.
8. Select the location where to create application shortcuts and the preferred availability option (__Anyone__ or __Only me__). Click __Next__ > to proceed.
9. The installation wizard will unpack your files and you will be able to run the application from: __Start__ > __All Programs__ > __SPDocKit.__

   Note that with a major release of SPDocKit you need a new license key. If you have a valid Software Assurance go to our customer’s portal, where you will see your new key. In case you do not have it, you will need a new license. In that case, please [contact us](https://www.spdockit.com/support/contact-us/).

## Tips & tricks
If during the installation you encounter any problems and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:
* */l=”full path” will create a log file on a specified location.
* */log will create the log file in the installation directory.

Note that this will work for both .exe and .msi installation files.
