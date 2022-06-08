---
id: security_overview
title: Security Overview
sidebar_label: Security Overview
slug: /researchers/security_overview
---

Wildbook provides broad flexibility in securing data ownership and visibility. For example, a Wildbook could be completely secured to only ever be accessible to a User who has logged in, blocking any public visibility of data. In another configuration, Wildbook can be a very visible repository of global data (see the [Wildbook for Whale Sharks](https://www.whaleshark.org) for an example) but only allow for data curation by authenticated and pre-approved researchers and volunteers. And there are many possible configurations in between. Check with the Administrator of your Wildbook(s) for more information about the security model followed.

## General Security Models

Wildbooks generally follow two security models.

### Silo Security

Silo Security provides a secure sandbox for individual Users to enter and curate their data. Here is a quick summary:

- Your User data is visible only to you.
- You can share data visibility and data curation with other, specific Users in Wildbook via pairwise Collaborations, which must be reciprocally approved at the "view-only" and "edit" levels, respectively.
- Other users can potentially match individual animals from your catalog but must have a Collaboration with you to set the match ID and affect your catalog.
- Other Users attempting to view your data will be blocked from reviewing your Encounters and Marked Individuals and be prompted to extend you an invitation for a Collaboration. Invitations and acceptances can sent inside Wildbook.

[For more information about Silo Security, click here.](silo_security.md)

Examples of Silo Security-based Wildbooks include:

- [Flukebook](https://www.flukebook.org)
- [African Carnivore Wildbook](https://africancarnivore.wildbook.org)

### Location-based Role Security

Location-based Role Security pairs User Roles in Wildbook with specific study sites around the globe, as reflected in the Encounter.locationID data field. For example, a User with the "Mozambique" role assigned to their User Account can edit data assigned to Encounters with the the locationID (a.k.a "study site") named "Mozambique". In this mode, all researchers within a catalog can view all data, but only Users with the correct location role can curate a particular Encounter. This model creates effective groups of collaborators in a geographic location while providing global visibility to the broader research community. 

Examples of Location-based Role Security Wildbooks include:

- [Wildbook for Whale Sharks](https://www.whaleshark.org)
- [MantaMatcher](https://www.mantamatcher.org)