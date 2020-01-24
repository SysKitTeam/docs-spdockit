---
title: Customize Documentation Template
description: >-
  This section describes how you can use your own documentation template (.dotx)
  to generate SharePoint Farm documentation with the SPDocKit.
author: Iva Novoselic
date: 25/5/2017
---

# Customize Documentation Template

## Quick guide

To prepare a template for your documentation, you need to prepare a Word document template and customize Word styles. SPDocKit uses Word styles to generate customized output to match your corporate branding.

1. Create a custom Word document template \(.dotx\). Use your existing template or download our [sample documentation template.](https://www.spdockit.com/wp-content/uploads/2015/08/SharePoint-Farm-Documentation-Template.dotx)

   We recommend you use the **Medium Shading 1 – Accent 1** table style with this template. Customize the following styles to match your corporate branding: Heading1, Heading2, Heading3, Heading4, Normal and Hyperlink \(you can make any changes required as long as these changes are performed over the style itself\).

2. Customize the table styles to match your branding.
3. Customize headers and footers to add your company name, page numbers, etc.
4. Customize the front page.
5. Remove extra content except for the custom front page \(or first few pages\) that you wish to be included in every document.
6. Start SPDocKit.
7. In the Home ribbon, click **Change Styles**.
8. Select **Upload a Custom Template**. Click Next to continue.
9. Browse your Word template \(.dotx\) and choose the table style you want to use when generating tables \(we recommend you use **Medium Shading 1 – Accent 1** with [our template](https://www.spdockit.com/wp-content/uploads/2015/08/SharePoint-Farm-Documentation-Template.dotx)\).
10. Click Finish to save.

## Customizing styles

SPDocKit uses the following default Word styles to generate documentation:

* **Heading1, Heading2, Heading3 and Heading4** – used to generate section headings.
* **Normal** – used to generate paragraph text.
* **Hyperlink** – used for hyperlinks.

SPDocKit styles need to be customized to match your corporate or other desired branding. To modify a Style in Microsoft Word do the following:

1. From the **Styles** ribbon right-click the style you want to customize.
2. From the context menu choose **Modify**.
3. A new dialog will open. Use it to make the desired changes \(font, size, etc.\)

You can read more about [style basics in Word here.](https://support.office.com/en-nz/article/Style-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4)

## Customizing Table Styles

To brand tables used in SharePoint farm documentation, you need to customize one of the built-in table styles. We currently support these styles:

* Table Grid
* Light Shading
* Light Shading – Accent 1
* Light Shading – Accent 3
* Light Shading – Accent 4
* Light Shading – Accent 5
* Medium Shading 1 – Accent 1
* Medium Shading 1 – Accent 4
* Medium Shading 1 – Accent 5
* Light Grid – Accent 6
* Medium Grid 1 – Accent 4
* Medium Grid 1 – Accent 5
* Medium List 2 – Accent 1
* Medium Grid 2 – Accent 2
* Medium Grid 2 – Accent 3

To customize the table style do the following:

1. Insert a table into the template document. \(the table will be removed in the last step\)
2. From the **Table Tools** contextual ribbon, expand **Table Styles**.
3. Right-click the style you want to change and choose **Modify Table Style**.
4. Make the changes to the table style to match your desired branding. Pay special attention to the formatting of the whole table, header row, odd and even banded rows.
5. Remove the table you inserted in step 1.

