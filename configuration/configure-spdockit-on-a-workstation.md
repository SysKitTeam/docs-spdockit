---
title: Configure SPDocKit on a Workstation
---

This article explains how to configure [SPDocKit on a workstation](#internal/blog/spdockit-workstation-license/). An SPDocKit workstation instance allows you to manage both SharePoint On-Premise and SharePoint Online permissions, view SPDocKit reports, compare farm settings and track changes without having to connect to a SharePoint server.

__Requirements__: To view SPDocKit reports directly from your PC workstation, you must have the SPDocKit [workstation or site/team/consultant license](#internal/orders/) and user running the application on a workstation needs to have adequate [permissions](#internal/requirements/spdockit-user-permission-requirements/).

__Please note!__ To use SPDocKit reports on your workstation, you need to have SPDocKit installed on an actual SharePoint server to load the data. A workstation installation cannot create new farm snapshots or load information about permissions; it can only explore previously loaded data and manage permissions in real-time using Permissions Explorer.

To install and configure an SPDocKit instance, follow these instructions:

1. [Download](#internal/downloads/) SPDocKit to your workstation. __The SPDocKitSetup.exe file is the same for both server and workstation installation__.

2. Follow the [Installation Guide](#internal/installation/installation-guide/) to install it on your workstation. Once you have successfully installed the tool, the Configuration Wizard will open.

3. When using SPDocKit on a workstation, there are differences if you are using a database or not.
    * When using it __without a database__, the features available are as follows:
        * Snapshots (Farm Explorer and Best Practices reports)
        * Live permissions explorer
        * Permissions management for SharePoint On-premise
        * Permissions management for SharePoint Online
    * When using SPDocKit on a workstation __with a database__, you can access:
        * Snapshots (Farm Explorer and Best Practices reports)
        * All reports except Queries and Rules (Site Explorer, Permissions Reports, Content & Usage reports and Monitoring reports)
        * Live permissions explorer
        * Permission management for SharePoint On-premise
        * Permission management for SharePoint Online

4. Select the __Use a database__ check box and choose the __Use existing database__ Click __Next__ to continue.

5. Enter the database server and database name from which you would like to retrieve the data. If you wish to monitor multiple farms from your workstation, all these SharePoint farms must be connected __to the same SPDocKit database__. Click __Next__ to finish your configuration.

6. Note that when using SPDocKit on your workstation, the __SPDocKit Service will not be available__.

7. Click __Finish__ to start using SPDocKit on your workstation.

### Learn more
* [How to: Manage SharePoint Online permissions with SPDocKit Workstation](#interal/how-to/sharepoint-online/how-to-manage-sharepoint-online-permissions-with-spdockit-workstation/)
* [How to: View SharePoint Online permissions reports](#internal/faq/how-to-faq/#panel-step-11)

