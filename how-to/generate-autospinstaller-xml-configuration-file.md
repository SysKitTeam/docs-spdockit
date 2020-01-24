---
title: Generate an AutoSPInstaller XML Configuration File
description: >-
  This section describes how to generate an AutoSPInstaller XML configuration
  file.
author: Tomislav Sirovec
date: 19/5/2017
---

# Generate an AutoSPInstaller XML Configuration File

## What is AutoSPInstaller?

SPDocKit offers a feature that can generate an XML configuration file, which you can use later with [AutoSPInstaller](https://autospinstaller.com/) when creating new SharePoint farms. It helps you create farms that are identical or as similar as possible to your current environment.

AutoSPInstaller is an open-source project by **Brian Lalancette**. It's based on PowerShell scripts that are used when installing and configuring SharePoint farms. It provisions SharePoint farms automatically, assisting SharePoint admins with their SharePoint farms.

This feature allows you to create an AutoSPInstaller script based on previously loaded farm settings using SPDocKit. Once you load SharePoint farm settings and you are happy with your farm configuration, you can create a copy of that environment using the **Save XML configuration** feature.

SPDocKit gathers all the relevant data from your farm, and allows you to modify the settings. It then creates an XML file containing the settings of the selected SharePoint farm, such as services and Web applications, as well as managed accounts or host named mappings.

The combination of SPDocKit and AutoSPInstaller is a tremendous time-saver when you have to create two identical farms. It bypasses the painstaking manual configuration of those farms and it gives administrators the ability to copy the configuration of one farm quickly to another and then deploy it.

## How to generate an AutoSPInstaller XML Configuration File?

To generate an AutoSPInstaller XML configuration file, follow these instructions:

1. Open an existing snapshot or create a new one.
2. Navigate to the **Farm Explorer** in the navigation bar and click **Save XML Configuration** from the Farm Explorer Home ribbon.
3. The AutoSPInstaller Configuration File Wizard will open, and under **General Settings** choose where you wish to save your file and the Web applications and services you wish to include. Click **Next** to continue.
4. Specify the farm account and the general farm configuration for your new farm. Click **Next** to continue.
5. In the next few steps, define the **Server Mappings**, **SQL Server Mappings** and **Account Mappings**. The current farm server and account names will be listed under the source column. Use the Replace option to rename multiple target farm server and account names at once. For SharePoint 2016 FP1 farms, you can define **MinRoles** as well.
6. On the **Managed Account Settings** tab, provide the passwords for your managed accounts. This is an optional step, but you can use the Auto Fill All Credentials button to retrieve the credentials from the current farm.
7. Depending on what you selected in the General Settings section, you will be asked to provide the login data for **Unattended Accounts**, such as for Visio or PerformancePoint Service Account. Click **Next** to continue to **Service Application Settings**.
8. On the **Service Application Settings** tab lets you setup User Profile and Search Service details.
9. In the next step, choose what kinds of applications you want to provision along with the names you want to use for them.
10. In the last two steps, define the mappings for host names and databases. Click **Next** to generate your configuration file.
11. Review your results on the last tab and click **Finish** to close the AutoSPInstaller wizard.

After SPDocKit generates the XML file, visit [AutoSPInstaller Online](https://autospinstaller.com/) to validate the settings. Use the XML file as the input to another SharePoint server to create a farm that matches your settings. Find out more about generating an XML configuration file in SPDocKit in our [SPDocKit and AutoSPInstaller webinar](http://www.spdockit.com/blog/video-create-a-copy-of-your-sharepoint-farm-with-spdockit-and-autospinstaller/).

