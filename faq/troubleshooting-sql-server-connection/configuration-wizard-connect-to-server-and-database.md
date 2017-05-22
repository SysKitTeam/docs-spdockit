---
title: Error: Configuration Wizard won’t connect to a provided server and database.
description: Connecting to Server and Database with SPDocKit
author: Mia Tomaić
date: 19/5/2017
---

# Error: Configuration Wizard won’t connect to a provided server and database.

## Problem:
The SQL Server Browser service is not running. When this service is not running you cannot connect to named instances.

## Solution:
The SQL Server Browser service needs to be up and running.

1. Open **SQL Server Configuration Manager** on your SQL server.
2. Click on SQL Server Services. Find the **SQL Server** Browser service, right-click on it and press **Start**.
3. Do not forget to [allow inbound traffic on TCP Port 1434](#internal/faq/troubleshooting-SQL-server-connection/inbound-traffic-on-tcp-port-1433).