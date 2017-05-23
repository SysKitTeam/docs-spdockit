---
title: Could not load Search Service Application, check your permissions or event log.
description: Article describes how to handle issue when Search Service Application load is not working properly.
author: Mia Tomaić
date: 18/5/2017
---
## Problem:
While trying to load a SharePoint farm I encountered the following error:
> *Could not load Search Service Application, check your permissions or event log.*

and the event log displays the following error message:

> *The following service applications cannot be loaded:*  
*Search Service Application – Cannot open database “Search_Service_Application_DB_dd13ba19a7bb4ffaafcc3e626e73c949” requested by the login. The login failed.  
Login failed for user ‘CONTOSO\bob’.*

## Solution:
The user running the application needs to have the proper privileges to access information about the Search Service Application. [See this article](#internal/requirements/sharepoint-on-premises-user-permissions-requirements) for more details on configuring privileges.