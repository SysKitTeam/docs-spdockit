---
title: Project Server Requirements
description: Project Server Requirements for SPDocKit
author: Matija Hanzic
date: 2/6/2017
---

# Project Server Load Requirements

## Problem

While trying to load Project server site settings with SPDocKit I received:

> The HTTP request is unauthorized with client authentication scheme 'Ntlm'. The authentication header received from the server was 'NTLM'.

## Why is this error occurring?

During the Take Snapshot process SPDocKit will try to retrieve information about your Project server sites. Please note that the following rights on your Project server sites are optional, but depending on them some or all information about your Project server sites configuration reports will not be available in SPDocKit. In order to allow SPDocKit to successfully gather all the information about your Project server sites the following rights are necessary:

* **SPDocKit account** needs to be a member of the Project Server **Administrators** group on each of the Project server sites

## Solution

1. In a browser navigate to your Project server site.
2. Click **Settings** &gt; **PWA Settings** to open up the PWA Settings page.
3. Under **Security** click **Manage Users**.
4. Click **New User** and add your **SPDocKit user accounts** \(console account and the service account, if you are using automatic snapshots\).
   * Under **User logon account** specify the **Domain\Username** of the **SPDocKit user account**.
   * Under **Security Groups** make sure that this user is a member of the **Administrators** security group.

