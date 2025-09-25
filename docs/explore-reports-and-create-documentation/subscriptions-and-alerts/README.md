---
description: This article explains how to use Subscriptions and Alerts to schedule sending SPDocKit reports.
sidebar_position: 7
title: Subscriptions and Alerts
---

<DocCardList />

# Subscriptions and Alerts

This article explains how to use Subscriptions and Alerts to schedule sending SPDocKit reports to either the desired email addresses, or for upload to a file share location or a SharePoint document library. In order to use this feature, you have to configure an SPDocKit database and the subscription settings, as well as select the delivery methods you prefer.

Schedule report subscriptions and alerts to receive them on daily, weekly, monthly or quarterly schedule, or even immediately after a snapshot is made by the service. The SPDocKit Service will send them periodically at the configured time. SPDocKit Alerts will be sent if any changes are detected in the selected Best Practices or difference reports.

You can locate the Subscription and Alerts manager on the backstage, under the Configuration tab.

In the main grid, you can see all created subscriptions and alerts, their destination locations (to whom or where) and when they were last sent on. All subscriptions are grouped depending on the range type – immediately after the service snapshot, daily, monthly, weekly or quarterly.

Alerts will be marked with the bell icon, while the scheduled subscriptions will have the open letter icon. Here you can:

* Create new subscription to schedule preferred reports
* Create new alerts for the selected SharePoint objects or best practices reports
* Change existing subscription or alert settings by clicking the Edit button
* Delete previously created subscriptions and alerts
* Manually send specific subscriptions and alerts by clicking on Send Email Now
* Adjust the time when these subscriptions will be sent and outgoing email server settings
* Search through the listed subscriptions and alerts.

## Related articles

* [Configure SPDocKit database](../../configuration/configure-spdockit-database.md)
* [Configure subscription settings](../../configure-and-extend-spdockit/options-wizard.md#subscription-settings)
* [How to create a new subscription](create-new-subscription.md)

import DocCardList from '@theme/DocCardList';


