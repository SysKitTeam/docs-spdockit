---
title: Errors while trying to load the SharePoint farm
description: >-
  Article describes known issues that might occurre while loading SharePoint
  farm.
author: Mia Tomaić
date: 18/5/2017
---

# Errors while trying to load the SharePoint farm

## Problem

While trying to load the SharePoint farm I received the following errors:

> Error occurred while loading Web Applications.  
> Error occurred while loading Problems and Solutions.  
> Error occurred while loading Rule Definitions.  
> Could not load FASTContent, check your permissions or event log.  
> Could not load FASTQuery, check your permissions or event log.  
> Could not load Search Service Application, check your permissions or event log.  
> Could not load User Profile Service Application, check your permissions or event log.

There are also errors in the event log such as this one:

> System.Data.SqlClient.SqlException: Cannot open database ”WSS\_Content\_Intranet” requested by the login. The login failed.  
> Login failed for user ‘DOMAIN\user’.

## Solution

The user running the SPDocKit needs to have the proper privileges to retrieve information from the SharePoint farm.

Follow [these instructions](../../requirements/user-permissions-requirements.md) to configure your SharePoint farm.

