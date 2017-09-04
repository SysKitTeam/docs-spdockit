---
title: PowerPivot FileNotFoundException issue
description: A FileNotFoundException error message keeps appearing during SPDocKit's snapshot process.
author: Iva Novoselic  
date: 25/5/2017
---

__Summary:__ During the snapshot process, the following error can be observed either in the Snapshot Wizard or the event log:

`System.IO.FileLoadException: Could not load file or assembly ‘Microsoft.AnalysisServices.SPAddin, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91’ or one of its dependencies. The located assembly’s manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)…`

__Application version:__ All versions

__Solution:__
Make sure that SPDocKit is installed on a server where “PowerPivot for SharePoint Add-in” is also installed. According to Microsoft recommendations, “PowerPivot for SharePoint Add-in” should be installed on each SharePoint server, so it should not matter where SPDocKit is installed.

However, if for any reason you do not wish to install “PowerPivot for SharePoint Add-in” on the relevant server, then reinstall SPDocKit on a server where “PowerPivot for SharePoint Add-in” is available.

If the error still occurs, please do the following:

1. Determine the correct major version [MajorVersion] of “PowerPivot for SharePoint Add-in”. You can do this by viewing the installed programs list and locating Microsoft SQL Server PowerPivot for SharePoint.
1. After you have the correct version, open the SPDocKit.exe.config file. It should be located in the installation directory. By default, this is C:\Program Files\SysKit\SPDocKit.
1. Inside the runtime tag, add the following as a child node and save the file:
      ```
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">    
    <dependentAssembly>      
    <assemblyIdentity name="Microsoft.AnalysisServices.SPAddin" publicKeyToken="89845DCD8080CC91" culture="neutral" />  
    <bindingRedirect oldVersion="0.0.0.0-[MajorVersion].0.0.0" newVersion="[MajorVersion].0.0.0" />    
    </dependentAssembly>    
    </assemblyBinding>  
    ```
1. Repeat the process for Acceleratio.SPDocKit.Service.exe.config if you are using automatic snapshots.
1. Restart SPDocKit.
1. Restart the SPDocKit service if you are using automatic snapshots.

Try to create a snapshot of your farm to confirm that there are no more errors related to PowerPivot.
