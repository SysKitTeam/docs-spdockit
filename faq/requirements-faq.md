---
title: Requirements FAQ
description: Frequently asked questions about SPDocKit requirements.
author: Iva Novoselic
date: 22/5/2017
---

### Why do I have to install this product on the SharePoint server?

The product uses the SharePoint Server Object Model to retrieve information about your SharePoint farm and it needs to run on the SharePoint server to be able to make API calls. Users running the software need to have proper privileges to do so. [Click here to learn more](#internal/requirements/sharepoint-on-premises-user-permissions-requirements).

### What is the required software to install the SPDocKit?

For more details check our [system requirements](#internal/requirements/system-requirements) page.

### What are the hardware requirements for SPDocKit?

Hardware requirements are the same as the requirements for the underlying operating system. When running and loading farms, the application can use up to 1 GB RAM.

### Problem: Logins other than the current user can only be seen by members of the sysadmin role
Solution: What you need to do is: on every SQL server, give the service account __db_owner__ and __view any database__ permission.  
However, if you do not need or do not wish to load SQL server data, this is how you can disable the load.  
Go to: File > Options > Snapshot Options > Security > Database Permissions