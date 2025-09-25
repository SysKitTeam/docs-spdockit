---
description: This article explains how you can use the Compare Wizard to compare different servers, including IIS and SQL servers.
---

---
sidebar_position: 3
---

# Compare Servers

Navigate to the Backstage Actions Screen and click the **Compare Wizard** button.

1. Select Servers as the comparison type and then one of the three subtypes. Choose either **IIS Servers**, **SQL Servers** or just **Servers**. Click Next to continue. 
2. Under the **Farm Selection**, you can select different, previously taken snapshots and compare them. You can choose just one snapshot if you wish to compare two different servers but using the same snapshot reference.

   By default, from version 6.1 onwards, farm snapshots are stored in the SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms.  
   If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in Service Settings. The default Snapshots folder is **C:\ProgramData\SPDocKit\Snapshots**.

   The Farm selection step will list all available snapshots from the **SPDocKit database** or **Snapshots folder**. If the desired snapshot is not located in either of these locations, click **Import** to select a snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the Compare Wizard you will have to repeat the process. If you would like to [import these snapshots permanently](../create-sharepoint-farm-snapshots/snapshots-screen.md), click **Import** in the Snapshots tab.

3. Choose a certain server on both source and target sides. The Results window shows the detected differences marked using different colors. The upper part of the window shows all available farm reports in a hierarchical structure, while the bottom half displays the detected differences between currently selected objects.
   * For **IIS Servers** compare, available reports will be in **Servers in Farm** and **IIS** categories.  
   * For **SQL Servers** compare, available reports will be in **Servers in Farm** and **SQL** categories.  
   * For **Server** compare option, only **Servers in Farm** reports will be available. 

