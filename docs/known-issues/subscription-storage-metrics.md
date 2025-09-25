---
description: The Storage Metrics report is unavailable for subscriptions.
sidebar_position: 10
---

# Storage Metrics report subscription

## Summary

The main reason that this report cannot be used as a subscription is the sheer volume of data that would result if all nodes were to be expanded.

Notice that the Expand All command for this report is disabled. Every time a node in the report is expanded, the SharePoint API is queried for that content. The performance hit is negligible when expanding nodes manually, node by node. If we were to expand all the nodes at once, it would likely consume all resources available on the server. Also, the exported pdf would be large and not easily viewable.

The only way that the subscription feature would work is if the number of levels it expanded were severely limited when sending a subscription. e.g. the site collection size level. Anything lower would risk triggering too many SharePoint calls.

We believe that limiting the report when used as a subscription in such a way would render it useless, so we decided to rather not have it available at all for subscriptions.

**Application version:** 5.0.1.

## Solution

Currently there is no workaround for this issue.

**Status:** Not resolved.

