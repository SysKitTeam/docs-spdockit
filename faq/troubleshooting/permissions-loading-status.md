---
title: Why is my permissions loading status being reported as ”Failed”?
description: >-
  This article describes the issue of SPDocKit not being able to load SharePoint
  farm permissions.
author: Mia Tomaić
date: 18/5/2017
---

# Permissions-loading-status

## Problem:

When I am trying to load my SharePoint farm permissions, loading wizard informs me that loading status is Failed for some of the objects.

## Solution

Make sure that the user account running SPDocKit has the proper [permission privileges](../requirements/sharepoint-on-premises-user-permissions-requirements.md) for the SharePoint farm for which you are trying to load the permissions.

Check the event log for the SPDocKit related entries and [contact us](https://www.spdockit.com/support/contact-us/).

