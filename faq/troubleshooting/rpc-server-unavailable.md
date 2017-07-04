---
title: RPC Server is Unavailable
description: This article describes how to troubleshoot the RPC related issues.
author: Dejan Stefulj
date: 28/6/2017
---

### Problem
When taking a snapshot in SPDocKit you might receive the following error message:
> The RPC server is unavailable.

### Information
RPC (Remote Procedure Call) is standardized request-response protocol used by SPDocKit to fetch information from a particular server. __RPC Client__ is an application or task which requests the information (i.e. initiates the procedure call), and __RPC Server__ is an application or task which receives the request from RPC Client and sends back a response. Note that RPC Client and RPC Server can reside on different machines or on a single machine.

To simplify, we can refer to the machine where SPDocKit is installed as RPC Client, and any server in your farm from where you collect the data as RPC Server. (In this case, RPC Server is the machine about which you receive the error message.)

### Solution
The above error may arise if some of the configuration settings are not properly set, resulting in SPDocKit (RPC Client) being unable to establish a connection through the RPC protocol to RPC Server in your farm. 

There are many possible reasons for this error, but some of the most common solutions include the following:
#### 1. RPC or related services are stopped
Verify if the following services are running and set to Automatic startup on the RPC Server:
  * Remote Procedure Call (RPC)
  * DCOM Server Process Launcher
  * RPC Endpoint Mapper
  * Windows Management Instrumentation
  * DHCP Client (usually also started on servers with a fixed IP address).

If any of the above services are not running, please check with your administrator if they can be started, and set to Automatic startup if you have not done so already.  

If you make any changes to these services, you may need to restart the services or the server to apply the changes.


#### 2. Name resolution is not resolving properly
Try to resolve the RPC Server's IP address by executing the following command from Command Prompt or PowerShell on the RPC Client’s server: 
> nslookup hostname_or_FQDN_of_RPC_Server

* As a result, you should see the name and IP address of the Domain Controller against which the resolution has been performed, along with the name and IP address of the RPC Server you have tried to resolve.
* If you receive an error message or you don't get the proper IP address of RPC Server, please contact your network administrator.

Verify that RPC Client and RPC Server are using the correct DNS servers for a name resolution, and check that DNS configuration is valid.

#### 3. Firewall is blocking the connection
Verify the firewall state between RPC Client and RPC Server. 
* If the firewall is disabled, there is no need for any additional changes.
* If the firewall is enabled, verify that the required ports are also enabled, as stated [here](#internal/faq/miscellaneous/#network-ports-required-for-gathering-the-data) in the section entitled “Network ports required for gathering the data”.

#### 4. Network connection not set properly
If RPC Client and RPC Server are different machines, verify that there is an available network connection between these servers.
* Try __ping, tracert__ or similar commands to check if RPC Server is accessible through the network from RPC Client.

If RPC Client and RPC Server are on different subnets, verify that traffic is enabled and properly routed between these subnets.

Verify if the “File and Printer Sharing for Microsoft Networks” is enabled in your default network adapter on RPC Server.
* To check this option, go to Control Panel > Network and Sharing Center > Change adapter settings. Then right-click on your default network adapter and select Properties.

#### Additional Notes
In addition, take the following into the consideration:
* On the RPC Client and RPC Server machines, check if there are any potentially related warning or error messages (RPC protocol, network communication, etc.) logged in the Event Viewer at the time when the error was received.
* If RPC Client and RPC Server machines are in different domains, verify that the trust relationship is established properly between these trusted domains.
* If you receive the above error message only for some servers but not for others, you can try to narrow down the troubleshooting only to those servers for which you received an error message.

