---
title: SPDocKit Insights Settings
description: Various options described
author: Vinko Bedek
date: 22/5/2017
--- 
 
To customize SPDocKit Insights settings click the **Settings button** located in the bottom left corner.
5. On the settings screen the available settings are divided into:
    - Farm settings scoped by each farm.
    - Agent settings scoped by each agent.

### Available farm settings:
- **Assigned agent**
    - When the SPDocKit Insights Agent starts for the first time, it will be associated with **all** the farms in your SPDocKit database. If at some point you connect another farm to your SPDocKit database, it will be associated with the first free active agent.
    - If the agent associated by default is not satisfactory, change this option.
    - If for some reason you wish to stop monitoring a farm, just select _None_ as the desired agent.
    - One agent can be assigned to multiple farms. 
- **ULS collection configuration**
    - Here you can change which ULS event levels you want to collect. You can choose from the standard SharePoint ULS levels.
    - All of the ULS categories and sources are preselected by default.
- **Windows Event Log collection configuration**
    - Disabled by default. 
    - Configure levels and event sources to monitor.
- **SQL collection configuration**
    - Disabled by default.
- **Performance monitoring**
    - Enabled by default. Availability depends on the SPDocKit license edition.

### Available agent options
- **Enable/Disable data collection**
    - Will stop/start data collection (log and performance data) from all farms associated with the selected SPDocKit Insights Agent.
- **Collection interval**
    - How often to collect log data (default is 15 seconds).
- **Data retention period**
- **Max index size**
    - Data collection will stop when this limit is reached. 
- **Performance data collection interval**
    - How often to collect performance data (default is 60 seconds)
- **Remove agent** -only supported for an inactive agent.
    - Uninstall the selected SPDocKit Insights Agent form the machine where it is located.
        - You can do so by uninstalling SPDocKit completely, or by modifying your current installation. Navigate to the SPDocKit installation file, choose the option Modify Available Options, uncheck the Collection Service feature and finish the installation wizard.
    - Wait a couple of minutes for the agent to register as offline.
    - Remove the agent by using this option.