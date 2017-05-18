---
Tile: Create New Alert
description: This section describes how to create scheduled Alerts for SPDocKit reports. Alerts are sent after each automatic snapshot, that is snapshot created by the SPDocKit Service.
author: Iva Novoselic
date: 17/5/2017
---
This section describes how to create scheduled __Alerts__ for SPDocKit reports. 
If you wish to use __Subscriptions and Alerts__ feature, please make sure you configured [Subscription Settings](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md#subscription-settings) properly.

Alerts are sent after each automatic snapshot, that is, snapshot created by the SPDocKit Service.

* __Best Practice__ reports will be sent when either warnings or errors are detected in the latest snapshot.
* __Difference reports__ will be sent when differences between the newest snapshot and the previous one are detected.

1. Navigate to the Backstage Configuration Screen and click __Subscriptions and Alerts.__

1. When the Manager opens, click __New Alert__. In General tab, type in the alert name. Under Status section you can see the following information:
   * Whether automatic subscriptions are enabled on the selected farm or not.
   * Last sent on – information on when was the last time this alert was sent. If this is entirely new subscription, it will say Never.

1. Go to Delivery tab and set the delivery method you would like to use.

    * __Email__ – required fields are Send To and Body. Provide the email address to which you wish the alert to be sent. You can enter more recipients – just separate the email addresses with semicolons. Type in the subject and body text. In case that this method is disabled, click the Configure link to adjust your [subscription settings](#internal/get-to-know-spdockit/backstage-screen/options-wizard.md#snapshot-options).
    * __File Share__ – input the File Share location here. You can use the Test button to check if the given location is reachable and if SPDocKit can write to the location.
    * __SharePoint Library__ – If this is the first time you are using this feature, you need to create a new library connection. 
    
        Click __New__, specify whether you are connecting to an On-Premise or SharePoint Online site. Input the Library URL and the Display name. You can use Integrated or Custom Credentials, whichever suits your needs. Finally, click Test. SPDocKit will try to send a test subscription to check if the given Library URL is in order. If it is you will be notified and you can click the Save button.
        
       __Please note!__ Each SPDocKit alert can be sent to a different SharePoint document library. All previously used connections will be listed in this drop down menu so you can use them for multiple alerts. User account running the SPDocKit and SPDocKit service account should have at least __Contribute__ permission level granted on a specified SharePoint document library to successfully upload SPDocKit subscriptions.

       You can select all three delivery methods. Scheduled reports will be sent to the email addresses you provided and uploaded to the File Share and SharePoint document library.

1. Go to the Reports tab and click __Add Report__ to select which reports you wish to subscribe to. Currently, you can pick from __Farm Differences, Permissions Differences, Group to Group Compare, Membership Differences and any of the Best Practice reports.__

1. For certain reports, you will have to adjust filters to append that report. Those filters will define how the emailed report data will look. Click OK to add the selected report to the subscription. To define the preferred date format, use curly brackets. Only culture-invariant formats are supported, for example: __{MM-dd-yyyy}, {dd-MM-yyyy}, or {MM-yyyyy-dd}.__
1. You can add more reports by repeating previous steps. Also, you can __Edit__ current report settings or __Delete__ added reports.
1. Click  Save & Close to finish creating the Alert and exit. If you wish to send this alert immediately, click the Save & Send Now.

### Tips&Tricks

If you would like to schedule best practices alert, __Alert Me__ is available in Home ribbon of the Best Practices tab. The best practices report that is currently selected will be added to this alert automatically. 

If you want to add currently selected best practices report to an existing alert, just use the drop down menu in Alert me icon to select __Add to Existing Alert__ option. Select the alert to which you would like to add more reports and click OK.