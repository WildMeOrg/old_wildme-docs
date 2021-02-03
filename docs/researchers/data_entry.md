---
id: data_entry
title: Data Entry
sidebar_label: Data Entry
slug: /researchers/data_entry
---

Wildbook has different ways of submitting data, affecting where and how data is entered and how Wildbook applies ML to process the data.

### Submitting one or more pictures of one animal

Wildbook supports reporting an Encounter with one or more photos (i.e. one or more MediaAssets containing only the same animal), such as a great sighting of a lone whale shark while diving. Wildbook allows the user to upload these pictures to Wildbook, along with the associated metadata, such date, location, and species. For this upload, the system creates an Encounter in the database. Upon successful upload, the submitter is presented a permanent link to the Encounter record, showing all of the data captured.

As an example, here is a link to an <a target="_blank" href="https://www.whaleshark.org/submit.jsp">example Wildbook submission form</a> in the Wildbook for whale sharks (*Rhincodon typus*).

And here is a link to a <a target="_blank" href="https://www.whaleshark.org/encounters/encounter.jsp?number=3b54a8cb-f899-4bb5-aa7c-13c2b6aa9fb1">stored Encounter submission.</a>

After a successful submission, if the submitter reported a species for which Wildbook's ML detection and/or identification is configured, automated ML will proceed, searching MediaAssets for individual animals and attempting to match the found Annotations. See [Image Analysis Pipeline](ia_pipeline) for more information.

See more comprehensive information about [Reporting an Encounter here.](report_encounter.md)

### Submitting a single picture of multiple animals

Some animals are difficult to photograph singly, such as social animals (e.g., packs, pods, etc.). Multiple animals are often in every photo. A Wildbook user can upload a single picture of multiple animals to Wildbook using the Encounter form discussed above, along with the associated metadata (e.g., date, location, and species). After submission, for each detected animal (assuming Wildbook's ML has been configured to support the species), an Annotation is created and then split into an its own Encounter, copying the originally provided metadata. This means that one photo can ultimately yield multiple Encounters that will be connected by a Sighting. Because the Annotations are generated from the same image, Wildbook preserves knowledge of that connection by associating all the related encounters with a single Sighting. An ID is associated with the Sighting, and that ID is available in each Encounter. Sightings allow users to associate information with all of the encounters tied to that event without having to update each of the encounters individually.

From here, each Annotation of each Encounter goes through the identification process individually.

#### Complications arising from metadata

If you provide information with a picture of multiple animals, additional complications can occur. For example, if you indicate the sex, life stage, or identity of an animal, there is no guarantee that, when the Encounter is replicated and Annotations are each associated with the newly created Encounters, the sex, life stage, and/or ID will apply to the animal you intended those attributes for.

If you choose to provide additional information during the initial upload of a single picture with multiple animals, it is best practice to review the Encounters associated with that Sighting and verify that all metadata associations are as expected and if not, edit as needed.

### Bulk Upload - Submitting multiple pictures with multiple animals present

Presently, Wildbook accepts submissions of multiple pictures with multiple animals present; however, the system cannot understand or preserve data integrity or accuracy well enough for this to be recommended (e.g., *How could Wildbook know that animal 3 in photo 2 from the left side is also animal 5 in photo 9 as viewed from the right side?*) when uploading pictures using the standard, form-based Encounter upload method presented previously. 

If you choose to upload multiple pictures with multiple animals at once, it is recommended that you use Wildbook's [Bulk Import functionality](bulk_import), which is available after login under the Submit menu. Bulk Import is based on an Excel file template (with one Encounter per row) and can be used to upload:

- A legacy catalog (e.g., thousands of Encounters from past years of research)
- Multiple Encounter submissions (e.g., all of last month's Encounters)
- Data for social species, with one photo per Encounter (one photo per Excel row), allowing ML to split each Annotation into new Encounters without assuming relationships among photos

