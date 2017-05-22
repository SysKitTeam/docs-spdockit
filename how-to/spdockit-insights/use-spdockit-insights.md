---
title: Use SPDocKit Insights
description: How to use SPDocKit Insights
author: Vinko Bedek
date: 22/5/2017
---


Start SPDocKit Insights:
- From the Windows start menu.
- If SPDocKit was installed with SPDocKit Insights, SPDocKit Insights is available from the SPDocKit start page.

The initial screen of SPDocKit Insights shows some statistical data about the event collection process and an overview of performance data collected.

## Use SPDocKit Insights to search for events

1. Select the search tab in the left navigation. 
2. Select the farm for which you wish to perform the search.
    - Selecting a farm is only available if multiple farms are used with the same SPDocKit database.
3. Select the time range in which to search for events.
    - Please limit the range as much as possible for optimal performance. 
4. Enter your search query. Click [here](#internal/how-to/spdockit-insights/search-query-guide/) for more details on writing a search query.
5. An empty query (all events within the specified time range) is also supported, but use sparingly or on small time ranges.

## Viewing results
By default, SPDocKit Insights uses a layout similar to a search engine to display the results. This layout can be changed to a more compact grid layout by using the dropdown button just below the search button. The results can also be exported to an Excel file.

### Refining your query
1. You can refine your query by:
    - Type of event (ULS, Event Log, SQL)
    - Additional refiners such as Server, Level are positioned to the left and will modify the query text.
    - Clicking on terms in the search results will also modify the query text.
2. When satisfied with the constructed query, press the search button again.

### Alerts
You have created a very useful query and would like to be notified when an event that satisfied this query appears? No problem, just create an alert by clicking the alert button on the search results page. For more details click [here](#internal/how-to/spdockit-insights/search-alerts)
        
## Use SPDocKit to view farm performance


