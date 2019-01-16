---
title: Installation Guide
author: Tomislav Sirovec
date: 17/5/2017
description: This article explains how to install SPDocKit.
---

# Installation Guide

This article explains how to install SPDocKit.

{% hint style="warning" %}
**Please note!**

 If you would like to document your SharePoint Online environment, please check the [SPDocKit Online Quick Start Guide](../spdockit-spo/sharepoint-online.md) for further instructions.
{% endhint %}

**System Requirements:** The product uses the SharePoint Server Object Model to retrieve information about your farm and it needs to run on the SharePoint server to be able to make API calls. It needs to be installed on a **SharePoint 2010, SharePoint 2013 or SharePoint 2016 server to load farm information.**

The application can be installed on a workstation with a **Windows 7, Windows 8 or Windows 10** operating system, but you will not be able to load SharePoint farm settings, only connect to an existing SPDocKit database and open already saved snapshots. [Read more about required system settings.](../requirements/system-requirements.md)

1. [Download](https://www.spdockit.com/downloads/) Application.
2. Unpack and run **SPDocKitSetup.exe.** The wizard will guide you through the installation steps, click Next &gt; to proceed.
3. Click I Accept the terms of the license agreement to accept the license and then click Next &gt; to proceed.
4. Choose the desired installation type:
   * **Install** - the product will be installed on your computer.
   * **Run** - the application will NOT be installed on your server but rather unpacked to a temporary folder. This is a zero footprint run, the application will not make any changes to your server. Some functions like automatic snapshots will not be available in this mode.
5. Choose between Default or Advanced installation.
   * **Default** – program will be installed with default features. That is, only the SPDocKit application.
   * **Advanced** – choose which program features you want to install. The additional available features are SPDocKit Insights Viewer and SPDocKit Insights Agent.
6. When using the Advanced installation mode, select the desired feature using the dropdown menu next to the feature name. If the icon next to the feature is gray, this feature will be installed. If the icon next to the feature name is little red cross, then this feature will not be installed at the end of this process.
   * **SPDocKit Insights Agent** crawls the ULS, Windows Event Logs, SQL Server logs and indexes them. Install this feature on a **server outside of your SharePoint farm** for minimal impact.
   * **SPDocKit Insights Viewer**  is used to search and view the events that the Agent has indexed. This is a standalone application which can be run without a SPDocKit application. You can install it on any available server, including the one where SPDocKit is installed. [Read more about SPDocKit Insights](../spdockit-insights/insights-quick-start-guide.md).
7. Choose the installation folder e.g. **C:\Program Files\SysKit\SPDocKit.** Click **Next** &gt; to proceed.
8. Select the location where to create application shortcuts and the preferred availability option \(**Anyone** or **Only me**\). Click **Next** &gt; to proceed.
9. The installation wizard will unpack your files and you will be able to run the application from: **Start** &gt; **All Programs** &gt; **SPDocKit.**
10. [Configure SPDocKit database and Snapshot Service](../configuration/configure-spdockit.md) settings.

## Tips & tricks

If during the installation you encounter any problems and wish to enable logging to help you resolve the problems, you can start the installation using the command prompt with the following argument:

* /l=”full path” will create a log file on a specified location.

For example, if you want to place the log file named **spdockit\_installation\_log.txt** in the **temp** folder on the **C:\** drive, the full command will look like this:

`SPDocKitSetup.exe /l="C:\temp\spdockit_installation_log.txt"`

Note that this will work for both .exe and .msi installation files.

## Learn more

* [How to: Create Farm Documentation](../how-to/farm-documentation/create-farm-documentation.md)
* [How to: Compare SharePoint Farms](../how-to/compare-wizard/compare-sharepoint-farms.md)
* [How to: Configure Automatic Snapshots](../how-to/sharepoint-farm-snapshots/automatic-snapshots.md)

