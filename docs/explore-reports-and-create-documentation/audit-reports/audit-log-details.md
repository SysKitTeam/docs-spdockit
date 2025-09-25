---
description: This article explains how to use SPDocKit Permissions Audit Log Details report to track who made certain permissions changes, when and on which securable object that specific action has been performed.
---

---
sidebar_position: 3
---

# Audit Log Details

This article explains how you can use the **Audit Log Details report** to inspect permission changes on site collections. The Audit Log Details report enables you to see **the complete history of permission changes on site collections**.

To track permissions changes, the audit option must be enabled on a site collection level in SharePoint.

1. In your browser, navigate to the root web of the site collection you wish to track permission changes on. Go to **Settings &gt; Site settings &gt; Site collection audit settings** \(under Site Collection Administration\) and check the options you want SharePoint to track. From the moment when this option is enabled, all permission changes within the site collection will be logged by SharePoint and you will be able to see those changes in SPDocKit.

{% hint style="warning" %}
**Please note!** You must be a site collection admin to perform this action.
{% endhint %}

1. When you want to see permission changes that were made within a specific site collection, you must take a snapshot with the **Security Audit option enabled**. By enabling the **Include Changes Made by System Account** option, actions performed by the system account will also be collected and will be visible in the reports. The first time you take a snapshot with the Security Audit option enabled, data for the past 10 days will be loaded. The next data collection will collect logs starting from the last collected one.
2. To view the Permissions Audit Details report, go to **Audit Reports &gt; Audit Log Details** and select the appropriate filter values to view the report. Alternatively, you can open the Audit Details report directly from **Permissions Explorer** by clicking on the **Audit button** on the ribbon. In that case, the report filters will automatically be filled with the site collection selected in the Permissions Explorer.

Another option is to open the **Audit Log Overview** report, select a site collection, and click the **Explore Audit Logs** button in the Home ribbon. The Site Collection filter will automatically be set to the last mentioned site collection.

From the other filters, you can choose the date range, users who performed the actions, the type of actions performed, and the content to be included in the report.

By default, the Permissions Audit Details report contains the following columns:

* **Event Type** – Type of action performed \(e.g., group created, group member added, permissions granted, permission inheritance broken, etc.\).  
* **Time** – Time of day the action was performed \(it is shown in local time\).  
* **Performed By** – User who performed the action.  
* **Target** – Principal or permission level that was modified.  
* **Details** – Details about the performed action; these depend on the type of action that was performed.  
* **Url** – URL of the SharePoint object on the level on which the action was performed.  
* **Object Type** – Type of SharePoint object on the level on which the action was performed.  

You can customize this grid by adding two optional columns:

* **Email** - Email of the user who performed the action.  
* **Username** – Login name of the user who performed the action.  

{% hint style="warning" %}
**Please note!**  
You can only load the Security Audit logs with SPDocKit on a SharePoint machine, not on a workstation. However, previously loaded data can be viewed on a workstation as well.
{% endhint %}

