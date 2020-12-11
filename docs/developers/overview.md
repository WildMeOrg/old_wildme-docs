---
id: overview
title: Developer Overview
sidebar_label: Overview
---

Wild Me software aims to help researchers conduct conservation research. Wildbook, our flagship product, helps researchers catalogue sightings of threatened animals, often for the purpose of creating population estimates using a technique called [mark recapture](https://en.wikipedia.org/wiki/Mark_and_recapture). 


Wildbook is a Java/JSP web app that interfaces with an image analysis platform called IBEIS. There are some technical issues with Wildbook that have led us to undertake some major architectural changes. Changes include
- exposing a REST API in the Java app
- creating a new middleware for user management, asset management, and access control 
- replacing the JSP frontend with a React frontend 

Collectively, these changes will result in a new product that we call Codex. New development on Wildbook has ceased, and the product will become deprecated shortly after Codex is released.

[More about Wildbook.](/docs/developers/wildbook_overview)

[More about Codex.](/docs/developers/codex_overview)
