---
title: Configure LocalDB
description: This article will explain how to use LocalDB with SPDocKit.
author: Matija Hanzic
date: 2/6/2017
---

# Configure SPDocKit LocalDB

This article will explain how to use LocalDB with SPDocKit. LocalDB is included in the SPDocKit installation file and if prerequisites are met, you have the option to install it alongside SPDocKit. This might be easier to use with some features, like SharePoint Online, that require a database, if you do not have a SQL Server.

## Install LocalDB

LocalDB can be installed by running the [SPDocKit installation wizard](../installation/installation-guide.md). You have two ways to install LocalDB:

* If you choose the **Default** setup type, on the **Embedded Database** wizard page check the **Install an Embedded Database** option.
* If you choose the **Advanced** setup type on the **Custom Setup** wizard page include the **Embedded Database** feature in your installation.

After you complete the installation process you can notice in your Control Panel &gt; Programs that **Microsoft SQL Server 2012 Express LocalDB** was installed.

**Please note!** The LocalDB option is only available when running the installation wizard on a workstation. If SPDocKit installation detects a SharePoint farm locally or another version of LocalDB is already installed it will not be available.

## Configure LocalDB

Once LocalDB is installed you need to configure SPDocKit to start using it. This is accomplished by running the [Configuration wizard](configure-spdockit-database.md).

* Inside the **Configuration wizard** on the **Database** wizard page check the **Use a database** option and select **Use embedded database**.

After you complete the Configuration wizard SPDocKit will restart and you are ready to use SPDocKit with LocalDB.

## LocalDB options

When SPDocKit is using LocalDB, you can explore by clicking **File** &gt; **Configuration**. Under the **Embedded DB Options** section you will find the following options:

* **Export Database** allows you to backup your LocalDB database to a file.
* **Import Database** allows you to restore your LocalDB database from a previous backup.
* **Reset Database** allows you to reset all the data inside your LocalDB database.

Please note that this feature is not designed in a way that can be shared with more users using the same machine. Meaning - the user which ran the Configuration Wizard and set up the LocalDB is the only one who can use it.

