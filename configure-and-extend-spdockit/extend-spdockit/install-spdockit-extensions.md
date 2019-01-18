---
title: Install SPDocKit Extensions
description: >-
  This section explains how to set up the SPDocKit extensions. Extensions are
  additional SPDocKit reports that can be imported to application to help you
  cover all the information you might not have found in default reports.
author: Martin Pisacic
date: 18/5/2017
---

# Install SPDocKit Extensions

This section explains how to set up the SPDocKit extensions. Extensions are additional SPDocKit reports that can be imported to application to help you cover all the information you might not have found in default reports.

To install the extensions straight from SPDocKit, follow these instructions:

1. Navigate to the **Backstage Help Screen**, then click **Extension Manager**. The **Extension Manager** will open.
2. All available extensions are listed under the Online section. Choose the ones you would like to install and click **Install**. You can check all previously installed extensions under the **Installed** section. If there are any available updates for previously installed extensions, you will see them under the Updates section.
3. Once the plugin is installed, SPDocKit and the SPDocKit Service need to be restarted for the changes to take effect. Reports you gained installing the extension will be located under one of the SPDocKit report category, depending on the data they contain.

## **Offline Installation**

If your server does not have an internet connection, you can use the Offline installation process by following these instructions:

1. On the SPDocKit web site, under Resources, go to [Extensions](https://www.syskit.com/products/spdockit/resources/extensions/) to download the plugins you wish to use.
2. Once you have downloaded a plugin, navigate to the SPDocKit folder inside ProgramData and find the **Extensions** folder. Paste the downloaded plugin files there. The default full path is **C:\ProgramData\SPDocKit\Extensions**.
3. Once it is successfully installed, restart SPDocKit and the plugin will be ready for use.

{% hint style="warning" %}
**Please note! SPCAF or Workflow Analytics section will be visible in the navigation tree only after installing the extension.**
{% endhint %}

## **Learn more**

* [How to: Activate SPCAF extension](../../configure-and-extend-spdockit/extend-spdockit/activate-spcaf-extension.md)

