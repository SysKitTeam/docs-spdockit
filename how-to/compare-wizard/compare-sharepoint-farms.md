---
title: Compare SharePoint Farms
description: This section explains how you can use the Compare Wizard to compare different farms or snapshots of an existing farm.
author: Iva Novoselic
date: 17/5/2017
---
This section explains how you can use the Compare Wizard to compare different farms or snapshots of an existing farm.

Navigate to the Backstage Actions Screen and click the __Compare Wizard__ button.

### Compare Farm with a Previous Snapshot

1. Select Farms for the comparison type and then the __Compare farm with a previous farm snapshot__ subtype. Click Next to continue. 

1. Under the __Farm Selection__, you can select different, previously taken, snapshots and compare them. From version 6.1 onwards, farm snapshots are, by default, stored in the SPDocKit database. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms. 

    If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in Service Settings. The default Snapshots folder is __C:\ProgramData\SPDocKit\Snapshots__.

   The Farm selection step will list all available snapshots from the __Saved Farms__ folder, __SPDocKit database__ or __Snapshots folder__. If the desired snapshot is not located in either of these locations, click __Import__ to select a snapshot file from another location. Importing snapshots is a one-time action, so the next time you run the Compare Wizard you will have to repeat the process. If you would like to [import these snapshots permanently](#intrenal/get-to-know-spdockit/snapshots-screen.md), click __Import__ in the Snapshots tab.

1. Click Next to see the farm compare results.

    The Results dialog box shows the differences detected on a farm since the last snapshot.
    The change in each object is indicated by a different color. The upper part of the dialog box shows all farm settings in a hierarchical structure, while the bottom half displays the differences between currently selected objects in the upper half.

    Farm compare uses the [Compare template](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md/#compare) to track the changes between these snapshots. This template is also used for the __Differences report__ that is sent automatically as part of the [SPDocKit documentation alerts](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md#email-alerts). If you would like to change what will be compared, or exclude certain reports, use the little wheel button on the left-hand side. Reports you have deselected will not be used in the next comparison –both manual and automatic – performed by the SPDocKit Service.


### Compare Two Different SharePoint Farms
1. Select Farms for the comparison type and then the __Compare two different farms__ subtype. Click Next to continue.

1. Under __Farm Selection__, select the snapshots you wish to compare and click Next.

   From version 6.1 onwards, farm snapshots are, by default, stored in the __SPDocKit database__. If you have more than one farm connected to the same SPDocKit database, you will see snapshots from all these farms.

   If you are not using the SPDocKit database, snapshots will be stored in the Snapshots folder defined in [Service Settings](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md#service-settings) . The default Snapshots folder is __C:\ProgramData\SPDocKit\Snapshots__.

   The Farm selection step will list all available snapshots from the Saved Farms folder, SPDocKit database or Snapshots folder. If the desired snapshot is not located in either of these locations, click __Import__ to select a snapshot file from another location. 

    This is helpful in situations when you wish to compare snapshots of two farms and the snapshots are not stored in the same SPDocKit database but on a disk location on SharePoint servers. Copy the farm snapshots from the non-local farm to any disk location on a local SharePoint server and click Import to use them for farm comparison.

    Importing snapshots is a one-time action, so the next time you run the Compare Wizard you will have to repeat the process. If you would like to [import these snapshots permanently](#intrenal/get-to-know-spdockit/snapshots-screen.md), click __Import__ in the Snapshots tab.

1. The next couple of steps allow you to map farm properties and perform detailed comparisons. The wizard will guide you through the following mappings:

    * URLs, Host Headers, Addresses
    * Database Names
    * Business Data Connectivity Namespace
    * Farm Servers
    * SQL Servers
    * Accounts (service accounts, managed accounts, user policy accounts, search accounts, application pool accounts, object cache accounts, farm administrators, service application administrator accounts)
    * Service Applications
    * Service Applications Proxies
    * Host Names

    On the left-hand side is a list of available properties for the source farm, and on the right-hand side is a list of properties from the target farm. Use the drop down menu to define which farm properties should be paired. Once you have paired them, SPDocKit will remember the mappings and use them for each subsequent comparison process if you select these same two farms.

    As a new feauture we enabled __1:N mappings__. This can be very useful when comparing test with production environment. For example: On a Source farm, you can map 1 or 2 WFE servers with 4 or even more WFE servers from a Target farm.

1. Click Next to see the compare results.

    The Results dialog box shows the differences between two different farms. The change in each object is indicated by a different color. The upper part of the dialog box shows all farm settings in a hierarchical structure while the bottom half displays differences between currently selected object in the upper half.

    Farm compare uses the [Compare template](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md/#compare) to track changes between these snapshots. If you would like to change what will be compared, or exclude certain reports, use the little wheel button on the left-hand side. Reports you have deselected will not be used in the next comparison process.

### Compare with Out of the Box Farm
1. Select Farms for the comparison type and then the __Compare with out of the box farm__ subtype to continue the process.
1. Under __Farm Selection__, select the snapshot you wish to compare with default farm settings and click Next.
1. Click Next to see the compare results.
 
   Farm compare uses the [Compare template](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md/#compare) to track the changes between these snapshots. If you would like to change what will be compared, or exclude certain reports, use the little wheel button on the left-hand side. 
   
   Reports you deselect will not be used for the next comparison.