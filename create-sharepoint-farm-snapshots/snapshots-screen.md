---
title: Snapshots Screen
description: >-
  This article states how to use Snapshots Screen an track changes made to your
  SharePoint farm during its lifetime.
author: Iva Novoselic
date: 23/5/2017
---

# Snapshots Screen

The **Snapshots Screen** allows SharePoint administrators to track changes made to the SharePoint Farm during its lifetime. SPDocKit can generate snapshots periodically, or administrators can take a configuration snapshot manually right before making complicated changes. The snapshots contain information about all the [settings SPDocKit can retrieve](../../../configure-and-extend-spdockit/options-wizard.md#snapshot-options).

This screen will display snapshots found in SPDocKit database and snapshots folder on a disk and group them by the farm they were created on:

* **Blue icon** indicates that the snapshot is stored in a SPDocKit database. 
* **Green icon** means that the snapshot is saved in the snapshot folder \(on the disk\).
* **Bolded** snapshot name means that the snapshot is currently selected/opened. 

The following commands are available:

* **Take Snapshot** – take a manual snapshot of your farm, or create a snapshot in the background using SPDocKit Service. Available on a SharePoint server only.
* **Open** – open currently selected snapshot.
* **Delete**– this button will delete the currently selected snapshot from previously defined snapshot locations. Snapshots saved to a disk location will be deleted only if they are from the local farm. Snapshots saved in the SPDocKit database will be deleted regardless of the farm they are created on.
* **Import** – use this button to add a snapshot to this list from any other location. Once that the snapshot is imported, it remains here until the user removes it.
* **Export**– use this button to create farm snapshot file which can be transferred to any other location. This comes in handy if your snapshots are stored in SPDocKit database but you need to move them from one server to another.
* **Show Changes** – shows differences between the currently selected snapshot and an older snapshot \(if one exists\).
* **Compare Wizard**– starts Compare Wizard for more complex comparisons.
* **Compare to Local** – compares a snapshot with the currently loaded local farm.
* **Compare Selected**  – if two snapshots are selected, this button compares SharePoint settings stored in these two.
* **Mark Configuration as Good** – use this button to mark which SPDocKit snapshot captured your SharePoint farm with all the settings configured in a best possible way. Also, this will exclude that snapshot from data retention policy. Meaning, it will not be deleted.
* **Rename Farm** - if you store snapshots from more than one farm, this option allows you to change a default farm name for easier distinction. This option will work only if snapshots are stored in SPDocKit database.
* **Manage Servers** - use this button to add third party servers to SPDocKit farm documentation. You can add servers that are not part of your SharePoint farm but affect it in any way. You can also exclude certain farm servers which means that SPDocKit will not load any data related to these servers.
* **File Name** – to activate this column go to the **View** tab and use the **Choose Columns** button. For more information on how to change the default file name [see here](../../../configure-and-extend-spdockit/options-wizard.md#snapshot-options) and observe the snapshots name template section.
* **Load Duration** - this column displays how long it took to take a snapshot of your environment.

