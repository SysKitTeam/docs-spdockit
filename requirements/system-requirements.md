---
title: System Requirements
---
This article lists the minimum hardware and software requirements for the installation of the SPDocKit. Depending on the scenario if you wish to use SPDocKit for SharePoint On-Premises or SharePoint Online view the corresponding section below.

## SharePoint On-Premises

### Requirements

* The product needs to be installed (or started) on a **SharePoint 2016, SharePoint 2013 or SharePoint 2010 Server**
   * For SharePoint 2013 & 2010: SharePoint Foundation, Standard and Enterprise are supported.
   * You can install the product on WFE, Application server, Index or any other server in the farm.
   * User must have [proper privileges](#internal/requirements/sharepoint-on-premises-user-permissions-requirements/) to run the application.

* Software
  * For SharePoint 2016: Windows 2012 R2 or Windows Server 2016
  * For SharePoint 2013: Windows 2012 or Windows 2008 R2
  * For SharePoint 2010: Windows 2012 or Windows 2008 R2
  * On Windows 2008 you will need to download [Windows PowerShell Snap-In 1.0](http://www.iis.net/download/powershell) to fully extract information about IIS Settings
  * SQL 2008 or better is supported
  * __Microsoft .NET Framework 3.5 SP1__ for SharePoint 2010, __Microsoft .NET Framework 4.0__ for SharePoint 2013 and SharePoint 2016.

* Hardware
  * CPU – any standard server CPU
  * Memory – up to 200 MB RAM while idle, up to 1GB RAM during the data load
  * Disk – 200 MB disk space
  
### Running on a workstation

The application can be installed on a workstation with __Windows 10, Windows 8 or Windows 7 operating system__, but you will not be able to load new SharePoint farm settings, but only connect to an existing SPDocKit database and open already saved farm settings.

From the version 5.2., SPDocKit installed on a workstation also supports connecting to any __SharePoint 2010, SharePoint 2013, SharePoint 2016__ site and real-time viewing and management of permissions. 

* Hardware:
  * CPU – any Windows 7, Windows 8 or Windows 10 capable CPU
  * Memory – up to 200 MB RAM while idle
  * Disk – 100 MB disk space

### Running SPDocKit Insights Agent

From the version 7.0, SPDocKit offers the new installation of __SPDocKit Insights Agent__. It is used for performance monitoring and real-time collection and searching of the ULS logs from SharePoint 2010, SharePoint 2013, or SharePoint 2016.

SPDocKit Insights Agent can be installed on any server with Windows Server 2008 or better. It is recommended to install it on a server that is not a part of the SharePoint farm to minimize its impact on the farm.

Please note that we advise you __not to install the SPDocKit Insights Agent on a server running SharePoint 2010__, as __Microsoft .NET Framework 4.5__ is required.

* Software
  * Windows Server 2008 or better
  * Microsoft .NET Framework 4.5
  
* Hardware:
  * CPU – any standard server CPU
  * Memory – up to 500 MB RAM
  * Installation – 100 MB disk space
  * Index – 200GB disk space required to store the index containing all the ULS logs. It is recommended to change the index location to a secondary drive.

## SharePoint Online

### Requirements

From the version 7.0, SPDocKit offers support for SharePoint Online. SPDocKit Online can be installed on any workstation or server with __Windows 7 / Windows Server 2008__ or better. SPDocKit Online needs to be installed on a server that is not a part of the SharePoint On-Premises farm.

* Software
  * Windows 7 / Windows Server 2008 or better
  * Microsoft .NET Framework 4.5
  
* Hardware:
  * CPU – any standard server CPU
  * Memory – up to 500 MB RAM
  * Installation – 100 MB disk space 

User must have [proper privileges](#internal/requirements/sharepoint-online-user-permissions-requirements/) to run the application.
