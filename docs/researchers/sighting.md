---
id: sighting
title: Sighting
---

When the system runs the image through detection, it generates an Annotation for each animal found in the picture. This picture would be returned with two annotations, like below.

![annotated animal photo](../../static/img/field_guide_2.png)

During upload, you must include a time and place where the interaction occurred; that information is paired with each of the annotations to create an Encounter. Encounters are one-to-one, meaning each encounter is an interaction with a single animal. If you interact with five members of a pack, you have five encounters.

In Wildbook, an encounter is the foundation component of the software. All entries that a user uploads are encounters. Encounters provide a reference to a time and location where an animal was spotted. 

Because two animals appear at the same time in this picture, we want to ensure that the relationship between these encounters is well understood. Wildbook creates a Sighting, a single instance of a human interacting with one or more animals. This allows researchers to include information about social relationships and observed behaviors. It also helps the system spend resources wisely by acknowledging that two animals observed at the same time in the same place can’t be the same animal.

Unlike encounters, sightings are one-to-many; each sighting is one interaction with one or more animals. If you interact with five members of a pack, you have one sighting that is made up of five encounters, one for each animal.

Note: throughout the Wildbook platform, sightings may also be called “occurrences”. We are working to shift terminology for greater user clarity. If you see an instance of outdated language, you can [post a bug report](https://community.wildme.org/).

## Navigating to a sighting page 

To see sighting information, you might be signed into the system. Once signed in, you can use Search > Sighting Search to find sightings that meet certain criteria. Additionally, there may be a Sighting menu that will allow you to see all Sightings you have access to by clicking View All.

Additionally, you can access a sighting associated with a specific encounter; from the [encounter page](/docs/researchers/encounter_guide), navigating to the Identity section and clicking on the Occurrence ID.

## Sighting page format

The sighting page is headed with the Occurrence ID. Supported character for the Occurrence ID are: latin alphanumeric characters (a-z, A-Z, 0-9), _ and  -.

Some Wildbooks also include a link to associate a survey with the sighting.

Species: Displays the species of the animals associated with the sighting. This is determined by the encounters associated with the sighting and cannot be manually edited.

Group Behavior: Allows for researcher description of the general behavior of the group. Enter the correct information, then click Set.

Visibility Index: Allows for researcher input of the visibility in the environment the day the sighting occurred. Select from the dropdown, then click Set.

Number of adults reported: Displays the number of adults reported as part of the sighting. This is determined by the encounters associated with the sighting if the life stage is available and set. This cannot be manually edited.

Number of marked individuals participating: Displays the number of marked individuals reported as part of the sighting. This is determined by the encounters associated with the sighting and cannot be manually edited.

Estimated total individuals participating: Allows for researcher input of the estimated number of individuals in a sighting. Enter the correct information, then click Set.

Location ID: Displays the Location ID associated with the sighting. This is determined by the encounters associated with the sighting and cannot be manually set.

Lat / Long: The latitude and longitude information associated with the first encounter data found in a standard import. This can only be set during standard import.

Bearing / Distance: The bearing and distance information associated with the sighting. This can only be set during standard import.

Encounter table: Displays all encounters associated with the sighting.

Image gallery: Displays the images from the encounters associated with the sighting.

Observations: Observations are intended to be short identifiers associated with a given sighting. Observations are searchable, but are not verified or accessible between sightings.

To create an observation, enter a label and value, then click Set.

To edit an observation's value, change the text of an existing value, then click Set when finished.

To delete an observation, remove the text of an existing value, then click Set.

Observations can only be edited one at a time.

Comments: An audit trail of the changes that have been made to the sighting.
