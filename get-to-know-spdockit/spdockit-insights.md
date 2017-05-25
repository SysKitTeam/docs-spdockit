---
title: SPDocKit Insights
description: General SPDocKit Insights information
author: Vinko Bedek
date: 17/5/2017
---
<!---
todo:
1. Topology image needs to be updated.
2. The quick guide video needs to be updated, or removed.
3. Features by licenses link needs to point somewhere else since Insights is now available to all license editions. Maybe a table like the Excel file where it shows who can use PC, alerts, automatic collection
4. I like the idea of the footnotes, maybe also put a link to what is available to each license edition. We will have problems if this is not specified here.
-->

SPDocKit Insights is designed to allow SharePoint administrators to collect and monitor information about their farm health from:
* SharePoint ULS logs across all farm servers.
* the Windows Application Event log.
* SQL Server error log.
* Performance counters data will also be collected with certain license editions.

If you have more than one farm configured in your SPDocKit database, this feature will allow you to monitor all of your servers, which could be from multiple farms, from one centralized place.
Data is being collected continuously in real-time[*](#realTime) and stored in an index using the SPDocKit Insights Agent. 
SPDocKit Insights enables you to filter and search the gathered log data by various fields (ie. correlation ID, category, source, server, message, event ID ...), make complex queries, and is essentially a search engine for all your log files.
The collected performance data and the associated performance dashboards are also a useful addition to getting a handle on your farm.

## Quick start guide
1. Install and configure SPDocKit on the SharePoint farm you wish to document and manage.
2. On a server outside of the selected farm, [install and configure the SPDocKit Insights Agent](#internal/how-to/spdockit-insights/configure-data-collection/).
3. [Install and configure SPDocKit Insights](#internal/how-to/spdockit-insights/configure-data-collection/) application to start exploring the collected data. You can install SPDocKit Insights on any Windows server or a workstation that is inside a trusted domain.
4. Start [using SPDocKit Insights](#internal/how-to/spdockit-insights/configure-data-collection/).
5. [Configure alerts] to make the most out of the SPDocKit Insights experience.

Please check updated [Features by Licenses](https://www.spdockit.com/orders/features-by-licenses/)[**](#realTime2) overview for this feature availability.


<a name="realTime"></a>*_License edition limitations may apply. Manual load is required to use the log gathering feature._

<a name="realTime2"></a>**_License edition limitations may apply._