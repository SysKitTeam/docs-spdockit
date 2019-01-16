---
title: Compare Site Collections
description: >-
  This sections describes how to use SPDocKit to compare SharePoint farm site
  collection configurations.
author: Martin Pisacic
date: 18/5/2017
---

# Compare Site Collections

This sections describes how to use SPDocKit to compare SharePoint farm **site collection** configurations.

You can use this wizard to:

* Examine the site collection’s configuration in a relation to another SharePoint site collection.
* Compare SharePoint site collection configuration for the entire history by selecting the same SharePoint site collection in a different time period.

Here is how to do it:

1. Navigate to the **Backstage Actions Screen** and click the **Compare Wizard** button.
2. Select Site Collections for the comparison type. Click **Next** to continue.
3. If you would like to compare two different site collection settings for a specific date, selecting just one snapshot is sufficient.

   If you would like to compare the same site collection settings but at different points in time, select two snapshots that correspond to the time period you would like to track changes to.

   From version 6.1 onwards, farm snapshots are, by default, stored in SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms. If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in [Service Settings](compare-site-collections.md#internal/configure-and-extend-spdockit/options-wizard#service-settings). The default Snapshots folder is C:\ProgramData\SPDocKit\Snapshots.

   The Farm selection step will list all available snapshots from the Saved Farms folder, SPDocKit database or Snapshots folder. If the desired snapshot is not located in either of these locations, click Import to select the snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the compare wizard you will have to repeat the process. If you would like to [import these snapshots permanently](compare-site-collections.md#internal/create-sharepoint-farm-snapshots/snapshots-screen), click **Import** from the Snapshots tab.

4. The **Compare Results** dialog box shows the differences between two site collections. The change in each object is indicated by a different color. To compare, specify the **Source** site collection on the left-hand side, as well as the **Target** on the right-hand side.

