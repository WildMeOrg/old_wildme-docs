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

In Wildbook, all uploads and queries all go through the java stack.  Once in the world of java/postgresql there is a significant amount of duplication and coordination between that and IBEIS (was WBIA, now SAGE) to do the computer vision. This creates a bottleneck, complexity (and inconsistent data), and is difficult to maintain.

The major difference between the wildbooks is that each has custom attributes in both the SAGE and EDM data. Water depth is a valid attribute for a whaleshark but not a giraffe. These are managed as different git branches in the respository. This means the code is duplicated rather than shared across wildbooks. In Codex there will be one version of the code and the wildbook specific attributes will be set up using configuration files.

Further, Wildbook used java jsp to construct the user interface, which is slow, error-prone, inconsistent in look and feel, and very difficult to maintain or learn.

The goal with Codex is to streamline the architecture of the entire system, reduce redunancy while introducing multiple new places to handle scaling, and provided a unified REST API so that front-end user interface can be maintained separately.

# Codex
Codex reuses some of the parts of the Wildbook while adding new components an a new architecture. 

Wildbook accesses SAGE via a REST API. The main aspect of the move to Codex is to split the java in Wildbook into:
   - The EDM that manages the ecological data.
   - The management of access to the data by houston.

![next-gen_overview_nuts-n-bolts_draft.jpg](../../static/img/developer_overview_1.jpg)

Overview of functionality mapping between Wildbook and Codex

| Wildbook          | Codex                                                                                                                                           | Amount of work                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Java Application | Split into front end houston block (new) that handles access and back end EDM block that handles the ecological data (port from classic Wildbook). | Very large                                              |
| Ibeis            | Renamed to SAGE. Scalability to be added.                                                                                                         | Was already accessed via REST API so not a huge amount. |
| N/A              | Submission gitlab for storing incoming data before processing and potentially data backup                                                          | Minimal.                                                |

Houston is used to refer to 
   - The new flask based python component to manage user interactions with the system.
   - The entire frontend container containing Houston (flask python), the frontend and the user databases to manage access. 

## SAGE
 
   - Uses the images received from users to generate annotations: A record of the location and class (usually species) of things it found. 
   - These annotations are returned to Houston and used to make system decisions like creating more encounters for multi animal images, and gathering sets of images for identification. 
   - Stores the assets uploaded and the ML data learned from them.
   

## Houston Flask

The Houston flask component is the new frontend system co-ordinator that will manage user access and all inter module communication. It receives all user requests, determines which modules process the requests and how the responses are handled.

The Houston database contains lightweight reference versions of data found both in the EDM and SAGE, and retrieves the full record from each to display to users when permitted.

The operation of Houston is described in more detail on the [Houston](/docs/developers/houston) page.

To show how houston is expected to operate a number of use cases will be described.

**Data upload use case : Anonymous user uploads an image.** 
   * Houston accesses User database to determine if user authorised (user is citizen scientist so not an authorised user).
   * Houston intakes images and metadata from the frontend interface.
      * Metadata is used to create AssetGroup and AssetGroupSighting records.
      * All Images for the upload are saved into a single AssetGroup on a local Gitlab instance.
      * Images are used to create Assets, which will be later associated with encounters. 
   * Houston sends image to SAGE for detectionn. 
      * Houston receives Annotation data from SAGE and creates lightweight Annotation records.
      * The derived Annotation records are associated with the sent Asset, and available for researchers to use in matching.
      * An Asset does not always require an Annotation. SAGE detection may not find anything useful but this Asset will be reported as part of the Integrity checking for potential removal.

**Data query use case : Authorised user queries data.**
   * Houston validates that user is authorised (they are).
   * Houston requests data from EDM according to user request.
   * Houston requests assets from SAGE associated with user request.
   * Houston displays combined ECM and SAGE data to user.

**Data management use case : Researcher user curates and commits AssetGroupSighting from anonymous user.** 
   * Houston validates that user is authorised (they are).
   * Front End promts user to curate the annotations into clusters, one per animal that will be used to create Encounters.
   * Once all Annotations are associated with Encounters the user commits the AssetGroupSighting in the frontend.
   * On commit a Sighting and the Encounters are created in Houston and the appropriate data is stored in EDM.
   * Commit also starts the Identification process in SAGE.
   * Once Identification is complete, the Frontend promts the user to associate the annotation with an existing Individual or create a new one.
   

## EDM - Ecological Data Module

The EDM is the repository of ecological data like species, GPS coordinates, researcher notes and measurements. It's origin is in Wildbook software previous to development of Codex.
The lightweight database records in Houston do not contain any researcher metadata, and simply refer to the complex data storage in the EDM using UUID's.

**Primary EDM stored records:**
These records are quite similar to ones found prior to Codex in Wildbook software, but there are some differences like the required encounter/sighting association.
Each EDM record has a lightweight counterpart on Houston that contains no ecological information and is used as a pointer for access control.
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

The bulk import and form submissions overviews below should explain differences in the pipeline for these methods.

**Bulk Import overview:**
* User adds metadata to a standardized format of CSV file.
* CSV file contains a row for each encounter.
   * Each encounter row will have columns for metadata like species and location.
   * Each encounter row will have a column for any number of image filenames provided. This is how images and encounters are associated.
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
* Images from form submission sightings are automatically sent to SAGE once metadata is validated.

The back-end overview below describes behaviors common to bulk and form data submission.
These actions occur in Houston and the EDM after one of the two above input paths are followed.

**Back-end submission overview:**
* Data from the form or bulk import is submitted to the AssetGroup REST API on Houston.

* All image files received are stored together as a AssetGroup in a local gitlab repository.
   * This becomes a convenient way to reference sets of images in the system.
   * Single images are used to create Asset objects in Houston. Encounters retain collections of assets.

* Assets processed by SAGE will return Annotation data to Houston if the image contains identifiable information.
   * An Asset can have any number of annotations.
   * Annotation data is includes bounding box dimensions, detected class, pipeline status and identification viability. 
   * Houston does not store the Annotation data beyond creating a lightweight pointer to SAGE attached to the Asset.
   * If an asset is found to contain multiple animal annotation, it is the responsibility of the researcher user to curate the annotations into multiple Encounters.

