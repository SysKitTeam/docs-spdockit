---
title: Passwords and Product Keys
---
This section allows you to define and document important information about your farm, including:

* service account Passwords
* Product Keys for installed SharePoint products
* the SharePoint farm Passphrase

## Entering Information

To enter the information you want, just click on the __Password/Key__ cell in the grid and type it in.

## Encrypting passwords with saved farms

If you have defined passwords, you can choose to encrypt them. Passwords will be secured with an AES 256-bit encryption. To save the farm and encrypted passwords:

* From the __File__ menu choose __Save__.
* Fill in the __Name__ field.
* Check __Include Passwords__ and then __Encrypt Passwords__.
* You will be prompted to enter an encryption __key__. (The same key will be required to decrypt passwords. If the key is not provided the user will be able to open the farm, but not able to decrypt passwords)
