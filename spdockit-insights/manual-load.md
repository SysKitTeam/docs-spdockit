---
title: How to manually start event collection
description: >-
  How to use manual load option to gather ULS, windows event log events and sql
  server logs.
author: Vinko Bedek
date: 25/5/2017
---

# manual-load

Depending on the license editions used on the farms that SPDocKit Insights monitors, some features may not be available. For more details, please check [features by license type](https://www.spdockit.com/orders) comparison.

One of these features is continuous event collection. Consultants do not have this functionality since the reasoning behind the consultant license edition is that SPDocKit is not to be continuously used on a farm, but when the need arises.  
But we also recognize the power of searching over indexed events and as such consultants may perform a manual load.

The manual load option will only be visible if your license does not support automatic event collection. It is marked with a little **triangle** icon.

The manual load option is available:

* on the home dashboard if no data has been collected on the current day
* on the search page 

Press it to start manual event collection.

When performing a manual load, you will be prompted on how much historical data to load:

* how far into the past to load
* how much data per server per event type \(ULS, SQL, Event Log\) to load

Reading all of the events and indexing them takes time, so be sure not to load more than necessary for your analysis.  
After the load starts you will be able to monitor the collection progress. Closing this dialog will not stop the load and you can always view the collection progress by clicking the **View Progress** button. The collection progress is also available from the button in the bottom left corner.

Events can still be searched while the manual load is performed, but the load must finish for the new events to appear in the search results.

Once the load finishes all events up to the point where the load started will be available for searching.  
Additional manual loads will either start where the previous load finished, or load the maximum configured amount of data.

