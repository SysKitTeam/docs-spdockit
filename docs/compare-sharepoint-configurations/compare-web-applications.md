---
description: This article describes how to use SPDocKit to compare SharePoint farm web application configurations.
---

---
sidebar_position: 4
---

# Compare Web Applications

You can use this wizard to:

* Examine the web application’s configuration in relation to another SharePoint web application.
* Compare SharePoint Web Application configurations for the entire history by selecting the same SharePoint web application in a different time period.

Here is how to do it:

1. Navigate to the **Backstage Actions Screen** and click **Compare Wizard** button.
2. Select **Web Applications** for the comparison type. Click **Next** to continue.
3. If you would like to compare two different web application settings for a specific date, selecting just one snapshot is sufficient.

   If you would like to compare the same web application but at different points in time, select two snapshots that correspond to the time period you would like to track changes to.

   From version 6.1 onwards, farm snapshots are, by default, stored in the SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms. If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in [Service Settings](../configure-and-extend-spdockit/options-wizard.md#service-settings). The default Snapshots folder is C:\ProgramData\SPDocKit\Snapshots.

   The Farm selection step will list all available snapshots from the Saved Farms folder, SPDocKit database or Snapshots folder. If the desired snapshot is not located in either of these locations, click **Import** to select the snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the compare wizard you will have to repeat the process. If you would like to [import these snapshots permanently](../create-sharepoint-farm-snapshots/snapshots-screen.md), click **Import** from the Snapshots tab.

4. In the Compare results dialog box, you can see the web applications overview. To compare, specify your web application **Source** on the left-hand side, and the **Target** on the right-hand side.

