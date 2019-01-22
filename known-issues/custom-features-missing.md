---
title: Custom features missing in reports
description: Custom features deployed on your farm are missing in SPDocKit feature reports.
author: Iva Novoselic
date: 25/5/2017
---

# Custom features missing in reports

## **Summary** 

Custom features deployed on your farm are missing in SPDocKit feature reports. If verbose logging is enabled inside SPDocKit Options, you will see the following errors in the Windows event logs:

> Microsoft.SharePoint.SPException: Failed to find the XML file at location ’14\Template\Features\CustomFeatureName\feature.xml’\`

This happens when the custom feature is not deployed on the farm server where SPDocKit is installed. For instance, if the custom feature is deployed only to WFE servers while SPDocKit is installed on your APP server.

**Application version:** 4.1.0 and newer.

## **Solution**

Install SPDocKit on and run the load process from a server where the custom features are deployed.

**Status:** Not resolved.

