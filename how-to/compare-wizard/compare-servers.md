---
title: Compare Servers
description: This section explains how you can use the Compare Wizard to compare different servers. Including IIS and SQL servers
author: Tomislav Sirovec
date: 31/5/2017
---

This section explains how you can use the Compare Wizard to compare different servers. Including IIS and SQL servers.  
Navigate to the Backstage Actions Screen and click the __Compare Wizard__ button.

1. Select Servers as the comparison type and then one of the three subtypes. Choose either __IIS Servers__, __SQL Servers__ or just __Servers__. Click Next to continue. 
1. Under the __Farm Selection__, you can select different, previously taken snapshots and compare them. You can choose just one snapshot if you wish to compare two different servers but using the same snapshot reference.

    By default, from version 6.1 onwards, farm snapshots are stored in the SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms.   
    If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in Service Settings. The default Snapshots folder is __C:\ProgramData\SPDocKit\Snapshots__.

   The Farm selection step will list all available snapshots from the __SPDocKit database__ or __Snapshots folder__. If the desired snapshot is not located in either of these locations, click __Import__ to select a snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the Compare Wizard you will have to repeat the process. If you would like to [import these snapshots permanently](#intrenal/get-to-know-spdockit/snapshots-screen), click __Import__ in the Snapshots tab.
1. Choose a certain server on both source and target sides.
    The Results window shows the detected differences marked using different colors. The upper part of the window shows all available farm reports in a hierarchical structure, while the bottom half displays the detected differences between currently selected objects.

   * For __IIS Servers__ compare, available reports will be in __Servers in Farm__ and __IIS__ categories.  
   * For __SQL Servers__ compare, available reports will be in __Servers in Farm__ and __SQL__ categories.  
   * For __Server__ compare option, only __Servers in Farm__ reports will be available. 
