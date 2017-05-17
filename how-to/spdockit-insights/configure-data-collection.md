---
title: SPDocKit Insights
description: General SPDocKit Insights information
author: Vinko Bedek
date: 17/5/2017
---

SPDocKit Insights provides continuous load of the SharePoint ULS, Windows Event logs, SQL logs in real-time[*](#realTime). If you enable this feature, the SPDocKit Insights Agent will gather selected events and store them on your disk. SPDocKit Insights presents a centralized place for you to explore, detect and prevent possible issues appearing on your SharePoint farm. Performance data is also collected and stored in the SPDocKit database, and 

Use SPDocKit Insights to keep multiple farms under control and find problems more easily. Here is how the optimal installation scheme looks like:



## SPDocKit Insights Agent Configuration
1. [Install SPDocKit Insights Agent](#internal/installation/installation-guide/) preferably to a **server that is not part of your SharePoint farm**. Run the SPDocKit setup file and select **SPDocKit Insights Agent** feature in the advanced install mode. Check [system requirements](#internal/requirements/system-requirements/) for this server.
2. Start the **SPDocKit Insights Configuration Utility** to configure the installed Agent.
    - will be started automatically if the SPDocKit Insights Agent if installed on a separate server.
    - also available from the SPDocKit start screen, or from the Windows start menu.
3. Configure the SPDocKit Insights Agent








<a name="realTime"></a>*_License edition limitations may apply. Manual load will be required to use the log gathering feature._



