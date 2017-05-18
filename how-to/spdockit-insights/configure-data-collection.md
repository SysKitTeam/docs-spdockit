---
title: SPDocKit Insights
description: SPDocKit Insights Installation and Initial Configuration
author: Vinko Bedek
date: 17/5/2017
---
<!--
TODO: 
1. footnotes, do we need them here? But i would still like to mention somewhere in this document that there are some limitations
-->
SPDocKit Insights provides continuous load of the SharePoint ULS, Windows Event logs, SQL logs in real-time[*](#realTime). If you enable this feature, the SPDocKit Insights Agent will gather selected events and store them on your disk. SPDocKit Insights presents a centralized place for you to explore, detect and prevent possible issues appearing on your SharePoint farm. Performance data is also collected and is stored in the SPDocKit database.

Use SPDocKit Insights to keep multiple farms under control and find problems more easily. Here is how the optimal installation scheme looks like:



## SPDocKit Insights Agent Required Configuration
1. [Install SPDocKit Insights Agent](#internal/installation/installation-guide/) preferably on a **server that is not part of your SharePoint farm**. Run the SPDocKit setup file and select **SPDocKit Insights Agent** feature in the **advanced** install mode. Check [system requirements](#internal/requirements/system-requirements/) for this server.
2. Start the **SPDocKit Insights Configuration Utility** to configure the installed SPDocKit Insights Agent.
    - Will be started automatically after installation if the SPDocKit Insights Agent if installed on a separate server.
    - Also available from the SPDocKit start screen if installed on the same server as SPDocKit.
    - Also available from the Windows start menu.
3. Configure the SPDocKit Insights Agent, enter the following:
    - **Service Account** - the service account you specify here will be used to collect the logs from the servers in your farm. You need to ensure the provided account has the following rights:
        - **Log On As a Service Right** – this right will be given to the account automatically by the configuration utility.
        - **Local administrator on SharePoint servers** – the service account needs to be a member of the Local Administrators group on all SharePoint servers. This is required in order to be able to read log files from the disk.
        - **Local administrator on the Local server** – the service account needs to be a member of the Local Administrators group on the server where the SPDocKit Insights Agent is installed.
    - **SPDocKit Database** 
        - **SPDocKit\_service\_role** on the SPDocKit database – provided service account needs to be granted **SPDocKit\_service\_role** role on the **SPDocKit database**.
        - **Index Location** – you need to ensure that the provided service account has write access to the index location directory. The directory for the index must be empty or contain an existing index.  It is recommended not to place the index on the system drive. Be careful if you plan to use the system drive for index location, as it can be quickly filled up.
    - **Port To Use** - this is the port that the SPDocKit Insight Agent will use to communicate with the SPDocKit Insights application. By default, port 7895 is set, but you can change it to suit your needs.
    - **Max Index Size** – by default we set this value to 200GB with a maximum of 1TB. Feel free to change it to suit your needs and hardware capabilities.
        - If the service determines that the index exceeds the maximum index size, it will stop the data collection. Note that the actual size of the index can vary because of index reorganization and can require up to 3 times the amount of disk space specified here.
4. Confirm by clicking the OK button.
    - Take note of the URL in the confirmation message. This is needed to connect to the SPDocKit Insights Agent if the SPDocKit Insights Application is installed on a separate server or workstation.
    - If the SPDocKit Insights application is installed on the same server as the SPDocKit Insights Agent, SPDocKit Insights will start automatically.

## SPDocKit Insights Additional Configuration
Additional configuration is done by means of the SPDocKit Insights application.

1. [Install SPDocKit Insights](#internal/installation/installation-guide/) to **any** server, with or without SPDocKit. Run the SPDocKit setup file and select the Insights Viewer feature in the **advanced** install mode.
2. Start SPDocKit Insights.
    - From the Windows start menu.
    - If SPDocKit was installed with SPDocKit Insights, SPDocKit Insights is available from the SPDocKit start page.
    - In a standalone installation, SPDocKit Insights will start automatically when the installation has completed.
    - In a combined installation with the SPDocKit Insights Agent, SPDocKit Insights will start automatically after SPDocKit Insights Agent configuration.
3. SPDocKit Insights uses some default settings: 
    - **All** farms will be monitored.
    - ULS event of **Unexpected**, **Exception** and **Critical** level will be collected.
    - Windows Event Log and SQL logs will **not** be collected.
    - Performance data will be collected if supported by the SPDocKit license edition.
4. To customize the default settings click the **Settings button** located in the bottom left corner.
5. On the settings screen the available settings are divided into:
    - Farm settings scoped by each farm.
    - Agent settings scoped by each agent.

### Available farm settings:
- **Assigned Agent**
    - When the SPDocKit Insights Agent starts for the first time, it will be associated with **all** the farms in your SPDocKit database. If at some point you connect another farm to your SPDocKit Database, it will be associated with the first free active agent.
    - If the agent associated by default is not satisfactory, change this option.
    - If for some reason you wish to stop monitoring a farm, just select _None_ as the desired agent.
    - One agent can be assigned to multiple farms. 
- **ULS Collection Configuration**
    - Here you can change which ULS event levels you want to collect. You can choose from the standard SharePoint ULS levels.
    - All of the ULS categories and sources are preselected by default.
- **Windows Event Log Collection Configuration**
    - Disabled by default. 
    - Configurable levels and event sources to monitor.
- **SQL Collection Configuration**
    - Disabled by default.
- **Performance Monitoring**
    - Enabled by default. Availability depends on the SPDocKit license edition.

### Available Agent Options
- **Enable/Disable data collection**
    - Will stop/start data collection (log and performance data) from all farms associated with the selected SPDocKit Insights Agent.
- **Collection Interval**
    - How often to collect log data (default is 15 seconds).
- **Data retention period**
- **Max index size**
        - Data collection will stop when this limit is reached. 
- **Remove Agent** -only supported for an inactive agent.
    - Uninstall the selected SPDocKit Insights Agent form the machine where it is located.
        - You can do so by uninstalling SPDocKit completely, or by modifying your current installation. Navigate to SPDocKit installation file, choose the option Modify Available Options, uncheck the Collection Service feature and finish the installation wizard.
    - Wait a couple of minutes for the agent to register as offline.
    - Remove the agent by using this option.

### Configure Alerts[**](#realTime2)
- Select the Event Viewer tab in the left navigation.
- Select a farm if you are monitoring multiple farms.
- The alerts option will be available:
    - in the upper right corner.
    - after performing a search, an alert can be created for the current query.

<a name="realTime"></a>*_License edition limitations may apply. Manual load will be required to use the log gathering feature._

<a name="realTime2"></a>**_License edition limitations may apply._


