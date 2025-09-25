---
description: Data retention is not working properly.
---

# Data retention not working properly

## **Summary**

I receive the following error when running the data retention:

> System.Data.SqlClient.SqlException \(0x80131904\): The DELETE statement conflicted with the REFERENCE constraint "FK\_LoadedPrincipals\_LoadingInfos". The conflict occurred in database "spdockit", table "dbo.LoadedPrincipals", column 'LoadingInfoID'. The statement has been terminated.

This error will appear if your database is version 6.0 or older and you update it to version 6.1. Please note that for this error to happen you need to have Permissions loaded.

**Application Version:** 6.1.0

## **Solution**

In order to resolve this problem, please execute the following query on your SPDocKit database. This query will update SPDocKit database settings which will allow data retention job to execute properly.

```sql
    ALTER TABLE [dbo].[LoadedPrincipals] DROP CONSTRAINT [FK_LoadedPrincipals_LoadingInfos]ALTER TABLE [dbo].[LoadedPrincipals] WITH CHECK ADD CONSTRAINT [FK_LoadedPrincipals_LoadingInfos] FOREIGN KEY([LoadingInfoID])
    REFERENCES [dbo].[LoadingInfos] ([ID])
    ON DELETE CASCADE
    GO
```

**Status:** Solved in version 6.1.1

