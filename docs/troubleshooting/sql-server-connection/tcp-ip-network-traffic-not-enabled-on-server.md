---
description: This article explains how to enable TCP/IP network traffic on SQL server.
---

# TCP/IP network traffic not enabled on the SQL Server

## Problem

TCP/IP is not enabled on the SQL server.

## Solution

TCP/IP network traffic needs to be enabled on the SQL Server, so that remote connections will be allowed on the SQL server.

1. Run the **SQL Server Configuration Manager**. 
2. Click on **the SQL Server Network Configuration**. 
3. Select **Protocols for SQLEXPRESS** and check if the **TCP/IP Protocol** is enabled. 
4. If the TCP/IP is disabled, double-click on it and change the Enabled row status to **Yes**. 
5. In order to finish the adjustment, select **SQL Server Services**, click on SQL Server and restart it. 
6. SQL connection should now be available.

