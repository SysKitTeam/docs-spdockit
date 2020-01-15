---
title: Configure the SQL server to listen on a specific port?
description: >-
  This article explains how to configure SQL server to listen on a non-standard
  port number.
author: Mia Tomaić
date: 19/5/2017
---

# Configure SQL server to listen on a specific port

## Problem

How to configure the SQL server to listen on a specific port?

## Solution

Owing to security issues it is often not recommended to use the default port number 1433 for communicating with the SQL server. This article helps set up the SQL server to use a non-standard port number.

1. Run the **SQL Server Configuration Manager**.  
2. Select the **SQL Server Network Configuration**.  
3. Select from the list the instance you want to configure to listen to on a specific port.  
4. To change the port assignment right-click on the **TCP/IP** protocol and select **Properties**.  
5. Click on the IP Addresses tab.

{% hint style="info" %}
**Note**: Both IP5 and IP6 are disabled and the TCP Dynamic Ports setting is set to “0”, which means that the database engine is listening on dynamic ports.
{% endhint %}

1. Specify the port number you want to use instead of 1433 by entering the preferred port number. Also,                     turn off the dynamical port number setting by removing the “0” mark in the TCP Dynamic Ports field.  
2. In order to finish the adjustment, select **SQL Server Services**, click on SQL Server and restart it.

