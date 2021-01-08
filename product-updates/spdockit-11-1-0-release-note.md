---
description: >-
  This article describes improvements and bug fixes delivered in SPDocKit
  version 11.1.0.
---

# SPDocKit 11.1.0

**SPDocKit 11.1.0.** is a minor release that contains important improvements and bug fixes listed below.

**Product version:** 11.1.0  
**Build number:** 11964   
**Release date:** Jan 12, 2021

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Improvements & Bug Fixes

* **The workflow history list crawl was improved!** Before, when history lists with a large number of rows were loaded during the snapshot creation, all the data was fetched at once, which would result in high memory usage and SQL connection timeout errors. The data from the workflow history list is now fetched in batches resolving the issue.
* **Optimized memory usage when SPDocKit is generating subscription reports!** The memory footprint is now significantly lowered, even if you have hundreds of reports in your subscriptions.
* **Fixed an issue** where the following exception was thrown when loading workflow data: ``An item with the same key has already been added.  at System.ThrowHelper.ThrowArgumentException(ExceptionResource resource)  at System.Collections.Generic.Dictionary`2.Insert(TKey key, TValue value, Boolean add)  at SysKit.SPCommon.Data.DatabaseManagerBase.<>c__DisplayClass65_0``_`.`_`<GetWorkflowTemplatesForFilter>b__0(SqlCmdManager sqlManager)`
* **DisableResolveBuiltinAdminSecurityGroupMembers load option was added.** When enabled, SPDocKit will avoid loading group members for groups inside the Local Administrators group on servers inside the SharePoint farm. To enable the option, open the settings.xml file located in the `C:\ProgramData\SPDocKit\Settings` folder, find the option, and change the value from False to True. You can use this when there are many users in groups \(more than a million\), which could lead to an `Server load timeout exceeded` error when creating a farm snapshot. If the local administrator group members are omitted from the load, the \Farm Explorer\Servers in Farm\Local Admins report will only show groups that are direct members of the local administrators’ group, without showing their members.

