---
title: SPDocKit Insights Home
description: The SPDocKit Insights home page gives you an overview of your index's contents as well as a general performance overview regarding your farm health.
author: Vinko Bedek
date: 25/5/2017
---

The SPDocKit Insights home page gives you an overview of your index's contents as well as a general performance overview regarding your farm health.

SPDocKit Insights home page dashboards are __not updated automatically__, and are generated either when the home tab is selected or on application startup.  
__Please note!__ In version 7.2 we added the automatic refresh feature, whith a period that you can modify to suit your needs.

## Event Viewer dashboard

Event Viewer index metrics are shown per farm. If you are monitoring multiple SharePoint farms, the farm select option will be available. Metrics shown here will change depending on the selected farm.

 * __Index size__ - the current size of the data in the index for the selected farm. It is an approximation based on the total number of events in the index. The index size can fluctuate because of how index reorganization works. Also, since the data retention job deletes data day by day, sudden drops in this metric are possible.  
 
* __Entries__ - the current number of events for the selected farm.  

* __Updated on__ - the value shown here is the time when the most recent event collected for the selected farm had originally occurred. 

* __Entries by source__ - a simple pie chart of what is the largest producer of events in the farm. In most cases, this will be the ULS logs. Note that for other values to appear here, Event Log and/or SQL logs collection must be enabled in the settings.

* __Entries by server__ - a simple pie chart showing how the collected events are distributed among the farm servers.

* __Entries by level__ - a simple pie chart showing how the collected events are distributed by the ULS and event log levels.


## Performance dashboard

* __Server health overview__ - a  quick glance at the overall server health. For more details, please use the performance tab. 

* __Top servers by disk space usage__ - top 5 disks by disk space used across all servers, based on the last collected value.

* __Top servers by CPU utilization__ - top 5 servers with highest processor usage based on the last 15 minutes of data collected.
* __Top servers by memory consumption__ - top 5 servers with highest memory consumption based on the last 15 minutes of data collected.