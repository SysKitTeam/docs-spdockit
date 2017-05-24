---
title: Passwords and Product Keys
description: This article describes how to define and document service account passwords, product key and passphrase of your SharePOint farm.
author: Iva Novoselic
date: 24/5/2017
---
This section allows you to define and document important information about your farm, including:

* service account passwords
* Product Keys for installed SharePoint products
* the SharePoint farm passphrase

## Entering Information

To enter the information you want, just click on the cells under the __Password/Key__ columns in the grid and type the information into them.

## Encrypting Passwords with Saved Farms

If you have defined passwords, you can choose to encrypt them. Passwords will be secured with an AES 256-bit encryption. To save the farm and encrypted passwords:

* From the __File__ menu choose __Save__.
* Fill in the __Name__ field.
* Check __Include Passwords__ and then __Encrypt Passwords__.
* You will be prompted to enter an encryption __key__. (The same key will be required to decrypt passwords. If the key is not provided the user will be able to open the farm, but not able to decrypt passwords)
