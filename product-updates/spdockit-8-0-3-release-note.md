---
title: SPDocKit 8.0.3 — Release Note
description: This article describes improvements and bug fixes delivered in SPDocKit 8.0.3
author: Igor Mesarić
date: 16/11/2018
---

This is a service release containing minor improvements and bug fixes. 

__Product version:__ 8.0.3  
__Build number:__   10628     
__Release date:__ Nov 16, 2018    

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Improvements:
* Improved error handling when loading SP2019 IIS Settings Information. For more information read the following [article](#internal/troubleshooting/server-load-and-user-permissions/error-while-loading-iis-settings.md)
* Improved error handling when opening snapshots.
* Improved error loging in the Event log. 

## Bug fixes:
* Resolved an issue where the Analytics system job would cause an error when loading site collections with duplicate GUIDs.
* Fixed an issue where an incorrect Last Modified date was displayed on Inactive Sites report.
* Fixed an issue where the System Account would be displayed as Unknown in the Audit Log Details report. 
* Resolved an issue with the DB Server Hotfixes report which wrongly displayed non-database servers in single server environments. 
* Fixed a bug where the Date Range was erroneously exported from Audit Log Details and Administrative Actions reports.
* Resolved an issue where the app would throw a smart error when trying to load an SP2007 snapshot.
* Fixed a bug where the ESC key would cause a smart error if pressed in specific situations in the Options dialog. 
* Fixed a bug where a smart error would show when saving passwords to a snapshot from the Passwords and Product Keys reports.
* Fixed a bug where a special character (Hex 0x1B) would cause an error when exporting the Dead Documents report. 
* Resolved an issue with the project server load on SP2019 environments.
    