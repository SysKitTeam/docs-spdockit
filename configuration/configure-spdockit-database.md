# Configure SPDocKit Database

This article explains how to configure the database for SPDocKit.

SPDocKit uses a database for storing data gathered from your SharePoint farm.

**From SPDocKit 8 onwards, the use of a dedicated SPDocKit database is required!**

{% hint style="warning" %}
**Please note!** This should be a SPDocKit-dedicated database; please **do not provide SharePoint databases here**.
{% endhint %}

## SPDocKit Farm

**To configure a database on the server installation of SPDocKit, follow the steps below:**

1. Select **Configuration** from the left navigation bar on the **Backstage Screen** and then click the **Configure** button.
2. On the **Database** wizard page, select whether to create a new database or use the existing one. Read more about the [SPDocKit database requirements](../requirements/user-permissions-requirements.md).
3. On the **Database Configuration** wizard page, specify the **SQL Server, Database Name**, and authentication. It is possible to overwrite the existing database under the same name.

   * If you are using the default instance, type  "servername", or "servername.yourdomain.loc".
   * If you are using a named instance, type "servername\instancename", or "servername.yourdomain.loc\instancename".
   * If your SQL Server is on a non-standard port \(different from 1433\), type "severname,port" or "servername\instance,port". \(FQDN formats are also supported\)

   After providing the information, click the **Test Connection** button to ensure that the settings are correct.

4. Click Next, wait a few seconds, and your SPDocKit database will be ready to use!

## SPDockit Workstation

{% hint style="warning" %}
**Please note!** Only SPDocKits installed on SharePoint servers can create databases. Workstations cannot create their own database; they must connect to already existing databases.
{% endhint %}

**To select a database on a workstation installation of SPDocKit, follow these steps:**

1. Select **Configuration** from the left navigation bar on the **Backstage Screen**, and then click the **Configure** button.
2. During the **Database Configuration** step, specify the **SQL Server, Database Name**, and authentication for a **existing SPDocKit database**.

   * If you are using the default instance, type  "servername", or "servername.yourdomain.loc".
   * If you are using a named instance type, "servername\instancename", or "servername.yourdomain.loc\instancename".
   * If your SQL Server is on a non-standard port \(different from 1433\), type "severname,port" or "servername\instance,port". \(FQDN formats are also supported\)

   After providing the information, click the **Test Connection** button to ensure that the settings are correct.

3. Click Next, wait a few seconds and your SPDocKit database will be ready to use!

## Multiple farms in a single SPDocKit database

You can document multiple SharePoint farms using one SPDocKit database. When installing SPDocKit on your desired farms, provide the same database details for each installation, and you will be able to explore reports from **multiple farms** in each SPDocKit instance.

1. If you have multiple SPDocKit instances, each using its own database, you will have to decide whether you want to reuse one database to become a central database for all the instances or create a brand new one. **Please note!** It is not possible to merge data from multiple SPDocKit databases into a single database.
2. For each SPDocKit instance, go to the **Configuration** tab and click **Configure** to open the Configuration Wizard. If the database you want to use as a central database already exists, just input the SQL Server and database name into the wizard and complete the wizard. If the database does not exist, **create it only once with one instance of SPDocKit** and choose to use an existing database for every other instance.
3. After that, check one more thing: go to **Options**, then go to **Service Settings**, and check the **SPDocKit Database** field under **Snapshot Location**. This will ensure that all snapshot data is saved to the database and available from all connected SPDocKit instances.

SPDocKit installed on a workstation can also be connected to such a database without being a part of a SharePoint farm. This way, you can monitor multiple farms without the need to connect to a single SharePoint server.

Some of the pros and cons of using this kind of setup are:

```diff
+ You have one centralized place where you can track data from all your connected SharePoint farms.
+ It’s easier to compare changes between farms.
- As any database grows and stores more data, executed queries will require more time to execute. Generating reports might slow down a bit.
```

## Multiple Databases on a Workstation

This section will explain how to use the **Database Connection** chooser, a feature used to quickly change between databases on a workstation.

You can find the Database Connection Chooser in the **top right corner** of the application.

When you install SPDocKit for the first time, the installation will ask you to use the **Configuration Wizard**. The database you set up there will be the Default one. After that, you can use the **Database Connections** option to quickly set up other connections.

To add a new database connection, follow these steps:

1. Click on the **Database Connections** drop-down button, which can be found above the ribbon and on the right, and choose **Edit**.

   Alternatively, in the Backstage \(File &gt; Configuration\), under Configuration settings, click Database Connections.

2. After that, click the **Add** button. The **New Database Connection** dialog will open.

   Here, you can input your Connection Name, the SQL Server you wish to use, and, of course, the database you want to connect to. To access the database, you can use either Windows or SQL authentication. Press OK and a Progress dialog will appear. This dialog will output any errors that have occurred. If no errors have occurred, you can **Close** the window and continue on to the next step.

3. You will be returned to the Database Connection window. Select the connection you just made and click **Set as Active**. In a few moments, the database connection will change — and that is it!

To change the database, you can use the **Database Connection** dialog to list all created connections and the **Set as Active** button to connect to a database. A much simpler solution is to use the drop-down. Click on the connection you want and the database will be switched immediately.

### **Edit a connection**

In the main **Database Connection** dialog, select the connection you want and click the **Edit** button. You can edit a connection's name, but you can also completely change the SQL Server or the database you are using. When you are done, click OK.

To delete a connection, select it and click the **Delete** button.

