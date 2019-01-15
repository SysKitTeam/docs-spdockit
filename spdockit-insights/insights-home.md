---
title: SPDocKit Insights Home
description: >-
  The SPDocKit Insights home page gives you an overview of your index's contents
  as well as a general performance overview regarding your farm health.
author: Vinko Bedek
date: 25/5/2017
---

# Insights Home

The SPDocKit Insights home page gives you an overview of your index's contents as well as a general performance overview regarding your farm health.

SPDocKit Insights home page dashboards are **not updated automatically**, and are generated either when the home tab is selected or on application startup.  
**Please note!** In version 7.2 we added the automatic refresh feature. Available \(dropdown\) values are: no refresh, 1, 2, 5 or 10 minutes.

## Event Viewer dashboard

Event Viewer index metrics are shown per farm. If you are monitoring multiple SharePoint farms, the farm select option will be available. Metrics shown here will change depending on the selected farm.

* **Index size** - the current size of the data in the index for the selected farm. It is an approximation based on the total number of events in the index. The index size can fluctuate because of how index reorganization works. Also, since the data retention job deletes data day by day, sudden drops in this metric are possible.  
* **Entries** - the current number of events for the selected farm.
* **Updated on** - the value shown here is the time when the most recent event collected for the selected farm had originally occurred.
* **Entries by source** - a simple pie chart of what is the largest producer of events in the farm. In most cases, this will be the ULS logs. Note that for other values to appear here, Event Log and/or SQL logs collection must be enabled in the settings.
* **Entries by server** - a simple pie chart showing how the collected events are distributed among the farm servers.
* **Entries by level** - a simple pie chart showing how the collected events are distributed by the ULS and event log levels.

## Performance dashboard

* **Server health overview** - a quick glance at the overall server health. For more details, please use the performance tab.
* **Top servers by disk space usage** - top 5 disks by disk space used across all servers, based on the last collected value.
* **Top servers by CPU utilization** - top 5 servers with highest processor usage based on the last 15 minutes of data collected.
* **Top servers by memory consumption** - top 5 servers with highest memory consumption based on the last 15 minutes of data collected.
