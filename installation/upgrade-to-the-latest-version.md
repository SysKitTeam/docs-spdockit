---
title: Upgrade to the Latest Version
author: Tomislav Sirovec
date: 17/5/2017
description: This article explains how to upgrade SPDocKit to the latest major version.
---

# Upgrade to the Latest Version

This article explains how to upgrade SPDocKit to the latest major version. SPDocKit database, saved farms, snapshots and application settings will be preserved in the upgrade process.

## Preparation

1. The account running the application should have **db\_owner** privileges on the SPDocKit database in order to perform the upgrade process successfully. If you are also changing the SPDocKit Service account to a different one, the account running the upgrade should also have the **securityadmin** role on the SQL Server that is storing the database.. This role will allow him to [grant proper privileges to the new Service account](../requirements/sharepoint-on-premises-user-permissions-requirements.md).
2. Perform a **database backup** before proceeding with the upgrade process, especially when upgrading to a new major versions of SPDocKit.
3. Due to a number of database modifications, the upgrade to SPDocKit 7.0 may take a while. 
4. We redesigned the email alerts feature, previously located under the Email Alerts tab in the Options dialog. **Email alerts will not be preserved** when upgrading from version 6.2.0. and lower. You will have to create new alerts. For more information on this, please follow [these](https://github.com/SysKitTeam/docs-spdockit/tree/3922706bedc5e157e3a4088643bb0db959ebafe0/get-to-know-spdockit/backstage-screen/options-wizard/README.md#email-alerts)  instructions.
5. Connected SharePoint Online tenants and added site collections \(on a workstation\) **will not be preserved** after the upgrade to SPDocKit 7.0.
6. If you were using SPDocKit's Event Collection feature \(now called **SPDocKit Insights**\) introduced in version 6.2 you will need to upgrade it as well. **Version of the Viewer application must match with the Agent \(Collection Service\)**. Click [here](../spdockit-insights/configure-data-collection.md) for more information.

## Instructions

1. Download the latest SPDocKit version and run the **SPDocKitSetup.exe**.
2. If a previous SPDocKit version is already installed, the **Installation Wizard** will inform you that it will be **uninstalled automatically**.
3. Click **I Accept the terms of the license agreement** to accept the license and then click **Next** &gt; to proceed.
4. Choose the desired installation type:
   * **Install** – the product will be installed on your computer.
   * **Run** – the application will NOT be installed on your server but rather unpacked to a temporary folder. This is a zero footprint run, the application will not make any changes to your server. Some functions like automatic snapshots will not be available in this mode.
5. Choose between Default or Advanced installation. 
   * **Default** – program will be installed with default features. That is, only the SPDocKit application.
   * **Advanced** – choose which program features you want to be installed. Available additional features are **SPDocKit Insights Agent** and **SPDocKit Insights**.
6. When using the Advanced installation mode, the features you chose in the previous version will already be selected. However, if you wish to change the features which will be installed, you can do so.

   If the icon next to the feature is gray, this feature will be installed. If the icon next to the feature is a little red cross, then this feature will not be installed at the end of this process.

   * The **Insights Agent** crawls the ULS and Windows Event Logs and indexes them. Install this feature on a **server outside of your SharePoint farm** for minimal impact.
   * **SPDocKit Insights** is used to search and view the events that the Insights Agent has indexed. This is a standalone application which can be run without SPDocKit installed. You can install it on any available server, including the one where SPDocKit is installed. [Read more about SPDocKit Event Collection](../spdockit-insights/configure-data-collection.md).

7. Choose the installation folder e.g. **C:\Program Files\SysKit\SPDocKit**. Click **Next** &gt; to proceed.
8. Select the location where to create application shortcuts and the preferred availability option \(**Anyone** or **Only me**\). Click **Next** &gt; to proceed.
9. The installation wizard will unpack your files and you will be able to run the application from: **Start** &gt; **All Programs** &gt; **SPDocKit.**

   Note that with a major release of SPDocKit you need a new license key. If you have a valid Software Assurance go to our customer’s portal, where you will see your new key. In case you do not have it, you will need a new license. In that case, please [contact us](https://www.spdockit.com/support/contact-us/).

## Tips & tricks

If during the installation you encounter any problems and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:

* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named **spdockit\_installation\_log.txt** in the **temp** folder on the **C:\** drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`

Note that this will work for both .exe and .msi installation files.

