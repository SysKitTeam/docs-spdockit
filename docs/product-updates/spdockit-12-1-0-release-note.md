---
description: This article describes security improvements and bug fixes delivered in SPDocKit 12.1.0.
sidebar_position: 1
---

# SPDocKit 12.1.0

**SPDocKit 12.1.0** is a minor release focused on security improvements and bug fixes.

**Product version:** 12.1.0  
**Build number:** 13281  
**Release date:** May 6, 2026

[Click here to download the new release.](https://www.syskit.com/products/spdockit/download/)

## Improvements & Bug Fixes

* **Security improvements for credential storage.** SPDocKit now uses stronger, more secure methods to protect sensitive data:
  * SMTP server credentials stored in the database are now encrypted using a dedicated encryption key.
  * SQL account credentials stored on disk are now protected using the operating system's Data Protection API.
  * Passwords saved in farm files must always be encrypted — the option to store them without encryption has been removed.

* **Improved security for internal XML processing.** SPDocKit's XML parsers have been hardened to disallow DTD declarations, protecting against XML External Entity (XXE) vulnerabilities.

* **SharePoint 2010 is no longer supported.** SPDocKit 12.1.0 requires SharePoint 2013 or a later version. All SharePoint 2010 libraries have been removed from the application.

* **Auto SP Installer wizard updated.** Passphrase and password input fields have been removed from the wizard steps. A new summary panel on the final wizard step lists any credentials that need to be entered manually after the wizard completes.

* **Fixed an issue** where generating Word (Docx) farm documentation would fail with an error when the **Used Content Types** node was included. The documentation is now generated successfully regardless of which nodes are selected.

* **Fixed an issue** with the **Web Application Compare** wizard where user access policy entries were not correctly mapped during comparison. The comparison results are now accurate.

* **Various improvements and bug fixes.**
