---
title: Permissions Wizard issue
description: >-
  SPDocKit Workstation's people picker cannot find some users when using the
  permission wizards.k
author: Iva Novoselic
date: 25/5/2017
---

# Permissions Wizard issue

## **Summary**

When using SPDocKit’s permission wizards from a workstation, some principals cannot be found. It can happen while selecting principals using SPDocKit’s people picker or during the Preview and Apply steps. The problem occurs when the permission wizard targets multiple site collections, some of which are from different SharePoint farms.

**Application Version:** 5.2.0 and newer

## **Solution**

When using permission wizards on a workstation, please target site collections from a single SharePoint farm.

**Status:** Not resolved.

