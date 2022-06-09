---
id: technical_how_to_edit
title: Programmer's guide to the Docs
---

---

Don't know how to program? [Start here instead!](/docs/how_to_edit) This guide is intended for programmers.

---

The Wild Me Docs are built in React using Docusaurus. But you don't need to know anything about React, Javascript, HTML or CSS to contribute to the documentation. Editing documentation and creating new documents only requires a basic knowledge of [Markdown](https://guides.github.com/features/mastering-markdown/).

## Getting started.

The fastest and easiest way to contribute is to clone the repository and run the app locally. 

1. Ensure you have modern versions of [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) installed.
2. Clone the repository and run `npm install`.
3. Run `npm start` to run the development server. You should be able to see the app running on `localhost:3000`. As you edit documentation, the app will self-refresh to reflect your changes. 

## Editing documentation 

The documentation is located in the `docs` folder. Each markdown file is used to generate a single page of documentation. To set this up properly, each markdown file has a header that starts and ends with `---`. There are a number of options you can specify, but the required options are `id` and `title`. Take a look at the [markdown file](https://github.com/WildMeOrg/wildme-docs/blob/main/docs/technical_how_to_edit.md) that generates this page for an example. 

When you create a new page, you can add it to the navigation component by registering it in `sidebars.js`. In this file each page is referred to by its path relative to the `docs` folder plus the page ID. For example if you create a page with ID `new_features` in `/docs/researchers/news/newFeatures.md`, you could refer to that page as `researchers/news/new_features`. 

Note that after you add a new page you will need to restart the server to see it in the app.

## Adding images

First, rename your image files using the following format: `page_name_imagenumber.format`. For example, the third image on the "Researcher overview page" should be named `researcher_overview_3.jpg`.

Now all you need to do is add your images to `static/img` and refer to them using the following format.

```![Alt text](../../static/img/researcher_overview_3.jpg)```

Please do not omit the alt text - it is important for accessibility and SEO.

## More information

All of this is discussed in much more depth in the [Docusaurus documentation](https://v2.docusaurus.io/docs/docs-introduction). 
