---
title: Move Permissions Wizard
description: >-
  This article describes how to use SPDocKit to remove permissions for one 
  or multiple users from a Site Collection or your entire SharePoint environment. 
author: Igor Mesarić
date: 02/10/2020
---

# Remove Permissions Wizard

This article explains how to use SPDocKit Remove Permissions Wizard to remove all assigned SharePoint permissions for one or multiple users.

**Wizard Scope**: farm, web application, site collection.  
**Supported People Picker principal selection**: user, Active Directory group.
**Additional selection options**: CSV file.  

{% hint style="warning" %}
**Please note!**  
Selected principals will no longer have any assigned permissions, directly or through SharePoint groups, and they will be deleted from all the selected site collections in your SharePoint farm.
{% endhint %}

1. Navigate to Permissions Explorer and click the **Remove wizard** in the Wizards ribbon.
2. In the **Target** step, define which farm, web application, or site collection will be a wizard scope.
3. In the **Principal Selection** step, select users that you want to remove from the scope defined in the second step. You can select principals by:
  * **Typing the principal's name in the search field** - results show below the input field
  * **Using the Select People and Groups dialog** - click the icon next to the input field to access this dialog and find additional information about selected principals 
  * **Importing a CSV file** - use this option when removing a large number of users in bulk
4. The **Preview** step lists all the actions to be taken in the wizard's final step. Ensure that the displayed coincide with your specifications in the previous steps of this wizard. If needed, go back, and modify any settings you might not like.
5. The **Finish** step shows the changes that were made. If some errors have occurred, they will be displayed here. It is possible to save this log to disk as a .txt file using the **Save Log** button. In addition, SPDocKit will create Event Log entry in custom [SPDocPerm event log](../spdockit-permission-management-event-log.md). There will be information about changes that were made, as well as who made those changes.

## Import a CSV file

In case you need to remove many principals in bulk, importing a CSV file is the go-to option.
To do so:
* **click the Import from File button** on the **Principal Selection** step
* **select a CSV file** from your local computer and click **Open**
* **setup Import Options** available on the **Import Principals** dialog; the following is available:
  * **My data has headers** option - check if the first row of your CSV file contains column headers data
  * **Delimiter** radio buttons - you can choose between **Tab**, **Semicolon**, **Comma**, and **Space**
  * **Username column** - from the drop-down menu chose the column which has **Username** data
  * **Data Preview** - shows data from CSV formatted as defined in import options
* **click OK** to import principals from CSV file
The imported principals are visible in the Principal Selection input field.

  
