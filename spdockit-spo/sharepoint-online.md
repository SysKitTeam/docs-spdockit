---
title: SPDocKit Online - Quick Start Guide
description: >-
  This article describes how can SPDocKit help you manage and explore your
  SharePoint Online permissions.
author: Iva Novoselic
date: 25/5/2017
---

# Quick Start Guide

_**As of August 2nd, 2018, SPDocKit Online is deprecated, and its successor is**_ [_**SysKit Security Manager**_](https://www.syskit.com/products/security-manager/)_**.**_ _**For instructions on the upgrade path or any other questions contact us at**_ [_**support@syskit.com**_](mailto:support@syskit.com)_**.**_

SPDocKit 7 brings extended SharePoint Online support. Apart from the live explorer we had from previous versions, you can now take snapshots of your SharePoint Online environment and use it later to view all permission reports historically.

Please check the [feature availability by license type](https://www.spdockit.com/orders/#online).

In order to fully exhaust all available features: 1. Check [user permissions](../requirements/sharepoint-online-user-permissions-requirements.md) required to run SPDocKit Online and to retrieve all SharePoint Online settings you want to document. 1. Install SPDocKit on your workstation \(any machine that is not part of the SharePoint farm\). 1. Configure SPDocKit database, it is required for this feature set. You can use either [SQL Server database](../configuration/configure-spdockit-database.md) or [LocalDB instance](../configuration/configure-localdb.md) that is shipped with SPDocKit.  
1. \[Connect\]../spdockit-spo/connect-to-spo\) to a SharePoint Online site\(s\). 1. Use Permission Explorer to easily navigate through SharePoint Online permissions by selecting a securable object you are interested in. You can also [manage permissions](../permission-management/manage-permissions-ribbon-actions.md) for these sites using both management actions and wizard. 1. [Take snapshot](spo-snapshots.md) of your SharePoint Online environment to explore available SPDocKit Permissions Reports.

Apart from numerous permissions report that can help you understand SharePoint Online site structure, permissions inheritance, granted permissions for a specific securable object and principal permissions, you can:

* check [externally shared content](../get-to-know-spdockit/permissions-reports-screen.md) and who are the users it is shared with
* use SPDocKit [permissions management actions](../permission-management/manage-permissions-ribbon-actions.md) to stay compliant with your governance strategy and to keep permissions under control
* track permissions changes in your environment using [Permissions Compare](../how-to/compare-wizard/compare-sharepoint-permissions.md) wizard
* [restore SharePoint Online permissions](../permission-management/restore-permissions.md) to a previously recorded state  

{% hint style="warning" %}

_Please note! Some of the SPDocKit reports will not be available for the SharePoint Online environment:_

* _Content & Usage Reports \(functional reports are: Content Type Usage, Unmodified Content, Features List and Features Activations, Site Structure\)_
* _Best Practices Reports_
* _Administrative Actions Report_
* _Security Audit Report_
* _Cleanup Reports and Cleanup Wizard_

\_\_

