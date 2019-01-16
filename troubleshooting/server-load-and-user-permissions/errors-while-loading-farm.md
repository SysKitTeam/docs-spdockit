---
title: Errors while trying to load the SharePoint farm
description: >-
  Article describes known issues that might occurre while loading SharePoint
  farm.
author: Mia Tomaić
date: 18/5/2017
---

# Errors while trying to load the SharePoint farm

## Problem:

While trying to load the SharePoint farm I received the following errors:

> _Error occurred while loading Web Applications._  
> _Error occurred while loading Problems and Solutions._  
> _Error occurred while loading Rule Definitions._  
> _Could not load FASTContent, check your permissions or event log._  
> _Could not load FASTQuery, check your permissions or event log._  
> _Could not load Search Service Application, check your permissions or event log._  
> _Could not load User Profile Service Application, check your permissions or event log._

There are also errors in the event log such as this one:

> _System.Data.SqlClient.SqlException: Cannot open database ”WSS\_Content\_Intranet” requested by the login. The login failed._  
> _Login failed for user ‘DOMAIN\user’._

## Solution:

The user running the SPDocKit needs to have the proper privileges to retrieve information from the SharePoint farm.

Follow [these instructions](https://github.com/SysKitTeam/docs-spdockit/tree/8189b9511feae817c534664a254f80f907d19119/troubleshooting/requirements/user-permissions-requirements.md) to configure your SharePoint farm.

