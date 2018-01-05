---
title: Connect to a SharePoint On-Premise site
description: This article describes how to connect to your SharePoint On-Premise site and explore its permissions.  
author: Tomislav Sirovec
date: 31/5/2017
---

Please check the [feature availability by license type](https://www.spdockit.com/orders).

In order for this feature to work, you will first have to configure SPDocKit database. You can use either [SQL Server database](#internal/configuration/configure-spdockit-database) or a [LocalDB instance](#internal/configuration/configure-localdb) that is shipped with SPDocKit.

Make sure that the user running the application has been granted all [user permissions](#internal/requirements/sharepoint-on-premises-user-permissions-requirements) required to run SPDocKit properly.

Here is what you need to do:
* Go to the __Home ribbon__ on either __Farm, Site or Permission Explorer__ and click __Connect__

Once the Connect form opens, make sure that SharePoint On-Premises radio button is selected. Here is what you need to do next:
1. enter the SharePoint On-Premise Site url.
1. If the user adding the connection has the privileges on a site you are trying to add, you can use Integrated credentials. Otherwise you will need to specify different credentials. 
1. If this is your first time connecting to a site, we will automatically create a new Farm and a corresponding Web Application using a default naming scheme. You can change those names before completing the wizard but __please note__ - this is mearly a container for the sites you are adding and a representation of a real farm. 


You can now explore SharePoint On-Premise site you've chosen.

 Make sure to check our [permission management features](#internal/permission-management/manage-permissions-ribbon-actions) located in __Permissions Explorer__ tab, as well as [Site Explorer reports](#internal/get-to-know-spdockit/site-explorer-screen)
