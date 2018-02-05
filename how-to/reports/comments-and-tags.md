---
title: Add Comments and Tags
description: This section explains how to add comments and tags to Reports and Snapshots
author: Igor Mesaric
date: 10/01/2018
---

This section describes how to add comments and tags to Reports and individual Snapshots.

### __Comments__ 

To distinguish and describe existing Snapshots and Farm Explorer Reports, you can use the __Comment__ feature available from SPDocKit 7.3 onwards.

To start working with comments, in the __Snapshots__ section navigate to the __Comments__ tab in the top menu under the __Data__ category and select the __Show__ button. The same action can be done in the __Farm Explorer__ section when any of the Farm Explorer reports, which support comments, is opened.  

A new panel appears on the right side of the window with the __Comments__ tab opened and shows all of the comments created for the currently opened report. 
Also, a new column appears on the left side of the Farm Explorer Report/Snapshots grid with the speech bubble icon displayed for the rows which have comments.

To add a comment to the selected Snapshot or Farm Explorer Report row, select the __Add__ button in the top menu's __Comments__ tab.
You can also add a comment by clicking the beforementioned first column field.
Notice the speech bubble icon and the tooltip appearing when you hover the mouse over the first column of the Farm Explorer Report grid or Snapshots grid.

The top menu's __Comments__ tab enables you to easily __Add__, __Edit__, and __Delete__ comments. The same options are available in the contextual menu that appears when you right-click a row.

To view all comments you have created, navigate to the top menu's __Comments__ tab and select the __Go to Report__ option. The __All Comments__ report opens with the columns __Author__, __Comment__, and __Last Modified__ displayed and grouped by __Path__. When you double-click a comment from the grid, associated Farm Explorer Report or Snapshot to which the comment belongs is displayed. The same action can also be done by clicking the __Go to Comment__ button in the top menu __Comments__ tab.  

The __All Comments__ report can easily be exported by selecting the __Export as PDF/XLSX/DOCX__ option from the __Home__ tab in the top menu.

To include your comments in the generated documentation navigate to the __Backstage__ and select __Options__ on the __Configuration__ screen. Under __Report Options__ check the __Include comments in documentation__ option. Your comments will now be visible in the generated documentation. 


### __Tags__

In the Permissions Explorer, you can find another useful feature - adding tags to Securable Objects.

Tags can be added Live but also when exploring previously created snapshots.

To add a tag navigate to the top menu's __Tags__ tab under the __Data__ category. Select your target - Securable Object - in the __Permissions Explorer__, and select the __Add Tag__ button. In the same tab, you can also find the __Delete Tag__ button to remove a tag from the selected Object. 

__Add Tag__ and __Delete Tag__ options are also available in the context menu which appears if you right-click a Securable Object in the tree view.

To view all created tags navigate to __Snapshots__ section and select the __Tagged Objects__ report. 
Information about all tagged objects is displayed in the __Object__, __Object Type__ and __Object Url__ columns which, by default, are grouped by __Tag__.  The __Tagged Objects__ report can also be accessed directly from the __Permissions Explorer__ by selecting the __Go to Report__ option in the top menu's __Tags__ tab. 

The __Tagged Objects__ report can easily be exported by selecting the __Export as PDF/XLSX/DOCX__ option from the __Home__ tab in the top menu.

Each of the tagged objects can easily be accessed by selecting the appropriate row in the __Tagged Objects__ report and clicking the __Go to Object__ button in the top menu __Tags__ tab.

Another upside of using the tag feature is the possibility to __search the Securable Objects by tags__. In the __Permissions Explorer__ simply type the tag name into the __Search__ text field. All Securable Objects tagged with the inputted text are displayed in a dropdown list. When you select a single object from the list, the object also becomes selected in the tree view and the permissions are displayed in the grid. 