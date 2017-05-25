# Git notes
Each product has a separate repository. For different versions of a product we use git branches.
Each branch name must start with v, eg: v6. You can also have versions with decimals, eg. v6.2.

# File naming
All files and folders should be named using lowercase letters, spaces and any special characters should be replaced by "-".

# General file structure
Root directory contains index.md. This is the landing page for this product's docs.
Root directory also contains TOC.md. This file dictates the order of root categories.

Add directories to create categories and place files within. Update TOC.md accordingly. See existing TOS.md file for examples of this.
Each root directory must contain his own TOS.md. This file dictates order of articles in navigation.
Directories within this one should not have TOC.md files.
Every TOC.md file should have explicitly set slug attribute.
Add index.md within a directory to create a category landing page. This is optional.

You can nest multiple categories, up to 4 levels.

# Article formatting
You can add any metadata you need in header block of every MD file.

Example:  
    ---  
    title: Quick Start Guide  
    description: Short description of what article describes.  
    author: Some Person  
    date: 21/2/2017  
    ---  

## Internal links
Internal links are links to articles within product docs.
Every internal link should be prefixed with "#internal" eg. 

```
    [Online activation](#internal/activation/online-activation)
```

During build process "#internal" will be replaced with proper product and version slug eg. "/spdockit/v6"

## Content formatting

Below you will find examples of all content types you can use in articles.
Currently you can preview how they look here http://acceleratio.uxpassion.co/spdockit/v6/quick-start-guide/
Refer to this guide if something is missing in this Readme (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


## Regular paragraph

To run [SPDocKit](https://spdockit.com) and to retrieve all SharePoint settings you want to document, the user running the application and SPDocKit service account needs to have proper privileges.
Here is the list of required privileges to load SharePoint farm settings:

This is another paragraph.

## Line Breaks
This is the first line in a paragraph. Must be followed by two spaces and newline.  
This is the second line in a paragraph.

## Headlines

# Here is h1

## Here is h2

### Here is h3

#### Here is h4

## Lists

1. To add user account to the Local Administrators group (repeat the same steps for WSS_ADMIN_WPG):
   * On the server, click __Start__, right-click __Computer__, and then click __Manage__.
   * Navigate to _Configuration_, expand _Local Users_ and Groups and then click Groups.

2. To add user account to SharePoint Farm Administrators group:
   * Open SharePoint Central Administration.
   * Navigate to Security > Manage the farm administrators group.

## Code blocks

```
  if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"})-eq $null)
  {Add-PSSnapin Microsoft.SharePoint.PowerShell;}
  cls
  $username = Read-Host "Enter username";
  Get-SPDatabase | ForEach-Object {Add-SPShellAdmin -UserName $username -database $_.Id}
```

You can also use inline code blocks like this using backticks: `display: none`.

1. here is a list item
   ```
    this is code in list
   ```
1. here is another list item

## Blockquotes

> Error occurred while loading server ‘ServerName’.

## Images

![Mandatory alt text](https://www.spdockit.com/wp-content/uploads/2016/02/SPDocKit6-Destination-Folder.png "Optional image title")

You can also add images to the repository and link to them. Put images inside _assets directory. To add image to an article #img prefix is needed, eg.

```
  ![Mandatory alt text](#img/SPDocKit6-Destination-Folder.png "Optional image title")
```


## Tables

Tables        | Are           | Cool  
------------- |:-------------:| -----:
col 3 is      | right-aligned | $1600 
col 2 is      | centered      |   $12 
zebra stripes | are neat      |    $1 
