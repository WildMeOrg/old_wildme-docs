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
   - WB-IA uses the images received from users to generate annotations: A record of the location and class (usually species) of things it found. 
   - These annotations are returned to Houston and used to make system decisions like creating more encounters for multi animal images, and gathering sets of images for identification. 
   - The ACM stores the assets uploaded and the ML data learned from them.
   - The ACM is updated with the new data.
   
As the ACM update procedure is separate from the image processing procedure it is possible in future to have multiple WB-IAs accessing the same ACM.


## Houston Flask

The Houston flask component is the new frontend system co-ordinator that will manage user access and all inter module communication. It receives all user requests, determines which modules process the requests and how the responses are handled.

The Houston database contains lightweight reference versions of data found both in the EDM and WB-IA, and retrieves the full record from each to display to users when permitted.

The operation of Houston is described in more detail on the [Houston](/docs/developers/houston) page.

To show how houston is expected to operate a number of use cases will be described.

**Data upload use case : Unauthorised user uploads an image.** 
   * Houston accesses User database to determine if user authorised (user is citizen scientist so not an authorised user).
   * Houston intakes images and metadata from the React frontend.
      * Metadata is used to create Sighting and Encounter records.
      * All Images for the upload are saved into a singleSubmission on a local Gitlab instance.
      * Images are used to create Assets, which are then associated with encounters. 
   * Houston sends image to WB-IA for processing. 
      * Houston recieves Annotation data from WB-IA and creates lightweight Annotation records.
      * The derived Annotation records are associated with the sent Asset, and available for researchers to use in matching.
      * An Asset does not require an Annotation, as WBIA detection may not find anything useful. 
   * Houston sends data to EDM for storage as unapproved.

**Data query use case : Authorised user queries data.**
   * Houston validates that user is authorised (they are).
   * Houston requests data from EDM according to user request.
   * Houston requests assets from WB-IA associated with user request.
   * Houston displays combined ECM and ACM data to user.

**Data management use case : Authorised user approves unapproved data.** 
   * Houston validates that user is authorised (they are).
   * Houston requests unapproved data from EDM.
   * Houston requests assets from WBIA associated with individual encounter.
   * Houston displays encounter, assets and attributes to authorised user.
   * Authorised user approves encounter.
   * Houston updates EDM to mark the data as approved.
   
**Data processing use case : Authorised user initiates identification for an image.**
   * Houston validates that user is authorised (they are).
   * Houston recieves identification job parameters like a query image ID, species and location from the frontend. 
   * Houston transmits queries the EDM for encounters that meet the parameters.
   * Houston gathers valid annotations from these encounters, and sends them to WBIA for the query image to match against. 
   * Houston recieves identifiation results from WBIA and routes them to the front end and user. 

## EDM - Ecological Data Module

The EDM is the repository of ecological data like species, GPS coordinates, researcher notes and measurements. It's origin is in Wildbook software previous to development of Codex.
The lightweight database records in Houston do not contain any researcher metadata, and simply refer to the complex data storage in the EDM using UUID's.

**Primary EDM stored records:**
These records are quite similar to ones found prior to Codex in Wildbook software, but there are some differences like the required encounter/sighting association.
Each EDM record has a lightweight counterpart on Houston that contains no ecological information and is used as a pointer of for access control.
* Encounter: Single animal at a single place in time.
   * Every encounter belongs to a sighting.
* Sighting: One or more animals at a single place and time.
   * Container for encounters, allowing for images that contain multiple animals or multiple encounters for a single place and time to be fundamentally connected.
   * Every sighting must have at minimum one Encounter.
   * Sighting is destroyed if it's last encounter is removed. There are no zero encounter sightings.
* Individual: Unique ID for a single animal that is applied to an encounter if there is a positive match.
   * Individual records can be merged if it is discovered that two or more are actually the same animal.
   * Individual can be split if it's list of encounters is found to contain data from multiple individuals. 
   * Individual has a unique UUID and default name, but can retain any number of human readable names for different users.
   * Core idea is that an Individual refers to one animal who record is comprised of the data in one or more encounters.
   * Individual is destroyed if it's last encounter is removed. There are no zero encounter individuals.

## Codex Data Submission Pipeline

Data is added to Codex using a form for creating sightings, or in bulk through upload of a CSV file and folder of images.
This data is processed and added to the database if it is valid, and then can be curated further or used for image analysis matching.

The bulk import and form submissions overviews below should explain differences in the pipline for these methods.

**Bulk Import overview:**
* User adds metadata to a standardized format of CSV file.
* CSV file contains a row for each encounter.
   * Each encounter row will have columns for metadata like species and location.
   * Each encounter row will have a columns for any number of image filenames provided. This is how images and encounters are associated.
   * Since every encounter must have a sighting, if no sighting name is described for the encounter one will be automatically generated.
   * Sighting metadata is in general derived from the contained Encounter records. Metadata stored on the Sighting is primarily observational notes as custom fields. 
* User places all image files references in the CSV file in a folder.
* Codex interface guides user through uploading CSV file and image folder, and directs them to where they can observe progress.
   * Front end conversion to JSON is done with [Flatfile](https://flatfile.io/)
* Bulk submissions have an import ID that can be used to check the status of, search for or remove a given import.
* Users can manually initiate WBIA detection for the entire bulk import if the sightings and images pass validation.

**Form submission overview:**
* User is directed to a form where they can describe a sighting by adding metadata like date, location and species.
* User chooses image files from their computer to add to this sighting.
* The form allows designation of multiple encounter records within the sighting.
   * These can be different species and have different metadata, but must be in the same time span and location.
   * Multiple encounters within the sighting should reference the same image only if the image contains multiple animals.
* Images from form submission sightings are automatically sent to WBIA once validated.

The back-end overview below describes behaviors common to bulk and form data submission.

**Back-end submission overview:**
* Data from the form or bulk import is submitted to the Sightings REST API.
* All image files recieved are stored as a Submission in a local gitlab repository.
   * This becomes a convenient way to reference sets of images in the system.
   * These submissions are unique and can be modified in cases like retrying a failed bulk import.
* Metadata for submitted sightings is sent directly to the EDM for validation.
   * This is done blindly by Houston. In its role directing traffic Houston has no sense of ecological data validity.
* On successful validation the submitted data is used to create sightings and encounters.
   * Individual records can be added too, typically when a user is bulk uploading a historical catalog.
   * On failed data validation, no Encounter or Sighting records are created in Houston or the EDM.
* Individual images are used to create Asset objects in Houston that are tied to the encounter records referencing the image names.
* Assets processed by WBIA will return Annotation data to Houston if the image contains identifiable information.
   * An Asset can have any number of annotations.
   * Annotation data is includes bounding box dimensions, detected class, pipeline status and identification viability. 
   * Houston does not store the Annotation data beyond creating a lightweight pointer to WBIA attached to the Asset.
   * If an asset is found to contain multiple animal annotation, it's parent Encounter will be duplicated within the parent Sighting and each will contain one of the found animal's Annotations.

