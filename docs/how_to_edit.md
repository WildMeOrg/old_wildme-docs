---
id: how_to_edit
title: How to edit Wild Me Docs
---

---

Know how to program? [Start here instead!](/docs/technical_how_to_edit) This guide is intended for non-programmers.

---



Docs pages are written using a technology called "Markdown". It's very easy to write Markdown, even if you have no experience with programming. Here is an [excellent guide](https://guides.github.com/features/mastering-markdown/) that covers the basics.

A Github account is required to edit the Wild Me Docs. If you don't have an account yet, go ahead and [create one now](https://github.com/join).

## Editing pages 

Every page (including this one) has an button at the bottom labeled "Edit this page". When you click this button you will be asked to log into your Github account. After logging in, you will be able to edit the page content freely. When you are finished, scroll to the bottom of the page and write a brief description of your changes. Click "propose changes" and they will be sent to Wild Me staff for review.

## Creating a new page 

To create a new page, start at the [docs root](https://github.com/WildMeOrg/wildme-docs/tree/main/docs) navigate to the appropriate folder on Github and click "Add file" in the upper right hand corner. Name your file using the format `your_article_title.md`. Copy the following template into the new page:

```
---
id: your_article_title
title: Your Article Title
---

Your page content goes here. [Example link](http://wildme.org/).

## Example section 

Let's make some bullet points:
- Point 1
- Point 2
- Point 3

```

Now it's just a matter of replacing the content above with the actual page content. You can use the "preview" button to see how your page will look once it's published to DocHub. When you are finished, scroll to the bottom of the page and write a brief description of the new page. Click "propose changes" and they will be sent to Wild Me staff for review.

## Adding pages to the side navigation

First, you have to determine your page reference. The *page reference* is a combination of the path to the page from the [docs](https://github.com/WildMeOrg/wildme-docs/tree/main/docs) folder and the ID of the page. These two bits of information are combined with a forward slash `/`.

For example, if your page is located at `/docs/researchers/features/newpage.md` and newpage.md contains

```
---
id: manual_annotation
title: Manual Annotation
---

This article is about a new feature called...
```

then your reference would be `researchers/features/manual_annotation`. Now all you need to do is edit the [sidebar definition file](https://github.com/WildMeOrg/wildme-docs/edit/main/sidebars.js) to include your new menu item. After you add the page reference in the appropriate location, scroll to the bottom of the page and write a brief description of your change. Click "propose changes" and they will be sent to Wild Me staff for review.

## Adding images

Images must be added to the docs _before_ they can be used in a page. First, rename your image files using the following format: `page_name_imagenumber.format`. For example, the third image on the "Researcher overview page" should be named `researcher_overview_3.jpg`.

Go to the [img folder](https://github.com/WildMeOrg/wildme-docs/tree/main/static/img) and click "add file" in the upper right hand corner.  Click "upload files", drag the images in, and wait for the upload to finish.  When the uploads finish, scroll to the bottom of the page and write a brief description of the images you added. Click "propose changes" and they will be sent to Wild Me staff for review.

To use an image in a page, use the following format:

```![Description of image](../../static/img/your_image_name.png)```

By default images scale to 100% of the content width. To specify the size of an image, you must use MDX to insert an HTML img tag. See the [relevant docusaurus documentation](https://v2.docusaurus.io/docs/static-assets/) for more information.

Even though the description of the image will not be visible in the final web page, it is important to include a description for accessibility purposes. 
