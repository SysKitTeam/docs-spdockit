---
description: This article describes new features, improvements and bug fixes delivered in SPDocKit 10.
---

---
sidebar_position: 4
---

# SPDocKit 10

**SPDocKit 10** is a major release containing many highly requested features. At Syskit, it's still giving season, so scroll down to find your new gifts!

**Product version:** 10.0.0  
**Build number:** 11391  
**Release date:** Jan 15, 2020

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Features

* **New Property Bag reports available!** When dealing with custom solutions deployed in your SharePoint farms, you need to monitor how their configuration is changing through time. This comes in handy, especially in situations where something is suddenly not working right. To help you with such scenarios, we bring you **three new reports to monitor Property Bag values** where custom solution settings are usually saved. You can find the **Farm Property Bag**, **Web Application Property Bag**, and **Site Collection Property Bag** reports in the Farm Explorer. 
* **New Search Reports available!** **Six additional reports** inside the Search Service Application report set will help you have a better overview of your Search configuration. The new reports now available are – **Result Sources**, **Query Client Types**, **Query Rules**, **Query Rule Conditions**, **Query Rule Results**, and **Crawler Impact Rules**. As with all Farm Explorer reports, you can schedule alerts to notify you of any changes or subscriptions to periodically document the Search configuration in your SharePoint farm.    
* **New Analytics Time Period filter options on Analytics reports!** Per our users’ requests, Farm Analytics, Site Collection Analytics, and Subsite Analytics reports now have additional Analytics Time Period filter options – you can now view analytics data and trends in the **last 7**, **30**, **60**, **90**, and **120 days** to help you discover what content is being actively used in your SharePoint farm. 
* **Excel exports now support header and footer customizations!**  When exporting to excel, **headers and footers defined in Report Options are also exported**.  

## Improvements

* **The Last Activity column has been added to the Site Collection Visitors report.** Combined with the Date Range filter it is now easier to find inactive users on a specific site collection. 
* **Last Modified By**, **Last Modified By Email**, and **Last Modified By Login** columns have been **added to the Recently Modified Documents report**. 
* **URL column added to the Subsite Features report**. 
* Added **Extra spacing after each heading** option available when generating Best Practices documentation. 
* **Data Retention Policy now applies to the backups of Solution Files** \(.wsp\). As with Snapshots, now, the Solution Backup Files will be deleted if they are older than what is defined in the data retention policy. 

## Bug Fixes

* Fixed an issue where the Best Practices Dashboard report could not be scheduled, which resulted in the following error when sending the subscription:  `Invoke or BeginInvoke cannot be called on a control until the window handle has been created.` 
* Fixed a bug where searching through a report in the Web Application level on the Permissions Explorer would cause the app to crash in some cases. 
* Fixed an issue where the Farm Differences subscription did not work properly for XLSX format type. 
* Fixed a bug where SharePoint 2019 was erroneously displayed as SharePoint 2016 in the Farm Explorer Product Keys report. 
* Fixed a problem with audit settings rules and queries in SharePoint 2019 environments where the Opening, Downloading, Viewing Items, or Viewing Item Properties audit setting was displayed, although it is not available in SharePoint 2019. Running such rules or queries that accessed the missing audit property resulted in an error. 
* Fixed an issue where the Site Collection Visitors report data did not match the number of visitors displayed in the Site Collection Analytics report. 
* Fixed a bug where generated AutoSPInstaller XML files couldn't be imported to [https://autospinstaller.com/](https://autospinstaller.com/) because of a version mismatch.  
* Fixed a bug with SPDocKit Workstation edition where List Items were not displayed when viewing SharePoint objects in the Permissions Explorer. 

