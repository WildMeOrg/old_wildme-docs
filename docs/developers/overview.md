---
id: overview
title: Developer Overview
sidebar_label: Overview
---

Wild Me software applications help researchers conduct wildlife research in support of species conservation.

## Wildbook

Wildbook, our flagship product, helps researchers catalogue sightings of threatened animals, often for the purpose of creating population estimates using a technique called [mark recapture](https://en.wikipedia.org/wiki/Mark_and_recapture). Wildbook is a Web-based, multi-user software platform to help researchers collaboratively track individual animals in wildlife populations and estimate population sizes. Each Wildbook installation can be used by multiple researchers for multiple species. 

Wildbook includes:

- a browser-based user interface (UI)
- a high performance PostgreSQL database for storing multiple wildlife-related data types
- two servers
  - Data Management Server - coordinates UI browser display and data storage
  - [Wildbook Image Analysis ("WBIA")](../developers/wbia/wbia_overview) - manages the computer vision pipeline and and AI models and training tools. WBIA does not come preconfigured to detect and identify animals from a species. Pre-trained ML models for the species must be used, or new models must be created using training data.
- machine learning (ML) tools in WBIA to speed image curation by
  - finding one or more animals in photos ("detection")
  - individually identifying each animal found ("identification")

![](../../static/img/wildbookEcosystem.png)

*The Wildbook ecosystem of people, servers, and AI.*

### Technical Overview

[More about Wildbook.](/docs/developers/wildbook_overview)

Wildbook's front-end server is a Java/JSP web app that interfaces with a backend server called Wildbook Image Analysis (WBIA) that is Python-based. 

## Codex: Wildbook's next generation

Wildbook's next generation is being developed under the brand name "Codex". Codex is the result of an effort to modernize the Wildbook web interface and to implement lessons learned over years of Wildbook development and support since the first lines of code were written in 2002.

New development on Wildbook has ceased, and the product will become deprecated in a phased approach after Codex reaches production.

Changes include

- exposing a REST API in the Java app
- creating a new middleware for user management, asset management, and access control 
- replacing the legacy JSP frontend with a React frontend 

Collectively, these changes will result in a new product that we call Codex. 

[More about Codex.](/docs/developers/codex_overview)

## Github Repositories

[Wild Me's Github repositories include past work on Wildbook and new work on Codex and WBIA.](https://github.com/WildMeOrg)