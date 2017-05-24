---
title: SPDocKit Insights Troubleshooting
description: addresses some common problems
author: Vinko Bedek
date: 24/5/2017
---
<!-- remove a couple of things. I feel that they are no longer neccessary.
1. No Agents Available - the message can only be seen in SPDockit. And the message there contains more than enough details.
2. Collection Disabled - this was added originaly because the index could grow too large and it would just disable collection without any clue on why when the user saw the message. We have now added a much nicer message and how to fix information '
3. Removed the 'not available to consultants'-->

There are a couple of problems that may be encounterd when using SPDocKit Insights.

### There are no active agents available.

#### Problem
When starting SPDocKit Insights through the SPDocKit start page you receive the following message: There are no active agents available. Please ensure that SPDocKit Insights Agent is working correctly.

#### Solution
There are two possibilities why you got this message:  
* The SPDocKit Insights Agent/s is not installed but it is still listed in your SPDocKit database. This can happen if you used the SPDocKit Insights feature but then upgraded to a new version without installing the agent. This can be fixed by installing the aforementioned feature. See [here](#internal/installation/upgrade-to-the-latest-version/) for more information.
* The SPDocKit Insights Agent is installed but you haven’t gone through the **SPDocKit Insights Agent Configuration**. Please go [here](#internal/how-to/spdockit-insights/configure-data-collection/) and see section: **SPDocKit Insights Agent Required Configuration**.
    - this can happen if you performed an upgrade of a SPDocKit installation where SPDocKit Insights Agent was installed side by side with SPDocKit. In such a case the configuration utility will not start automatically after installation which will leave the agent as not started.

### Connection to the SPDocKit Insights Agent failed

#### Problem
This message can be encountered when SPDocKit Insights has been started. SPDocKit Insights fails to connect to the SPDocKit Insights Agent.

#### Solution
As noted when the message appears, this can happen because:
* The Agent is not running.
    - check if this is indeed the case on the machine where the **SPDocKit Insights Agent** feature has been installed.
    - If an upgrade was done, the **SPDocKit Insights Agent Configuration** might not have been performed. Normally the **SPDocKit Insights Agent Configuration** runs after the installation has completed, but when the SPDocKit Insights feature is installed along side SPDocKit, the **SPDocKit Insights Agent Configuration** needs to be run manually. You can find it in the Windows start menu.
    - The SPDocKit Insights Agent may have crashed. Check the windows event log for any suspiscious events.
* There is a firewall issue preventing the connection.
    - SPDocKit Insights connects to the SPDocKit Insights Agent over HTTP. The port configured for the SPDocKit Insights Agent must not be blocked.
* The Agent URL is not correct.
    - check that you have entered the correct URL. The URL is shown: 
        - when completing the **SPDocKit Insights Agent Configuration**
        - from within SPDocKit by clicking on the **Check Status** button on the **Insights ribbon page**.

### Agent Status: offline or not accesible

#### Problem
You receive an error that an agent is offline or not accessible. Similar behavior can be seen in the info on the settings page for a listed SPDocKit Insights Agent.

#### Solution
The **offline or not accessible** state will occur if SPDocKit Insights can not communicate with the SPDocKit Insights Agent besides the one currently connected to. 
* The Agent is not running.
    - check if this is indeed the case on the machine where the **SPDocKit Insights Agent** feature has been installed.
    - If an upgrade was done, the **SPDocKit Insights Agent Configuration** might not have been performed. Normally the **SPDocKit Insights Agent Configuration** runs after the installation has completed, but when the SPDocKit Insights feature is installed along side SPDocKit, the **SPDocKit Insights Agent Configuration** needs to be run manually. You can find it in the Windows start menu.
    - The SPDocKit Insights Agent may have crashed. Check the windows event log for any suspiscious events.
* There is a firewall issue preventing the connection.
    - SPDocKit Insights connects to the SPDocKit Insights Agent over HTTP. The port configured for the SPDocKit Insights Agent must not be blocked.
* The agent could have been uninstalled.
    - you can remove unistalled agents from the settings available in the bottom left corner. Select the uninstalled agent and click on the **Remove** button.



