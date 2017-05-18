---
Title: Distributed Cache Loading Issue
description: This article explains loading issue when Distributed Cache settings cannot be loaded onto a server because that is not part of a Distributed Cache Cluster.
---

__Summary:__ SPDocKit does not load Distributed Cache settings data and displays a warning message during the load:

`Distributed Cache settings cannot be loaded onto a server that is not part of a Distributed Cache Cluster.`

This happens because SPDocKit queries only the server it is installed on for Distributed Cache data, so if the server on which SPDocKit is running is not a host for the Distributed Cache service, no data will be loaded.

__Application version:__ 4.1.0 and newer

__Solution:__  Install SPDocKit and run the load process from a server that is part of the Distributed Cache Cluster.

__Workaround:__ Distributed Cache API requires that the registry of the current server contains data providers and connection string for the cluster, or SPDocKit has to be installed and run from a server that is part of the Distributed Cache Cluster.

There is an unofficial workaround for this restriction which includes editing the registry of the server on which SPDocKit is installed on to include the fields required by the API. This means running a PowerShell script on the server SPDocKit is installed on in order to update the provider and connection string fields.

The registry fields will be correctly updated using this PowerShell script:

    if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"})-eq $null)
    {Add-PSSnapin Microsoft.SharePoint.PowerShell;}
 
    $ConnectionString = (Get-SPDatabase | ?{$_.Type -eq "Configuration Database"}).DatabaseConnectionString
    Set-ItemProperty "HKLM:\Software\Microsoft\AppFabric\V1.0\Configuration" -Name ConnectionString -Value $ConnectionString
    Set-ItemProperty "HKLM:\Software\Microsoft\AppFabric\V1.0\Configuration" -Name Provider -Value "SPDistributedCacheClusterProvider"
 
    New-Item -Path "HKLM:\Software\Microsoft\AppFabric\V1.0\Providers\AppFabricCaching\SPDistributedCacheClusterProvider"
    New-ItemProperty -Path "HKLM:\Software\Microsoft\AppFabric\V1.0\Providers\AppFabricCaching\SPDistributedCacheClusterProvider" -Name "DisplayName" -Value "Microsoft SharePoint AppFabric Caching Service Configuration Store Provider" -PropertyType "string" -Force
    New-ItemProperty -Path "HKLM:\Software\Microsoft\AppFabric\V1.0\Providers\AppFabricCaching\SPDistributedCacheClusterProvider" -Name "Type" -Value "Microsoft.SharePoint.DistributedCaching.Utilities.SPDistributedCacheClusterCustomProvider, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" -PropertyType "string" -Force

__Credit:__ To learn more more about this workaround please visit Wouter Bleeker blog.

__Status:__ Not resolved.

