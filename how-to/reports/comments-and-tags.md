---
title: Add Comments and Tags
description: This section explains how to add comments and tags to Reports and Snapshots
author: Igor Mesaric
date: 10/01/2018
---

# Add Comments and Tags

This section describes how to add comments and tags to Reports and individual Snapshots.

## **Comments**

To distinguish and describe existing Snapshots and Farm Explorer Reports, you can use the **Comment** feature available from SPDocKit 7.3 onwards.

To start working with comments, in the **Snapshots** section navigate to the **Comments** ribbon in the top menu under the **Data** category and select the **Show** button. The same action can be done in the **Farm Explorer** section when any of the Farm Explorer reports, which support comments, is opened.

A new panel appears on the right side of the window with the **Comments** tab opened and shows all of the comments created for the currently opened report. Also, a new column appears on the left side of the Farm Explorer Report/Snapshots grid with the speech bubble icon displayed for the rows which have comments.

To add a comment to the selected Snapshot or Farm Explorer Report row, select the **Add** button in the top menu's **Comments** ribbon. You can also add a comment by clicking the beforementioned first column field. Notice the speech bubble icon and the tooltip appearing when you hover the mouse over the first column of the Farm Explorer Report grid or Snapshots grid.

The top menu's **Comments** ribbon enables you to easily **Add**, **Edit**, and **Delete** comments. The same options are available in the contextual menu that appears when you right-click a row.

To view all comments you have created, navigate to the top menu's **Comments** ribbon and select the **Go to Report** option. The **All Comments** report opens with the columns **Author**, **Comment**, and **Last Modified** displayed and grouped by **Path**. When you double-click a comment from the grid, associated Farm Explorer Report or Snapshot to which the comment belongs is displayed. The same action can also be done by clicking the **Go to Comment** button in the top menu **Comments** ribbon.

The **All Comments** report can easily be exported by selecting the **Export as PDF/XLSX/DOCX** option from the **Home** ribbon in the top menu.

To include your comments in the generated documentation navigate to the **Backstage** and select **Options** on the **Configuration** screen. Under **Report Options** check the **Include comments in documentation** option. Your comments will now be visible in the generated documentation.

## **Tags**

In the Permissions Explorer, you can find another useful feature - adding tags to Securable Objects.

Tags can be added Live but also when exploring previously created snapshots.

To add a tag navigate to the top menu's **Tags** ribbon under the **Data** category. Select your target - Securable Object - in the **Permissions Explorer**, and select the **Add Tag** button. In the same ribbon, you can also find the **Delete Tag** button to remove a tag from the selected Object.

**Add Tag** and **Delete Tag** options are also available in the context menu which appears if you right-click a Securable Object in the tree view.

To view all created tags navigate to **Snapshots** section and select the **Tagged Objects** report. Information about all tagged objects is displayed in the **Object**, **Object Type** and **Object Url** columns which, by default, are grouped by **Tag**. The **Tagged Objects** report can also be accessed directly from the **Permissions Explorer** by selecting the **Go to Report** option in the top menu's **Tags** ribbon.

The **Tagged Objects** report can easily be exported by selecting the **Export as PDF/XLSX/DOCX** option from the **Home** ribbon in the top menu.

Each of the tagged objects can easily be accessed by selecting the appropriate row in the **Tagged Objects** report and clicking the **Go to Object** button in the top menu **Tags** ribbon.

Another upside of using the tag feature is the possibility to **search the Securable Objects by tags**. In the **Permissions Explorer** simply type the tag name into the **Search** text field. All Securable Objects tagged with the inputted text are displayed in a dropdown list. When you select a single object from the list, the object also becomes selected in the tree view and the permissions are displayed in the grid.

