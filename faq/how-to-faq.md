---
title: How to FAQ
description: Frequently asked questions about SPDocKit usage.
author: Iva Novoselic
date: 23/5/2017
---

# how-to-faq

## How can I measure the size of the SPDocKit database?

By executing this SQL query you will get the overall size of your database as well as the used and free space inside the database:

> _SELECT  
> t.NAME AS TableName,  
> s.Name AS SchemaName,  
> p.rows AS RowCounts,  
> SUM\(a.total\_pages\)_  8 AS TotalSpaceKB,  
> SUM\(a.used\_pages\)  _8 AS UsedSpaceKB,  
> \(SUM\(a.total\_pages\) - SUM\(a.used\_pages\)\)_  8 AS UnusedSpaceKB  
> FROM  
> sys.tables t  
> INNER JOIN  
> sys.indexes i ON t.OBJECT\_ID = i.object\_id  
> INNER JOIN  
> sys.partitions p ON i.object\_id = p.OBJECT\_ID AND i.index\_id = p.index\_id INNER JOIN  
> sys.allocation\_units a ON p.partition\_id = a.container\_id  
> LEFT OUTER JOIN  
> sys.schemas s ON t.schema\_id = s.schema\_id  
> WHERE  
> t.NAME NOT LIKE 'dt%'  
> AND t.is\_ms\_shipped = 0 AND i.OBJECT\_ID &gt; 255  
> GROUP BY  
> t.Name, s.Name, p.Rows  
> ORDER BY  
> t.Name\*

## The SPDocKit database size has grown too big — how do I trim or reduce its size?

There is a data retention feature that helps manage your database size in SPDocKit. If you turn this feature on, the retention job will usually happen every day at the random time between 1:30AM and 5AM. However, even when our tool deletes old data from the tables, the SQL server will still use the same amount of disk space.

There are two parts of storage that are used by any database:

* the data itself, stored in a database file \(.MDF\)
* transaction logs, stored in log files \(.LDF\). \(Check to see if there are any SPDocKit related entries in your Windows event logs.\)

In order to reduce the database size you can do the following:

1. Open the **Options wizard**, select the [Data Retention](how-to-faq.md#internal/get-to-know-spdockit/backstage-screen/options-wizard#data-retention) tab. Here is where you will see how your retention policies are defined.
2. You will see the **Force Data Retention** button, and next to that is an **Execute** button. Pressing this button will automatically delete old information, then attempt to shrink your database \(the way this runs is determined by the settings in step 1\).  

   **Please note:** this can take a little bit of time to run.

If you are not running the latest version, you can do this manually:

* Shrink the database by following [these instructions](http://msdn.microsoft.com/en-us/library/ms189035.aspx).
* Change the database to the **Simple Recovery Model** and perform a backup \([This article](http://msdn.microsoft.com/en-us/library/ms189275.aspx) explains the differences between SQL’s different recovery models\).  

## How to find out which SPDocKit version you are using?

To find out which version of SPDocKit you are using, please follow these steps: 1. Open SPDocKit. 1. From the File menu choose **Help**. 1. Your version will be written under **About SPDocKit** part of the screen.

## What should I do to stop receiving ''There is no data to show for this object'' for all User Profile Reports?

This message is sometimes generated when there are insufficient rights given to an end user. To load User Profile Synchronization connections you need to do the following:

1. Start the **User Profile Synchronization Service**.
2. The account used to create a snapshot needs to be a member of the **Administrators** group of the User Profile Service Application and have **Full Control** access. This is done by adding them to the User Profile Service Administrators group using the “Administrators” button in SharePoint **Central Administration &gt; Application Management &gt; Manage Service Applications**.

   All accounts taking a snapshot must have the same level of access.

For more information, please see the [following article](how-to-faq.md#internal/requirements/user-profile-service-requirements).

