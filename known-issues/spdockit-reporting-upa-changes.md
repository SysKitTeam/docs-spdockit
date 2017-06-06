---
title: SPDocKit reporting changes in the User Profile Service Application
description: This article describes a problem with incorrectly collecting User Profile Service Application data.
author: Tomislav Kunaj
date: 5/6/2017
---

__Summary:__ Information pertaining to the User Profile Service Application is not being loaded correctly. This happens if data is being collected during an audience compilation, which makes some of the data unavailable. The data will not be retrieved and the snapshot will show up as containing unaccounted changes in the User Profile Service Application.

__Solution:__ Manage the audience compilation schedule and SPDocKit snapshot schedule to not coincide with each other.

__Status:__ Not resolved.