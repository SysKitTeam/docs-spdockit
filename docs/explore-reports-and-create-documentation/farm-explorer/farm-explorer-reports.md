---
description: This article explains Farm Explorer reports.
sidebar_position: 3
---

# Farm Explorer Reports

## Farm

Farm reports contain information about farm topology, site topology, services on servers, application management, security, monitoring and other settings gathered from the SharePoint Central Administration.

## Servers in farm

This section provides your SharePoint administrators with information about servers that are part of the SharePoint farm.

The following information is provided:

* Hardware info, including CPU, memory and disks
* Software info, including all installed applications and available Windows updates
* Local admins list
  * Installed server certificates  

Make sure to check the **Installed Programs and Available Updates** option when taking a snapshot of your farm in order to document and explore these settings.

## IIS reports

IIS reports provide information about application pools, IIS sites and other site settings such as bindings, IIS authentication, SSL settings and more.

Make sure to check in **IIS Settings information** option when taking a snapshot of your farm in order to explore and document these settings.

## SQL Server reports

This section provides information about settings about farm SQL Server, SQL Aliases, SQL Service Accounts and many other SQL Server configuration settings. It also provides an easy overview of the database permissions.

From SPDocKit 7.3. onwards, **Always On** reports are also included in this section and provide information about Groups, Replicas, Databases and Listeners configured in the Always On Availability Groups feature in SQL Server.

Make sure to check in **SQL Server information** option when taking a snapshot of your farm in order to explore and document these settings.

## Project Server

These reports document Microsoft Project Server settings. You will be able to see Project Server sites, security and database information, operational policies, time and task management settings, the projects list, and project permissions.

Make sure to check in **Project Server** options when taking a snapshot of your farm in order to explore and document these settings.

## Scheduled tasks

With the Scheduled Tasks report, SharePoint administrators can more easily visualize important scheduled jobs across the SharePoint farm. This viewer offers the following tasks:

* Crawl schedule overview (full and incremental crawl schedules)
* User profile synchronization
* Audiences compilation
* Content deployment schedules

Jobs will be displayed in a calendar-like format, making these jobs easy to schedule on a daily, weekly, or even monthly basis.

