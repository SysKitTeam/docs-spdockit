---
title: SharePoint Online
description: This article describes how can SPDocKit help you manage and explore your SharePoint Online permissions. 
author: Iva Novoselic
date: 25/5/2017
---

SPDocKit 7 brings extended SharePoint Online support. Apart from the live explorer we had from previous versions, you can now take snapshots of your SharePoint Online environment and use it later to view all permission reports historically.

Please check the [feature availability by license type](https://www.spdockit.com/orders/features-by-licenses/).

In order to fully exhaust all available features:
1. Install SPDocKit on your workstation (any machine that is not part of the SharePoint farm).
1. Configure SPDocKit database, it is required for this feature set. You can use either [SQL Server database](#internal/configuration/configure-spdockit-database) or [LocalDB instance](#internal/configuration/configure-localdb) that is shipped with SPDocKit.  
1. [Connect](#internale/spdockit-spo/connect-to-spo) to a SharePoint Online site(s).
1. Use Permission Explorer to easily navigate through SharePoint Online permissions by selecting a scurable object you are interested in. You can also [manage permissions](#internal/permission-management/manage-permissions-ribbon-actions) for these sites using both management actions and wizard.
1. [Take snapshot](#internal/spdockit-spo/spo-snapshots) of your SharePoint Online environment to explore available SPDocKit Permissions Reports.

Apart from numerous permissions report that can help you understand SharePoint Online site structure, permissions inheritance, granted permissions for a specific securable object and principal permissions, you can:
* check [externally shared content](#internal/get-to-know-spdockit/permissions-reports-screen) and who are the users it is shared with
* use SPDocKit [permissions management actions](#internal/permission-management/manage-permissions-ribbon-actions) to stay compliant with your governance strategy and to keep permissions under control
* track permissions changes in your environment using [Permissions Compare](#internal/how-to/compare-wizard/compare-sharepoint-permissions) wizard
* [restore SharePoint Online permissions](#internal/permission-management/restore-permissions) to a previously recorded state  


_Please note! Some of the SPDocKit reports will not be available for the SharePoint Online environment:_
* _Content & Usage Reports (only Site Structure report is fully functional)_
* _Best Practices Reports_
* _Adminstrative Actions Report_
* _Security Audit Report_
* _Cleanup Reports and Cleanup Wizard_
