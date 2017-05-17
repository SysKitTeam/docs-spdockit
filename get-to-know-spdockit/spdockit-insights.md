---
title: SPDocKit Insights
description: General SPDocKit Insights information
author: Vinko Bedek
date: 17/5/2017
---

SPDocKit Insights is designed to allow SharePoint administrators to collect and monitor information about their farms’ health from:
* SharePoint ULS logs across all farm servers
* the Windows Application Event log
* SQL server error log
* Performance counters data will also be collected with certain license editions

If you have more than one farm configured in your SPDocKit database, this feature will allow you to monitor all of your servers from multiple farms from one centralized place.
Data is being collected continuously in real-time[*](#realTime) and stored in an index using the SPDocKit Insights Agent. SPDocKit Insights can filter gathered log data by various fields ie. correlation ID, category, source, server, message, event ID ....

## Quick Start Guide
1. Install and configure SPDocKit on the SharePoint farm you wish to document and manage
2. On a server outside of the selected farm, [install and configure the SPDocKit Insights Agent](#internal/how-to/spdockit-insights/configure-data-collection/).
3. [Install and configure SPDocKit Insights](#internal/how-to/spdockit-insights/configure-data-collection/) application to start exploring the collected data. You can install SPDocKit Insights on any Windows server or a workstation that is inside a trusted domain.
4. Start [using SPDocKit Insights](#internal/how-to/spdockit-insights/configure-data-collection/).


<a name="realTime"></a>*_License edition limitations may apply. Manual load is required to use the log gathering feature._