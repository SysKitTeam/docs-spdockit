---
title: Configure SPDocKit Insights
description: SPDocKit Insights Installation and Initial Configuration
author: Vinko Bedek
date: 17/5/2017
---

SPDocKit Insights provides continuous load of the SharePoint ULS, Windows Event logs, SQL logs in real-time[*](#realTime). If you enable this feature, the SPDocKit Insights Agent will gather selected events and store them on in __index location on your disk__. SPDocKit Insights presents a centralized place for you to explore, detect and prevent possible issues appearing on your SharePoint farm. Performance data is also collected and is stored in the __SPDocKit database__.

Use SPDocKit Insights to keep multiple farms under control and find problems more easily.

## SPDocKit Insights Agent required configuration
1. [Install SPDocKit Insights Agent](#internal/installation/installation-guide/) preferably on a **server that is not part of your SharePoint farm**. Run the SPDocKit setup file and select **SPDocKit Insights Agent** feature in the **advanced** install mode. Check [system requirements](#internal/requirements/system-requirements/) for this server.
2. Start the **SPDocKit Insights Configuration Utility** to configure the installed SPDocKit Insights Agent.
    - Will be started automatically after installation if the SPDocKit Insights Agent is installed on a separate server.
    - Also available from the SPDocKit start screen if installed on the same server as SPDocKit.
    - Also available from the Windows start menu.
3. Configure the SPDocKit Insights Agent, enter the following:
    - **Service Account** - the service account you specify here will be used to collect logs from the servers in your farm. You need to ensure the provided account has the following rights:
        - **Log On As a Service Right** – this right will be given to the account automatically by the configuration utility.
        - **Local administrator on SharePoint servers** – the service account needs to be a member of the Local Administrators group on all SharePoint servers. This is required in order to be able to read log files from the disk.
        - **Local administrator on the Local server** – the service account needs to be a member of the Local Administrators group on the server where the SPDocKit Insights Agent is installed.
    - **SPDocKit Database** 
        - **SPDocKit\_service\_role** on the SPDocKit database – the provided service account needs to be granted the **SPDocKit\_service\_role** role on the **SPDocKit database**.
    - **Index Location** – you need to ensure that the provided service account has write access to the index location directory. The directory for the index must be empty or contain an existing index.  It is recommended not to place the index on the system drive. Be careful if you plan to use the system drive for index location, as it can be quickly filled up.
    - **Port To Use** - this is the port that the SPDocKit Insight Agent will use to communicate with the SPDocKit Insights application. By default, port 7895 is set, but you can change it to suit your needs.
    - **Max Index Size** – by default we set this value to 200GB with a maximum of 1TB. Feel free to change it to suit your needs and hardware capabilities.
        - If the service determines that the index exceeds the maximum index size, it will stop the data collection. Note that the actual size of the index can vary because of index reorganization and can require up to 3 times the amount of disk space specified here.
4. Confirm by clicking the OK button.
    - Take note of the URL in the confirmation message. This is needed to connect to the SPDocKit Insights Agent if the SPDocKit Insights Application is installed on a separate server or workstation.
    - If the SPDocKit Insights application is installed on the same server as the SPDocKit Insights Agent, SPDocKit Insights will start automatically.

## SPDocKit Insights additional configuration
Additional configuration is done by means of the SPDocKit Insights application.

1. [Install SPDocKit Insights](#internal/installation/installation-guide/) on **any** server, with or without SPDocKit. Run the SPDocKit setup file and select the Insights Viewer feature in the **advanced** install mode.
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
    - For more details on available settings follow click [here](#internal/spdockit-insights/customize-settings/).

Please check [feature availability by license type.](https://www.spdockit.com/orders). 

<a name="realTime"></a>*_Manual load will be required to use the log gathering feature._  
<a name="realTime2"></a>**_License edition limitations may apply._


