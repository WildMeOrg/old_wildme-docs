---
id: codex_overview
title: Codex Overview
sidebar_label: Overview
---

## Motivation 

The classic Wildbook is 15+ year old and has grown from a one-person pet project to the system used today.
- Java application that implements both the EDM and UI functions. This is the system currently deployed in all the production environments.
- WBIA (aka IBEIS) – Python application that perform the computer vision and ML work to provide a system for the Java-based EDM identify the animals within images.
- A great deal of duplication and complexity exists to coordinate between these two systems around their shared assets (photos).


## Issues with Wildbook and goals for Codex
When moving to a new system it is important to understand the issues that the new system is intended to solve.

In Wildbook, all uploads and queries all go through the java stack.  Once in the world of java/postgresql there is a significant amount of duplication and coordination between that and IBEIS (now WBIA) to do the computer vision. This creates a bottleneck, complexity (and inconsistent data), and is difficult to maintain.

The major difference between the wildbooks is that each has custom attributes in both the ACM and EDM data. Water depth is a valid attribute for a whaleshark but not a giraffe. These are managed as different git branches in the respository. This means the code is duplicated rather than shared across wildbooks. In Codex there will be one version of the code and the wildbook specific attributes will be set up using configuration files.

Further, Wildbook used java jsp to construct the user interface, which is slow, error-prone, inconsistent in look and feel, and very difficult to maintain or learn.

The goal with Codex is to streamline the architecture of the entire system, reduce redunancy while introducing multiple new places to handle scaling, and provided a unified REST API so that front-end user interface can be maintained separately.

# Codex
Codex reuses some of the parts of the Wildbook while adding new components an a new architecture. 

Wildbook accesses the IBEIS via a REST API. The main aspect of the move to Codex is to split the java in Wildbook into:
   - The EDM that manages the ecological data.
   - The management of access to the data by houston.

![next-gen_overview_nuts-n-bolts_draft.jpg](../../static/img/developer_overview_1.jpg)

Overview of functionality mapping between Wildbook and Codex

| Wildbook          | Codex                                                                                                                                           | Amount of work                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Java Application | Split into front end houston block (new) that handles access and back end EDM block that handles the ecological data (port from classic Wildbook). | Very large                                              |
| Ibeis            | Renamed to WB-IA. Scalability to be added.                                                                                                         | Was already accessed via REST API so not a huge amount. |
| N/A              | Submission gitlab for storing incoming data before processing and potentially data backup                                                          | Minimal.                                                |

Houston is used to refer to 
   - The new flask based python component to manage user interactions with the system.
   - The entire frontend container containing Houston (flask python), the react frontend and the user databases to manage access. 

## WB-IA and ACM

In the simplest case there is a one-to-one mapping between a WB-IA (pronounced wib-e-a) and the ACM. The WB-IA is the processing side and the ACM is the storage side. 
   - WB-IA uses the image received and the ACM data to build up the sightings, encounters and individuals data.
   - The ACM stores the assets uploaded and the ML data learned from them (called features).
   - The ACM is updated with the new data.
   
As the ACM update procedure is separate from the image processing procedure it is possible in future to have multiple WB-IAs accessing the same ACM.

## Houston Flask

The Houston flask component is the new frontend system co-ordinator that will manage user access and all inter module communication. It receives all user requests, determines which modules process the requests and how the responses are handled.

The operation of Houston is described in more detail on the [Houston](/docs/developers/houston) page.

To show how houston is expected to operate a number of use cases will be described.

<b> Data upload use case : Unauthorised user uploads an image. </b>
   - Houston accesses User database to determine if user authorised (user is citizen scientist so not an authorised user).
   - Houston sends image to WB-IA for processing. 
   Houston receives sighting, encounter and individual data back from WB-IA.
   - Houston sends data to EDM for storage as unapproved.

<b> Data query use case : Authorised user queries data. </b>
   - Houston validates that user is authorised (they are).
   - Houston requests data from EDM according to user request.
   - Houston requests assets from WB-IA associated with user request.
   - Houston displays combined ECM and ACM data to user.

<b> Data management use case : Authorised user approves unapproved data. </b>
   - Houston validates that user is authorised (they are).
   - Houston requests unapproved data from EDM.
   - Houston requests assets from WBIA associated with individual encounter.
   - Houston displays encounter, assets and attributes to authorised user.
   - Authorised user approves encounter.
   - Houston updates EDM to mark the data as approved.

