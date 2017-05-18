---
title: Create New Subscription
description: 
This section describes how to create scheduled subscriptions for SPDocKit reports. 
author: Iva Novoselic
date: 17/05/2017
---

This section describes how to create scheduled subscriptions for SPDocKit reports. Data you receive from these subscriptions is gathered from the __last loaded farm snapshot__ information.

If you wish to use __Subscriptions and Alerts__ feature, please make sure you configured [Subscription Settings](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md#subscription-settings) properly.

1. Navigate to the Backstage Configuration Screen and click __Subscriptions and Alerts__, or find this button in the Home ribbon.
1. When the Subscriptions and Alerts manager opens, click __New Subscription__.

1. Type in the subscription name and select the schedule type which defines how often you want to receive this subscription. If you have more than one farm in SPDocKit database, you can select to create a subscription for the non-local farms as well. These subscriptions will not be sent automatically unless SPDocKit Service is configured on selected farms as well.

     Available delivery periods, are:

    * __Immediately after service snapshot__ – the subscription will be sent immediately after the SPDocKit Service finishes creating farm snapshot.
   * __Daily__ – the subscription will be sent each day
   * __Weekly__ – the subscription will be sent each Monday (you can change the default day through the subscriptions  settings tab in Options wizard)
   * __Monthly__ – the subscription will be sent on the first day of each month
   * __Quarterly__ –  the subscription will be sent on the first day of each quarter

   Under the Status section you can see the following information:

   * Whether SPDocKit Service is running on the selected farm or not. This is required because SPDocKit service sends the automatic subscriptions.
   * Whether automatic subscriptions are configured properly on the selected farm.
   * Last sent on option tells you when was the last time this subscription was sent. If this is entirely new subscription, it will say Never.

   Use __Configure__ link to change all of the required settings.

1. Go to the Delivery tab and set the preferred delivery method.  Select the checkbox and input the required data.

   * __Email__ – required fields are Send To and Body. The subject field is completed automatically and it is the same as the Subscription Name. Provide the email address to which you wish the subscription to be sent. You can enter more recipients – just separate the email addresses with semicolons. Type in the subject and body text. In case that this method is disabled, click the Configure link to adjust your subscription settings.
   * __File Share__ – input the File Share location here. You can use the Test button to check if the given location is reachable and if SPDocKit can write to the location.
   * __SharePoint Library__ – If this is the first time you are using this feature, you need to create a new library connection. Click New, specify whether you are connecting to an __On-Premise or SharePoint Online__ site. Input the Library URL and the Display name. You can use Integrated or Custom Credentials, whichever suits your needs. Finally, click Test. SPDocKit will try to send a test subscription to check if the given Library URL is in order. If it is you will be notified and you can click the Save button.

   __Please note!__ Each SPDocKit subscription can be sent to a different SharePoint document library. All previously used connections will be listed in this drop down menu so you can use them for multiple subscriptions. User account running the SPDocKit and SPDocKit service account should have at least __Contribute__ permission level granted on a specified SharePoint document library to successfully upload SPDocKit subscriptions.

   You can also select all three available delivery methods. Scheduled reports will be sent to the email addresses you provided and uploaded to the File Share and SharePoint document library.

1. Go to the Reports tab and click __Add Report__ to select which reports you wish to subscribe to. Choose a report from one of the main groups such as the Documentation, Content Usage, Feature reports, Group Memberships, Permissions, Structure, Best Practices and Farm Explorer reports.

1. For certain reports, you will have to adjust filters to append that report. Those filters will define how the emailed report data will look. Click OK to add the selected report to the subscription.
To define the preferred date format, use curly brackets. Only culture-invariant formats are supported, for example: __{MM-dd-yyyy}, {dd-MM-yyyy}, or {MM-yyyyy-dd}__.

1. You can add more reports by repeating previous steps. Also, you can Edit current report settings or Delete added reports.

1. Click Save & Close to finish creating the subscription and exit. If you wish to send this subscription immediately, click the Save & Send Now.