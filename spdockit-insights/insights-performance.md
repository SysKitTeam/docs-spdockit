---
title: SPDocKit Insights Performance 
description: Detailed overview on how the SPDocKit Insights collects and presents farm performance data.
author: Hrvoje Bagarić
date: 29/5/2017
---

SPDocKit Insights collects performance data by default. This behavior can be modified in the settings. Additionally user can change the performance data collection interval. The default value is 60 seconds.

Please check the [feature availability by license type](https://www.spdockit.com/orders/features-by-licenses/).

The SPDocKit Insights Agent relies on performance counters to monitor the server performance. The SPDocKit Insights calculates the following server status:

- Healthy – colored green
- Warning – colored yellow
- Critical – colored green
- Offline or not accessible – colored grey

The server is in critical state if atleast one metric collected is in critical state, in warning state if at least one metric is in warning state and none of the other metrics are in critical state, and the server is in healthy state if there are no metrics in warning or critical state.

The individual metrics are calculated based on their average value during the last 15 minutes. By using this approach the SPDocKit Insights can ignore short spikes in activity.

When the user is located on Performance tab of SPDocKit Insights a help link will be show. Following that link user can see all the details about the metrics SPDocKit Insights Agent collects. The description of each metric, warning and error thresholds are listed (where applicable).


## The Farms Performance Overview Dashboard

The farms performance overview dashboard shows all farms currently monitored by SPDocKit Insights Agent. It shows status for each server in those farms. Additionally it displays main performance metrics (CPU usage, RAM usage, network usage and disk usage) for each server in a concise manner. Users can choose between three different views: Compact, Tiles, Grid. All views display the same data just in different format. The dashboards are continuously updated as the new data is collected.

Sometimes the server will be shown in warning or critical state when none of the four general metrics are in warning or critical state. This indicates that some of the metrics which are not shown on the main dashboard are in critical or warning state.

By clicking on farm name users can navigate to detailed farm overview dashboard and by clicking on specific server the users can navigate to server overview dashboard.

## The Detailed Farm Overview Dashboard

The detailed farm overview dashboard shows more in-depth data about each server in the farm but is limited to just a single farm. Users can view last fifteen minutes of CPU usage, current RAM usage and status of each disk partition on specific server. This dashboard is also continuously updated as the new data is collected. By clicking on specific server users can navigate to Server Overview Dashboard.

## The Server Overview Dashboard

The server overview dashboard shows all metrics that are collected for each server. The metrics are separated in different categories. The server role in the SharePoint farm determines which categories are assigned to each serve. The categories are assigned to a server following these rules:

- __General__ and __Disk__ categories – these categories are assigned to all servers, and the metrics in those categories are collected for every server in farm. The General category shows CPU, RAM, network and disk usages while the Disk category shows detailed information about disks performance

- __IIS__ category – this category is assigned only to a SharePoint Frontend server. These metrics show the usage of IIS on each Frontend server.

- __.NET__ category – this category is assigned to all non-SQL SharePoint servers. The metrics in this category show how the processes on each non-SQL SharePoint server are using .NET framework capabilities.

- __SQL__ category – this category is assigned to all SQL servers in SharePoint farms. Each server in Always-On cluster is included as well. These metrics are show the SQL server performance.

If the metric is in warning or critical state the notification above the metric name will indicate the problem. It will tell how the metric crossed the threshold value. The status of each metric is calculated based on average in the last fifteen minutes. The status of metrics for which the warning or critical thresholds are not defined will not be calculated.

The users can change the time range to view older data. By default SPDocKit Insights shows data collected during the last sixty minutes. The metric status is still calculated based on the last 15 minutes.

The Server Overview Dashboard is not continuously updated as the new data is collected, it shows values during the specified time range.