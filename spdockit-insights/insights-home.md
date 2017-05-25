---
title: SPDocKit Insights Home
description: The SPDocKit Insights home page gives you an overview of the structure of your index as well as a general performance overview regarding your farm health.
author: Vinko Bedek
date: 25/5/2017
---

The SPDocKit Insights home page gives you an overview of the structure of your index as well as a general performance overview regarding your farm health.

Please note that the SPDocKit home page dashboards are not updated automatically, and are currently generated only when the application has been started, or when the home tab is selected again. 

## Search Index Dashboard

Search index metrics are shown per farm.
If monitoring a single farm, no farm select option will be present.  

### Index Size
This is the current size of the data in the index for the selected farm. It is an approximation based on the total number of events in the index. The index size can fluctuate because of how index reorganization works. Also since the data retention job deletes data day by day, sudden drops in this metric are possible. 

### Entries
The current number of events for the selected farm. 

### Updated On
The value shown here is the time when the most recent event collected for the selected farm had originally occurred. 

### Entries by Source
A simple pie chart of what is the largest producer of events in the farm. In most cases, this will be the ULS logs. Note that for other values to appear here, Event Log and/or SQL logs collection must be enabled in the settings.

### Entries by Server
A simple pie chart showing how the collected events are distributed among the farm servers.

#Entries by Level
A simple pie chart showing how the collected events are distributed by the ULS and event log levels.


## Performance Dashboard

### Server Health Overview
A quick glance at the overall server health. For more details, please use the performance tab. 

### Top Servers by Disk Space Usage
Top 5 disks by disk space used across all servers, based on the last collected value.

### Top Servers by CPU Utilization
Top 5 servers with highest processor usage based on the last 15 minutes of data collected.

### Top Servers by Memory Consumption
Top 5 servers with highest memory consumption based on the last 15 minutes of data collected.