---
title: Take Snapshot of SharePoint Online
description: This article describes how to take snapshot of your Office 365 tenant or a specific Site Collection to explore permissions.
author: Iva Novoselic
date: 25/5/2017
---

**_As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is SysKit Security Manager. For instructions on the upgrade path or any other questions contact us at [support@syskit.com](mailto:support@syskit.com)._**

This article will explain how to take a snapshot of your SPO Tenant. Please check the [feature availability by license type](https://www.spdockit.com/orders/#online).
Read more about the [user permissions](#internal/requirements/sharepoint-online-user-permissions-requirements) required to run SPDocKit properly on a workstation.  

__Please note__ that in order for this feature to work, __you will need to use a database__.
You can use either [SQL Server database](#internal/configuration/configure-spdockit-database) or a [LocalDB instance](#internal/configuration/configure-localdb) that is shipped with SPDocKit.  


Here is what you need to do:

## Manual Snapshot
1. You can start the loading process (snapshot) from Backstage. __File > Actions > Take Snapshot__. Or click the __Take Snapshot button__ in __Home ribbon__ of Farm and Site Explorer, Permissions Reports, Content & Usage Reports section, and Snapshots tab.

1. Select the snapshot mode you wish the application to execute. There are three choices:
    * __Default__ – Performs a load using the setup provided in the [Snapshot Options](#internal/get-to-know-spdockit/backstage-screen/options-wizard) and [Load Target](#internal/get-to-know-spdockit/backstage-screen/options-wizard). This includes farm/tenant settings, features and solutions, and permissions down to the subsite level on the whole tenant by default, and can be changed by the user at any time in the Options Wizard.
    * __Custom__ – Allows the user to specify exactly what information should be loaded. You can also choose which Web applications, site collections or even subsites data will be retrieved.
    It can be the fastest load option if the user wishes to have access only to specific data, and is aware what data he is interested in. This mode is recommended for more advanced users who are looking to generate specific reports.
    * __Full__ – Performs a load that collects all available information where possible. This is the recommended load mode if you don’t mind waiting and want to be sure you have all the data once the load finishes.

    There are some differences in what you can load compared to the classic load of a SharePoint farm. 
    These are the available options:  

   #### SharePoint section:

   *  The __Farm Settings__ check box will be selected by default. That means that SPDocKit will load farm/tenant settings by default and you cannot change this option. 
   *    Content Types - If you would like to see the content types used on your sites, you’ll need to crawl down to each list with the __Content Type__ checkbox selected, since that is where content types are defined.


   #### Security:     

   * __Permissions__ - If you want to know the permissions of each list item on the farm/tenant, you can get that information by selecting the __Permissions check box__ and setting the Load Depth to list item. You can also select the __Active Directory Group Members__ check box if you wish to load members of the AD groups. 

1. Select the snapshot target.  
    Again, this step will be skipped unless you chose the Custom snapshot mode. You can choose your target to be an entire farm/tenant, Web application, site collection or specific subsites. 

1. Click Next and the loading will start. Wait for the SPDocKit wizard to finish, then SharePoint [farm settings](#internal/get-to-know-spdockit/farm-explorer-screen/farm-explorer-reports) and [permission reports](#internal/get-to-know-spdockit/permissions-reports-screen) will be ready for use!  


## Automatic Snapshot
Available from SPDocKit version: 7.2  
The SPDocKit Service allows you to configure a schedule to create automatic SharePoint Online snapshots. Once configured, this service can save your tenant settings and send report subscriptions and alerts to selected users, document libraries, or network locations. Click [here](#internal/how-to/subscriptions-and-alerts/create-new-subscription) for more information on how to do this.  


1. Navigate to the __Backstage Configuration Screen__ and click __Configure__.

1. Skip to the Service Settings option.
   * Select the Enable Service checkbox and type in the service account details. Click Validate Account and then Next to continue.  
Make sure to __check the__ [permission requirements](#internal/requirements/sharepoint-online-user-permissions-requirements) for the service account.   
    * Alternatively, you can use a Local System Account.  
__But please note:__ The Local System account can be used to run the SPDocKit service (but not the SPDocKit Insights Service) if one of the following conditions are met:
      * You are using an embedded database.
      * You are using SQL Authentication to connect to your database.
      * You are using a local SQL Server.  

1. Once the Configuration wizard is finished, navigate to the __Backstage Configuration Screen > Options > Service Settings__. You can change the snapshots folder location or choose to save them to the database. [Define the period](#internal/get-to-know-spdockit/backstage-screen/options-wizard) for creating snapshots with the Data Collection Interval.

   With the __Database Index Reorganization__, you can enable automatic index reorganization. That means your database space usage and performance when reading data will improve. During index reorganization, SPDocKit might be unavailable.

1. Skip to the __Snapshot Options__ part of Options wizard and customize the snapshot options that are going to be used by the SPDocKit Service such as __Load Options__ and __Load Performance__.  With the __Load Depth__ option you can specify the depth to which you want to crawl your tenant. Also, choose what you would like to load each time that SPDocKit Service crawls your tenant.

    #### SharePoint section:

   *  The __Farm Settings__ check box will be selected by default. That means that SPDocKit will load tenant settings by default and you cannot change this option. 
   *    Content Types - If you would like to see the content types used on your sites, you’ll need to crawl down to each list with the __Content Type__ checkbox selected, since that is where content types are defined.
 
   #### Security:     

   * __Permissions__ - If you want to know the permissions of each list item on the tenant, you can get that information by selecting the __Permissions check box__ and setting the Load Depth to list item. You can also select the __Active Directory Group Members__ check box if you wish to load members of the __Security groups__. 


1. Go to __Load Target__ to select the scope on which SPDocKit Service will crawl for data – for example, the entire farm/tenant, Web application, site collection or specific subsites.

1. Click Save to apply changes and finish configuring the SPDocKit Service for creating an automatic snapshot of your tenant’s permissions state.



If you wish to receive an email notification after automatically-taken tenant snapshots, follow these instructions:

1. Navigate to the __Backstage Configure Screen > Options > Subscription Settings.__
1. Check in __Subscriptions Enabled__ box, and select the __Enable email sending__ checkbox to enable email to be sent. Fill out the necessary details, then click __Test email settings__ to make sure that the email alert is set up properly. [Here](#internal/get-to-know-spdockit/backstage-screen/options-wizard#subscription-settings) are more information on these settings.
3. Click __Save__ to close the Options wizard and apply the changes.
After that you need to create a new subscription. For detailed information on how to do that please go [here](#internal/how-to/subscriptions-and-alerts/create-new-subscription/).



 
Also, make sure to check our [permission management features](#internal/permission-management/manage-permissions-ribbon-actions) located in the __Permissions Explorer__ tab.  
__Please note__ that Permission management buttons are enabled only in __live mode__ of Permissions Explorer. A snapshot is not needed in that case.

