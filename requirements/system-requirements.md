---
title: System Requirements
description: >-
  This article lists the minimum hardware and software requirements for the
  installation of SPDocKit.
author: Matija Hanzic
date: 25/5/2017
---

# System Requirements

This article lists the minimum hardware and software requirements for SPDocKit. View the corresponding section depending on the scenario you need - either SPDocKit for SharePoint On-Premises or SharePoint Online.

## SharePoint On-Premises

### Requirements

* The product needs to be installed \(or started\) on a **SharePoint 2019, SharePoint 2016, SharePoint 2013 or SharePoint 2010 Server**
  * For SharePoint 2013 & 2010: SharePoint Foundation, Standard and Enterprise are supported.
  * You can install the product on a WFE \(recommended\), Application, Index or any other server in the farm.
  * User must have [proper privileges](user-permissions-requirements.md) to run the application.
* Software
  * For SharePoint 2019: Windows 2012 R2 or Windows Server 2016
  * For SharePoint 2016: Windows 2012 R2 or Windows Server 2016
  * For SharePoint 2013: Windows 2012 or Windows 2008 R2
  * For SharePoint 2010: Windows 2012 or Windows 2008 
  * On Windows 2008 you will need to download [Windows PowerShell Snap-In 1.0](http://www.iis.net/download/powershell) to fully extract information about IIS Settings
  * SQL 2008 or better is supported
  * **Microsoft .NET Framework 3.5 SP1** for SharePoint 2010, **Microsoft .NET Framework 4.5** for SharePoint 2013 and SharePoint 2016.
* Hardware
  * CPU – any standard server CPU
  * Memory – up to 200 MB RAM while idle, up to 1GB RAM during the data load
  * Disk – 200 MB disk space
  * Display – 1366 x 768

## Running on a workstation

The application can be installed on a workstation with **Windows 10, Windows 8 or Windows 7** 64-bit operating system, but you will not be able to load new SharePoint farm settings, only connect to an existing SPDocKit database and open already saved farm settings.

From version 5.2., SPDocKit installed on a workstation also supports real-time viewing and management of permissions.

* Hardware:
  * CPU – any Windows 7, Windows 8 or Windows 10 capable CPU
  * Memory – up to 200 MB RAM while idle
  * Disk – 100 MB disk space
  * Display – 1366 x 768

### Learn more

* [Installation Guide](../installation/installation-guide.md)
* [How to create farm documentation](../explore-reports-and-create-documentation/farm-explorer/farm-documentation.md)
* [How to compare SharePoint farms](../compare-sharepoint-configurations/compare-sharepoint-farms.md)

