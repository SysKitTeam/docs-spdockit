---
title: Passwords and Product Keys
description: >-
  This article describes how to define and document service account passwords,
  product key and passphrase of your SharePoint farm.
author: Iva Novoselic
date: 24/5/2017
---

# passwords-and-product-keys

This section allows you to define and document important information about your farm, including:

* Service account passwords.
* Product Keys for installed SharePoint products.
* The SharePoint farm passphrase.

## Entering information

To enter the information you want, just click on the cells under the **Password/Key** columns in the grid and type the information into them.

## Encrypting passwords and saving them with snapshots

If you have defined passwords, you can choose to encrypt them. Passwords will be secured with an AES 256-bit encryption. To save the farm snapshot with the encrypted passwords:

* From the **File** menu choose **Save**.
* Fill in the **Name** field.
* Check **Include Passwords** and then **Encrypt Passwords**.
* You will be prompted to enter an encryption **key**. \(The same key will be required to decrypt passwords. If the key is not provided the user will be able to open the farm, but not able to decrypt passwords\)

