---
title: Search Alerts
description: How to use alerts
author: Vinko Bedek
date: 22/5/2017
---


SPDocKit Insights provides the ability to be notified when a search query is satisfied. This is done as the events are being collected from the servers. When defining alerts, you can target a single farm, or apply the alert to all farms contained within the SPDocKit database. Once sent, the alert for a farm will not be evaluated again within a certain back off time period, which you can configure. Without the back off period, mailboxes would suffer greatly once a problem arises.

Outgoing email settings must be configured to use the alerting feature. To configure the outgoing email settings please use SPDocKit.

1. Start SPDocKit.
2. Select Options from the start page.
3. Select the Subscription Settings tab.
4. Configure the Outgoing email settings.
5. Once saved, SPDocKit Insights can start sending alerts.

Navigate to the search page to use the SPDocKit Insights alerting feature:  
1. The alerts screen is available from the upper right corner.
    - Lists all of the alerts, including the last time executed.
    - Provides history of executed alerts.
2. An alert can be created for the current query from the search results.

This feature is not available in all license types. Please check [feature availability by license type.](https://www.spdockit.com/orders/features-by-licenses/)_



