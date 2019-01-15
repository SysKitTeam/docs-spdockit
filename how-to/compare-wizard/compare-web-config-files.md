---
title: Compare Web.Config Files
description: >-
  This section describes how to use SPDocKit to compare web.config files across
  different servers, web applications and web application zones.
author: Martin Pisacic
date: 18/5/2017
---

# compare-web-config-files

This section describes how to use SPDocKit to compare web.config files across different servers, Web applications and Web application zones.

1. Navigate to the **Backstage Actions Screen** and click the **Compare Wizard** button.
2. Select **Web.config Files** for the comparison type and click **Next** to continue.
3. If you would like to compare web.config files from two different servers or zones for a specific date, selecting just one snapshot is sufficient.

   If you would like to compare the same web.config file but at different points in time, select two snapshots that correspond to the time period you would like to track changes to.

   From version 6.1 onwards, farm snapshots are, by default, stored in SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms. If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in [Service Settings](compare-web-config-files.md#internal/get-to-know-spdockit/backstage-screen/options-wizard#service-settings). The default Snapshots folder is C:\ProgramData\SPDocKit\Snapshots.

   The Farm selection step will list all available snapshots from the Saved Farms folder, SPDocKit database or Snapshots folder. If the desired snapshot is not located in either of these locations, click **Import** to select the snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the compare wizard you will have to repeat the process. If you would like to [import these snapshots permanently](compare-web-config-files.md#internal/get-to-know-spdockit/snapshots-screen), click **Import** from the Snapshots tab.

4. In the **Compare Results** dialog box, you can adjust the filters such as the **Source** and the **Target** to compare and see the differences \(if there are any\) between two different web.config files associated with selected Web applications. The differences are highlighted. You can use the buttons to navigate between the files while looking for differences.

SharePoint Web applications can be hosted on multiple servers and can extend into multiple zones. Every server has to have separate web.config files for each zone of every Web application. All web.config files on different servers and the same Web application zone must be equal. Because of these SharePoint requirements, you will also find the filters section in the Comparison Result window.

**Please Note!** Farm files created in older versions of SPDocKit \(version 4.0 and lower\) will not contain information about web.config files. To use this feature, SPDocKit needs to have a farm file created in SPDocKit \(version 5.0 and above\).

