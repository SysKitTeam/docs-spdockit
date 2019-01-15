# Configure SPDocKit

This article explains how to configure the SPDocKit database and service before the first usage. **SPDocKit Configuration wizard** will automatically start when you start SPDocKit for the first time. Follow these steps to successfully configure the application:

1. On the **Database** wizard page select whether to create a new database or use an existing one. [Read more](../configuration/configure-spdockit-database.md/) about the SPDocKit database.
2. On the **Database Configuration** wizard page specify the **SQL Server, Database Name** and authentication. It is possible to overwrite the existing database under the same name.
   * If you are using the default instance type  "servername", or "servername.yourdomain.loc"
   * If you are using a named instance type "servername\instancename", or "servername.yourdomain.loc\instancename"
   * If your SQL Server is on a non-standard port \(different from 1433\), type "severname,port" or "servername\instance,port". \(FQDN formats are also supported\)

     After providing the information, click the **Test Connection** button to ensure that the settings are correct.
3. On the **Service Configuration** wizard page check **Enable Service** and type the service account details. The service account needs to have the [following privileges](../requirements/sharepoint-on-premises-user-permissions-requirements.md/) to be able to run the service, create snapshots and other associated jobs.
4. Alternatively, you can use a Local System Account. **But please note:** The Local System account can be used to run the SPDocKit service \(but not the SPDocKit Insights Service\) if one of the following conditions are met:
   * You are using an embedded database.
   * You are using SQL Authentication to connect to your database.
   * You are using a local SQL Server.

     If you do not want to use the SPDocKit Service you can leave the **Enable Service** unchecked, but the following features will not be available:

   * Automatic Snapshots
   * Automatic Data Retention
   * Automatic Subscriptions and Alerts
   * Index Reorganization
   * Automatic Rules and Queries

     If you installed a SPDocKit Insights Agent and wish to setup SPDocKit Insights Service, you can also check **Enable SPDocKit Insights Service.**  
     As of version 7.2 there is only one Configuration Wizard for setting up the database, SPDocKit and SPDocKit Insights Service. Also note that if you are using SPDocKit and SPDocKit Insights Service **on the same machine** now you must use the **same service account for both SPDocKit and SPDocKit Insights Service.**
5. If you have chosen to enable SPDocKit Insights Service in the previous step, now you need to provide more details to properly setup the agent:
6. **Index Location** – you need to ensure that the provided service account has write access to the index location directory. The directory for the index must be empty or contain an existing index.  It is recommended not to place the index on the system drive. Be careful if you plan to use the system drive for index location, as it can be filled up quickly.
7. **Port To Use** - this is the port that the SPDocKit Insight Agent will use to communicate with the SPDocKit Insights application. By default, port 7895 is set, but you can change it to suit your needs.
8. **Max Index Size** – by default we set this value to 200GB with a maximum of 1TB. Feel free to change it to suit your needs and hardware capabilities.
   * If the service determines that the index exceeds the maximum index size, it will stop the data collection. Note that the actual size of the index can vary because of index reorganization and can require up to 3 times the amount of disk space specified here.
     * Take note of the Connection URL. This is needed to connect to the SPDocKit Insights Agent if the SPDocKit Insights Viewer is installed on a separate server or workstation. If that is the case copy the URL, start the Viewer on whichever server or workstation you installed it, and paste it into the required field. If the SPDocKit Insights Viewer is installed on the same server as the SPDocKit Insights Agent, SPDocKit Insights will start automatically. 
9. click **Next** to complete the Configuration Wizard and apply the changes.

**Please note!** To configure your SPDocKit settings more thoroughly, navigate to the **File** tab, click on the **Configuration** in the left navigation bar and press [Options](../get-to-know-spdockit/backstage-screen/options-wizard.md/) button.

