---  
title: Configure Two Different Farms in a same SPDocKit Database
author: Matija Hanzic  
date: 23/5/2017  
description: This article will explain how you can configure two different Farms in the same SPDocKit database.
--- 
This article will explain how you can configure two different Farms in the same SPDocKit database.
For general information on how to configure SPDocKit database go [here](#internal/configuration/configure-spdockit-database/).

1. If you are currently not using the same database, you need to change one to match with the other. On the __Main Menu__, go to __Configuration__ tab and __Configure__. Under the Database section, you can change the desired Database.

2. After that, you need to make sure of just one more thing. Go to __Options__, then __Service Settings__ and check __SPDocKit Database__ field under __Snapshot Location__. To save your snapshots on both disk and to a database, you need to check it (reading from a database will work fine without it).

Some of the pros and cons of using this kind of setup are:

* You have one centralized place to track all the things that interest you.
* It’s easier to compare changes between farms.
* On the other hand, if you have multiple SharePoint farms, generating reports might be a little slower (due to the sheer amount of data).