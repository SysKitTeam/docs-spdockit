---
title: Unaccounted differences in the UPA settings
description: User Profile Service Application data is incorrect.
author: Tomislav Kunaj
date: 5/6/2017
---

__Summary:__ Information about the User Profile Service Application is not being loaded correctly. This happens if data is being collected during an audience compilation, which makes some of the data unavailable. The data will not be retrieved and the snapshot will show up as containing unaccounted changes in the User Profile Service Application.

__Solution:__ Manage the audience compilation schedule and the SPDocKit snapshot schedule so they do not occur at the same time.

__Status:__ Not resolved.