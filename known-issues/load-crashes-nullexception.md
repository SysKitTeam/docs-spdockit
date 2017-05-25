---
title: Load crashes with NullReference exception
description: This article expalins the possible cause of the farm load crash with NullReference exception.
author: Iva Novoselic  
date: 25/5/2017
---

__Summary:__ Upon inspecting the event log after a failed load, the following exception can be found:

`TSystem.NullReferenceException: Object reference not set to an instance of an object.
at Acceleratio.SPDocKit.Administration.SharePointCrawler.#LJ.#CxF()`


This happens when SPDocKit tries to enumerate the site collections in a Web application and, because of possible farm misconfigurations, they are not properly available using the SharePoint API. To confirm that this is the case, check your site collections using Central Administration and also by using Powershell.

`Get-SPWebApplication [WebAppUrl] | Get-SPSite –Limit All`

You should see a discrepancy between the two lists if this is indeed the reason for the load crash.

__Application Version:__ 3.0.0 and newer

__Solution:__ Please check your farm and site collections for any misconfigurations. One of the causes could be a missing managed path or a managed path of the wrong type. If the issue persists, contact our support team for the more detailed troubleshooting.

__Status:__ Not resolved.