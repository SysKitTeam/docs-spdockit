---
title: Installation Guide
author: Tomislav Sirovec
date: 17/5/2017
description: This article explains how to install SPDocKit.
---

# installation-guide

This article explains how to install SPDocKit.

**System Requirements:** The product uses the SharePoint Server Object Model to retrieve information about your farm and it needs to run on the SharePoint server to be able to make API calls. It needs to be installed on a **SharePoint 2010, SharePoint 2013, SharePoint 2016 or SharePoint 2019 server to load farm information.**

The application can be installed on a workstation with a **Windows 7, Windows 8 or Windows 10** operating system, but you will not be able to load SharePoint farm settings, only connect to an existing SPDocKit database and open already saved snapshots. [Read more about required system settings.](installation-guide.md#internal/requirements/system-requirements/)

1. [Download](https://www.spdockit.com/downloads/) Application.
2. Unpack and run **SPDocKitSetup.exe.** The wizard will guide you through the installation steps, click Next &gt; to proceed.
3. Click I Accept the terms of the license agreement to accept the license and then click Next &gt; to proceed.
4. Choose the installation folder e.g. **C:\Program Files\SysKit\SPDocKit.** Click **Next** &gt; to proceed.
5. Select the location where to create application shortcuts and the preferred availability option \(**Anyone** or **Only me**\). Click **Next** &gt; to proceed.
6. The installation wizard will unpack your files and you will be able to run the application from: **Start** &gt; **All Programs** &gt; **SPDocKit.**
7. [Configure SPDocKit database and Snapshot Service](installation-guide.md#internal/configuration/configure-spdockit/) settings.

## Tips & tricks

If you encounter any problems during the installation and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:

* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named **spdockit\_installation\_log.txt** in the **temp** folder on the **C:\** drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`

Note that this will work for both .exe and .msi installation files.

## Learn more

* [How to: Create Farm Documentation](installation-guide.md#internal/explore-reports-and-create-documentation/farm-explorer/farm-documentation/)
* [How to: Compare SharePoint Farms](installation-guide.md#internal/compare-sharepoint-configurations/compare-sharepoint-farms/)
* [How to: Configure Automatic Snapshots](installation-guide.md#internal/create-sharepoint-farm-snapshots/automatic-snapshots/)

