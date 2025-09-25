---
description: This article gives answers to frequently asked questions regarding SPDocKit license configuration.
---

---
sidebar_position: 3
---

# Activation

## Is the trial version a Farm or Consultant License?

The trial is the latest released application version containing all available application features.

## What are the trial limitations?

The trial version of SPDocKit has a couple of limitations:

* Limited information in the generated documentation and exported reports. Export to .docx, .xlsx, or legacy .xlsx format is not available. You can see examples of how exported [reports](https://www.syskit.com/products/spdockit/resources/documentation-report-examples/) and [documentation](https://www.syskit.com/products/spdockit/resources/documentation-report-examples/) look like in the full version.
* Best Practices reports are limited to the dashboard overview.
* Permissions management is limited to 20 actions.
* The comparison feature is completely functional when comparing the same farm.
  * Comparison of different farms with snapshots made with the trial software is not possible.

If you would like to see more about the limited features, [contact us](https://www.syskit.com/company/contact-us/) and we will be more than happy to organize a demo for you and your colleagues to show SPDocKit at its full strength.

## What happens during product activation?

[Product activation](../activation/activate-spdockit.md) is a simple process that occurs during registration of the purchased product. The product key is entered and then authenticated with the Syskit product activation server in order to activate the product. The entire activation process is quick and easy, and the majority of users will have to perform product activation only once.

## Who will be required to activate their products?

Anyone who purchases SPDocKit will be required to [activate the product](../activation/activate-spdockit.md). If the product is ordered online from the Syskit website, the product activation code will be sent via email.

## How soon must I activate my product?

It is recommended you [activate your product](../activation/activate-spdockit.md) within the 30 days of the trial period. After the period expires, the application will stop working until it is activated.

## What happens if I do not activate my product?

If you do not activate your product within the 30-day trial period, it will stop working until you [activate it](../activation/activate-spdockit.md).

## If I do not have a product activation code to activate my software, how can I get a product activation code?

If you cannot find your product activation code, you should send a support request to [support team](https://www.syskit.com/company/contact-us/).

## How do I activate my product?

You can [activate your product](../activation/activate-spdockit.md) 24 hours a day, seven days a week on the Internet. Product activation requires you to type in your product activation code and press activate. You must have an active connection to the Internet in order to activate your product. If you do not have access to internet, please use [offline activation](../activation/activate-spdockit.md).

## What does Syskit do with the information sent during the product activation process?

We use the information only to verify that your product is used within the scope allowed by the [Syskit End-User License Agreement \(EULA\)](https://www.syskit.com/eula). The information is stored in a database and used only for product activation data. If you register your product, none of the activation information will ever be linked to your personal customer information.

## What is product activation?

[Product activation](../activation/activate-spdockit.md) is an anonymous, secure and hassle-free process that authenticates licensed users during the installation process. The process verifies that the product activation code is genuine and has not been activated on more systems than allowed by the [Syskit End-User License Agreement \(EULA\)](https://www.syskit.com/eula).

## Why does Syskit  require their customers to activate the software?

[Product activation](../activation/activate-spdockit.md) is a simple way to reduce and deter unauthorized use and casual copying of Syskit products with a minimal effect on our loyal customers.

## Will the activation process ever send data to Syskit after I activate my product?

No. [Activation](../activation/activate-spdockit.md) is a secure and anonymous one-time process. After activation is complete, the license manager runs alongside the product for the sole purpose of verifying the integrity of the license file and the validity of the product license. The activation technology in the product does not send any additional information to Syskit.

## How long does the product activation take to complete?

[Product activation](../activation/activate-spdockit.md) is a one-time process that is typically completed immediately after installation of the software. Activation typically takes 2-5 seconds to complete.

## When is product reactivation required?

Product reactivation is required only under exceptional circumstances – if, for example, you upgrade or replace your server, or if the activation process detects that the license has been tampered with.

## What if I have more than one server? Does the new license allow me to use the software on multiple servers?

One SPDocKit farm license can be activated on all servers within the same SharePoint farm. If you want to use SPDocKit for multiple SharePoint farms, you will need to purchase an additional farm license for every farm you wish to document.

## We have different SharePoint versions running in our environments — does this cost extra in terms of licensing?

Syskit does not charge extra for different SharePoint versions simultaneously running in your environments.

## How much does it cost to license non-production farms? \(Non-production farms include any farm that is not considered production,e.g. DEV, UAC, QA\)

SPDocKit Non-Production licenses can only be used on non production environments, such as DEV, UAC or QA. If you have more non production than production farms, then the charge for non-production licenses is significantly cheaper than production licenses. [Contact us](https://www.spdockit.com/support/contact-us/) with the info on how many production vs. non production farms you have, and we will put together a quote that best suits your needs.

## Where can I find the EULA for SPDocKit?

Our End-User License Agreement is located at the following [link](https://www.syskit.com/eula).

## I forgot my password — can you tell me how to reset it?

To reset your password, please go to the [following link](https://my.syskit.com/ForgotPassword.aspx).

1. Enter the email address associated with your account.  
2. Click on **Reset Password**.   
3. Instructions on how to reset your password will be emailed to you. 

{% hint style="warning" %}
**Please note!**  
These notifications can end up in your junk folder, so please check there if you don’t see our email within a few minutes. To avoid these situations, please add our email address to your **Safe Senders List**.
{% endhint %}

1. If for some reason you are still unable to retrieve the new password, please [contact us](https://www.spdockit.com/support/contact-us/) for further assistance.

## Implementation is not part of the FIPS validated cryptographic algorithms

**Problem:**  
When activating the application an error occurred: “This implementation is not part of the Windows Platform FIPS validated cryptographic algorithms.”

**Solution:**

1. Navigate to the SPDocKit installation folder. 
2. Open each of the configuration files \(name.exe.config\).
3. Under the `<runtime>` please paste the line `<enforceFIPSPolicy enabled="false">` 
4. Run activation once again.

