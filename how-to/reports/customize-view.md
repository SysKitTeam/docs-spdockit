---
title: Customize View
description: This section describes how SharePoint administrators can customize View for SharePoint Farm Reports. It is possible to adjust Filters, Column order (as well as adding or removing certain columns) and also change the “Sort by” and “Group By” settings.
author: Martin Pisacic
date: 18/5/2017
---

This section describes how SharePoint administrators can customize View for SharePoint Farm Reports. It is possible to adjust Filters, Column order (as well as adding or removing certain columns) and also change the “Sort by” and “Group By” settings.

You can customize your reports in a few different ways:

### **Add or Remove columns**

From SPDocKit 6.2 version onwards, you have the ability to add or remove columns.

Following reports are located in **Permissions Reports** section and have these new columns:

* **Unique Permissions** (Site Collection Reports) - Unique Permissions, Url, Object Type, Last Modified, Created On.
* **Group Members** (Group Reports) - Principal Username, Email, Account Enabled, Type.
* **Member Of** (Group Reports) - Principal Username, Email, Account Enabled, Type.
* **All Farm Users** (Security Audit) - Email.
* **All Site Users** (Security Audit) - Email, External User.
* **Users with Privileged Access** (Security Audit) - Principal Username, Email, Account Enabled, Type.
* **Detailed Permissions reports** (Subsite/List/List Item) - Account Enabled, Email, Principal Username, Url.
* **Hierarchy reports** (Site Collection/Subsite/List) - Principal Username, Email, Account Enabled, Type, Unique Permissions, Url, Object Type, Last Modified, Created On.
* **User Permission Overview** (User Reports) - Last Modified, Object Type, Url.
* **User Permission Details** (User Reports) - Created On, Last Modified, Object Type, Unique Permissions, Url.
* **Matrix Permissions reports** (Subsite/List/Lite Item) - Account Enabled, Email, Principal Username, Type.
* **Permission Level Usage** (Site Collection Reports) - Url.
* **Sharepoint Groups** (Site Collection Reports) - Account Enabled, Email, Last Modified, Object Type, Principal Username, Type, Url.

Also, reports with new columns which are located in **Content & Usage Reports** are:
* **Site Structure** (Structure Reports) - Unique Permissions, Url, Object Type, Last Modified, Created On.
* **Unmodified Content** (Usage Reports - Content Usage) - Unique Permissions, Url, Object Type, Last Modified, Created On.

Go to the **View** tab, select the **Choose Columns** button and list of the available columns will appear. You can drag and drop them, or simply double click the column, and it will “go” on the report.

**Please note** that for each report only the **available** columns will appear in the Choose Columns window.

### **Set the filters and group the data**

Select which column to adjust and group the data by. Use the drag and drop method to rearrange them.

Set the **Filters** by selecting the date and feature scope.

Click the filter options on each column, such as the Scope, Version or Custom options. You can adjust them in an ascending or descending order. You can even permute the column order by clicking on the column name and drag and dropping it.

### **Save the report as View and/or export it**

Once you have rearranged and customized your view, you can save it as your custom view.

Also, you can **Export** reports as a PDF, XLSX or DOCX file, and **Delete** or **Rename** them by using icons from the Customize section of the ribbon.

There are two built-in views that enable showing or hiding **FeatureID** and **Hidden Features**. For expanding or collapsing groups, use the same named icons from the View section of the ribbon or double-click the selected group.

Click on the **Reset Layout** button to return to the default view with no user-made changes.