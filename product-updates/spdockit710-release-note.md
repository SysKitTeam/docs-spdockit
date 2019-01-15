---
title: SPDocKit 7.1.0 - Release Note
description: This article describes improvements and bug fixes delivered in SPDocKit 7.1.0
author: Tomislav Sirovec
date: 6/9/2017
---

# SPDocKit 7.1.0

We are proud to present a new, refreshed version of **SPDocKit**. To stay in line with our product rebranding process, SPDocKit now comes with a refreshed palette of colors and a new set of icons! We felt like a change was needed, and with a move to a new office space, we decided to do a bit more than just remodeling and changing our address. In the rebranding process, we’ve gone all out by changing the the logo and names of all our products **except** SPDocKit's.

You can read the backstory on these changes in the [Rebranding Announcement](https://www.spdockit.com/blog/rebranding-announcement-we-are-syskit-act-1-scene-3-action/) blog post.

This release brings a dozen of improvements and a few bug fixes. Most noticeably, we redesigned how we load **Features and Solutions**, so you should see quite an improvement on load speed. There is also a redesigned **Compare and Configuration wizard**, **faster Live permission explorer for SPO** \(SharePoint Online\), and generally **better handling of SPO sites**.

**Product version:** 7.1.0  
**Build number:** 8768  
**Release date:** Sep 6, 2017

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Improvements

* Improved the way we generate a **pre-saved view** for a given report.
* To help our users better understand some features, we added tooltips in various parts of the applications. 
* **Farm Selection tab** in our Compare wizard has been redesigned to be more user-friendly.
* Take Snapshot button is now consistent across the application and always offers two possibilities: to take a snapshot automatically or manually.
* User Permission reports now show Everyone, All Users, and NT AUTHORITY\authenticated users groups.
* Improved behavior of Add to Existing Subscription/Alert functionality.
* Improved the way AutoSPInstaller works. **The mappings are now saved** so you can go a step back without losing the mappings you made. 
* Added **two new properties** we load from SharePoint Online: SandboxedCodeActivationCapability&

  DisableCompanyWideSharingLinks.

* We are now documenting Office365 Sharing Settings.
* Live Permission Explorer for SharePoint Online **should now be much faster**. 
* Permissions details dialog has been redesigned to be more user-friendly. 
* We completely redesigned how we load **Features and Solutions**. You should see noticeable improvement on load speed.
* **CW \(Configuration Wizard\)** has also been redesigned—in short, we made it a lot faster. 
* Improved the way we handle Single-Server Farms.
* Better handling when discovering tenant sites and connecting to SharePoint Online in general.
* **You can now delete the entire tenant at once**. Also, we improved our Edit functionality so you can more easily manage your sites. 
* Project server load now has **better error handling** when Project owner is missing or when Site Collection load error happens. 
* If an error happens during the load, the error message will now show more relevant information, including the InnerException. 
* There is now an Audit settings button on the Permissions Audit report. You can use it to configure audit settings for a selected site collection. 
* There is now a **progress indicator** when loading a site collection with two or more subsites.
* Many other user interface improvements.

## Bug fixes

* System Permissions are no longer shown for SharePoint Online sites.
* Fixed an issue where database check box could not be selected after going through the Configuration Wizard.
* Date and Time fields in reports will now be in your **local time format**. 
* Resolved an issue with the creation and renaming of the Best Practice folder. 
* Resolved an issue where loading a certain site collection would result in a timeout.
* Resolved a bug on a **Data Range Filters** tooltip.
* Resolved an issue with our scheduled task control; more precisely, with incremental crawl duration time. Also improved the look of the **Scheduled Tasks** report. 
* Resolved an issue where the entire load would not finish if a site owner was not successfully loaded.
* Resolved an issue regarding loading SharePoint Online site collection when there is a deleted Office365 group or Teams group.
* **App Services Configured** best practice now correctly shows which service is running.
* If you are not using the service, you will no longer be prompted for service account credentials when upgrading to a new version. 
* Resolved an issue where some reports would crash if there was a recursive group on the site. 
* Resolved an issue affecting **those not having local admin privileges** on an SQL server when loading SQL Server reports. 
* Resolved an issue where some reports would not show data properly due to SharePoint having a localized language pack. Affected reports were List of Site Visitors, Feature Usage by Edition, Site Collection Features, Web Application Features, and Subsite Features.
* Resolved an issue where **WMI hang** would cause the load to never finish. 
* Resolved an issue with sending an automatic subscription if the snapshot was saved locally to a disk. 

## Articles

* We updated our help and best practice articles; more precisely, [TempDB Files Configuration](https://docs.syskit.com/bp/v1/databases/tempdb/files-configuration/) and [Object Cache User Accounts](https://docs.syskit.com/bp/v1/web-applications/caching/object-cache-user-accounts/). 
* There is an issue with the UPA load if the audience compilation job is in progress while loading, so we have written a known issue [article](spdockit710-release-note.md#internal/known-issues/spdockit-reporting-upa-changes).
* When loading, some users receive the error, “The RPC server is unavailable.” There is now an [article](https://docs.syskit.com/spdockit/v7/faq/troubleshooting/rpc-server-unavailable/) to help you troubleshoot.

