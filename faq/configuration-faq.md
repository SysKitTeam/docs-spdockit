---
title: Configuration FAQ
description: >-
  This article gives answers to frequently asked questions about SPDocKit
  configuration.
author: Iva Novoselic
date: 22/5/2017
---

# Configuration

## What is the SPDocKit Service?

The SPDocKit Service is a Windows Service created by SPDocKit used to execute automatic jobs on a schedule. The automatic jobs the service executes are creating snapshots, sending of subscription and alerts, index reorganization, data retention and executing and sending of queries and rules.

## Can these tasks still be executed without the SPDocKit Service?

If the service is not configured, you can still execute these actions manually, except for the index reorganization job.

## Can I change the account used to run the SPDocKit Service?

Yes, you can do that via the SPDocKit Configuration wizard by navigating to: **File &gt; Configuration &gt; Configure**. The account used should be an Active Directory account with the [necessary privileges granted.](../requirements/user-permissions-requirements.md)

## During the initial install of SPDocKit, should I choose New database or Use existing database?

Do not use your SharePoint databases as the database for SPDocKit. When configuring SPDocKit, you should always create a new database that is dedicated for SPDocKit.

Note: If there is an existing SPDocKit database you can connect to it.

## Can I run the SPDocKit Service as local system instead of an AD user?

Unfortunately, you can't use local system account as the SPDocKit Service account. The service account needs to have specific rights which can't be given to a local system account. See the [user permission requirements.](../requirements/user-permissions-requirements.md)

## Can I run the SPDocKit Service on a workstation?

Unfortunately, the SPDocKit Service can be used on a SharePoint server only.

