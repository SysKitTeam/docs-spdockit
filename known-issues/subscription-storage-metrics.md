---
title: Cannot create a subscription for the Storage Metrics Report
description: This article describes a known issue related to Stroage Metrics subscriptions.
---

__Summary:__ The main reason that this report cannot be used as a subscription is the sheer volume of data that would result if we were to expand all of the data.

Notice also that the Expand All command for this report is disabled. Every time a node in the report is expanded, we are querying SharePoint for that level of content. The performance hit is negligible if you expand it manually node by node. But if we were to expand it all at once, it would likely consume all the resources available. Also, the exported pdf would be quite large and not easily viewable.

The only way that the subscription feature would work is if we were to limit the number of levels it could be expanded when sending a subscription. e.g. the site collection size level. Anything lower would trigger a lot of SharePoint calls.

We believed that such a limiting feature to the subscription of this report would limit the usefulness of the report, so we scrapped the idea.

__Application version:__ 5.0.1.

__Solution:__ Currently there is no workaround for this issue.

__Status:__ Not resolved.