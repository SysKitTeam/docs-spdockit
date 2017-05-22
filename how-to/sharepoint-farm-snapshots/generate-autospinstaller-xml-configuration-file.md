---
title: Generate an AutoSPInstaller XML Configuration File
description: This section describes how to generate an AutoSPInstaller XML configuration file.
author: Tomislav Sirovec
date: 19/5/2017
---
### What is AutoSPInstaller?

SPDocKit offers a feature that can generate an XML configuration file, which you can use later with [AutoSPInstaller](https://autospinstaller.com/) when creating new SharePoint farms.  It helps you produce farms that you wish to be identical or as similar as possible to your current environment.

AutoSPInstaller is an open-source project by **Brian Lalancette**. It's based on PowerShell scripts that are used when installing and configuring SharePoint farms. It provisions SharePoint farms automatically assisting SharePoint admins with their SharePoint farms.

This feature allows you to create an AutoSPInstaller script based on previously loaded farm settings using SPDocKit. Once you load SharePoint farm settings and you are happy with your farm configuration, you can create a copy of that environment using the **Save XML configuration** feature.

SPDocKit gathers all the relevant data from your farm, and allow you to modify the settings. SPDocKit then creates an XML file containing the settings of the selected SharePoint farm, such as services and web applications, as well as managed accounts or host named mappings.

The combination of SPDocKit and AutoSPInstaller is a tremendous time-saver when you have to create two identical farms. It bypasses the painstaking manual configuration of those farms and it gives administrators the ability to copy the configuration of one farm quickly to another and then deploy it.

### How to generate an AutoSPInstaller XML Configuration File?

To generate an AutoSPInstaller XML configuration file, follow these instructions:

1. Load your existing farm and take a snapshot with the entire documentation for your farm.

1. Navigate to the **Farm Explorer** in the navigation bar and click **Save XML Configuration** from the Farm Explorer Home ribbon.

1. AutoSPInstaller Configuration File Wizard will open, and under **General Settings** choose where you wish to save you file and which objects you wish to include. Click **Next** to continue.

1. Specify the details of the farm account and configuration for your new farm. Click **Next** to continue.

1. In the next few steps, define the **Server Mappings**, **SQL Server Mappings** and **Account Mappings**. For SharePoint 2016 FP1 farms, you can define __MinRoles__ as well. Click **Next** to continue. Current farm server and account names will be listed under the source column. Use the Replace option define the target farms server names and account names.

1. Provide the passwords for your managed accounts and additional service app settings. Click **Next** to continue. Use the little orange key button to autofill required credentials.

1. Depending on what you selected in the General Settings section, you will be asked to provide the login data for **Unattended Accounts**, such as for Visio or PerformancePoint Service Account. Click **Next** to continue.

1. In the next two steps, choose what kinds of application you want to provision along with the names you want to use. Define the Service Application Settings and Service Application Mappings. Click **Next** to continue.

1. Define the mappings for host names and databases. Click **Next** to generate your configuration file.

1. Click **Finish** to close the AutoSPInstaller and to review your results.

After SPDocKit generates the XML file, visit [AutoSPInstaller Online](https://autospinstaller.com/) to validate the settings. Use the XML file as the input to another SharePoint server to create a farm that matches your settings. Find out more about generating an XML configuration file in SPDocKit in our [SPDocKit and AutoSPInstaller webinar](http://www.spdockit.com/blog/video-create-a-copy-of-your-sharepoint-farm-with-spdockit-and-autospinstaller/).