---
description: This article describes the issue of service not being able to read Active Directory properties for group SID(s).
sidebar_position: 9
---

# Service was unable to read Active Directory properties

## Problem

While loading a SharePoint farm the following error message was displayed in the event log:

> The service was unable to read Active Directory properties for Group SID(s):’Group Name’. Check Service permissions.

## Solution

The user running the application needs to be added to the Account Operators Group in order to be able to load the Group properties.

1. Run your **Domain Controller** server. 
2. Navigate to **Start &gt; Administrative Tools &gt; Active Directory Users and Groups**. 
3. Find the user that is running SPDocKit on the user list. 
4. Right-click on it and select **Properties**. 
5. Find the **Member of** tab and click on the **Add** button. 
6. Type in **Account Operators** and click **Apply/OK**.

