---
title: Queries and Rules Screen
description: This article describes how to use Queries and Rules section to enforce SharePoint governance policies or create custom reports for SharePoint securable objects.
author: Iva Novoselic
date: 24/5/2017
---

The Queries and Rules section allows you to create automatic or manual actions to manage the content settings or create custom reports on SharePoint objects. Crawl your SharePoint farm settings and enforce SharePoint governance policies wherever you need them, in just a couple of steps.

## Queries and Rules Actions
The following buttons are available in the __Queries and Rules__ home ribbon:
* __New Rule__ – start a wizard to guide you through the creation of a new rule report.
* __New Query__ – start a wizard to guide you through the creation of new query report.
* __Edit__ – make changes in your rule/query configuration.
* __Delete__ – delete previously created rule, query, or history item.
* __Run__ – start a manual rule/query execution.
* __Run with Service__ – start an automatic rule/query execution in the background using SPDocKit service account. Choose whether you would like to receive query results via email or just browse them through the query history once the SPDocKit service has finished.
* __Refresh__ – refresh query/rule history to receive the latest result updates.
* __Add__ – create a new folder.
* __Rename__ – rename an existing folder.
* __Delete__ – delete the existing history.

### Icon Set
While both queries and rules have different icons for manual and automatic executions, only queries have a different icon for history results. A tooltip with a description will appear when you hover over the selected object icon in the Queries and Rules definition tree.

## Queries Definition
Use the query wizard to determine if all your governance policies have been properly enforced across your SharePoint farm or to create custom reports.

__Wizard Scope:__ web applications, site collection(s), subsite(s) for subsite   properties, list(s) and libraries for list properties  
__Supported SharePoint objects:__ site collections, subsites, lists, list items  
__Supported Query properties:__
* __For site collections__: allow designer, anonymous access enabled, customizing pages enabled, database name, detaching pages enabled, language, last modified, lock status, managing URL structure enabled, number of subsites, primary administrator, resource quota exceeded, sandbox solutions enabled, secondary administrator, storage, template, title, UI version, url.
* __For subsites__: access request email, access request enabled, author, created on, has unique permissions, index site content, is root web, language, last modified, offline client availability, title, url.
* __For lists__: appear in search, attachments enabled, author, can create folders, create major versions, create minor versions, created on, dialogs enabled, display on quick launch, has external data source, item count, last modified, list template, major version limit, minor version limit, offline client availability, quick edit enabled, require check out, require content approval, title, url.
* __For list items__: checked out to, created by, created on, last modified, list, modified by, site collection, subsite, title, url.

## Rules Definition
Use the rule wizard to create manual or automatic procedures that will help you enforce SharePoint governance policies.

__Wizard Scope:__ web applications, site collection(s), subsite(s), list(s) and libraries
__Supported rule types__:
1. List Rules
  * __Attachments__ – to specify if users can attach files to items in a list.
  * __Dialogs__ – whether to launch a new, edit and display forms in the dialog.
  * __Display on the quick launch__ – whether the documents will be displayed on the quick launch.
  * __Document version history__ – whether a version is created each time you edit a file in a document library.
  * __Folders__ – whether the “New Folder” command is available.
  * __Item-level Permissions__ – specify which items user can read and edit.
  * __Offline Client availability__ – whether this document library should be available for offline clients.
  * __Opening Documents in the Browser__ – whether browser-enabled documents should be opened in the client or browser by default when user clicks on them.
  * __Quick edit__ – whether Quick Edit can be used on this list to bulk edit data.
  * __Rating Settings__ – whether or not items in a list can be rated.
  * __Require Check Out__ – whether users must check out documents before making changes in this document library.
   * __Search__ – list visibility in search results.

2. Subsite Rules
  * __Request Access Mail__ – specify an email address used for approving access requests for subsite.

## Queries and Rules Scheduling Options
### Manual Execution
To run a rule or query manually means that you have to start SPDocKit, find appropriate rule or query and press __Run__ button. There is a special way of manual execution, using SPDocKit service. This means that you still have to manually select rule and press __Run with Service__ button, but service will crawl your SharePoint farm in the background and once it finishes, results will appear in rule or query history.

### Automatic Execution

If you choose automatic execution, following triggering options are available:

*  __One-Time__ – configure one specific date and time at which selected wizard will be executed. Wizard will no longer be automatically executed after the specified scheduled time.
* __Daily__ – configure the wizard start date and time at which this rule will be executed on a daily basis. You can choose recurrence period, that is if this wizard will run every x days, or will it run every weekday. Minimal recurrence period is one day.
* __Weekly__ – configure the wizard start date and time at which this rule will be executed on a weekly basis. Choose on which days rule will run and recurrence period (every x weeks).
* __Monthly__ – configure the wizard start date and time at which this rule will be executed on a monthly basis. Choose on which days of the month rule will run and recurrence period (every x months). The other option is to run wizard on a specified day of the week, every x months.
* __Quarterly__ –  configure the wizard start date and time at which this rule will be executed quarterly.

### Tips & Tricks
Press __Ctrl+Alt+T__ while focused on Triggers part of the wizard, and see on which dates wizard is scheduled to run!

## Queries and Rules Results History
Each time a selected query wizard is executed, SPDocKit saves the results in the wizard run history. You can see them under the Queries folder structure, under each query definition, marked with an orange arrow. Results are sorted by date and time of the rule execution, so you can see which changes were made with each run.

Also, each time a rule is executed, SPDocKit creates a history record. Records are sorted by date and time of the rule execution. Select a specific rule definition, click the desired date, and a list of applied changes will appear in a grid below.

Specially, query wizard allows you to specify whether the query results, both automatic and manual, will be visible only in query history or if they will also be sent to a specified email addresses in __PDF, XLSX or DOCX__ format. 
 
Rule results can be explored only within the SPDocKit user interface.