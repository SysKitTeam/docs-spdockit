---
title: Connect to SharePoint Online 
description: This article describes how to connect to your Office 365 tenant or a specific Site Collection using SPDocKit.
author: Tomislav Sirovec
date: 25/5/2017
---

**_<span style="color:red">As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is [SysKit Security Manager](https://www.syskit.com/products/security-manager/).</span>_**</br>
**_<span style="color:red">For instructions on the upgrade path or any other questions contact us at [support@syskit.com](mailto:support@syskit.com).</span>_**

Please check the [feature availability by license type](https://www.spdockit.com/orders/#online).

In order for this feature to work, you will first have to configure SPDocKit database. You can use either [SQL Server database](#internal/configuration/configure-spdockit-database) or a [LocalDB instance](#internal/configuration/configure-localdb) that is shipped with SPDocKit.

Make sure that the user running the application has been granted all [user permissions](#internal/requirements/sharepoint-online-user-permissions-requirements) required to run SPDocKit properly.

## Connect:

You can access the __Connect__ form from two places:
* Go to __Backstage > Actions > SharePoint Online__ button
* Go to the __Home ribbon__ on either __Farm, Site or Permission Explorer__ and click connect

Once the Connect form opens, SharePoint Online radio button will be preselected. Here is what you need to do:
1. Enter the SharePoint Online Site url.
1. If this is your fist time making a connection you will need to specify __Username and Password__. If you have already done this step before, you can choose __Existing Credentials__ radio button and pick them from a dropdown or you can use integrated credentials.
1. If you wish to connect only to the specified site, click OK and finish.  
However, if you wish you can discover ALL of the Tenant sites and connect to all of them in one step. Click on __Discover Tenant Sites__ radio button and use a check box to select the sites you wish to connect to.

You can now explore SharePoint Online sites you've chosen.

## Edit: 
To edit the existing tenant connection, select the tenant on either the __Permission Explorer screen__ or the __Site Explorer screen__ and click the __Edit button__ located on the __Home tab__. By ticking or unticking the checkboxes you can choose which site collections you wish to manage. Also, you can change the credentials you use for connecting to each site collection. 
Alternatively, you can select one specific site collection. On Permissions Explorer screen -> SharePoint sites node -> choose a site collection and click __Edit__ to manage its credentials. 

## Remove:
To remove a connected site collection select it, and click __Remove__ on the __Manage tab__.  
If you wish to remove the entire tenant at once -> select the tenant and again, click the __Remove__ button.
