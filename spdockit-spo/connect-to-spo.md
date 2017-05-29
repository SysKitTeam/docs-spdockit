---
title: Connect to SharePoint Online 
description: This article describes how to connect to your Office 365 tenant or a specific Site Collection using SPDocKit.
author: Tomislav Sirovec
date: 25/5/2017
---
Please check the [feature availability by license type](https://www.spdockit.com/orders/features-by-licenses/).

In order for this feature to work, you will first have to configure SPDocKit database. You can use either [SQL Server database](#internal/configuration/configure-spdockit-database) or a [LocalDB instance](#internal/configuration/configure-localdb) that is shipped with SPDocKit.

Make sure that the user running the applicatio has been granted all [user permissions](#internal/requirements/sharepoint-online-user-permissions-requirements) required to run SPDocKit properly.

You can access the __Connect___ form from two places:
* Go to __Backstage -> Actions -> SharePoint Online__ button
* Go to the __Home ribbon__ on either __Farm, Site or Permission Explorer__ and click connect

Once the Connect form opens, SharePoint Online radio button will be preselected. Here is what you need to do:
1. enter the SharePoint Online Site url.
1. If this is your fist time making a connection you will need to specify __Username and Password__. If you have already done this step before, you can choose __Existing Credentials__ radio button and pick them from a dropdown or you can use integrated credentials.
1. If you wish to connect only to the specified site, click OK and finish.  
However, if you wish you can discover ALL of the Tennant sites and connect to all of them in one step. Click on __Discover Tenant Sites__ radio button and use a checkbox to select the sites you wish to connnect to.

You can now explore SharePoint Online sites you've chosen.
