---
title: I am receiving ”The service was unable to read Active Directory properties for Group SID(s): ‘Group Name'”.
description: Server Load Requirements for SPDocKit
author: Mia Tomaić
date: 18/5/2017
---

# I am receiving ”The service was unable to read Active Directory properties for Group SID(s): ‘Group Name'”.

## Problem:
While loading a SharePoint farm the following error message was displayed in the event log:
> *The service was unable to read Active Directory properties for Group SID(s):’Group Name’. Check Service permissions.*

## Solution:
The user running the application needs to be added to the Account Operators Group in order to be able to load the Group properties.
1. Run your **Domain Controller** server.
2. Navigate to **Start > Administrative Tools> Active Directory Users and Groups**.
3. Find the user that is running the SPDocKit on the user list.
4. Right-click on it and select **Properties**.
5. Find the **Member of** tab and click on the **Add** button.
6. Type in **Account Operators** and click **Apply/OK**.