---
title: Configure SPDocKit on a Workstation
description: This article explains how to configure SPDocKit on a workstation.
author: Tomislav Kunaj
date: 25/5/2017
---

This article explains how to configure SPDocKit on a workstation. An SPDocKit workstation instance allows you to manage SharePoint On-Premise,view SPDocKit reports, compare farm settings and track changes without having to connect to a SharePoint server.

__Requirements__: To view SPDocKit reports directly from your PC workstation, you must have the SPDocKit [workstation or site/team/consultant license](https://www.spdockit.com/orders/) and the user running the application on a workstation needs to have adequate [permissions](#internal/requirements/sharepoint-on-premises-user-permissions-requirements/).

__Please note!__ To use SPDocKit reports on your workstation, you need to have SPDocKit installed on an actual SharePoint server to load the data. A workstation installation cannot create new farm snapshots or load information about permissions; it can only explore previously loaded data and manage permissions in real-time using Permissions Explorer.

To install and configure an SPDocKit instance, follow these instructions:

1. [Download](https://www.spdockit.com/downloads/) SPDocKit to your workstation. __The SPDocKitSetup.exe file is the same for both server and workstation installation__.

2. Follow the [Installation Guide](#internal/installation/installation-guide/) to install it on your workstation. Once you have successfully installed the tool, the Configuration Wizard will open.

3. When using SPDocKit on a workstation, there are differences depending on if you are using a database or not.
    * When using it __without a database__, the features available are as follows:
        * Snapshots (Farm Explorer and Best Practices reports)
    * When using SPDocKit on a workstation __with an existing database__, you can access:
        * Snapshots (Farm Explorer and Best Practices reports)
        * All reports (Site Explorer, Permissions Reports, Content & Usage reports and Monitoring reports) except Queries and Rules
        * Live permissions explorer
        * Permission management for SharePoint On-Premise
        * Permission management for SharePoint Online

4. Select the __Use existing database__ check box and click __Next__ to continue.

5. Enter the database server and database name from which you would like to retrieve the data. If you wish to monitor multiple farms from your workstation, all these SharePoint farms must be connected __to the same SPDocKit database__. Click __Next__ to finish your configuration.

6. Note that when using SPDocKit on your workstation, the __SPDocKit Service will not be available__.

7. Click __Finish__ to start using SPDocKit on your workstation.