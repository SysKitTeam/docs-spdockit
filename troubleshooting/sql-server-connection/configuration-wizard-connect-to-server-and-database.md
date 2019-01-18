---
title: Configuration Wizard won’t connect to a provided server and database.
description: >-
  This article explains how to handle issue when Configuration Wizard is not
  able to connect to a provided server and database.
author: Mia Tomaić
date: 19/5/2017
---

# SPDocKit won’t connect to a provided server and database

## Problem:

The SQL Server Browser service is not running. When this service is not running you cannot connect to named instances.

## Solution:

The SQL Server Browser service needs to be up and running.

1. Open **SQL Server Configuration Manager** on your SQL server.
2. Click on SQL Server Services. Find the **SQL Server** Browser service, right-click on it and press **Start**.
3. Do not forget to [allow inbound traffic on TCP Port 1434](../../../troubleshooting/sql-server-connection/inbound-traffic.md).

