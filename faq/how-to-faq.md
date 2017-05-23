---
title: How to FAQ
description: Frequently asked questions about SPDocKit usage.
author: Iva Novoselic
date: 23/5/2017
---

### How can I measure the size of the SPDocKit database?
By executing this SQL query you will get the overall size of your database as well as the used and free space inside the database:

```
SELECT
t.NAME AS TableName,
s.Name AS SchemaName,
p.rows AS RowCounts,
SUM(a.total_pages) * 8 AS TotalSpaceKB,
SUM(a.used_pages) * 8 AS UsedSpaceKB,
(SUM(a.total_pages) - SUM(a.used_pages)) * 8 AS UnusedSpaceKB
FROM
sys.tables t
INNER JOIN
sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN
sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
INNER JOIN
sys.allocation_units a ON p.partition_id = a.container_id
LEFT OUTER JOIN
sys.schemas s ON t.schema_id = s.schema_id
WHERE
t.NAME NOT LIKE 'dt%'
AND t.is_ms_shipped = 0
AND i.OBJECT_ID > 255
GROUP BY
t.Name, s.Name, p.Rows
ORDER BY
t.Name
```

### The SPDocKit database size has grown too big — how do I trim or reduce its size?

There is a data retention feature that helps manage your database size in SPDocKit. If you turn this feature on, the retention job will usually happen every day at the random time between 1:30AM and 5AM. However, even when our tool deletes old data from the tables, the SQL server will still use the same amount of disk space.

There are two parts of storage that are used by any database:

* the data itself, stored in a database file (.MDF)
* transaction logs, stored in log files (.LDF). (Check to see if there are any SPDocKit related entries in your Windows event logs.)

In order to reduce the database size you can do the following:

1. Open __Options Wizard__, and in the left menu select [Data Retention](get-to-know-spdockit/backstage-screen/options-wizard#data-retention)). Here is where you will see how your retention policies are defined.
1. You will see __Force Data Retention__ button, and next to that is an “Execute” Button. Pressing “Execute” will automatically delete old information, then attempt to shrink your database (the way this runs is determined by the settings in step 1). Please note: this can take a little bit of time to run.
If you are not running the latest version, you can do this manually:
Shrink the database by following these instructions.
Change the database to the Simple Recovery Model and perform backup (This article explains the differences between SQL’s different recovery models).
Your database will probably shrink successfully, but if you need help we can assist you remotely. If you need remote assistance, please make sure to have TeamViewer installed. Here is the link for that.