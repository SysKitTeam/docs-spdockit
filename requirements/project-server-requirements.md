---
title: Project Server Requirements
description: Project Server Requirements for SPDocKit
author: Matija Hanzic
date: 2/6/2017
---

#### Problem

While trying to load Project server site settings with SPDocKit I received:

> The HTTP request is unauthorized with client authentication scheme 'Ntlm'. The authentication header received from the server was 'NTLM'.

#### Why is this error occurring?

During the Take Snapshot process SPDocKit will try to retrieve information about your Project server sites. Please note that the following rights on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your Project server sites the following rights are necessary:

* __SPDocKit account__ needs to be a member of the Project Server __Administrators__ group on each of the Project server sites

#### Solution

1. In a browser navigate to your Project server site.
2. Click __Settings__ > __PWA Settings__ to open up the PWA Settings page.
3. Under __Security__ click __Manage Users__.
4. Click __New User__ and add your __SPDocKit user accounts__ (console account and the service account, if you are using automatic snapshots).
    * Under __User logon account__ specify the __Domain\Username__ of the __SPDocKit user account__.
    * Under __Security Groups__ make sure that this user is a member of the __Administrators__ security group.
