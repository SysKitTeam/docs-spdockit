---
description: This article explains how to perform a migration from SPDocKit Insights to Syskit Insights.
sidebar_position: 9
---

# SPDocKit Insights Migration

**Syskit Insights** is an upgraded version of SPDocKit Insights and comes with a **range of improvements and new features.** The customers using SPDocKit Insights can migrate some of the data to Syskit Insights.

When migrating from SPDocKit to Syskit Insights it is important to perform the following steps - the guide assumes using the same server for SPDocKit Insights and Syskit Insights:

1. Uninstall SPDocKit Insights. **Note:** do not delete SPDocKit SQL database or index folder.
2. Install Syskit Insights.
3. During Syskit Insights Database Configuration step do not use SPDocKit’s SQL database (do not overwrite SPDocKit’s SQL database). Instead, you need to create a new **Syskit Insights dedicated database.**
4. Select the same index folder as the one used by SPDocKit Insights.  
5. Finish Syskit Insights Configuration Wizard and start the application.
6. When prompted to add farm/s to Syskit Insights, use Import From SPDocKit option.
7. Point to **SPDocKit’s** SQL database when asked.

Finish import of all farm/s from SPDocKit.

This migration path allows users to retain their event data (stored in the index), as well as the farms added to SPDocKit. Unfortunately, there is no way to transfer historic Performance Counters data from SPDocKit Insights to Syskit Insights. Syskit Insights will start collecting Performance Counter data from the moment when the farms and servers were imported.

If you haven't already - [download Syskit Insights](https://www.syskit.com/products/insights/download/) and tell us what you think! We would love to hear from you :)

