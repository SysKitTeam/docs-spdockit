---
title: Activate SPCAF Extensions
description: This section explains how to activate SPCAF Extension.
author: Martin Pisacic
date: 18/5/2017
---

# activate-spcaf-extension

This section explains how to activate SPCAF Extension.

SPCAF is a SharePoint Code Analysis Framework developed by RENCORE GmbH. It provides detailed information about SharePoint customization’s \(WSPs or Add-ins\) code quality, dependencies, complexity and more.

Use SPDocKit to load WSPs information from your SharePoint farm and then add SPCAF reports using Extension Manager to analyze them. Available SPCAF reports include Analysis Summary, Code Quality, Code Metrics, Code Dependencies, and Code Inventory. They are located in the Content & Usage Reports section of SPDocKit.

Please note that because of a .NET Framework 4.0 requirement, SPDocKit with SPCAF extension only supports SharePoint Versions **SP2013 and SP2016**. SPCAF extension for SPDocKit **is free** but it is dependent on the third-party license, which is not provided by the SPDocKit team. Please refer to the [RENCORE GmbH](https://www.spcaf.com/) website for more information on pricing.

If you only wish to try the SPCAF extension without activation, there is a trial mode where you can see the summary report. Click [here](https://rencore.com/products/spcaf/try/) for more information.

## **Installing**

1. To install SPCAF extension you can use either online of offline installation. For detailed instructions click [here](activate-spcaf-extension.md#internal/how-to/reports/install-spdockit-extensions).

## **Activation**

Please note that if you already have the licensed SPCAF on a machine together with SPDocKit, the SPCAF plugin will be activated automatically.

1. As we mentioned before, you will receive your license key from Rencore. The key will be in a plain text format. This is what you need to do to create a license file: Create a file with extension “.lic”, e.g., **“license.lic“**. Then, open the file in your preferred text editor \(e.g., notepad\) and paste in your license key.

   After you install the extension, you need to activate it. Take the license file \(**whose name must be license.lic**\) and place it in: **“%ProgramData%\SPDocKit\Extensions\SPCAF”**.  
   Please note that, by default, the folders Extensions and SPCAF do not exist and **you need to create them**.

2. After that, go to the SPCAF Reports in the Content & Usage Reports section of SPDocKit. Select any report, and you will notice the following message: ![SPCAF-Trial](https://github.com/SysKitTeam/docs-spdockit/tree/004469a296c66d531f2ce80595d22502fbad6b70/how-to/reports/#img/spcaf-trial.png)
3. Click the **Activate your license** button. ![SPCAF-Activation-Code](https://github.com/SysKitTeam/docs-spdockit/tree/004469a296c66d531f2ce80595d22502fbad6b70/how-to/reports/#img/spcaf-activation-code.png) You will notice a **challenge code** \(in the previous picture\). Visit the webpage [activation.spcaf.com](https://activation.rencore.com/) and enter the code, as well as your e-mail address and the license key. The license key is the same one from the second step of this wizard. You need to open it with any text editor and copy/paste it. Click **Submit**. You will receive further instructions in your e-mail shortly, but here is what you need to do: ![SPCAF-Activation](https://github.com/SysKitTeam/docs-spdockit/tree/004469a296c66d531f2ce80595d22502fbad6b70/how-to/reports/#img/spcaf-activation.png)
4. Open the email and take the attached file \(**activations.caf**\). Place it in the following folder: **“%USERPROFILE%\AppData\Local\SPCAF”**

And that is it. You may try opening some of the SPCAF reports to make sure they are working properly.

