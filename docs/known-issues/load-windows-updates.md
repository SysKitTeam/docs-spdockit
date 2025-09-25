---
description: SPDocKit is unable to read the list of available Windows updates from your servers.
---

# Available Windows updates

## **Summary**

SPDocKit is unable to read list of available Windows updates while taking a snapshot. This will occur on servers without Internet access that are configured to get Windows updates directly from the Microsoft servers. The same problem may occur if the server is configured to use the Windows Server Update Services \(WSUS\) server but cannot reach it.

**Application Version:** 3.0.0

## **Solution**

The only workaround for this problem is to connect the server to the Internet, which will enable SPDocKit to read the list of available Windows updates.

**Status:** Not resolved.

