---
description: This article describes how to use the Audit Settings report.
---

# Audit Settings

The report shows the state of specific audit settings on the selected site collections.

To view this report, go to **Audit Reports &gt; Audit Settings**.

Once you [take a snapshot](../../create-sharepoint-farm-snapshots/manual-snapshots.md) of your farm, the report will list all site collections and their respective audit settings.

If you want SharePoint \(and then SPDocKit\) to gather your audit logs, you need to enable them \(to do this, go to Site Settings &gt; Site collection audit settings\). This report will give you an overview of your audit settings state for each site collection.

The Audit Settings report contains the following columns:

* **Site Collection**
* **Url**
* **Trim Audit Log**
* **Days of Audit Log Data to Retain**
* **Audit Report Storage Location**

Once you click on a certain row, the Audit Settings details will load at the bottom, and show you the rest of the Audit Settings. They are:

* **Editing Users and Permissions**
* **Searching Site Content**
* **Editing Content Types and Columns**
* **Deleting or Restoring Items**
* **Moving or Copying Items**
* **Checking Out or Checking In Items**
* **Editing Items**
* **Opening, Downloading, Viewing Items, or Viewing Item Properties**

You can use the filters on the right-hand side to customize the report.

* The **Farm filter** is visible in case a database connected to multiple farms is being used by SPDocKit.
* The **SharePoint Objects filter** enables you to select web applications and site collections. You can view the settings of **all the site collections in a SharePoint farm** by selecting all web applications. 
* The **Audit Settings filter** makes it possible to filter the report by the status of specific audit settings \(On or Off\). By default, all audit settings are selected. 

{% hint style="warning" %}
**Please note!**  
**When selecting two or more audit settings in the** Audit Settings **filter, the** AND operator is used **between them, as demonstrated in the following example**:

Editing Users and Permissions setting - Off checkbox is selected.  
Searching Site Content setting - On checkbox is selected.

In this example, the report will show site collections for which the Editing Users and Permissions setting is turned Off **AND** the Searching Site Content setting is turned On.
{% endhint %}

