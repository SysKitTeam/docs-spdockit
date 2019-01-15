# Configure Multiple Farms to Use the Same SPDocKit Database

This article will explain how you can configure multiple instances of SPDocKit, on different SharePoint farms, to use the same SPDocKit database. For general information on how to configure a SPDocKit database go [here](configure-multiple-farms-to-use-same-spdockit-database.md#internal/configuration/configure-spdockit-database/).

1. If you have multiple SPDocKit instances, each using it's own database, you will have to decide whether you want to reuse one database to become a central database for all the instances, or create a brand new one. It is not possible to merge data from multiple databases into one.
2. For each SPDocKit instance, go to the **Configuration** tab and click **Configure** to open the Configuration wizard. If the database you want to use as a central database already exists, just input the SQL Server and database name into the wizard and complete the wizard. If the database does not exist, **create it only once with one instance of SPDocKit** and choose to use an existing database for every other instance.
3. After that, you need to make sure of just one more thing: go to **Options**, then **Service Settings** and check the **SPDocKit Database** field under **Snapshot Location**. This will ensure all snapshot data is save to the database and available from all connected SPDocKit instances.

Some of the pros and cons of using this kind of setup are:

* You have one centralized place to track data from all your connected SharePoint farms.
* It’s easier to compare changes between farms.
* As any database grows and the more data it stores, executed queries will require more time to execute. Generating reports might slow down a bit.

