---
title: How to FAQ
description: Frequently asked questions about SPDocKit usage.
author: Iva Novoselic
date: 23/5/2017
---

# Features

## How can I measure the size of the SPDocKit database?

By executing this SQL query you will get the overall size of your database as well as the used and free space inside the database:

```sql
SELECT
t.NAME AS TableName,
s.Name AS SchemaName,
p.rows AS RowCounts,
SUM(a.total_pages) 8 AS TotalSpaceKB,
SUM(a.used_pages) 8 AS UsedSpaceKB,
(SUM(a.total_pages) - SUM(a.used_pages)) 8 AS UnusedSpaceKB
FROM
sys.tables t
INNER JOIN
sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN
sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id INNER JOIN
sys.allocation_units a ON p.partition_id = a.container_id
LEFT OUTER JOIN
sys.schemas s ON t.schema_id = s.schema_id
WHERE
t.NAME NOT LIKE 'dt%'
AND t.is_ms_shipped = 0 AND i.OBJECT_ID > 255
GROUP BY
t.Name, s.Name, p.Rows
ORDER BY
t.Name
```

## The SPDocKit database size has grown too big — how do I trim or reduce its size?

There is a data retention feature that helps manage your database size in SPDocKit. If you turn this feature on, the retention job will usually happen every day at the random time between 4AM and 5AM. However, even when our tool deletes old data from the tables, the SQL server will still use the same amount of disk space.

There are two parts of storage that are used by any database:

* the data itself, stored in a database file \(.MDF\)
* transaction logs, stored in log files \(.LDF\). \(Check to see if there are any SPDocKit related entries in your Windows event logs.\)

In order to reduce the database size you can do the following:

1. Open the **Options wizard**, select the [Data Retention](../configure-and-extend-spdockit/options-wizard.md#data-retention) tab. Here is where you will see how your retention policies are defined.
2. You will see the **Force Data Retention** button, and next to that is an **Execute** button. Pressing this button will automatically delete old information, then attempt to shrink your database \(the way this runs is determined by the settings in step 1\).

{% hint style="warning" %}
**Please note:**

This can take a little bit of time to run.
{% endhint %}

If you are not running the latest version, you can do this manually:

* Shrink the database by following [these instructions](http://msdn.microsoft.com/en-us/library/ms189035.aspx).
* Change the database to the **Simple Recovery Model** and perform a backup \([This article](http://msdn.microsoft.com/en-us/library/ms189275.aspx) explains the differences between SQL’s different recovery models\).  

## How to find out which SPDocKit version you are using?

To find out which version of SPDocKit you are using, please follow these steps:

1. Open SPDocKit.
2. From the File menu choose **Help**. 
3. Your version will be written under **About SPDocKit** part of the screen.

## What should I do to stop receiving "There is no data to show for this object" for all User Profile Reports?

This message is sometimes generated when there are insufficient rights given to an end user. To load User Profile Synchronization connections you need to do the following:

1. Start the **User Profile Synchronization Service**.
2. The account used to create a snapshot needs to be a member of the **Administrators** group of the User Profile Service Application and have **Full Control** access. This is done by adding them to the User Profile Service Administrators group using the “Administrators” button in SharePoint **Central Administration &gt; Application Management &gt; Manage Service Applications**.

   All accounts taking a snapshot must have the same level of access.

For more information, please see the [following article](../requirements/service-app-perm-requirements.md).

