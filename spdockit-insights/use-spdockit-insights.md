---
title: How to use SPDocKit Insights
description: How to use SPDocKit Insights
author: Vinko Bedek
date: 22/5/2017
---

# use-spdockit-insights

This article gives a basic overview of how to use SPDocKit Insights.

Start SPDocKit Insights:

* From the Windows start menu.
* If SPDocKit was installed with SPDocKit Insights, SPDocKit Insights is available from the SPDocKit Action page.
* Using Insights ribbon available on each SPDocKit tab.

The home screen of SPDocKit Insights shows some statistical data about the event collection process and an overview of performance data collected.

## Use SPDocKit Insights Event Viewer to search for events

1. Select the Event Viewer tab in the left navigation. 
2. Select the farm for which you wish to perform the search.
   * Selecting a farm is only available if multiple farms are used with the same SPDocKit database.
3. Select the time range in which to search for events.
   * Please limit the range as much as possible for optimal performance. 
4. Enter your search query. Click [here](use-spdockit-insights.md#internal/spdockit-insights/search-query-guide/) for more details on writing a search query.
5. An empty query \(all events within the specified time range\) is also supported, but use sparingly or on small time ranges. Just click search or press the enter key.

### Viewing results

By default, SPDocKit Insights uses a layout similar to a search engine to display the results. This layout can be changed to a more compact grid layout by using the dropdown button just below the search button. The results can also be exported to an Excel file.

### Refining your query

1. You can refine your query by:
   * Type of event \(ULS, Event Log, SQL\)
   * Additional refiners such as Server, Level are positioned to the left and will modify the query text.
   * Clicking on terms in the search results will also modify the query text.
     * for the compact grid layout expand the search result for this functionality to be available.
2. When satisfied with the constructed query, press the search button again.

### Alerts

You have created a very useful query and would like to be notified when an event that satisfied this query appears? No problem, just create an alert[\*](use-spdockit-insights.md#licenseLimitations) by clicking the alert button on the search results page. Click [here](use-spdockit-insights.md#internal/spdockit-insights/search-alerts) for more details.

## Use SPDocKit to view farm performance

SPDocKit Insights collects performance data[\*](use-spdockit-insights.md#licenseLimitations) by default. This behavior can be modified in the [settings](use-spdockit-insights.md#internal/spdockit-insights/customize-settings/).  
To view the collected data, select the [Performance](use-spdockit-insights.md#internal/spdockit-insights/insights-performance) tab in the left navigation.  
The default dashboard has three views: 1. Compact 2. Tiles 3. Grid

Most performance counters collected have a warning and critical limit based on the values collected within a certain time period. This will impact the displayed status of the server on the dashboards. Since most counters are not visible on the main dashboard, additional dashboards with more details are available:

* Clicking on the farm name leads to the **farm dashboard**.
* Clicking on a server \(double click for the grid view\) leads to the **detailed server view**.

In the detailed server view historical collected performance counter data can be explored. Unlike the other views and dashboards, the detailed view will not have data automatically refreshed.

\* _Please check_ [_feature availability by license type._](https://www.spdockit.com/orders)

