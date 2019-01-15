---
title: SPDocKit 7.2.1 - Release Note
description: This article describes improvements and bug fixes delivered in SPDocKit 7.2.1
author: Tomislav Sirovec
date: 12/12/2017
---

# spdockit721-release-note

This is a service release containing minor bug fixes.

**Product version:** 7.2.1  
**Build number:** 9389  
**Release date:** Dec 14, 2017

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Bug fixes:

* Fixed an issue where you were not able to set up the service account properly. Before finishing the configuration, the wizard would sometimes fail with the error message: 

  **“System.TimeoutException: This request operation sent to net.pipe://localhost/SysKit/ServiceConfiguration did not receive a reply within the configured timeout \(00:01:00\)”** or **“There was no endpoint listening at net.pipe://localhost/SysKit/ServiceConfiguration that could accept the message.”**

* Fixed an issue where HTML reports such as Content Types Hierarchy or Content Overview were sometimes not displayed due to an incorrectly configured browser emulation. 
* Fixed an issue with documenting externally shared sites or content. Microsoft recently changed how external sharing for SharePoint Online works. This fix reflects those changes. More information on external sharing can be found [here](https://techcommunity.microsoft.com/t5/OneDrive-Blog/Introducing-a-new-secure-external-sharing-experience/ba-p/112624).
* Fixed an issue with not displaying all SharePoint Online site collections when the tenant contained more than 1500 site collections.

[Click here to download the new release.](https://www.spdockit.com/downloads/)

