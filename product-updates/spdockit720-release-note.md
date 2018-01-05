---
title: SPDocKit 7.2.0 - Release Note
description: This article describes new features, improvements and bug fixes delivered in SPDocKit 7.2.0.
author: Iva Novoselic
date: 22/11/2017
---
SPDocKit 7.2.0 is a minor release with a lot of new features and significant improvements. New Configuration Wizard, unified snapshot experience, better permission reports filtering and subscription improvements are just a beginning of what this version has to offer. SPDocKit Online now supports Office 365 Groups and Teams, OneDrive for Business and automatic snapshots. SPDocKit Insights has gained better grouping and filtering options, additional Event Logs as well as numerous user experience adjustments. 

Give it a try and let us know what you think!

__Product version:__ 7.2.0  
__Build number:__ 9285     
__Release date:__  Nov 22, 2017

[Click here to download the new release.](https://www.spdockit.com/downloads/)

## Features
* SPDocKit Online  now supports __Office 365 Groups and Teams__! Use Permissions Explorer to see a list of all Office 365 Groups and Teams available in your tenant, and explore ownership and membership details for each group. Try Compare Wizard options to track down group membership changes more easily.  

* Office 365 Groups and Teams can also be easily managed using [SPDocKit actions and wizards](#internal/spdockit-spo/office-365-groups-and-teams). Use Office 365 ribbon actions to add or remove owners and members or easily delete and create new groups. Moreover, use SPDocKit Office 365 Group wizards to __add or remove users from multiple groups__ in just a couple of steps.
  * The greatest benefit of using SPDocKit group management options is the ability to __import the users to People Picker directly from .csv or .txt files__ without having to type in numerous users one by one when adding or removing them from a group.

* SPDocKit Online supports __OneDrive for Business, as well__! Again, navigate to Permissions Explorer to see a list of all currently used OneDrive personal sites, and check the usage status along with the warning and maximum storage quota. 

* [SPDocKit Service is now available as part of SPDocKit Online](#internal/spdockit-spo/spo-snapshots). Use a domain account or a local system account for SPDocKit service configuration and:
  * create automatic snapshots of your Office 365 tenant
  * receive report subscriptions and alerts for SharePoint Online.

* Now you can __filter all Hierarchy permission reports by Permission Level__. Select which permission levels you are interested in, and find all users who have been granted that privilege in the entire hierarchy, all the way to the list item.

* SPDocKit Insights Event Viewer can now collect [all types of Windows Logs](#internal/spdockit-insights/customize-settings). On top of the Application event log, we’ve added the ability to search through __Security, Setup, System and Forwarded Events logs__. It is also possible to create alerts for all of these logs. 

* SPDocKit Insights Performance Dashboard has gained new grouping abilities. You can group detected servers by [type, status, or farm, or you can choose not to group them at all](#internal/spdockit-insights/insights-performance). Combine existing dashboard layout options with the specific type of grouping for the optimal monitoring experience. Also, we've added the option to filter servers by status.

* SPDocKit Insights Single Server Performance Dashboard now offers the possibility of __maximizing each of the performance counters charts__ for a better experience. Also, you can choose whether to turn on the warning and error threshold visualization.

* The __Snapshot Date filter is now available across the entire application__, including the Farm Explorer and Best Practices sections. This makes it easier to track which data user is currently exploring, and it provides a more unified experience.

* SPDocKit Insights Configuration Wizard and SPDocKit Console Configuration Wizard are now connected in [one powerful wizard with a single user interface](#internal/configuration/configure-spdockit). You no longer need to use multiple configuration files to adjust all available features; just follow the wizard steps, and you will be good to go. We tried to make it as intuitive as possible, with improved messages and guidelines.

* The People Picker Settings report is now part of the farm documentation. Hence, you will be able to track differences in People Picker configuration settings using the Compare Wizard and receive them as a report subscription.

## Improvements
* SPDocKit Insights Dashboard will now automatically signal if some of the top-listed servers are in a critical or warning state. The color of the chart will change according to the server’s performance counter state.
* Now you can click on the specific server status in the Server Health Overview chart to drill down directly to the Performance Dashboard and see all servers that met the selected status threshold.
* The user experience for filtering previously collected logs through SPDocKit Insights Event Viewer has been improved. You no longer need to press enter or click the search button after selecting a specific refiner. Event Viewer will now automatically filter results the moment  you click the refiner. Use the All button to revert changes and clear the refiner selection.
* The custom range on the SPDocKit Insights Performance Dashboard is now presented as a specific time interval with clearly displayed start and end times, making it easier to adjust the time frame if needed.
* The user experience in the Single Server Performance Dashboard regarding performance counter instance selection has also been improved. Click on the kebab menu to select the desired performance counter instance.
* Changing the time interval on the Single Server Performance Dashboard will no longer change the performance counter instance selection.
* We’ve added automatic refresh to SPDocKit Insights Home and Performance Dashboards. The available values are: no refresh and 1, 2, 5, or 10 minutes.
* We’ve also improved the tooltip descriptions, added more unified units of measurement, and adjusted data to regional date and time settings across SPDocKit Insights.
* Compare Wizard mapping for host names now supports 1:N mappings.
* The Farm Backup History best practices report has been improved and will now send a warning message if a farm backup has never been performed. 
* Group reports can now detect whether a certain group doesn’t have any members or just hasn’t been loaded in the latest snapshot. Also, reports will warn you in case AD group memberships haven’t been included in the load options for the selected snapshot.
* The Permission View Type filter has been upgraded to a Group Memberships filter in the Object to Object  Compare and Permission Differences reports. 
* Farm passphrase in the AutoSPInstaller Configuration File Wizard has more detailed instructions on how to meet the validation criteria.
* Improved user experience when creating report subscriptions.
* Improved user experience when dealing with Compare Wizard directly from Live Permissions Explorer.
* Improved user experience when subscriptions or alerts fail to send. Now, you will receive a more informative message explaining why that happened.
* Improved user experience for SPDocKit Online users when trying to explore site collections for which they are not site administrators. Users with insufficient privileges will receive a message that they can explore snapshots only from the SPDocKit database, or required permissions can be added to their accounts.
* If report throttling has been enabled on a certain report, you will receive a warning in an exported report version, as well. Also, SPDocKit Service will consume less memory to export reports when report throttling is configured.
* The File Size property will no longer be reported as a difference in Database Files reports when using Compare Wizard.
* The Edit Connections Wizard for managing On-Premises and SharePoint Online site collections on a workstation offers more possibilities for editing and deleting. Site collections will be grouped by Web application, and it is possible to delete more than one site collection at once, even the entire web application or tenant. Also, changing the credentials is much easier using the drop-down menu in the Edit Connections form.
* Improved user experience for the Clone Permissions Wizard. Better guidance through the process and more detailed and complete messages in the Preview step.


## Bug fixes
* Now you can upload SPDocKit subscriptions to a SharePoint library containing special character “&” in the name of the subscriptions. Before, sending a report subscription would fail with the following error: __"Could not ensure subscription folder on SharePoint."__
* Now, SPDocKit will no longer break if you click the Manage Servers button when using it on a workstation. Before, clicking on this option would result in a crash with the error message: __“The INSERT statement conflicted with the FOREIGN KEY constraint ‘FK_MonitoringServers_Farms.’ The conflict occurred in database ‘SPDockit,’ table ‘dbo.Farms,’ column 'ID.' The statement has been terminated.”__
* SPDocKit will now correctly detect insufficient farm permissions. Before, the user would receive the following error even when using a valid license: __“Acceleratio.SPDocKit.Business.DescriptionFiles.InvalidFarmException: Invalid SPDFarm file."__
* Anonymous View and Edit URL links now support the length of 2,048 chars. Before, the user would receive this error when trying to generate SPDocKit reports: __“System.Data.SqlClient.SqlException: String or binary data would be truncated. The data for table-valued parameter ‘@TableVariable’ doesn't conform to the table type of the parameter. The statement has been terminated."__
* Clone Permissions action messages will now give the correct information about steps that will be performed during the cloning process. Before, the Clone Permissions action would state that permissions will be cloned across the entire site collection, not just for the selected securable object.
* The Clone Permissions action will now change group membership only for the SharePoint groups that have been granted a certain permission on a selected  securable object. Before, the Clone Permissions action would change the group membership of a selected principal across the entire site collection. 
* Now, SPDocKit Permission Differences reports will display group membership changes correctly. Before, all differences reports in the Permissions compare type that were using the Group Memberships filter didn’t detect changes in group memberships.  
* The File Version property in the Solutions report used to be compared when tracking differences between two farms. Now, this property will be ignored because it will always vary for two distinct farms.
* Users with Privileged Access report will now properly show all principals when sending as a subscription. Before, newly added principals didn’t appear on the sent-subscription report.
* List Item Permission Details report will now work properly when sent as a report subscription. Before, when there was a folder in the selected securable object structure, some data would be missing in the exported version of the report (in this case when sent as a subscription).
* SPDocKit permissions management now works as intended even when the user running the application on a workstation is not a local administrator on the machine. Before, SPDocKit would try to write to the SPDocPerm event log and fail with an error due to the lack of local administrator rights: __“System.Security.SecurityException: The source was not found, but some or all event logs could not be searched. Inaccessible logs: Security.”__
* SPDocKit will now count SharePoint Online users correctly.  Before, groups and external users would enter the count as well.

[Download and try new version](https://www.spdockit.com/downloads/)