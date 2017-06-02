---
title: Configure LocalDB
description: This article will explain how to use LocalDB with SPDocKit. 
author: Matija Hanzic
date: 2/6/2017
---

This article will explain how to use LocalDB with SPDocKit. LocalDB is included in the SPDocKit installation file and if prerequisites are met, you have the option to install it alongside SPDocKit. This might be easier to use with some features, like SharePoint Online, that require a database, if you do not have a SQL Server.

## Install LocalDB

LocalDB can be installed by running the [SPDocKit installation wizard](#internal/configure/installation-guide). You have two ways to install LocalDB:

* If you choose the __Default__ setup type, on the __Embedded Database__ wizard page check the __Install an Embedded Database__ option.
* If you choose the __Advanced__ setup type on the __Custom Setup__ wizard page include the __Embedded Database__ feature in your installation.

After you complete the installation process you can notice in your Control Panel > Programs that __Microsoft SQL Server 2012 Express LocalDB__ was installed.

__Please note!__ The LocalDB option is only available when running the installation wizard on a workstation. If SPDocKit installation detects a SharePoint farm locally or another version of LocalDB is already installed it will not be available.

## Configure LocalDB

Once LocalDB is installed you need to configure SPDocKit to start using it. This is accomplished by running the [Configuration wizard](#internal/configuration/configure-spdockit-database/). 

* Inside the __Configuration wizard__ on the __Database__ wizard page check the __Use a database__ option and select __Use embedded database__.

After you complete the Configuration wizard SPDocKit will restart and you are ready to use SPDocKit with LocalDB.

## LocalDB options

When SPDocKit is using LocalDB, you can explore by clicking __File__ > __Configuration__. Under the __Embedded DB Options__ section you will find the following options:

* __Export Database__ allows you to backup your LocalDB database to a file.
* __Import Database__ allows you to restore your LocalDB database from a previous backup.
* __Reset Database__ allows you to reset all data inside your LocalDB database.
