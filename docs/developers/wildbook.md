---
id: wildbook_overview
title: Wildbook Overview
---


At the highest level, Wildbook contains the following components:
1. **WBIA** and **ACM** (Wildbook Image Analysis & Asset Curation Module)
   - Computer vision to find animals and metadata within images.
  - ML & algorithms used to identify individual animals which were detected.
  - Manage the image data and derived metadata within this system
2. **EDM** (Ecological Data Module) 
  - Store recorded observations about animals as collected in the field.
  - Combine *when* and *where* animals were seen with *who* the animals are (from WBIA)
  - Maintain information such as relationships between animals and full catalogs of all sightings over time.
  - Facilitate searching, exporting, and sharing all of this data.
3. User interface 
  - Allows access to above systems to the end user.
  - Maintains authentication and permissions of data.

Wildbook is this collection of components providing a complete set of tools for doing ecological research, particularly suited to tracking populations over time.  A single installation may support a single species (giraffes) or a larger group of related species (cetaceans).

## Interactions with Wildbook (Top level use cases)
The interactions with the system can be split into the following sets of operations:

1. Data upload - users upload photos and metadata about the photo.
   - User uploads a single Encounter or Sighting (1 or more animals at a location)
   - User does bulk upload of images/metadata (across multiple days & locations)

2. Data management - administration of the data in the wildbook.
   - Once images are uploaded, encounter and sightings are generated but not incorporated into the ACM and EDM until they are approved.
       - Encounters and sightings from an authorised user are automatically approved.
       - Encounters and sightings from an unauthorised user (e.g. citizen scientist) need to be approved by an authorised user. 
   - Authorised users can also delete assets that are of poor quality or providing no benefit.

3. Data query – questions asked about the ecological data stored in Wildbook.
   - User can ask questions about individual animals -- such as how many times it was sighted and where, or more complex aggregate questions such as how many males were seen in one location for a given year.
   - Data is typically displayed as tables of results or single observations that include photos and maps.
   - Results from queries can be exported and used for further research, such as in third-party population modeling software.

4. User management
   - [Adminitrative](/en/researchers/roles/org-admin) users can add, delete and manage the pemissions of authorised users.
   
Details of how the user uses the interface to do this are covered in the "Navigating the Platform" section of the [researcher overview](/docs/researchers/overview).
