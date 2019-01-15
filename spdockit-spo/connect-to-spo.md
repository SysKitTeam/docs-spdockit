---
title: Connect to SharePoint Online
description: >-
  This article describes how to connect to your Office 365 tenant or a specific
  Site Collection using SPDocKit.
author: Tomislav Sirovec
date: 25/5/2017
---

# connect-to-spo

_**As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is**_ [_**SysKit Security Manager**_](https://www.syskit.com/products/security-manager/)_**.**_&lt;/br&gt; _**For instructions on the upgrade path or any other questions contact us at**_ [_**support@syskit.com**_](mailto:support@syskit.com)_**.**_

Please check the [feature availability by license type](https://www.spdockit.com/orders/#online).

In order for this feature to work, you will first have to configure SPDocKit database. You can use either [SQL Server database](connect-to-spo.md#internal/configuration/configure-spdockit-database) or a [LocalDB instance](connect-to-spo.md#internal/configuration/configure-localdb) that is shipped with SPDocKit.

Make sure that the user running the application has been granted all [user permissions](connect-to-spo.md#internal/requirements/sharepoint-online-user-permissions-requirements) required to run SPDocKit properly.

## Connect:

You can access the **Connect** form from two places:

* Go to **Backstage &gt; Actions &gt; SharePoint Online** button
* Go to the **Home ribbon** on either **Farm, Site or Permission Explorer** and click connect

Once the Connect form opens, SharePoint Online radio button will be preselected. Here is what you need to do: 1. Enter the SharePoint Online Site url. 1. If this is your fist time making a connection you will need to specify **Username and Password**. If you have already done this step before, you can choose **Existing Credentials** radio button and pick them from a dropdown or you can use integrated credentials. 1. If you wish to connect only to the specified site, click OK and finish.  
However, if you wish you can discover ALL of the Tenant sites and connect to all of them in one step. Click on **Discover Tenant Sites** radio button and use a check box to select the sites you wish to connect to.

You can now explore SharePoint Online sites you've chosen.

## Edit:

To edit the existing tenant connection, select the tenant on either the **Permission Explorer screen** or the **Site Explorer screen** and click the **Edit button** located on the **Home tab**. By ticking or unticking the checkboxes you can choose which site collections you wish to manage. Also, you can change the credentials you use for connecting to each site collection. Alternatively, you can select one specific site collection. On Permissions Explorer screen -&gt; SharePoint sites node -&gt; choose a site collection and click **Edit** to manage its credentials.

## Remove:

To remove a connected site collection select it, and click **Remove** on the **Manage tab**.  
If you wish to remove the entire tenant at once -&gt; select the tenant and again, click the **Remove** button.

