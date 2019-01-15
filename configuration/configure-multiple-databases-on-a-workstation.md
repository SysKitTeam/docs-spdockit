---
title: Configure Multiple Databases on Workstation
description: >-
  This article will explain how to use our new Connection String Chooser. A
  feature used to quickly change between databases on a workstation.
author: Tomislav Kunaj
date: 25/5/2017
---

# configure-multiple-databases-on-a-workstation

This article will explain how to use our new Connection String Chooser. A feature used to quickly change between databases on a workstation.

You can notice the Database Connection Chooser in the **top right corner** of the application.

When you install SPDocKit for the first time, the installation will ask you to use our [Configuration Wizard](configure-multiple-databases-on-a-workstation.md#internal/configuration/configure-spdockit-database/). The database you set up there will be the Default one. After that, you can use the Database Connection Chooser to quickly setup other connections.

This is how you do it:

## New database connection

1. Click on the Database Connections dropdown button, which can be found above the ribbon and on the right, and choose **Edit**.

   Alternatively, in the Backstage \(File – &gt; Configuration\), under Configuration settings click Database Connections.

2. After that, click the **Add** button. The **New Database Connection** dialog will open.

   Here you can input your Connection Name, the SQL Server you wish to use, and of course the database you want to connect to. To access the database, you can use either Windows or SQL authentication. Press OK and a Progress dialog will appear. This dialog will output any errors, if they have occurred. If no errors have occurred, you can **Close** the window and continue on to the next steps.

3. You will be returned to the Database Connection window. Select the connection you just made and click **Set as Active**. In a few moments, the database connection will change - and that is it!

To change the database, you can use the **Database Connection** dialog to list all created connections and the **Set as Active** button to connect to a database. A much simpler solution is to use the dropdown. Click on the connection you want and the database will be switched immediately.

## Edit a connection

On the main **Database Connection** dialog, select the connection you want and click the **Edit** button. You can edit a connection's name, but you can also completely change the SQL Server or the database you are using. When done click OK.

## Delete a connection

To delete a connection, select it and click the **Delete** button.

