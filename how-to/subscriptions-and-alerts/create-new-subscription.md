---
title: Create New Subscription
description: >-
  This section describes how to create scheduled subscriptions for SPDocKit
  reports.
author: Iva Novoselic
date: 17/05/2017
---

# Create New Subscription

This section describes how to create scheduled **Subscriptions** for SPDocKit reports. Data you receive from these subscriptions is gathered from the **last loaded farm snapshot** information.

If you wish to use **Subscriptions and Alerts** feature, please make sure you configured the [Subscription Settings](../../get-to-know-spdockit/backstage-screen/options-wizard.md) properly.

1. Navigate to the Backstage Configuration Screen and click **Subscriptions and Alerts**, or find this button in the Home ribbon.
2. When the Subscriptions and Alerts manager opens, click **New Subscription**.
3. Type in the subscription name and select the schedule type which defines how often you want to receive this subscription. If you have more than one farm in SPDocKit database, you can select to create a subscription for non-local farms as well. These subscriptions will not be sent automatically unless the SPDocKit Service is configured on the selected farm as well.

   Available delivery periods, are:

   * **Immediately after service snapshot** – the subscription will be sent immediately after the SPDocKit Service finishes creating farm snapshot.
     * **Daily** – the subscription will be sent each day.
     * **Weekly** – the subscription will be sent each Monday \(you can change the default day through the subscription settings tab in Options dialog\).
     * **Monthly** – the subscription will be sent on the first day of each month.
     * **Quarterly** –  the subscription will be sent on the first day of each quarter.

   Under the Status section you can see the following information:

   * Whether SPDocKit Service is running on the selected farm or not. This is required because SPDocKit service sends the automatic subscriptions.
   * Whether automatic subscriptions are enabled on the selected farm or not.
   * Last sent on – information on when was the last time this subscription was sent. If this is an entirely new subscription, it will say Never.

4. Go to the Delivery tab and set the delivery method you would like to use.
   * **Email** – required fields are Send To and Body. Provide the email address to which you wish to send the subscription. You can enter more recipients – just separate the email addresses with semicolons. Type in the subject and body text. In case that this method is disabled, click the Configure link to adjust your [subscription settings](https://github.com/SysKitTeam/docs-spdockit/tree/8fddadbf2b539f0cc32fbf78025672014e0312a2/how-to/subscriptions-and-alerts/get-to-know-spdockit/backstage-screen/options-wizard.md).
   * **File Share** – input the File Share location here. You can use the Test button to check if the given location is reachable and if SPDocKit can write to the location.
   * **SharePoint Library** – If this is the first time you are using this feature, you need to create a new library connection.

     Click **New**, specify whether you are connecting to an On-Premise or SharePoint Online site. Input the Library URL and the Display name. You can use Integrated or Custom Credentials, whichever suits your needs. Finally, click Test. SPDocKit will try to send a test subscription to check if the given Library URL is in order. If it is you will be notified and you can click the Save button.

     **Please note!** Each SPDocKit subscription can be sent to a different SharePoint document library. All previously used connections will be listed in this drop down menu so you can use them for multiple subscriptions. The user account running SPDocKit and the SPDocKit service account should have at least **Contribute** permission level granted on the specified SharePoint document library to successfully upload SPDocKit subscriptions or alerts.

     You can select all three delivery methods. Scheduled reports will be sent to the email addresses you provided and uploaded to the File Share and SharePoint document library.
5. Go to the Reports tab and click **Add Report** to select which reports you wish to subscribe to. Choose a report from one of the main groups such as the Documentation, Content Usage, Feature reports, Group Memberships, Permissions, Structure, Best Practices and Farm Explorer reports.
6. For certain reports, you will have to adjust filters to complete the report configuration. The filters will define the data displayed in the report. Click OK to add the selected report to the subscription. To define the preferred date format, use curly brackets. Only culture-invariant formats are supported, for example: **{MM-dd-yyyy}, {dd-MM-yyyy}, or {MM-yyyyy-dd}**.
7. You can add more reports by repeating previous steps. Also, you can Edit current report settings or Delete added reports.
8. Click Save & Close to finish creating the subscription and exit. If you wish to send this subscription immediately, click the Save & Send Now.

