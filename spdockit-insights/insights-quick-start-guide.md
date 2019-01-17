---
title: SPDocKit Insights
description: General SPDocKit Insights information
author: Vinko Bedek
date: 17/5/2017
---

# Quick Start Guide

SPDocKit Insights is designed to allow SharePoint administrators to collect and monitor information about their farm health from:

* SharePoint ULS logs across all farm servers.
* the Windows Event logs: Application, Security, Setup, System, Forwarded events.
* SQL Server error log.
* Performance counters data will also be collected with certain license editions.

This feature will allow you to monitor all of your servers, which could be from multiple farms, from one centralized place. Data is being collected continuously in real-time and stored in an index using the SPDocKit Insights Agent. SPDocKit Insights enables you to filter and search the gathered log data by various fields \(ie. correlation ID, category, source, server, message, event ID ...\), make complex queries, and is essentially a search engine for all your log files. The collected performance data and the associated performance dashboards are also a useful addition to getting a handle on your farm.

## Quick start guide

1. Install and configure SPDocKit on the SharePoint farm you wish to document and manage.
2. On a server outside of the selected farm, [install and configure the SPDocKit Insights Agent](../spdockit-insights/configure-data-collection.md).
3. [Install and configure SPDocKit Insights](../spdockit-insights/configure-data-collection.md) application to start exploring the collected data. You can install SPDocKit Insights on any Windows server or a workstation that is inside a trusted domain.
4. Start [using SPDocKit Insights](../spdockit-insights/use-spdockit-insights.md).
5. [Configure alerts](../spdockit-insights/search-alerts.md) to make the most out of the SPDocKit Insights experience.

Please check updated [Features by Licenses](https://www.spdockit.com/orders) overview for this feature availability.

