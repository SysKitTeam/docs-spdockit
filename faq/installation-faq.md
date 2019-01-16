---
title: Installation FAQ
description: Frequently asked questions about SPDocKit installation.
author: Iva Novoselic
date: 22/5/2017
---

# Installation

## Is the installation file the same for different SharePoint versions?

Yes, the same installation file can be used to install SPDocKit on any SharePoint version or to a workstation.

## Does the installation / upgrade require a server restart?

No, unless you’re updating Microsoft .NET Framework, in that case Microsoft .NET Framework requires a restart.

## Error: Service won't start or times out when starting.

I’m trying to start SPDocKit service but it will not start. The following error events appear in the application log:

> Timeout \(30000 milliseconds\) waiting for a transaction response from the ‘ServiceName’ service.

or

> A timeout was reached \(30000 milliseconds\) while waiting for the ‘ServiceName’ service to connect.

or

> The ‘ServiceName’ service failed to start due to the following error: ‘The service did not respond to the start or control request in a timely fashion.’

Here is what to do:

1. Click Start, click **Run**, type **regedit**, then click OK.
2. Locate then click the following registry subkey: HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Control
3. In the right pane, locate the **ServicesPipeTimeout** entry.

Note: If the ServicesPipeTimeout entry does not exist, you must create it. To do this, follow these steps:

1. On the Edit menu, point to New, then click DWORD Value.
2. Type ServicesPipeTimeout, and press ENTER.
3. Right-click ServicesPipeTimeout, then click Modify.
4. Click Decimal, type 360000, then click OK.

   This value represents the time in milliseconds before a service times out.

5. Restart the computer.

## How do I set up SPDocKit?

SPDocKit supports SharePoint 2010, SharePoint 2013 and SharePoint 2016 server. [See more details here.](../requirements/system-requirements.md) Check out our [installation guide](../installation/installation-guide.md) and the followup, the [configuration guide](../configuration/configure-spdockit.md). Once you have installed everything you can [take a snapshot](../create-sharepoint-farm-snapshots/manual-snapshots.md) of your farm.

## If I choose the “Run only” option in SPDocKit, what happens?

If you choose “Run only”, the following features will not be available:

* SPDocKit Service and all automatic features
* Permissions Explorer History
* Site Explorer History
* Permissions Reports
* Content and Usage Reports
* Queries and Rules
* Subscriptions and alerts

## Can we install SPDocKit on a workstation?

You can install SPDocKit on a workstation and generate documentation from it, but to gather data you will still need to run or install the tool on the actual SharePoint server. SPDocKit needs to be installed on the SharePoint server to load data because there aren’t any APIs available from workstations.

## Is it difficult to install SPDocKit?

The application is easy to install — the Installation Wizard will guide you through it. If you need help with the deployment please [contact us](https://www.syskit.com/company/contact-us/) so we can provide you with the adequate support.

## How much hard disk space is required for the installation?

A full installation takes around 300MB of disk space, but if you decide to store farm snapshots locally additional disk space will be required for them.

