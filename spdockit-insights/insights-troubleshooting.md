---
title: SPDocKit Insights Troubleshooting
description: addresses some common problems
author: Vinko Bedek
date: 24/5/2017
---


There are a couple of problems that may be encountered while using SPDocKit Insights.

### "There are no active agents available."

#### Problem
When starting SPDocKit Insights through the SPDocKit start page you receive the following message: There are no active agents available. Please ensure that the SPDocKit Insights Agent is working correctly.

#### Solution
There are two possibilities why you got this message:  
* The SPDocKit Insights Agent/s is **not installed** but it is still listed in your SPDocKit database. This can happen if you used the SPDocKit Insights feature but then upgraded to a new version without installing the agent. This can be fixed by installing the aforementioned feature. See [here](#internal/installation/upgrade-to-the-latest-version/) for more information.
* The SPDocKit Insights Agent is installed but you haven’t gone through the **SPDocKit Insights Agent Configuration**. Please go [here](#internal/spdockit-insights/configure-data-collection/) and check the section titled **SPDocKit Insights Agent Required Configuration**.
    - this can happen if you performed an upgrade of a SPDocKit installation where a SPDocKit Insights Agent was installed side by side with SPDocKit. In that case, the configuration utility will not start automatically after installation, which will leave the agent as not started.

### "Connection to the SPDocKit Insights Agent failed"

#### Problem
This message can be encountered when SPDocKit Insights has been started. SPDocKit Insights fails to connect to the SPDocKit Insights Agent.

#### Solution
As noted when the message appears, this can happen because:
* The Agent is not running.
    - check if this is indeed the case on the machine where the **SPDocKit Insights Agent** feature has been installed.
    - If an upgrade was done, the **SPDocKit Insights Agent Configuration** might not have been performed. Normally the **SPDocKit Insights Agent Configuration** runs after the installation has completed, but when the SPDocKit Insights feature is installed alongside SPDocKit, the **SPDocKit Insights Agent Configuration** needs to be run manually. You can find it in the Windows start menu.
    - The SPDocKit Insights Agent may have crashed. Check the windows event log for any suspicious events.
* There is a firewall issue preventing the connection.
    - SPDocKit Insights connects to the SPDocKit Insights Agent over HTTP. The port configured for the SPDocKit Insights Agent must not be blocked.
* The Agent URL is not correct.
    - check that you have entered the correct URL. The URL is shown: 
        - when completing the **SPDocKit Insights Agent Configuration**
        - from within SPDocKit by clicking on the **Check Status** button on the **Insights ribbon page**.

### "Agent Status: offline or not accessible" 

#### Problem
You receive an error that an agent is offline or not accessible. Similar behavior can be seen in the info on the settings page for a listed SPDocKit Insights Agent.

#### Solution
The **offline or not accessible** state will occur if SPDocKit Insights cannot communicate with the SPDocKit Insights Agent besides the one currently connected to. 
* The Agent is not running.
    - check if this is indeed the case on the machine where the **SPDocKit Insights Agent** feature has been installed.
    - If an upgrade was done, the **SPDocKit Insights Agent Configuration** might not have been performed. Normally the **SPDocKit Insights Agent Configuration** runs after the installation has completed, but when the SPDocKit Insights feature is installed alongside SPDocKit, the **SPDocKit Insights Agent Configuration** needs to be run manually. You can find it in the Windows start menu.
    - The SPDocKit Insights Agent may have crashed. Check the windows event log for any suspicious events.
* There is a firewall issue preventing the connection.
    - SPDocKit Insights connects to the SPDocKit Insights Agent over HTTP. The port configured for the SPDocKit Insights Agent must not be blocked.
* The agent could have been uninstalled.
    - you can remove uninstalled agents via the settings available in the bottom left corner. Select the uninstalled agent and click on the **Remove** button.


### "Data is not being collected"

#### Problem
When performing a search, you notice that there is no data for some servers.

#### Solution
The most likely cause is a permissions issue.  
Review the service account permissions. Check the [configure data collection](#internal/spdockit-insights/configure-data-collection) article for more information.

Review the farm [settings](#internal/spdockit-insights/customize-settings). Perhaps the data is not being collected because it is not configured to do so. I.e. windows event log collection is disabled by default.

### "Alerts are not working"

#### Problem
No emails have arrived for a configured alert.

#### Solution
* Review the alert history. Was there an attempt to send the alert?
* Review your outgoing email settings.
    - The outgoing email settings are configured in the **SPDocKit** options -> **Subscription Settings** tab.  
    The SPDocKit options are available from the SPDocKit start page.
* Review the back off period for the alert.
* Try to perform a manual search in the time frame where the alert should have been triggered.
* Check the event log on the server where the SPDocKit Insights Agent is installed.


### "Refiners always show all servers and levels"
As the index grows the refiner calculations become more complex from a time and memory standpoint. To protect the SPDocKit Insights Agent from consuming all the resources just because of one simple search query, we implemented a limit of 120 000 000 events in the index. After this limit has been passed, the refiners will become static and no calculations will be performed. Indexing and searching will continue to work as usual well beyond this limit. 

The limit is configurable in the agent settings under the _Advanced Options_ but care should be taken when changing this option.


### "Insights Agent is uninstalled but still visible in the application"

#### Problem
__Please note__ that this is merely an example of a situation when the agent needs to be removed:  
Insights Agent is uninstalled but when you open SPDocKit Insights viewer application - on home screen there is a message: "Agent XYZ is not up to date. Please update it."  


#### Solution
Since the agent is uninstalled, this problem has nothing to do with the agent not being up to date. What you need to do is:
* Navigate to Settings (bottom left corner).
* Select the agent that's uninstalled.
* Select the Remove agent option.
