---
description: This article describes the security improvements and bug fixes in SPDocKit 12.1.0.
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
  * SPDocKit now encrypts SMTP server credentials in the database using a dedicated encryption key.
  * SPDocKit now protects SQL account credentials on disk using the Windows Data Protection API (DPAPI).
  * Farm file passwords are now always encrypted — the option to save them in plain text has been removed.

  This reduces the risk of credential exposure if the database or disk is compromised. No action is required for existing installations.

* **Improved security for internal XML processing.** SPDocKit now blocks DTD declarations in all XML parsing, preventing XML External Entity (XXE) injection attacks. XXE is a class of vulnerability where a malicious XML file could access local files or internal network resources.

* **SharePoint 2010 is no longer supported.** SPDocKit 12.1.0 requires SharePoint 2013 or later and no longer includes SharePoint 2010 libraries.

  **If you are running SharePoint 2010, do not upgrade to this version.** You must upgrade your SharePoint environment to 2013 or later before using SPDocKit 12.1.0.

* **Auto SP Installer wizard updated.** The wizard no longer includes passphrase and password input fields. A new summary panel on the final step lists credentials you must enter manually after the wizard finishes.

* **Fixed an issue** where Farm documentation export to Word (Docx) failed when the **Used Content Types** node was selected.

* **Fixed an issue** in the **Web Application Compare** wizard where user access policy entries were mapped incorrectly, causing inaccurate comparison results.

* **Various improvements and bug fixes.**
