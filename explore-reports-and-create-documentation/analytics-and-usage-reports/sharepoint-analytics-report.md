---
title: SharePoint Analytics Report
description: This article describes how to use SharePoint Analytics report. 
author: Tomislav Sirovec
date: 28/9/2018
---

This article explains how you can use the SharePoint Analytics report. The report shows the total visits each site collection had in the last 7 days along with the maximum number of daily unique visitors, and how the visits compare to the previous period. Also includes data on each site collection's size, number of subsites, date when it was last accessed and last modified. 

Report data comes from [SPDocKit database](#internal/configuration/configure-spdockit-database) and in order to start collecting the data you need to enable the SharePoint Analytics Collection. To do so, go to __Options > Service Settings__ and enable the checkbox "enable collection of site analytics from SharePoint's Usage and Health Data Collection service".

In the field below, you can find a list of service accounts to ignore when collecting analytics. This can be useful if you do not want report to be cluttered with "less relevant" system user/s. Also, the form is essentially a people picker and you can add any user you want here. So, the user you enter here __will not__ be visible on the report. 

To view the report go to __Analytics % Usage Reports > Analytics > SharePoint Analytics__.

The SharePoint Analytics grid report contains these columns:

* __Site Collection Url__ - Relative URL of the site collection.
* __Total Hits__ - A number of total visits on a given site collection.
* __Visitors__ - Average number of __visitors__ for a given site collection in last 7 days.
    - Please note the red or green triangle indicating the trend. It will show you how the page visits compare to the previous period (7 days).
* __Size [MB]__ - Size in MB for a given site collection.
* __Number of Subsites__ - Number of subsites on the selected site collection.
* __Last Accessed__ - The date when the site collection was last accessed.
* __Last Content Modified__ - The date when the content on a site collection was last modified.

You can customize this grid by adding optional column:

* __Web Application__ - Web application name. 

Click on a grid row and a corresponding chart will load at the bottom. The chart can be modified to show __visitors, storage and subsites__. Also, the data range can ne changed either by clicking on a __zoom button__ or by mouse wheel.  
