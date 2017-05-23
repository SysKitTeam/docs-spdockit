---
title: Error: Inbound traffic on TCP Port 1433 needs to be allowed on the SQL Server.
description: This article explains how to allow inbound traffic on TCP port 1433.
author: Mia Tomaić
date: 19/5/2017
---

## Problem:
Port 1433 is closed on the SQL server.
## Solution:
Inbound traffic on TCP Port 1433 needs to be allowed on the SQL server.
1. Connect to your **SQL server**.
2. Open the Windows firewall.
3. Click on **Inbound Rules**.
4. Select **New Rule**.
5. Select the Port type of the rule.
6. Specify the ports 1433 and 1434 to which this rule applies inside the Specific local ports area. In this case, 1433 stands for the SQL server, and 1434 for the SQL server browser.
7. In this step, leave the default selection: Allow the connection.
8. Select the profiles for which this rule applies.

**Note:** *If the SQL server is in the same domain with other servers and you wish to open this port only for the domain traffic, it is enough to select Domain. For other scenarios use the Private or Public profile option.*

9. Specify the name and the description of this rule.
10. Inbound traffic on the SQL server is now allowed and SQL connection should be available!